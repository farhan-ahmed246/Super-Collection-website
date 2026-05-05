import React, { useState, useRef, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line,
} from 'recharts';
import {
  X, Plus, Edit2, Trash2, ChevronLeft, Ban, CheckCircle,
  MessageSquare, Upload, Image, Send, LayoutDashboard,
  ShoppingBag, Package, Users, Bell, Settings, DollarSign,
  TrendingUp, AlertCircle, Store, Lock,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CAT_LABELS } from '../data/products';

const PWD = 'agent123';

export default function AdminPanel({ onClose }) {
  const [auth,   setAuth]   = useState(false);
  const [pwd,    setPwd]    = useState('');
  const [err,    setErr]    = useState('');
  const [tab,    setTab]    = useState('dashboard');
  const [editP,  setEditP]  = useState(null);
  const [addP,   setAddP]   = useState(false);
  const [nOpen,  setNOpen]  = useState(null);
  const [thread, setThread] = useState(null);

  const {
    products, orders, notifs, readNotif,
    messages, sendMsg, readMsg,
    users, suspendUser, unsuspendUser,
    updateProduct, deleteProduct, addProduct,
    settings, updateSettings,
  } = useApp();

  /* LOGIN */
  if (!auth) return (
    <div className="overlay" style={{ zIndex: 1200 }}>
      <div className="mbox a-scaleIn" style={{ maxWidth: 360 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Lock size={28} color="#c9a84c" />
          </div>
          <div style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 800 }}>Admin Panel</div>
          <div style={{ fontSize: 13, color: '#aaa', marginTop: 2 }}>Super Collection</div>
        </div>
        <input type="password" value={pwd} onChange={e => setPwd(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') pwd === PWD ? (setAuth(true), setErr('')) : setErr('Wrong password'); }}
          placeholder="Enter admin password" className="inp" style={{ marginBottom: 10 }} />
        {err && (
          <div style={{ color: 'var(--red)', fontSize: 13, background: '#fff1f1', padding: '8px 12px', borderRadius: 8, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
            <AlertCircle size={14} /> {err}
          </div>
        )}
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn-g" onClick={() => pwd === PWD ? (setAuth(true), setErr('')) : setErr('Wrong password')} style={{ flex: 1, padding: 13 }}>Login</button>
          <button className="btn-d" onClick={onClose} style={{ padding: '13px 18px' }}>Cancel</button>
        </div>
      </div>
    </div>
  );

  /* ANALYTICS */
  const last30 = Array.from({ length: 30 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (29 - i));
    const ds = d.toISOString().slice(0, 10);
    const day = orders.filter(o => o.createdAt?.slice(0, 10) === ds && o.status !== 'cancelled');
    return { day: d.getDate(), revenue: day.reduce((s, o) => s + (o.totalAmount || 0), 0), orders: day.length };
  });
  const totalRev = orders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + (o.totalAmount || 0), 0);
  const totalOrd = orders.filter(o => o.status !== 'cancelled').length;
  const unreadN  = notifs.filter(n => !n.read).length;
  const unreadM  = messages.filter(m => m.to === 'admin' && !m.read).length;

  const TABS = [
    { id: 'dashboard', icon: <LayoutDashboard size={14} />, label: 'Dashboard' },
    { id: 'products',  icon: <ShoppingBag size={14} />,     label: `Products (${products?.length || 0})` },
    { id: 'orders',    icon: <Package size={14} />,          label: `Orders (${orders.length})` },
    { id: 'users',     icon: <Users size={14} />,            label: `Users (${users.length})` },
    { id: 'notifs',    icon: <Bell size={14} />,             label: unreadN > 0 ? `Notifs (${unreadN})` : 'Notifs' },
    { id: 'messages',  icon: <MessageSquare size={14} />,    label: unreadM > 0 ? `Messages (${unreadM})` : 'Messages' },
    { id: 'settings',  icon: <Settings size={14} />,         label: 'Settings' },
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#f4f4f6', zIndex: 1200, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

      {/* TOP BAR */}
      <div style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, position: 'sticky', top: 0, zIndex: 10, boxShadow: '0 2px 10px rgba(0,0,0,.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#f5f5f5', border: 'none', borderRadius: 10, padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font)' }}>
            <ChevronLeft size={15} /> Back
          </button>
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 17, fontWeight: 800 }}>Admin Panel</div>
            <div style={{ fontSize: 11, color: '#aaa' }}>Super Collection</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ background: tab === t.id ? '#111' : 'none', color: tab === t.id ? '#fff' : '#666', border: 'none', borderRadius: 10, padding: '8px 14px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font)', transition: 'all .2s', display: 'flex', alignItems: 'center', gap: 5 }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '22px 20px', width: '100%' }}>

        {/* DASHBOARD */}
        {tab === 'dashboard' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 14 }}>
              {[
                { icon: <DollarSign size={22} color="#c9a84c" />, label: 'Total Revenue', val: `Rs. ${totalRev.toLocaleString()}`, bg: '#fffbeb' },
                { icon: <Package size={22} color="#3b82f6" />,    label: 'Total Orders',  val: totalOrd,                           bg: '#eff6ff' },
                { icon: <ShoppingBag size={22} color="#22c55e" />,label: 'Products',      val: products?.length || 0,              bg: '#f0fdf4' },
                { icon: <Users size={22} color="#8b5cf6" />,      label: 'Users',         val: users.length,                      bg: '#f5f3ff' },
              ].map(s => (
                <div key={s.label} style={{ background: '#fff', borderRadius: 16, padding: 20, display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 2px 12px rgba(0,0,0,.05)', border: '1px solid #f0f0f0' }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: '#111', fontFamily: 'var(--display)' }}>{s.val}</div>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 1 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', borderRadius: 16, padding: 22, boxShadow: '0 2px 12px rgba(0,0,0,.05)', border: '1px solid #f0f0f0' }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 7 }}><TrendingUp size={16} color="#c9a84c" /> Revenue — Last 30 Days</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={last30} barSize={16}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#aaa' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#aaa' }} axisLine={false} tickLine={false} />
                  <Tooltip formatter={v => [`Rs. ${v.toLocaleString()}`, 'Revenue']} contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,.1)' }} />
                  <Bar dataKey="revenue" radius={[6, 6, 0, 0]} fill="url(#ggrad)" />
                  <defs><linearGradient id="ggrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e8c96a" /><stop offset="100%" stopColor="#c9a84c" /></linearGradient></defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, padding: 22, boxShadow: '0 2px 12px rgba(0,0,0,.05)', border: '1px solid #f0f0f0' }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 7 }}><Package size={16} color="#3b82f6" /> Orders — Last 30 Days</div>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={last30}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#aaa' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#aaa' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,.1)' }} />
                  <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 3, fill: '#3b82f6' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* PRODUCTS */}
        {tab === 'products' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 800 }}>Products ({products?.length})</div>
              <button className="btn-g" onClick={() => setAddP(true)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px' }}>
                <Plus size={15} /> Add Product
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(195px,1fr))', gap: 14 }}>
              {products?.map(p => (
                <div key={p.id} style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,.05)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', height: 145 }}>
                    <img src={p.images?.[0]} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.src = 'https://via.placeholder.com/200x145?text=No+Image'; }} />
                    <div style={{ position: 'absolute', top: 7, right: 7, background: 'rgba(0,0,0,.6)', color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 6, padding: '2px 7px' }}>{p.images?.length || 0} pics</div>
                    {p.category === 'new_arrival' && <div style={{ position: 'absolute', top: 7, left: 7, background: '#22c55e', color: '#fff', fontSize: 9, fontWeight: 800, borderRadius: 5, padding: '2px 7px' }}>NEW</div>}
                  </div>
                  <div style={{ padding: '10px 12px', flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3, marginBottom: 3 }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 800 }}>Rs. {p.price?.toLocaleString()}</div>
                    <div style={{ fontSize: 11, color: '#aaa', marginTop: 2 }}>{CAT_LABELS?.[p.category] || p.category}</div>
                  </div>
                  <div style={{ display: 'flex', borderTop: '1px solid #f5f5f5' }}>
                    <button onClick={() => setEditP(p)} style={{ flex: 1, background: 'none', border: 'none', cursor: 'pointer', padding: 9, fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, color: '#555', fontFamily: 'var(--font)' }}>
                      <Edit2 size={13} /> Edit
                    </button>
                    <button onClick={() => { if (window.confirm('Delete this product?')) deleteProduct(p.id); }} style={{ flex: 1, background: 'none', border: 'none', borderLeft: '1px solid #f5f5f5', cursor: 'pointer', padding: 9, fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, color: 'var(--red)', fontFamily: 'var(--font)' }}>
                      <Trash2 size={13} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ORDERS */}
        {tab === 'orders' && (
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 800, marginBottom: 20 }}>All Orders ({orders.length})</div>
            {orders.length === 0 && <div style={{ textAlign: 'center', padding: 50, color: '#aaa', fontSize: 15 }}>No orders yet</div>}
            {[...orders].reverse().map(o => (
              <div key={o.id} style={{ background: '#fff', borderRadius: 14, padding: 16, marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,.04)', border: '1px solid #f0f0f0', borderLeft: `4px solid ${o.status === 'cancelled' ? 'var(--red)' : 'var(--green)'}` }}>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'flex-start' }}>
                  <img src={o.productImage} alt="" style={{ width: 68, height: 68, objectFit: 'cover', borderRadius: 10 }} onError={e => { e.target.style.display = 'none'; }} />
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{o.productName}</div>
                    <div style={{ fontSize: 12, color: '#666', lineHeight: 1.8 }}>
                      <div>{o.customerName} · {o.userEmail}</div>
                      <div>{o.phone}</div>
                      <div>{o.address}</div>
                      <div>Qty: {o.qty} · <strong style={{ color: 'var(--gold)' }}>Rs. {o.totalAmount?.toLocaleString()}</strong></div>
                      <div style={{ color: '#bbb', fontSize: 11 }}>{new Date(o.createdAt).toLocaleString()}</div>
                      {o.status === 'cancelled' && <div style={{ color: 'var(--red)', fontWeight: 600, marginTop: 2 }}>Reason: {o.cancelReason}</div>}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
                    <div style={{ background: o.status === 'cancelled' ? '#fff0f0' : '#f0fff4', color: o.status === 'cancelled' ? 'var(--red)' : 'var(--green)', borderRadius: 50, padding: '4px 12px', fontSize: 11, fontWeight: 800 }}>
                      {o.status === 'cancelled' ? 'Cancelled' : 'Confirmed'}
                    </div>
                    {o.userEmail && (
                      <button onClick={() => setThread(o.userEmail)} style={{ background: '#eff6ff', color: '#3b82f6', border: '1px solid #bfdbfe', borderRadius: 8, padding: '5px 12px', fontSize: 11, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font)' }}>
                        <MessageSquare size={12} /> Message
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* USERS */}
        {tab === 'users' && (
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 800, marginBottom: 20 }}>All Users ({users.length})</div>
            {users.length === 0 && <div style={{ textAlign: 'center', padding: 50, color: '#aaa', fontSize: 15 }}>No users yet</div>}
            {users.map(u => {
              const uO = orders.filter(o => o.userEmail === u.email);
              const uR = uO.filter(o => o.status !== 'cancelled').reduce((s, o) => s + (o.totalAmount || 0), 0);
              const hasUnread = messages.some(m => m.from === u.email && m.to === 'admin' && !m.read);
              return (
                <div key={u.id} style={{ background: '#fff', borderRadius: 14, padding: '16px 20px', marginBottom: 12, boxShadow: '0 2px 8px rgba(0,0,0,.04)', border: '1px solid #f0f0f0', borderLeft: `4px solid ${u.suspended ? 'var(--red)' : 'var(--green)'}`, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800, color: '#000', flexShrink: 0 }}>
                    {u.fullName?.charAt(0).toUpperCase()}
                  </div>
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{u.fullName}</div>
                    <div style={{ fontSize: 12, color: '#888', marginTop: 1 }}>{u.email}</div>
                    <div style={{ display: 'flex', gap: 16, marginTop: 7, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 12, color: '#888' }}>{uO.length} Orders</span>
                      <span style={{ fontSize: 12, color: '#888' }}>Rs. {uR.toLocaleString()}</span>
                      <span style={{ fontSize: 12, color: '#888' }}>{new Date(u.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                    {u.suspended ? (
                      <>
                        <div style={{ background: '#fff0f0', color: 'var(--red)', fontSize: 11, fontWeight: 700, borderRadius: 50, padding: '4px 12px', border: '1px solid #fecaca', display: 'flex', alignItems: 'center', gap: 4 }}>
                          <Ban size={11} /> Suspended
                        </div>
                        <button onClick={() => unsuspendUser(u.email)} style={{ background: '#f0fff4', color: 'var(--green)', border: '1px solid #bbf7d0', borderRadius: 10, padding: '8px 12px', fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font)' }}>
                          <CheckCircle size={13} /> Unsuspend
                        </button>
                      </>
                    ) : (
                      <button onClick={() => { if (window.confirm(`Suspend ${u.fullName}?`)) suspendUser(u.email); }} style={{ background: '#fff0f0', color: 'var(--red)', border: '1px solid #fecaca', borderRadius: 10, padding: '8px 12px', fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font)' }}>
                        <Ban size={13} /> Suspend
                      </button>
                    )}
                    <button onClick={() => setThread(u.email)} style={{ background: hasUnread ? '#eff6ff' : '#f5f5f5', color: hasUnread ? '#3b82f6' : '#555', border: hasUnread ? '1px solid #bfdbfe' : '1px solid #e0e0e0', borderRadius: 10, padding: '8px 12px', fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font)', position: 'relative' }}>
                      <MessageSquare size={13} /> Message
                      {hasUnread && <span style={{ position: 'absolute', top: -4, right: -4, background: 'var(--red)', color: '#fff', borderRadius: '50%', width: 14, height: 14, fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>!</span>}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* NOTIFICATIONS */}
        {/* NOTIFICATIONS */}
{tab === 'notifs' && (
  <div>
    <div style={{
      fontFamily: 'var(--display)',
      fontSize: 22,
      fontWeight: 800,
      marginBottom: 20
    }}>
      Notifications
    </div>

    {(!notifs || notifs.length === 0) && (
      <div style={{
        textAlign: 'center',
        padding: 50,
        color: '#aaa'
      }}>
        No notifications yet
      </div>
    )}

    {(notifs || []).map((n, index) => {
      const order = n?.order || {};
      const isRead = n?.read === true;

      return (
        <div
          key={n?.id ?? index}
          onClick={() => n?.id && readNotif?.(n.id)}
          style={{
            background: isRead ? '#fff' : '#fffbea',
            borderRadius: 16,
            padding: 16,
            marginBottom: 12,
            border: '1px solid #eee',
            cursor: 'pointer'
          }}
        >

          {/* HEADER */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>

              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: n?.type === 'cancel' ? '#ffe5e5' : '#e8fff0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {n?.type === 'cancel'
                  ? <X size={18} color="#ef4444" />
                  : <CheckCircle size={18} color="#22c55e" />}
              </div>

              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>
                  {n?.type === 'cancel' ? 'Order Cancelled' : 'New Order'}
                </div>

                <div style={{ fontSize: 11, color: '#aaa' }}>
                  {n?.createdAt
                    ? new Date(n.createdAt).toLocaleString()
                    : 'No date'}
                </div>
              </div>
            </div>

            {!isRead && (
              <span style={{
                background: '#ef4444',
                color: '#fff',
                fontSize: 10,
                padding: '3px 8px',
                borderRadius: 20
              }}>
                NEW
              </span>
            )}
          </div>

          {/* DETAILS */}
          <div style={{
            marginTop: 14,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10
          }}>

            <div><b>Product:</b> {order?.productName || 'N/A'}</div>
            <div><b>Total:</b> Rs {order?.totalAmount || 0}</div>

            <div><b>Customer:</b> {order?.customerName || 'N/A'}</div>
            <div><b>Qty:</b> {order?.qty || 1}</div>

            <div><b>Email:</b> {order?.userEmail || 'N/A'}</div>
            <div><b>Phone:</b> {order?.phone || 'N/A'}</div>

            <div style={{ gridColumn: '1 / -1' }}>
              <b>Address:</b> {order?.address || 'N/A'}
            </div>

            {n?.type === 'cancel' && (
              <div style={{ gridColumn: '1 / -1' }}>
                <b>Reason:</b> {n?.reason || 'N/A'}
              </div>
            )}

          </div>
        </div>
      );
    })}
  </div>
)}
        {/* MESSAGES */}
        {tab === 'messages' && (
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 16, height: 'calc(100vh - 200px)', minHeight: 400 }}>
            <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,.05)', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid #f5f5f5', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 7 }}>
                <MessageSquare size={15} color="#c9a84c" /> All Users
              </div>
              <div style={{ overflowY: 'auto', flex: 1 }}>
                {users.length === 0 && <div style={{ padding: 20, color: '#aaa', fontSize: 13, textAlign: 'center' }}>No users yet</div>}
                {users.map(u => {
                  const lastMsg = [...messages].reverse().find(m => m.from === u.email || m.to === u.email);
                  const hasUnread = messages.some(m => m.from === u.email && m.to === 'admin' && !m.read);
                  const isActive  = thread === u.email;
                  return (
                    <div key={u.email} onClick={() => setThread(u.email)} style={{ padding: '12px 16px', cursor: 'pointer', background: isActive ? '#f0f7ff' : 'transparent', borderLeft: isActive ? '3px solid #3b82f6' : '3px solid transparent', borderBottom: '1px solid #f8f8f8', display: 'flex', gap: 10, alignItems: 'center', transition: 'background .15s' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, color: '#000', flexShrink: 0, position: 'relative' }}>
                        {u.fullName?.charAt(0).toUpperCase()}
                        {hasUnread && <span style={{ position: 'absolute', top: -2, right: -2, background: 'var(--red)', borderRadius: '50%', width: 10, height: 10, border: '2px solid #fff' }} />}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: hasUnread ? 700 : 600, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{u.fullName}</div>
                        <div style={{ fontSize: 11, color: '#aaa', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lastMsg ? lastMsg.text : 'No messages yet'}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {thread
              ? <InlineChatBox email={thread} />
              : (
                <div style={{ background: '#fff', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12, color: '#bbb', boxShadow: '0 2px 12px rgba(0,0,0,.05)', border: '1px solid #f0f0f0' }}>
                  <MessageSquare size={40} strokeWidth={1} />
                  <div style={{ fontSize: 14 }}>Select a user to start chatting</div>
                </div>
              )
            }
          </div>
        )}

        {/* SETTINGS */}
        {tab === 'settings' && <SettingsTab settings={settings} updateSettings={updateSettings} />}
      </div>

      {editP  && <ProductForm product={editP} onClose={() => setEditP(null)} onSave={p => { updateProduct(p); setEditP(null); }} isEdit />}
      {addP   && <ProductForm product={null}  onClose={() => setAddP(false)} onSave={p => { addProduct(p); setAddP(false); }} />}
      {thread && tab !== 'messages' && <FloatingChatModal email={thread} onClose={() => setThread(null)} />}
    </div>
  );
}

function InlineChatBox({ email }) {
  const { messages, sendMsg, readMsg, users } = useApp();
  const [text, setText] = useState('');
  const bottomRef = useRef(null);
  const user   = users.find(u => u.email === email);
  const thread = messages.filter(m => m.from === email || m.to === email).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  useEffect(() => {
    messages.filter(m => m.from === email && m.to === 'admin' && !m.read).forEach(m => readMsg(m.id));
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [thread.length]);

  const send = () => { if (!text.trim()) return; sendMsg(email, text, 'admin'); setText(''); };

  return (
    <div style={{ background: '#fff', borderRadius: 16, display: 'flex', flexDirection: 'column', boxShadow: '0 2px 12px rgba(0,0,0,.05)', border: '1px solid #f0f0f0', overflow: 'hidden' }}>
      <div style={{ padding: '14px 18px', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, color: '#000' }}>
          {user?.fullName?.charAt(0).toUpperCase() || '?'}
        </div>
        <div><div style={{ fontWeight: 700, fontSize: 14 }}>{user?.fullName || email}</div><div style={{ fontSize: 11, color: '#aaa' }}>{email}</div></div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 200 }}>
        {thread.length === 0 && <div style={{ textAlign: 'center', color: '#ccc', fontSize: 13, marginTop: 40 }}>No messages yet</div>}
        {thread.map(m => (
          <div key={m.id} style={{ display: 'flex', justifyContent: m.from === 'admin' ? 'flex-end' : 'flex-start' }}>
            <div style={{ background: m.from === 'admin' ? 'linear-gradient(135deg,#c9a84c,#e8c96a)' : '#f0f0f0', color: '#000', borderRadius: m.from === 'admin' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', padding: '10px 14px', maxWidth: '75%', fontSize: 13, lineHeight: 1.5 }}>
              {m.text}<div style={{ fontSize: 10, opacity: .5, marginTop: 3 }}>{new Date(m.createdAt).toLocaleTimeString()}</div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div style={{ padding: '12px 18px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: 8 }}>
        <input value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder={`Message ${user?.fullName || email}...`} className="inp" style={{ flex: 1 }} />
        <button className="btn-g" onClick={send} style={{ padding: '12px 16px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 5 }}><Send size={14} /> Send</button>
      </div>
    </div>
  );
}

function FloatingChatModal({ email, onClose }) {
  const { messages, sendMsg, readMsg, users } = useApp();
  const [text, setText] = useState('');
  const bottomRef = useRef(null);
  const user   = users.find(u => u.email === email);
  const thread = messages.filter(m => m.from === email || m.to === email).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  useEffect(() => {
    messages.filter(m => m.from === email && m.to === 'admin' && !m.read).forEach(m => readMsg(m.id));
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [thread.length]);

  const send = () => { if (!text.trim()) return; sendMsg(email, text, 'admin'); setText(''); };

  return (
    <div className="overlay" style={{ zIndex: 1300 }}>
      <div className="mbox a-scaleIn" style={{ maxWidth: 500, padding: 0, display: 'flex', flexDirection: 'column', maxHeight: '80vh' }}>
        <div style={{ padding: '18px 22px 14px', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><div style={{ fontWeight: 700, fontSize: 15 }}>{user?.fullName || email}</div><div style={{ fontSize: 12, color: '#aaa' }}>{email}</div></div>
          <button onClick={onClose} style={{ background: '#f5f5f5', border: 'none', borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={15} /></button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 180, maxHeight: 340 }}>
          {thread.length === 0 && <div style={{ textAlign: 'center', color: '#aaa', fontSize: 13, marginTop: 40 }}>No messages yet</div>}
          {thread.map(m => (
            <div key={m.id} style={{ display: 'flex', justifyContent: m.from === 'admin' ? 'flex-end' : 'flex-start' }}>
              <div style={{ background: m.from === 'admin' ? 'linear-gradient(135deg,#c9a84c,#e8c96a)' : '#f0f0f0', color: '#000', borderRadius: m.from === 'admin' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', padding: '10px 14px', maxWidth: '75%', fontSize: 13, lineHeight: 1.5 }}>
                {m.text}<div style={{ fontSize: 10, opacity: .5, marginTop: 3 }}>{new Date(m.createdAt).toLocaleTimeString()}</div>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div style={{ padding: '12px 22px 18px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: 10 }}>
          <input value={text} onChange={e => setText(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Type a message..." className="inp" style={{ flex: 1 }} />
          <button className="btn-g" onClick={send} style={{ padding: '12px 18px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 5 }}><Send size={14} /> Send</button>
        </div>
      </div>
    </div>
  );
}

function SettingsTab({ settings = {}, updateSettings }) {
  const [form, setForm] = useState({ whatsapp: settings.whatsapp || '', instagram: settings.instagram || '', facebook: settings.facebook || '', shopName: settings.shopName || 'Super Collection', saved: false });
  const ch   = e => setForm(p => ({ ...p, [e.target.name]: e.target.value, saved: false }));
  const save = () => { updateSettings?.({ whatsapp: form.whatsapp, instagram: form.instagram, facebook: form.facebook, shopName: form.shopName }); setForm(p => ({ ...p, saved: true })); setTimeout(() => setForm(p => ({ ...p, saved: false })), 2000); };

  return (
    <div style={{ maxWidth: 580 }}>
      <div style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 800, marginBottom: 24 }}>Settings</div>
      <div style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,.05)', border: '1px solid #f0f0f0', marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: '#555', display: 'flex', alignItems: 'center', gap: 6 }}><Store size={15} /> Shop Info</div>
        <label className="lbl">Shop Name</label>
        <input name="shopName" value={form.shopName} onChange={ch} className="inp" placeholder="Super Collection" style={{ marginBottom: 14 }} />
      </div>
      <div style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,.05)', border: '1px solid #f0f0f0', marginBottom: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 16, color: '#555' }}>Social Links</div>
        <label className="lbl">WhatsApp Number</label>
        <input name="whatsapp" value={form.whatsapp} onChange={ch} className="inp" placeholder="923001234567" style={{ marginBottom: 14 }} />
        <label className="lbl">Instagram URL</label>
        <input name="instagram" value={form.instagram} onChange={ch} className="inp" placeholder="https://instagram.com/yourpage" style={{ marginBottom: 14 }} />
        <label className="lbl">Facebook URL</label>
        <input name="facebook" value={form.facebook} onChange={ch} className="inp" placeholder="https://facebook.com/yourpage" />
      </div>
      <button className="btn-g" onClick={save} style={{ padding: '14px 32px', fontSize: 15 }}>{form.saved ? 'Saved!' : 'Save Settings'}</button>
    </div>
  );
}

function ProductForm({ product, onClose, onSave, isEdit }) {
  const BLANK = Array(10).fill('');
  const [f, setF] = useState(() => product ? { ...product, images: [...(product.images || []), ...BLANK].slice(0, 10) } : { title: '', description: '', price: '', originalPrice: '', category: 'new_arrival', images: [...BLANK], rating: 4.5 });
  const [activeImg, setActiveImg] = useState(0);
  const [saving, setSaving] = useState(false);
  const ch     = e => setF(p => ({ ...p, [e.target.name]: e.target.value }));
  const setImg = (i, v) => { const imgs = [...f.images]; imgs[i] = v; setF(p => ({ ...p, images: imgs })); };
  const upload = (i, file) => { const r = new FileReader(); r.onload = e => { setImg(i, e.target.result); setActiveImg(i); }; r.readAsDataURL(file); };
  const save   = async () => {
    if (!f.title || !f.price) return;
    setSaving(true); await new Promise(r => setTimeout(r, 250));
    const cleanImgs = f.images.filter(Boolean);
    onSave({ ...f, price: Number(f.price), originalPrice: Number(f.originalPrice) || Number(f.price), images: cleanImgs.length > 0 ? cleanImgs : ['https://via.placeholder.com/400x400?text=No+Image'], rating: Number(f.rating) || 4.5 });
    setSaving(false);
  };

  return (
    <div className="overlay" style={{ zIndex: 1400 }}>
      <div className="mbox a-scaleIn" style={{ maxWidth: 680, maxHeight: '94vh', overflowY: 'auto', padding: 28 }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 14, right: 14, background: '#f5f5f5', border: 'none', borderRadius: '50%', width: 34, height: 34, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><X size={15} /></button>
        <div style={{ fontFamily: 'var(--display)', fontSize: 20, fontWeight: 800, marginBottom: 22 }}>{isEdit ? 'Edit Product' : 'Add New Product'}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13, marginBottom: 13 }}>
          <div style={{ gridColumn: '1/-1' }}><label className="lbl">Product Title *</label><input name="title" value={f.title} onChange={ch} className="inp" placeholder="Product name" /></div>
          <div style={{ gridColumn: '1/-1' }}><label className="lbl">Description</label><textarea name="description" value={f.description} onChange={ch} className="inp" placeholder="Product description" style={{ minHeight: 80, resize: 'vertical' }} /></div>
          <div><label className="lbl">Sale Price (Rs.) *</label><input name="price" type="number" value={f.price} onChange={ch} className="inp" placeholder="2500" /></div>
          <div><label className="lbl">Original Price</label><input name="originalPrice" type="number" value={f.originalPrice} onChange={ch} className="inp" placeholder="4999" /></div>
          <div>
            <label className="lbl">Category *</label>
            <select name="category" value={f.category} onChange={ch} className="inp">
              <option value="sale">Sale</option>
              <option value="new_arrival">New Arrival</option>
              <option value="good_quality">Good Quality</option>
              <option value="viral">Viral</option>
              <option value="low_price">Low Price</option>
            </select>
          </div>
          <div><label className="lbl">Rating (1–5)</label><input name="rating" type="number" min="1" max="5" step="0.1" value={f.rating} onChange={ch} className="inp" /></div>
        </div>
        <div style={{ background: '#f7f7f7', borderRadius: 16, padding: 18, marginBottom: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 7 }}><Image size={15} /> Product Images — Up to 10</div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 14 }}>
            {Array(10).fill(0).map((_, i) => (
              <div key={i} onClick={() => setActiveImg(i)} style={{ width: 56, height: 56, borderRadius: 10, overflow: 'hidden', cursor: 'pointer', border: activeImg === i ? '2.5px solid var(--gold)' : '2px solid #e0e0e0', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
                {f.images[i] ? <img src={f.images[i]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none'; }} /> : <Plus size={16} color="#ddd" />}
                <span style={{ position: 'absolute', bottom: 1, right: 3, fontSize: 9, color: '#aaa', fontWeight: 700 }}>{i + 1}</span>
              </div>
            ))}
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 14, border: '1px solid #e8e8e8' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#777', marginBottom: 10 }}>Image {activeImg + 1} of 10</div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <input value={f.images[activeImg] || ''} onChange={e => setImg(activeImg, e.target.value)} className="inp" placeholder="Paste image URL..." style={{ flex: 1 }} />
              <input type="file" accept="image/*" id={`upf-${activeImg}`} style={{ display: 'none' }} onChange={e => { if (e.target.files[0]) { upload(activeImg, e.target.files[0]); e.target.value = ''; } }} />
              <label htmlFor={`upf-${activeImg}`} style={{ background: '#111', color: '#fff', borderRadius: 10, padding: '0 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}><Upload size={13} /> Upload</label>
            </div>
            {f.images[activeImg] && (
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <img src={f.images[activeImg]} alt="preview" style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 10, border: '1px solid #eee' }} onError={e => { e.target.style.display = 'none'; }} />
                <div>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 7 }}>Preview</div>
                  <button onClick={() => setImg(activeImg, '')} style={{ background: '#fff0f0', color: 'var(--red)', border: '1px solid #fecaca', borderRadius: 8, padding: '5px 12px', fontSize: 11, cursor: 'pointer', fontWeight: 600, fontFamily: 'var(--font)', display: 'flex', alignItems: 'center', gap: 4 }}><Trash2 size={11} /> Remove</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-g" onClick={save} disabled={saving} style={{ flex: 1, padding: 14, fontSize: 15 }}>{saving ? 'Saving...' : isEdit ? 'Save Changes' : 'Add Product'}</button>
          <button className="btn-d" onClick={onClose} style={{ padding: '14px 22px' }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}