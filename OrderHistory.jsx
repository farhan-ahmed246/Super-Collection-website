import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const REASONS = [
  'Yeh product acha nahi hai',
  'Mujhay pasand nahi hai',
  "I don't interested",
];

export default function OrderHistory() {
  const { user, orders, cancelOrder } = useApp();
  const [cancelId, setCancelId]   = useState(null);
  const [reason, setReason]       = useState('');
  const [msg, setMsg]             = useState('');
  if (!user) return null;

  const mine = orders.filter(o => o.userEmail===user.email);

  const doCancel = id => {
    if (!reason) return;
    const r = cancelOrder(id, reason);
    if (r.ok) { setMsg('Order cancelled.'); setCancelId(null); setReason(''); }
    else setMsg(r.msg || 'Cannot cancel.');
  };

  return (
    <div id="orders-section" style={{maxWidth:1200,margin:'0 auto',padding:'40px 20px'}}>
      <h2 style={{fontFamily:'var(--display)',fontSize:26,fontWeight:800,marginBottom:24}}>📦 My Orders</h2>
      {mine.length===0 ? (
        <div style={{textAlign:'center',padding:'50px 20px',color:'#aaa',fontSize:15}}>You haven't placed any orders yet.</div>
      ) : (
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          {[...mine].reverse().map(o => (
            <div key={o.id} style={{background:'#fff',borderRadius:16,padding:'16px',boxShadow:'0 2px 12px rgba(0,0,0,.06)',border:'1px solid #f0f0f0',borderLeft:`4px solid ${o.status==='cancelled'?'#ef4444':'#22c55e'}`}}>
              <div style={{display:'flex',gap:14,alignItems:'flex-start'}}>
                <img src={o.productImage} alt="" style={{width:78,height:78,objectFit:'cover',borderRadius:10,flexShrink:0}} onError={e=>{e.target.style.display='none'}}/>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight:700,fontSize:15,marginBottom:4}}>{o.productName}</div>
                  <div style={{fontSize:12,color:'#666',lineHeight:1.7}}>
                    <span>💰 Rs. {o.totalAmount?.toLocaleString()}</span> &nbsp;·&nbsp;
                    <span>📦 Qty: {o.qty}</span><br/>
                    <span>📍 {o.address}</span><br/>
                    <span>📞 {o.phone}</span><br/>
                    <span style={{color:'#bbb',fontSize:11}}>{new Date(o.createdAt).toLocaleString()}</span>
                  </div>
                  <div style={{display:'inline-block',marginTop:6,borderRadius:6,padding:'3px 10px',fontSize:11,fontWeight:700,background:o.status==='cancelled'?'#fff0f0':'#f0fff4',color:o.status==='cancelled'?'#ef4444':'#16a34a'}}>
                    {o.status==='cancelled'?`❌ Cancelled — ${o.cancelReason}`:'✅ Confirmed'}
                  </div>
                </div>
                {o.status==='confirmed' && (
                  <button onClick={()=>{setCancelId(o.id);setMsg('');setReason('');}} style={{background:'#f5f5f5',border:'none',borderRadius:'50%',width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0}}>
                    <X size={15}/>
                  </button>
                )}
              </div>

              {cancelId===o.id && (
                <div style={{marginTop:14,padding:'14px',background:'#fafafa',borderRadius:12,border:'1px solid #eee'}}>
                  <div style={{fontSize:13,fontWeight:700,marginBottom:10}}>Why are you removing this order?</div>
                  {REASONS.map(r => (
                    <label key={r} style={{display:'flex',alignItems:'center',gap:8,padding:'6px 0',cursor:'pointer',fontSize:13}}>
                      <input type="radio" name={`reason-${o.id}`} value={r} checked={reason===r} onChange={()=>setReason(r)}/>
                      {r}
                    </label>
                  ))}
                  {msg && <div style={{color:'var(--red)',fontSize:12,marginTop:8}}>{msg}</div>}
                  <div style={{display:'flex',gap:8,marginTop:12}}>
                    <button className="btn-g" onClick={()=>doCancel(o.id)} style={{flex:1,padding:'10px'}}>Delete Order</button>
                    <button className="btn-d" onClick={()=>setCancelId(null)} style={{flex:1,padding:'10px'}}>Cancel</button>
                  </div>
                  <div style={{fontSize:11,color:'#aaa',marginTop:8}}>*Orders can only be deleted within 10 hours</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}