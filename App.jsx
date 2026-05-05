import React, { useEffect, useState, useRef } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import OrderHistory from './components/OrderHistory';
import Footer from './components/Footer';
import WelcomeGift from './components/WelcomeGift';
import AdminPanel from './pages/AdminPanel';
import AuthModal from './components/AuthModal';
import { MessageSquare, X, Send, ChevronDown, ShieldOff, UserPlus } from 'lucide-react';

function SuspendedScreen({ onCreateAccount }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#0a0a0a', zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', padding: 24,
    }}>
      <div style={{ textAlign: 'center', maxWidth: 400 }}>
        {/* Icon */}
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#1a1a1a', border: '2px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <ShieldOff size={36} color="#ef4444" />
        </div>

        <div style={{ fontFamily: 'var(--display)', fontSize: 26, fontWeight: 900, color: '#fff', marginBottom: 10 }}>
          Account Suspended
        </div>
        <div style={{ fontSize: 14, color: '#888', lineHeight: 1.7, marginBottom: 32 }}>
          Your account has been suspended by the admin. You cannot access the store at this time. Please contact support if you believe this is a mistake.
        </div>

        <div style={{ background: '#1a1a1a', borderRadius: 14, padding: '16px 20px', marginBottom: 28, border: '1px solid #2a2a2a' }}>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Contact Support</div>
          <div style={{ fontSize: 13, color: '#c9a84c', fontWeight: 600 }}>support@supercollection.pk</div>
        </div>

        <button
          onClick={onCreateAccount}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg,#c9a84c,#e8c96a)',
            color: '#000', border: 'none', borderRadius: 50,
            padding: '14px 28px', fontSize: 14, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'var(--font)',
            margin: '0 auto', transition: 'all .2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <UserPlus size={16} /> Create New Account
        </button>
      </div>
    </div>
  );
}

function AppInner() {
  const {
    user, logout,
    products, hasGift,
    messages, sendMsg, readMsg,
  } = useApp();

  const [category,  setCategory]  = useState('all');
  const [showAdmin, setShowAdmin]  = useState(false);
  const [showGift,  setShowGift]   = useState(false);
  const [giftShown, setGiftShown]  = useState(false);
  const [chatOpen,  setChatOpen]   = useState(false);
  const [chatText,  setChatText]   = useState('');
  const [chatBadge, setChatBadge]  = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const bottomRef = useRef(null);

  // Agar user suspended hai to suspended screen
  const isSuspended = user?.suspended === true;

  /* Welcome gift */
  useEffect(() => {
    if (user && !isSuspended && hasGift && !giftShown) {
      const t = setTimeout(() => { setShowGift(true); setGiftShown(true); }, 800);
      return () => clearTimeout(t);
    }
  }, [user, hasGift]);

  /* Chat scroll + mark read */
  useEffect(() => {
    if (chatOpen && user) {
      messages.filter(m => m.from === 'admin' && m.to === user.email && !m.read).forEach(m => readMsg(m.id));
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 60);
    }
  }, [chatOpen, messages.length]);

  /* Badge */
  useEffect(() => {
    if (!user) return;
    const hasNew = messages.some(m => m.from === 'admin' && m.to === user.email && !m.read);
    setChatBadge(hasNew);
  }, [messages, user]);

  const chatThread = user
    ? messages.filter(m => m.from === user.email || m.to === user.email).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    : [];

  const sendChat = () => {
    if (!chatText.trim() || !user) return;
    sendMsg(user.email, chatText, user.email);
    setChatText('');
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 60);
  };

  // Suspended screen
  if (isSuspended) {
    return (
      <>
        <SuspendedScreen onCreateAccount={() => {
          logout();         // maujooda account logout
          setShowSignup(true); // signup modal kholo
        }} />
        {showSignup && (
          <AuthModal
            mode="signup"
            onClose={() => setShowSignup(false)}
            onSwitch={() => {}}
          />
        )}
      </>
    );
  }

  return (
    <>
      <Header onAdmin={() => setShowAdmin(true)} />

      <main>
        <Hero active={category} onChange={setCategory} />
        <ProductGrid products={products || []} category={category} />
        {user && <OrderHistory />}
      </main>

      <Footer />

      {showGift  && <WelcomeGift onClose={() => setShowGift(false)} />}
      {showAdmin && <AdminPanel  onClose={() => setShowAdmin(false)} />}

      {/* Floating Chat — sirf logged-in users ke liye */}
      {user && (
        <>
          <button
            onClick={() => { setChatOpen(o => !o); setChatBadge(false); }}
            title="Message us"
            style={{
              position: 'fixed', bottom: 28, right: 28,
              width: 56, height: 56, borderRadius: '50%',
              background: 'linear-gradient(135deg,#c9a84c,#e8c96a)',
              border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 6px 24px rgba(201,168,76,.5)',
              zIndex: 800, transition: 'transform .2s, box-shadow .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(201,168,76,.65)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';   e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,168,76,.5)'; }}
          >
            {chatOpen ? <ChevronDown size={22} color="#000" /> : <MessageSquare size={22} color="#000" />}
            {chatBadge && !chatOpen && (
              <span style={{ position: 'absolute', top: 2, right: 2, background: '#ef4444', borderRadius: '50%', width: 14, height: 14, border: '2px solid #fff', animation: 'chatPulse 1.5s infinite' }} />
            )}
          </button>

          {chatOpen && (
            <div style={{
              position: 'fixed', bottom: 96, right: 28,
              width: 320, maxWidth: 'calc(100vw - 56px)',
              background: '#fff', borderRadius: 20,
              boxShadow: '0 16px 48px rgba(0,0,0,.18)',
              zIndex: 800, display: 'flex', flexDirection: 'column',
              overflow: 'hidden', animation: 'scaleIn .2s ease',
            }}>
              {/* Chat Header */}
              <div style={{ background: 'linear-gradient(135deg,#111,#222)', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--display)', fontSize: 14, fontWeight: 900, color: '#000' }}>SC</div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>Super Collection</div>
                    <div style={{ color: '#666', fontSize: 11 }}>Support Team</div>
                  </div>
                </div>
                <button onClick={() => setChatOpen(false)} style={{ background: 'rgba(255,255,255,.1)', border: 'none', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <X size={14} color="#fff" />
                </button>
              </div>

              {/* Messages */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 6px', display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 280, minHeight: 140 }}>
                {chatThread.length === 0 && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{ background: '#f0f0f0', borderRadius: '16px 16px 16px 4px', padding: '10px 14px', maxWidth: '85%', fontSize: 13, color: '#333', lineHeight: 1.5 }}>
                      Assalamu Alaikum! Kisi bhi sawal ke liye hum yahan hain.
                      <div style={{ fontSize: 10, opacity: .5, marginTop: 3 }}>Support Team</div>
                    </div>
                  </div>
                )}
                {chatThread.map(m => (
                  <div key={m.id} style={{ display: 'flex', justifyContent: m.from === 'admin' ? 'flex-start' : 'flex-end' }}>
                    <div style={{ background: m.from === 'admin' ? '#f0f0f0' : 'linear-gradient(135deg,#c9a84c,#e8c96a)', color: '#000', borderRadius: m.from === 'admin' ? '16px 16px 16px 4px' : '16px 16px 4px 16px', padding: '10px 14px', maxWidth: '82%', fontSize: 13, lineHeight: 1.5 }}>
                      {m.text}
                      <div style={{ fontSize: 10, opacity: .45, marginTop: 3 }}>{new Date(m.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div style={{ padding: '10px 12px 14px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: 8 }}>
                <input
                  value={chatText} onChange={e => setChatText(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendChat()}
                  placeholder="Type a message..."
                  className="inp" style={{ flex: 1, padding: '10px 12px', fontSize: 13 }}
                />
                <button onClick={sendChat} style={{ background: 'linear-gradient(135deg,#c9a84c,#e8c96a)', border: 'none', borderRadius: 12, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                  <Send size={15} color="#000" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      <style>{`
        @keyframes chatPulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.4);opacity:.6} }
      `}</style>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}