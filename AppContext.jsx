import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { 
  collection, addDoc, onSnapshot, query, orderBy, 
  deleteDoc, doc, updateDoc 
} from 'firebase/firestore';
import { products as initialProducts } from '../data/products';

const Ctx = createContext();

// Helpers for remaining local data
const load = (key, def) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; } };
const save = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} };

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => load('sc_user', null));
  const [users, setUsers] = useState(() => load('sc_users', []));
  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState(() => load('sc_orders', []));
  const [notifs, setNotifs] = useState(() => load('sc_notifs', []));
  const [messages, setMessages] = useState(() => load('sc_msgs', []));
  const [giftUsed, setGiftUsed] = useState(() => load('sc_gift', []));
  const [settings, setSettings] = useState(() => load('sc_settings', { 
    whatsapp: '923363016943', 
    shopName: 'Super Collection',
    instagram: '',
    facebook: ''
  }));

  // 1. Real-time Products fetching from Firebase
  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const prods = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setProducts(prods.length > 0 ? prods : initialProducts);
    });
    return () => unsubscribe();
  }, []);

  // 2. Sync other data to LocalStorage
  useEffect(() => { save('sc_user', user); }, [user]);
  useEffect(() => { save('sc_users', users); }, [users]);
  useEffect(() => { save('sc_orders', orders); }, [orders]);
  useEffect(() => { save('sc_notifs', notifs); }, [notifs]);
  useEffect(() => { save('sc_msgs', messages); }, [messages]);
  useEffect(() => { save('sc_settings', settings); }, [settings]);
  useEffect(() => { save('sc_gift', giftUsed); }, [giftUsed]);

  /* ── AUTH LOGIC ── */
  const signup = (fullName, email, password) => {
    if (users.find(u => u.email === email)) return { ok: false, msg: 'Email already exists' };
    const u = { id: Date.now(), fullName, email, password, suspended: false, createdAt: new Date().toISOString() };
    setUsers(p => [...p, u]);
    setUser(u);
    return { ok: true };
  };

  const signin = (email, password) => {
    const u = users.find(u => u.email === email && u.password === password);
    if (!u) return { ok: false, msg: 'Incorrect email or password' };
    if (u.suspended) return { ok: false, msg: 'Account suspended', suspended: true };
    setUser(u);
    return { ok: true };
  };

  const logout = () => setUser(null);

  /* ── PRODUCTS (FIREBASE ACTIONS) ── */
  const addProduct = async (p) => {
    try {
      await addDoc(collection(db, "products"), {
        ...p,
        isNew: true,
        createdAt: new Date().toISOString()
      });
      return { ok: true };
    } catch (e) { 
      console.error("Firebase Error:", e);
      return { ok: false };
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
    } catch (e) { console.error(e); }
  };

  const updateProduct = async (p) => {
    try {
      const { id, ...data } = p;
      await updateDoc(doc(db, "products", id), data);
    } catch (e) { console.error(e); }
  };

  /* ── CART & ORDERS ── */
  const hasGift = user ? !giftUsed.includes(user.email) : false;
  const useGift = () => { if (user && hasGift) setGiftUsed(p => [...p, user.email]); };

  const addToCart = (product, qty = 1) => {
    setCart(p => p.find(i => i.id === product.id) ? p : [...p, { ...product, qty }]);
  };
  
  const removeFromCart = id => setCart(p => p.filter(i => i.id !== id));
  
  const placeOrder = data => {
    const o = { 
      id: `ORD-${Date.now()}`, 
      ...data, 
      userEmail: user?.email,
      status: 'confirmed', 
      createdAt: new Date().toISOString() 
    };
    setOrders(p => [...p, o]);
    setNotifs(p => [{ id: Date.now(), type: 'order', order: o, read: false, createdAt: o.createdAt }, ...p]);
    setCart([]);
    return o;
  };

  const updateSettings = s => setSettings(prev => ({ ...prev, ...s }));
  const readNotif = id => setNotifs(p => p.map(n => n.id === id ? { ...n, read: true } : n));

  return (
    <Ctx.Provider value={{
      user, users, signup, signin, logout,
      products, addProduct, deleteProduct, updateProduct,
      cart, addToCart, removeFromCart, setCart,
      orders, placeOrder,
      notifs, readNotif,
      settings, updateSettings,
      hasGift, useGift
    }}>
      {children}
    </Ctx.Provider>
  );
}

export const useApp = () => useContext(Ctx);
