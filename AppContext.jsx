import React, { createContext, useContext, useState, useEffect } from 'react';

const Ctx = createContext();

const load = (key, def) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; } };
const save = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} };

export function AppProvider({ children }) {
  const [user,     setUser]     = useState(() => load('sc_user', null));
  const [users,    setUsers]    = useState(() => load('sc_users', []));
  const [products, setProducts] = useState(() => load('sc_products', null));
  const [cart,     setCart]     = useState([]);
  const [orders,   setOrders]   = useState(() => load('sc_orders', []));
  const [notifs,   setNotifs]   = useState(() => load('sc_notifs', []));
  const [messages, setMessages] = useState(() => load('sc_msgs', []));
  const [giftUsed, setGiftUsed] = useState(() => load('sc_gift', []));
  const [settings, setSettings] = useState(() => load('sc_settings', { whatsapp: '923001234567', instagram: '', facebook: '', shopName: 'Super Collection' }));

  useEffect(() => { save('sc_user',     user);     }, [user]);
  useEffect(() => { save('sc_users',    users);    }, [users]);
  useEffect(() => { if (products) save('sc_products', products); }, [products]);
  useEffect(() => { save('sc_orders',   orders);   }, [orders]);
  useEffect(() => { save('sc_notifs',   notifs);   }, [notifs]);
  useEffect(() => { save('sc_msgs',     messages); }, [messages]);
  useEffect(() => { save('sc_gift',     giftUsed); }, [giftUsed]);
  useEffect(() => { save('sc_settings', settings); }, [settings]);

  // User ko fresh rakhein jab users list change ho (suspend/unsuspend)
  useEffect(() => {
    if (user) {
      const fresh = users.find(u => u.email === user.email);
      if (fresh && JSON.stringify(fresh) !== JSON.stringify(user)) setUser(fresh);
    }
  }, [users]);

  /* ── AUTH ── */
  const signup = (fullName, email, password) => {
    if (users.find(u => u.email === email)) return { ok: false, msg: 'Email already registered' };
    const u = { id: Date.now(), fullName, email, password, createdAt: new Date().toISOString(), suspended: false, isNew: true };
    setUsers(p => [...p, u]);
    setUser(u);
    return { ok: true };
  };

  const signin = (email, password) => {
    const u = users.find(u => u.email === email && u.password === password);
    if (!u) return { ok: false, msg: 'Incorrect email or password' };
    if (u.suspended) return { ok: false, suspended: true, msg: 'Account suspended' };
    setUser(u);
    return { ok: true };
  };

  const logout = () => setUser(null);

  /* ── GIFT ── */
  const hasGift = user ? !giftUsed.includes(user.email) : false;
  const useGift = () => { if (user && hasGift) setGiftUsed(p => [...p, user.email]); };

  /* ── CART ── */
  const addToCart    = (product, qty = 1) => setCart(p => p.find(i => i.id === product.id) ? p : [...p, { ...product, qty }]);
  const removeFromCart = id => setCart(p => p.filter(i => i.id !== id));

  /* ── ORDERS ── */
  const placeOrder = data => {
    const o = { id: `ORD-${Date.now()}`, ...data, userEmail: user?.email, customerName: user?.fullName, status: 'confirmed', createdAt: new Date().toISOString() };
    setOrders(p => [...p, o]);
    setNotifs(p => [{ id: Date.now(), type: 'order', order: o, read: false, createdAt: o.createdAt }, ...p]);
    setCart([]);
    return o;
  };

  const cancelOrder = (orderId, reason) => {
    const o = orders.find(o => o.id === orderId);
    if (!o) return { ok: false };
    if ((new Date() - new Date(o.createdAt)) / 36e5 > 10) return { ok: false, msg: 'Can only cancel within 10 hours' };
    setOrders(p => p.map(o => o.id === orderId ? { ...o, status: 'cancelled', cancelReason: reason, cancelledAt: new Date().toISOString() } : o));
    setNotifs(p => [{ id: Date.now(), type: 'cancel', orderId, reason, userEmail: user?.email, read: false, createdAt: new Date().toISOString() }, ...p]);
    return { ok: true };
  };

  const readNotif = id => setNotifs(p => p.map(n => n.id === id ? { ...n, read: true } : n));

  /* ── PRODUCTS ── */
  const updateProduct = p  => setProducts(prev => prev.map(x => x.id === p.id ? { ...p } : x));
  const deleteProduct = id => setProducts(prev => prev.filter(x => x.id !== id));
  const addProduct    = p  => setProducts(prev => [...prev, { ...p, id: Date.now(), isNew: true, createdAt: new Date().toISOString() }]);

  /* ── SUSPEND ── */
  const suspendUser   = email => setUsers(p => p.map(u => u.email === email ? { ...u, suspended: true }  : u));
  const unsuspendUser = email => setUsers(p => p.map(u => u.email === email ? { ...u, suspended: false } : u));

  /* ── MESSAGES ── */
  const sendMsg = (to, text, from) => {
    const m = { id: Date.now(), from, to, text, createdAt: new Date().toISOString(), read: false };
    setMessages(p => [...p, m]);
    return m;
  };
  const readMsg = id => setMessages(p => p.map(m => m.id === id ? { ...m, read: true } : m));

  /* ── SETTINGS ── */
  const updateSettings = s => setSettings(prev => ({ ...prev, ...s }));

  return (
    <Ctx.Provider value={{
      user, users, signup, signin, logout,
      products, setProducts, updateProduct, deleteProduct, addProduct,
      cart, addToCart, removeFromCart, setCart,
      orders, placeOrder, cancelOrder,
      notifs, readNotif,
      messages, sendMsg, readMsg,
      hasGift, useGift,
      suspendUser, unsuspendUser,
      settings, updateSettings,
    }}>
      {children}
    </Ctx.Provider>
  );
}

export const useApp = () => useContext(Ctx);