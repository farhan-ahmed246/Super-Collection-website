import React from 'react';

export default function WelcomeGift({ onClose }) {
  return (
    <div className="overlay" style={{zIndex:1100}}>
      <div className="a-bounceIn" style={{background:'linear-gradient(160deg,#0a0a0a,#1a1200)',border:'2px solid rgba(201,168,76,.4)',borderRadius:24,padding:'44px 36px',textAlign:'center',maxWidth:380,width:'100%',position:'relative',boxShadow:'0 40px 100px rgba(0,0,0,.4)'}}>
        <button onClick={onClose} style={{position:'absolute',top:14,right:14,background:'rgba(255,255,255,.1)',border:'none',borderRadius:'50%',width:34,height:34,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:'#fff',fontSize:16}}>✕</button>
        <div style={{display:'inline-block',background:'linear-gradient(135deg,#c9a84c,#e8c96a)',color:'#000',fontWeight:900,fontSize:11,letterSpacing:3,borderRadius:50,padding:'6px 20px',marginBottom:20,textTransform:'uppercase'}}>🎁 Welcome Gift</div>
        <div style={{fontFamily:'var(--display)',fontSize:96,fontWeight:900,background:'linear-gradient(135deg,#c9a84c,#f2d97e)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',lineHeight:1}}>50%</div>
        <div style={{fontFamily:'var(--display)',fontSize:42,fontWeight:800,color:'#fff',marginBottom:16,marginTop:-6}}>OFF</div>
        <div style={{color:'rgba(255,255,255,.8)',fontSize:15,fontWeight:600,marginBottom:8}}>Congratulations! 🎊</div>
        <div style={{color:'rgba(255,255,255,.5)',fontSize:13,lineHeight:1.7,marginBottom:28}}>You've received a one-time 50% welcome gift. It will be automatically applied to your first order!</div>
        <button onClick={onClose} className="btn-g" style={{width:'100%',padding:'15px',fontSize:16,borderRadius:14}}>🛍️ Start Shopping</button>
        <div style={{fontSize:11,color:'rgba(255,255,255,.3)',marginTop:12}}>*One-time offer per account</div>
      </div>
    </div>
  );
}