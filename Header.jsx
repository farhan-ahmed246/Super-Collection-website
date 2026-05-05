import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Bell, Package, ChevronDown, Shield, LogOut, CheckCircle, XCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import AuthModal from './AuthModal';
import CartDrawer from './CartDrawer';

// Logo: public folder mein rakho — /public/super_collection_logo_transparent.png
const LOGO_SRC = '/super_collection_logo_transparent.png';

export default function Header({ onAdmin }) {
  const { user, logout, cart, notifs, readNotif } = useApp();
  const [authMode,    setAuthMode]    = useState(null);
  const [showCart,    setShowCart]    = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifs,  setShowNotifs]  = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [logoErr,     setLogoErr]     = useState(false);
  const pRef = useRef();
  const nRef = useRef();

  const unreadCount = notifs.filter(n => !n.read).length;
  const name1 = user?.fullName?.split(' ')[0] || '';

  useEffect(() => {
    const h = e => {
      if (pRef.current && !pRef.current.contains(e.target)) setShowProfile(false);
      if (nRef.current && !nRef.current.contains(e.target)) setShowNotifs(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', s);
    return () => window.removeEventListener('scroll', s);
  }, []);

  const handleOpenNotifs = () => {
    setShowNotifs(p => !p);
    // 1.5s baad sab notifications read mark karein
    if (!showNotifs && unreadCount > 0) {
      setTimeout(() => {
        notifs.filter(n => !n.read).forEach(n => readNotif(n.id));
      }, 1500);
    }
  };

  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 900,
        background: scrolled ? 'rgba(255,255,255,.98)' : 'rgba(255,255,255,.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(0,0,0,.08)' : 'rgba(0,0,0,.04)'}`,
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,.08)' : '0 1px 8px rgba(0,0,0,.04)',
        transition: 'all .3s ease',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', height: 66, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* LOGO */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {!logoErr ? (
              <img src={LOGO_SRC} alt="SC" style={{ width: 44, height: 44, objectFit: 'contain' }} onError={() => setLogoErr(true)} />
            ) : (
              <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg,#111,#333)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--display)', fontSize: 13, fontWeight: 900, color: '#c9a84c' }}>SC</div>
            )}
            <div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 17, fontWeight: 900, color: '#111', lineHeight: 1.1 }}>Super Collection</div>
              <div style={{ fontSize: 10, color: '#bbb', fontWeight: 500, letterSpacing: .8, textTransform: 'uppercase' }}>Premium Pakistani Fashion</div>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>

            {/* Admin */}
            <button
              onClick={() => typeof onAdmin === 'function' && onAdmin()}
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'linear-gradient(135deg,#111,#333)', color: '#c9a84c', border: 'none', borderRadius: 10, padding: '7px 14px', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font)', transition: 'all .2s', boxShadow: '0 2px 8px rgba(0,0,0,.15)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.15)'; }}
            >
              <Shield size={13} /> Admin
            </button>

            {/* Cart */}
            <button
              onClick={() => setShowCart(true)}
              style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 9, borderRadius: 12, display: 'flex', alignItems: 'center', color: '#333', transition: 'background .15s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              <ShoppingBag size={20} />
              {cart.length > 0 && <span style={{ position: 'absolute', top: 4, right: 4, background: '#ef4444', color: '#fff', borderRadius: '50%', fontSize: 9, width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{cart.length}</span>}
            </button>

            {/* Notifications */}
            {user && (
              <div ref={nRef} style={{ position: 'relative' }}>
                <button
                  onClick={handleOpenNotifs}
                  style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 9, borderRadius: 12, display: 'flex', alignItems: 'center', color: '#333', transition: 'background .15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                >
                  <Bell size={20} />
                  {unreadCount > 0 && <span style={{ position: 'absolute', top: 4, right: 4, background: '#ef4444', color: '#fff', borderRadius: '50%', fontSize: 9, width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{unreadCount}</span>}
                </button>

                {showNotifs && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, background: '#fff', borderRadius: 18, boxShadow: '0 16px 48px rgba(0,0,0,.14)', padding: 14, minWidth: 290, zIndex: 999, border: '1px solid #f0f0f0', animation: 'scaleIn .2s ease' }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: '#111', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Bell size={14} color="#c9a84c" /> Notifications
                    </div>
                    {notifs.length === 0 && <div style={{ color: '#aaa', fontSize: 13, textAlign: 'center', padding: '20px 0' }}>No notifications yet</div>}
                    {notifs.slice(0, 8).map(n => (
                      <div key={n.id} style={{ display: 'flex', gap: 10, padding: '8px 6px', borderRadius: 10, marginBottom: 4, alignItems: 'flex-start', background: n.read ? 'transparent' : '#fffbee' }}>
                        {n.type === 'cancel'
                          ? <XCircle size={17} color="#ef4444" style={{ flexShrink: 0, marginTop: 1 }} />
                          : <CheckCircle size={17} color="#22c55e" style={{ flexShrink: 0, marginTop: 1 }} />
                        }
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 12, fontWeight: 600 }}>{n.type === 'cancel' ? 'Order Cancelled' : 'Order Confirmed'}</div>
                          <div style={{ fontSize: 11, color: '#aaa', marginTop: 1 }}>{n.order?.productName || (n.orderId ? `#${n.orderId.slice(-6)}` : '')}</div>
                        </div>
                        {!n.read && <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ef4444', flexShrink: 0, marginTop: 4 }} />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Profile / Auth */}
            {user ? (
              <div ref={pRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowProfile(p => !p)}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f5f5f5', border: '1px solid #eee', borderRadius: 50, padding: '6px 14px 6px 6px', cursor: 'pointer', fontFamily: 'var(--font)', transition: 'all .2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#efefef'}
                  onMouseLeave={e => e.currentTarget.style.background = '#f5f5f5'}
                >
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, color: '#000' }}>
                    {name1.charAt(0).toUpperCase()}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#222' }}>{name1}</span>
                  <ChevronDown size={13} color="#888" style={{ transition: 'transform .2s', transform: showProfile ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
                {showProfile && (
                  <div style={{ position: 'absolute', top: 'calc(100% + 10px)', right: 0, background: '#fff', borderRadius: 18, boxShadow: '0 16px 48px rgba(0,0,0,.14)', padding: 14, minWidth: 230, zIndex: 999, border: '1px solid #f0f0f0', animation: 'scaleIn .2s ease' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '4px 4px 12px', borderBottom: '1px solid #f0f0f0', marginBottom: 8 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: '#000' }}>{name1.charAt(0).toUpperCase()}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14 }}>{user.fullName}</div>
                        <div style={{ fontSize: 11, color: '#aaa' }}>{user.email}</div>
                      </div>
                    </div>
                    <button onClick={() => { setShowProfile(false); document.getElementById('orders-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', background: 'none', border: 'none', padding: '9px 8px', fontSize: 13, fontWeight: 500, cursor: 'pointer', color: '#333', borderRadius: 8, fontFamily: 'var(--font)' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#f8f8f8'}
                      onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                      <Package size={14} /> My Orders
                    </button>
                    <div style={{ fontSize: 11, color: '#ccc', padding: '4px 8px' }}>Joined: {new Date(user.createdAt).toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div style={{ borderTop: '1px solid #f0f0f0', marginTop: 8, paddingTop: 8 }}>
                      <button onClick={() => { logout(); setShowProfile(false); }}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', background: 'none', border: 'none', padding: '9px 8px', fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#ef4444', borderRadius: 8, fontFamily: 'var(--font)' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#fff0f0'}
                        onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                        <LogOut size={14} /> Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => setAuthMode('signin')}
                  style={{ background: 'none', border: '1.5px solid #e0e0e0', borderRadius: 50, padding: '7px 18px', fontSize: 13, fontWeight: 600, cursor: 'pointer', color: '#333', fontFamily: 'var(--font)', transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9a84c'; e.currentTarget.style.color = '#c9a84c'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.color = '#333'; }}>
                  Sign In
                </button>
                <button onClick={() => setAuthMode('signup')} className="btn-g" style={{ padding: '8px 18px', fontSize: 13 }}>Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </header>

      {authMode && <AuthModal mode={authMode} onClose={() => setAuthMode(null)} onSwitch={() => setAuthMode(m => m === 'signin' ? 'signup' : 'signin')} />}
      {showCart && <CartDrawer onClose={() => setShowCart(false)} />}
    </>
  );
}

