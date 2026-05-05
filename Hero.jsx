import React from 'react';

const CATS = [
  { id:'all',         icon:'🛍️', label:'All Products' },
  { id:'sale',        icon:'🔥', label:'Sale Products' },
  { id:'new_arrival', icon:'✨', label:'New Arrival' },
  { id:'good_quality',icon:'💎', label:'Good Quality' },
  { id:'viral',       icon:'📱', label:'Viral Products' },
  { id:'low_price',   icon:'💰', label:'Low Price' },
];

export default function Hero({ active, onChange }) {
  return (
    <div style={S.wrap}>
      <div style={S.bg}/>
      <div style={S.orb1}/><div style={S.orb2}/>
      <div style={S.content}>
        <div style={S.eyebrow}>✦ Premium Pakistani Fashion ✦</div>
        <div style={S.logoRow}>
          <div style={S.line}/>
          <h1 style={S.title}>SUPER COLLECTION</h1>
          <div style={S.line}/>
        </div>
        <p style={S.sub}>Discover Fashion That Speaks Your Style</p>
      </div>
      <div style={S.tabs}>
        {CATS.map(c => (
          <button key={c.id} onClick={() => onChange && onChange(c.id)}
            style={{ ...S.tab, ...(active===c.id ? S.tabOn : {}) }}>
            <span>{c.icon}</span>
            <span>{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const S = {
  wrap: { position:'relative', background:'linear-gradient(160deg,#080808,#160e00,#080808)', padding:'56px 20px 0', overflow:'hidden', textAlign:'center' },
  bg: { position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% -10%,rgba(201,168,76,.18) 0%,transparent 65%)', pointerEvents:'none' },
  orb1: { position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(201,168,76,.07) 0%,transparent 70%)', top:-150, left:-150, pointerEvents:'none' },
  orb2: { position:'absolute', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(201,168,76,.05) 0%,transparent 70%)', top:-80, right:-80, pointerEvents:'none' },
  content: { position:'relative', zIndex:2, marginBottom:36 },
  eyebrow: { fontSize:11, color:'rgba(201,168,76,.7)', letterSpacing:3, textTransform:'uppercase', marginBottom:16, fontWeight:500 },
  logoRow: { display:'flex', alignItems:'center', justifyContent:'center', gap:20, marginBottom:14 },
  line: { flex:1, maxWidth:90, height:1, background:'linear-gradient(90deg,transparent,rgba(201,168,76,.5))' },
  title: { fontFamily:'var(--display)', fontSize:'clamp(26px,5.5vw,58px)', fontWeight:900, letterSpacing:'.1em', background:'linear-gradient(135deg,#c9a84c 0%,#f2d97e 35%,#c9a84c 65%,#9a6e20 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1.1 },
  sub: { color:'rgba(255,255,255,.4)', fontSize:13, letterSpacing:'.12em', textTransform:'uppercase', fontWeight:300 },
  tabs: { position:'relative', zIndex:2, display:'flex', flexWrap:'wrap', justifyContent:'center', gap:8 },
  tab: { background:'rgba(255,255,255,.05)', color:'rgba(255,255,255,.65)', border:'1px solid rgba(201,168,76,.18)', borderRadius:'50px 50px 0 0', padding:'11px 18px', fontSize:13, fontWeight:600, cursor:'pointer', transition:'all .25s', fontFamily:'var(--font)', display:'flex', alignItems:'center', gap:6, backdropFilter:'blur(4px)' },
  tabOn: { background:'linear-gradient(135deg,#c9a84c,#e8c96a)', color:'#080808', border:'1px solid transparent', transform:'translateY(-2px)', boxShadow:'0 -4px 20px rgba(201,168,76,.4)' },
};