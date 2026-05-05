import React, { useState } from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import OrderModal from './OrderModal';
import AuthModal from './AuthModal';

export default function CartDrawer({ onClose }) {
  const { cart, removeFromCart, user, hasGift } = useApp();
  const [orderItem, setOrderItem] = useState(null);
  const [auth, setAuth] = useState(null);

  const getPrice = item => hasGift && user ? Math.round(item.price*.5) : item.price;
  const total = cart.reduce((s, i) => s + getPrice(i) * i.qty, 0);

  return (
    <>
      <div style={{ position:'fixed',inset:0,background:'rgba(0,0,0,.5)',zIndex:990,display:'flex',justifyContent:'flex-end' }}
        onClick={e=>e.target===e.currentTarget&&onClose()}>
        <div className="a-slideR" style={D.drawer}>
          <div style={D.head}>
            <div style={{ display:'flex',alignItems:'center',gap:8,fontFamily:'var(--display)',fontSize:18,fontWeight:800 }}>
              <ShoppingBag size={20}/> Cart <span style={{ fontSize:14,color:'#aaa',fontWeight:500 }}>({cart.length})</span>
            </div>
            <button onClick={onClose} style={D.closeBtn}><X size={18}/></button>
          </div>

          {cart.length===0 ? (
            <div style={{ flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
              <div style={{ fontSize:56,marginBottom:12 }}>🛒</div>
              <div style={{ color:'#aaa',fontSize:14 }}>Your cart is empty</div>
            </div>
          ) : (
            <div style={{ flex:1,overflowY:'auto' }}>
              {cart.map(item => {
                const p = getPrice(item);
                return (
                  <div key={item.id} style={D.item}>
                    <img src={item.images[0]} alt={item.title} style={D.img} onError={e=>{e.target.style.display='none'}}/>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:13,fontWeight:700,color:'#111',marginBottom:3,lineHeight:1.3}}>{item.title}</div>
                      <div style={{fontSize:14,fontWeight:900,color:'var(--gold)'}}>Rs. {p.toLocaleString()}</div>
                      <div style={{fontSize:11,color:'#aaa'}}>Qty: {item.qty}</div>
                    </div>
                    <button onClick={()=>removeFromCart(item.id)} style={D.removeBtn}><X size={13}/></button>
                  </div>
                );
              })}
            </div>
          )}

          {cart.length>0 && (
            <div style={D.foot}>
              {user && hasGift && (
                <div style={{background:'linear-gradient(135deg,#c9a84c,#e8c96a)',color:'#000',fontWeight:800,fontSize:13,padding:'9px 14px',borderRadius:10,textAlign:'center',marginBottom:12}}>
                  🎁 50% Welcome Gift Applied!
                </div>
              )}
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
                <span style={{fontWeight:600,fontSize:15}}>Total</span>
                <span style={{fontWeight:900,color:'var(--gold)',fontSize:20}}>Rs. {total.toLocaleString()}</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {cart.map(item => {
                  const p = getPrice(item);
                  return (
                    <button key={item.id} className="btn-g" style={{padding:'11px',fontSize:13}}
                      onClick={() => {
                        if (!user) { setAuth('signup'); return; }
                        setOrderItem({product:item,price:p});
                      }}>
                      Order: {item.title.slice(0,22)}{item.title.length>22?'…':''}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      {orderItem && <OrderModal product={orderItem.product} qty={orderItem.product.qty} price={orderItem.price} onClose={()=>{setOrderItem(null);onClose();}}/>}
      {auth && <AuthModal mode={auth} onClose={()=>setAuth(null)} onSwitch={()=>setAuth(m=>m==='signin'?'signup':'signin')}/>}
    </>
  );
}

const D = {
  drawer: {width:'100%',maxWidth:400,background:'#fff',height:'100%',display:'flex',flexDirection:'column',boxShadow:'-8px 0 40px rgba(0,0,0,.15)'},
  head: {padding:'20px',borderBottom:'1px solid #f0f0f0',display:'flex',justifyContent:'space-between',alignItems:'center'},
  closeBtn: {background:'#f5f5f5',border:'none',borderRadius:'50%',width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'},
  item: {display:'flex',gap:12,padding:'14px 20px',borderBottom:'1px solid #f8f8f8',alignItems:'center'},
  img: {width:64,height:64,objectFit:'cover',borderRadius:10,flexShrink:0},
  removeBtn: {background:'#f5f5f5',border:'none',borderRadius:'50%',width:28,height:28,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0},
  foot: {padding:'16px 20px',borderTop:'1px solid #f0f0f0',background:'#fafafa'},
};