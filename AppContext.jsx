import React, { createContext, useContext, useState, useEffect } from 'react';

const Ctx = createContext();

const load = (key, def) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; } catch { return def; } };
const save = (key, val) => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} };

const INITIAL_PRODUCTS = [
  { 
    id:1, 
    title:'Embroidered Lawn Suit', 
    description:'Premium 3-piece embroidered lawn suit with chiffon dupatta. Perfect for summer occasions.', 
    price:2499, 
    originalPrice:4999, 
    images:['https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600'], 
    category:'sale', 
    rating:4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Black', hex: '#111111' }, { name: 'Maroon', hex: '#7f1d1d' }]
  },
  { 
    id:2, 
    title:'Classic Cotton Dupatta', 
    description:'Soft and breathable cotton dupatta ideal for everyday wear.', 
    price:599, 
    originalPrice:1200, 
    images:['https://images.unsplash.com/photo-1566564174899-fc0cdc9b0cb2?w=600'], 
    category:'sale', 
    rating:4.2,
    sizes: ['Standard'],
    colors: [{ name: 'White', hex: '#ffffff' }, { name: 'Beige', hex: '#d4a574' }]
  },
  { 
    id:3, 
    title:'Printed Chiffon Dupatta', 
    description:'Lightweight chiffon dupatta with digital print. Versatile and stylish.', 
    price:799, 
    originalPrice:1500, 
    images:['https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600'], 
    category:'sale', 
    rating:4.0,
    sizes: ['Standard'],
    colors: [{ name: 'Red', hex: '#ef4444' }, { name: 'Blue', hex: '#3b82f6' }]
  },
  { 
    id:4, 
    title:'Cotton Lawn Fabric 3M', 
    description:'Unstitched premium cotton lawn fabric. 3 Meters.', 
    price:1200, 
    originalPrice:2200, 
    images:['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600'], 
    category:'sale', 
    rating:4.3,
    sizes: ['3 Meters'],
    colors: [{ name: 'White', hex: '#f5f5f5' }]
  },
  { 
    id:5, 
    title:'New Arrival Fancy Suit', 
    description:'Latest designer fancy suit with modern embroidery.', 
    price:3499, 
    originalPrice:3499, 
    images:['https://images.unsplash.com/photo-1595777712802-4b437af55986?w=600'], 
    category:'new_arrival', 
    rating:4.7,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Navy', hex: '#001f3f' }]
  },
  { 
    id:6, 
    title:'Premium Silk Suit', 
    description:'Luxurious silk suit for special occasions.', 
    price:5999, 
    originalPrice:5999, 
    images:['https://images.unsplash.com/photo-1619451334792-150fc22427a4?w=600'], 
    category:'good_quality', 
    rating:4.8,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Gold', hex: '#c9a84c' }, { name: 'Emerald', hex: '#10b981' }]
  },
  { 
    id:7, 
    title:'Casual Cotton Suit', 
    description:'Comfortable everyday cotton suit for casual wear.', 
    price:1899, 
    originalPrice:3500, 
    images:['https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600'], 
    category:'good_quality', 
    rating:4.4,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Light Blue', hex: '#add8e6' }, { name: 'Cream', hex: '#fffdd0' }]
  },
  { 
    id:8, 
    title:'Trendy Lawn Suit', 
    description:'Latest trend in lawn suits with vibrant colors.', 
    price:2199, 
    originalPrice:2199, 
    images:['https://images.unsplash.com/photo-1609706228149-0d782e1bcc54?w=600'], 
    category:'viral', 
    rating:4.6,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Pink', hex: '#ff69b4' }]
  },
  { 
    id:9, 
    title:'Budget Lawn Fabric', 
    description:'Affordable lawn fabric per meter.', 
    price:180, 
    originalPrice:350, 
    images:['https://images.unsplash.com/photo-1522773356271-cbc2cf34d359?w=600'], 
    category:'low_price', 
    rating:3.9,
    sizes: ['1 Meter'],
    colors: [{ name: 'Multi', hex: '#9c27b0' }]
  },
  { 
    id:10, 
    title:'Economy Cotton Dupatta', 
    description:'Budget-friendly cotton dupatta for everyday use.', 
    price:299, 
    originalPrice:600, 
    images:['https://images.unsplash.com/photo-1495114716159-ce3a3d0e3ae4?w=600'], 
    category:'low_price', 
    rating:3.8,
    sizes: ['Standard'],
    colors: [{ name: 'Grey', hex: '#808080' }]
  },
  { 
    id:16, 
    title:'Karandi Suit Unstitched', 
    description:'Premium quality karandi fabric, 3-piece unstitched.', 
    price:3200, 
    originalPrice:3200, 
    images:['https://images.unsplash.com/photo-1615886753866-79396abc446a?w=600'], 
    category:'good_quality', 
    rating:4.6,
    sizes: ['Unstitched'], 
    colors: [{ name: 'Cream', hex: '#fef3c7' }]
  },
  { 
    id:26, 
    title:'Printed Lawn Per Meter', 
    description:'Budget-friendly printed lawn fabric per meter.', 
    price:180, 
    originalPrice:180, 
    images:['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600'], 
    category:'low_price', 
    rating:3.9,
    sizes: ['1 Meter'], 
    colors: [{ name: 'Floral', hex: '#ec4899' }]
  }
];

export function AppProvider({ children }) {
  const [user,     setUser]     = useState(() => load('sc_user', null));
  const [users,    setUsers]    = useState(() => load('sc_users', []));
  const [products, setProducts] = useState(() => {
    const stored = load('sc_products', null);
    return stored && stored.length > 0 ? stored : INITIAL_PRODUCTS;
  });
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

  useEffect(() => {
    if (user) {
      const fresh = users.find(u => u.email === user.email);
      if (fresh && JSON.stringify(fresh) !== JSON.stringify(user)) setUser(fresh);
    }
  }, [users]);

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

  const hasGift = user ? !giftUsed.includes(user.email) : false;
  const useGift = () => { if (user && hasGift) setGiftUsed(p => [...p, user.email]); };

  const addToCart    = (product, qty = 1) => setCart(p => p.find(i => i.id === product.id) ? p : [...p, { ...product, qty }]);
  const removeFromCart = id => setCart(p => p.filter(i => i.id !== id));

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

  const updateProduct = p  => setProducts(prev => prev.map(x => x.id === p.id ? { ...p } : x));
  const deleteProduct = id => setProducts(prev => prev.filter(x => x.id !== id));
  const addProduct    = p  => setProducts(prev => [...prev, { ...p, id: Date.now(), isNew: true, createdAt: new Date().toISOString() }]);

  const suspendUser   = email => setUsers(p => p.map(u => u.email === email ? { ...u, suspended: true }  : u));
  const unsuspendUser = email => setUsers(p => p.map(u => u.email === email ? { ...u, suspended: false } : u));

  const sendMsg = (to, text, from) => {
    const m = { id: Date.now(), from, to, text, createdAt: new Date().toISOString(), read: false };
    setMessages(p => [...p, m]);
    return m;
  };
  const readMsg = id => setMessages(p => p.map(m => m.id === id ? { ...m, read: true } : m));

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
