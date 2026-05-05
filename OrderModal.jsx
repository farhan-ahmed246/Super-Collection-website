import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function OrderModal({ product, qty, price, selectedSize, selectedColor, onClose }) {
  const { placeOrder, useGift, hasGift } = useApp();
  const [f, setF] = useState({ name:'', phone:'', address:'' });
  const [step, setStep] = useState('form');
  const [order, setOrder] = useState(null);
  const ch = e => setF(p=>({...p,[e.target.name]:e.target.value}));

  const submit = () => {
    if (!f.name||!f.phone||!f.address) return;
    const o = placeOrder({
      productId:product.id, 
      productName:product.title,
      productImage:product.images[0], 
      price, 
      qty,
      totalAmount:price*qty,
      customerName:f.name, 
      phone:f.phone, 
      address:f.address,
      paymentMethod:'Cash on Delivery',
      selectedSize: selectedSize || 'N/A',
      selectedColor: selectedColor || 'N/A',
    });
    if (hasGift) useGift();
    setOrder(o); 
    setStep('done');
  };

  if (step==='done') return (
    <div className="overlay" style={{zIndex:1100}}>
      <div className="mbox a-bounceIn" style={{textAlign:'center',maxWidth:420}}>
        <div style={{fontSize:60,marginBottom:12}}>🎉</div>
        <CheckCircle size={50} color="#22c55e" style={{margin:'0 auto 16px'}}/>
        <h2 style={{fontFamily:'var(--display)',fontSize:26,fontWeight:800,marginBottom:8}}>Order Confirmed!</h2>
        <div style={{color:'#888',fontSize:14,marginBottom:20}}>Order ID: <strong style={{color:'#111'}}>{order?.id}</strong></div>
        <div style={{background:'#f9f9f9',borderRadius:14,padding:'16px',textAlign:'left',marginBottom:20,fontSize:13,lineHeight:1.9}}>
          <div><strong>Product:</strong> {product.title}</div>
          <div><strong>Size:</strong> {selectedSize || 'N/A'}</div>
          <div><strong>Color:</strong> {selectedColor || 'N/A'}</div>
          <div><strong>Quantity:</strong> {qty}</div>
          <div><strong>Total:</strong> <span style={{color:'var(--gold)',fontWeight:800}}>Rs. {(price*qty).toLocaleString()}</span></div>
          <div><strong>Payment:</strong> Cash on Delivery</div>
          <div><strong>Address:</strong> {f.address}</div>
          <div><strong>Phone:</strong> {f.phone}</div>
        </div>
        <button className="btn-g" onClick={onClose} style={{width:'100%',padding:'14px',fontSize:15}}>Continue Shopping 🛍️</button>
      </div>
    </div>
  );

  return (
    <div className="overlay" onClick={e=>e.target===e.currentTarget&&onClose()} style={{zIndex:1100}}>
      <div className="mbox a-scaleIn">
        <button onClick={onClose} style={{position:'absolute',top:14,right:14,background:'#f5f5f5',border:'none',borderRadius:'50%',width:34,height:34,cursor:'pointer',fontSize:17,display:'flex',alignItems:'center',justifyContent:'center'}}><X size={17}/></button>
        <h2 style={{fontFamily:'var(--display)',fontSize:22,fontWeight:800,marginBottom:20}}>Place Your Order</h2>

        <div style={{display:'flex',gap:12,alignItems:'center',background:'#f9f9f9',borderRadius:14,padding:'12px',marginBottom:20}}>
          <img src={product.images[0]} alt={product.title} style={{width:66,height:66,objectFit:'cover',borderRadius:10}} onError={e=>{e.target.style.display='none'}}/>
          <div>
            <div style={{fontWeight:700,fontSize:14,marginBottom:3}}>{product.title}</div>
            <div style={{fontSize:12,color:'#888',marginBottom:4}}>Size: <strong>{selectedSize || 'N/A'}</strong> | Color: <strong>{selectedColor || 'N/A'}</strong></div>
            <div style={{color:'var(--gold)',fontWeight:900,fontSize:16}}>Rs. {(price*qty).toLocaleString()}</div>
            <div style={{fontSize:12,color:'#aaa'}}>Qty: {qty}</div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:13,marginBottom:16}}>
          <div>
            <label className="lbl">Full Name *</label>
            <input name="name" value={f.name} onChange={ch} placeholder="Your full name" className="inp"/>
          </div>
          <div>
            <label className="lbl">Phone Number *</label>
            <input name="phone" value={f.phone} onChange={ch} placeholder="03XXXXXXXXX" className="inp"/>
          </div>
          <div>
            <label className="lbl">Delivery Address *</label>
            <textarea name="address" value={f.address} onChange={ch} placeholder="House no, Street, City" className="inp" style={{minHeight:80,resize:'vertical'}}/>
          </div>
        </div>

        <div style={{background:'#f0fff4',color:'#16a34a',border:'1px solid #bbf7d0',borderRadius:10,padding:'10px 14px',fontSize:13,marginBottom:16,fontWeight:600}}>
          💵 Payment Method: Cash on Delivery
        </div>

        <button className="btn-g" onClick={submit} style={{width:'100%',padding:'15px',fontSize:15}}>
          Order Now →
        </button>
      </div>
    </div>
  );
}