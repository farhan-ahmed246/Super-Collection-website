import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AuthModal({ mode = 'signin', onClose, onSwitch }) {
  const { signup, signin, sendMsg } = useApp();
  const [f, setF] = useState({ fullName:'', email:'', password:'', re:'' });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [sp1, setSp1] = useState(false);
  const [sp2, setSp2] = useState(false);
  const [suspended, setSuspended] = useState(false);
  const isUp = mode === 'signup';

  const ch = e => { setF(p => ({ ...p, [e.target.name]: e.target.value })); setErr(''); };

  const submit = async () => {
    setErr(''); setLoading(true);
    await new Promise(r => setTimeout(r, 400));
    if (isUp) {
      if (!f.fullName || !f.email || !f.password || !f.re) { setErr('Please fill all fields'); setLoading(false); return; }
      if (f.password !== f.re) { setErr('Passwords do not match — enter same password as "Enter Password"'); setLoading(false); return; }
      const r = signup(f.fullName, f.email, f.password);
      if (r.ok) onClose(); else setErr(r.msg);
    } else {
      if (!f.email || !f.password) { setErr('Incorrect name or password'); setLoading(false); return; }
      const r = signin(f.email, f.password);
      if (r.ok) onClose();
      else if (r.suspended) setSuspended(true);
      else setErr('Incorrect name or password');
    }
    setLoading(false);
  };

  if (suspended) return <SuspendedScreen onClose={onClose} sendMsg={sendMsg} />;

  return (
    <div className="overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="mbox a-scaleIn" style={{ maxWidth:420 }}>
        {/* top icon */}
        <div style={{ textAlign:'center', marginBottom:24 }}>
          <div style={{ width:52, height:52, background:'linear-gradient(135deg,#111,#2a2a2a)', borderRadius:16, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 14px', boxShadow:'0 4px 16px rgba(0,0,0,.2)' }}>
            <span style={{ fontFamily:'var(--display)', fontSize:18, fontWeight:900, background:'linear-gradient(135deg,#c9a84c,#e8c96a)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>SC</span>
          </div>
          <div style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:900, background:'linear-gradient(135deg,#c9a84c,#e8c96a)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Super Collection</div>
          <div style={{ fontSize:13, color:'#999', marginTop:3 }}>{isUp ? 'Create your account' : 'Welcome back!'}</div>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:13 }}>
          {isUp && (
            <div>
              <label className="lbl">Full Name</label>
              <div style={{ position:'relative' }}>
                <User size={15} style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', color:'#bbb' }} />
                <input name="fullName" value={f.fullName} onChange={ch} placeholder="Your full name" className="inp" style={{ paddingLeft:38 }} />
              </div>
            </div>
          )}
          <div>
            <label className="lbl">Email Address</label>
            <div style={{ position:'relative' }}>
              <Mail size={15} style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', color:'#bbb' }} />
              <input name="email" type="email" value={f.email} onChange={ch} placeholder="your@email.com" className="inp" style={{ paddingLeft:38 }} />
            </div>
          </div>
          <div>
            <label className="lbl">Enter Password</label>
            <div style={{ position:'relative' }}>
              <Lock size={15} style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', color:'#bbb' }} />
              <input name="password" type={sp1?'text':'password'} value={f.password} onChange={ch} placeholder="Password" className="inp" style={{ paddingLeft:38, paddingRight:42 }} />
              <button onClick={() => setSp1(p=>!p)} style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'#bbb', padding:4 }}>
                {sp1 ? <EyeOff size={15}/> : <Eye size={15}/>}
              </button>
            </div>
          </div>
          {isUp && (
            <div>
              <label className="lbl">Re-enter Password</label>
              <div style={{ position:'relative' }}>
                <Lock size={15} style={{ position:'absolute', left:13, top:'50%', transform:'translateY(-50%)', color:'#bbb' }} />
                <input name="re" type={sp2?'text':'password'} value={f.re} onChange={ch} placeholder="Same password again" className="inp" style={{ paddingLeft:38, paddingRight:42 }} />
                <button onClick={() => setSp2(p=>!p)} style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'#bbb', padding:4 }}>
                  {sp2 ? <EyeOff size={15}/> : <Eye size={15}/>}
                </button>
              </div>
            </div>
          )}
        </div>

        {err && <div style={{ background:'#fff1f1', color:'#dc2626', padding:'10px 14px', borderRadius:10, fontSize:13, marginTop:14, border:'1px solid #fecaca' }}>⚠️ {err}</div>}

        <button className="btn-g" onClick={submit} disabled={loading}
          style={{ width:'100%', padding:'15px', marginTop:18, fontSize:15 }}>
          {loading ? <span style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}><span className="spin" style={{ borderTopColor:'#000' }}/> Please wait...</span> : isUp ? '✨ Create Account' : 'Sign In →'}
        </button>

        <div style={{ display:'flex', alignItems:'center', gap:10, margin:'16px 0' }}>
          <div style={{ flex:1, height:1, background:'#f0f0f0' }}/><span style={{ fontSize:12, color:'#bbb' }}>{isUp ? 'Already have account?' : 'New here?'}</span><div style={{ flex:1, height:1, background:'#f0f0f0' }}/>
        </div>

        <button className="btn-o" onClick={onSwitch} style={{ width:'100%', padding:'13px' }}>
          {isUp ? 'Sign In Instead' : 'Create Account'}
        </button>

        <button onClick={onClose} style={{ position:'absolute', top:14, right:14, background:'#f5f5f5', border:'none', borderRadius:'50%', width:34, height:34, cursor:'pointer', fontSize:17, color:'#666', display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
      </div>
    </div>
  );
}

function SuspendedScreen({ onClose, sendMsg }) {
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);
  const send = () => { if (!msg.trim()) return; sendMsg('admin', msg, 'suspended_' + Date.now()); setSent(true); };
  return (
    <div className="overlay" style={{ zIndex:1100 }}>
      <div className="mbox a-scaleIn" style={{ textAlign:'center', maxWidth:400 }}>
        <div style={{ fontSize:60, marginBottom:16 }}>🚫</div>
        <div style={{ width:60, height:60, background:'#fee2e2', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', border:'3px solid #ef4444' }}>
          <span style={{ fontSize:28, color:'#ef4444' }}>✕</span>
        </div>
        <h2 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:800, marginBottom:8 }}>Account Suspended</h2>
        <p style={{ fontSize:14, color:'#666', lineHeight:1.7, marginBottom:20 }}>Your account has been suspended by Admin. You can send a message to Admin to ask why.</p>
        {!sent ? (
          <>
            <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Write your message to admin..." className="inp" style={{ minHeight:90, resize:'vertical', borderRadius:12, marginBottom:12, textAlign:'left' }}/>
            <button className="btn-g" onClick={send} style={{ width:'100%', padding:'13px' }}>📨 Send Message to Admin</button>
          </>
        ) : (
          <div style={{ background:'#f0fdf4', border:'1px solid #86efac', borderRadius:12, padding:16, marginBottom:12 }}>
            <div style={{ fontSize:28, marginBottom:6 }}>✅</div>
            <div style={{ fontSize:14, color:'#166534', fontWeight:700 }}>Message sent to admin!</div>
          </div>
        )}
        <button className="btn-o" onClick={onClose} style={{ width:'100%', padding:'12px', marginTop:12 }}>Close</button>
      </div>
    </div>
  );
}