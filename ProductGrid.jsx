import React, { useState } from 'react';
import { ShoppingCart, Star, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductModal from './ProductModal';
import AuthModal from './AuthModal';
import { CAT_LABELS } from '../data/products';

function StarRating({ n }) {
  return (
    <div style={{ display: 'flex', gap: 1 }}>
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={11} fill={i <= Math.round(n) ? '#c9a84c' : 'none'} color={i <= Math.round(n) ? '#c9a84c' : '#ddd'} />
      ))}
    </div>
  );
}

// Category badge colors
const CAT_COLORS = {
  sale:         { bg: '#fff0f0', color: '#ef4444', label: 'Sale' },
  new_arrival:  { bg: '#f0fff4', color: '#16a34a', label: 'New Arrival' },
  good_quality: { bg: '#fffbeb', color: '#c9a84c', label: 'Good Quality' },
  viral:        { bg: '#f5f3ff', color: '#7c3aed', label: 'Viral' },
  low_price:    { bg: '#eff6ff', color: '#3b82f6', label: 'Low Price' },
};

function ProductCard({ product }) {
  const { cart, addToCart, user } = useApp();
  const [hov,   setHov]   = useState(false);
  const [modal, setModal] = useState(false);
  const [auth,  setAuth]  = useState(null);
  const [added, setAdded] = useState(false);

  const inCart  = cart.some(i => i.id === product.id);
  const disc    = product.originalPrice > product.price ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  const isNew   = product.category === 'new_arrival';
  // Hover par doosri image — agar sirf ek hai to wohi rahe
  const imgs    = product.images || [];
  const showImg = hov && imgs.length > 1 ? imgs[1] : imgs[0];

  const addCart = e => {
    e.stopPropagation();
    if (!user) { setAuth('signup'); return; }
    if (!inCart) { addToCart(product, 1); setAdded(true); setTimeout(() => setAdded(false), 2000); }
  };

  const catInfo = CAT_COLORS[product.category] || { bg: '#f5f5f5', color: '#888', label: product.category };

  return (
    <>
      <div
        onClick={() => setModal(true)}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: '#fff', borderRadius: 18, overflow: 'hidden',
          cursor: 'pointer', border: '1px solid #f0f0f0',
          transform: hov ? 'translateY(-6px)' : 'none',
          boxShadow: hov ? '0 20px 50px rgba(0,0,0,.13)' : '0 4px 16px rgba(0,0,0,.06)',
          transition: 'all .35s cubic-bezier(.4,0,.2,1)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', paddingTop: '108%', overflow: 'hidden', background: '#f5f5f5' }}>
          <img
            src={showImg}
            alt={product.title}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease, opacity .3s ease' }}
            loading="lazy"
            onError={e => { e.target.src = 'https://via.placeholder.com/300x300?text=No+Image'; }}
          />

          {/* Discount badge */}
          {disc > 0 && (
            <div style={{ position: 'absolute', top: 10, left: 10, background: '#ef4444', color: '#fff', fontSize: 11, fontWeight: 800, borderRadius: 7, padding: '3px 9px', zIndex: 2 }}>
              -{disc}%
            </div>
          )}

          {/* NEW badge — sirf new_arrival products par */}
          {isNew && (
            <div style={{ position: 'absolute', top: 10, left: disc > 0 ? 56 : 10, background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#fff', fontSize: 10, fontWeight: 800, borderRadius: 7, padding: '3px 9px', zIndex: 2, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Sparkles size={9} /> NEW
            </div>
          )}

          {/* Category top-right */}
          <div style={{ position: 'absolute', top: 10, right: 10, background: catInfo.bg, color: catInfo.color, fontSize: 10, fontWeight: 700, borderRadius: 7, padding: '3px 9px', zIndex: 2 }}>
            {catInfo.label}
          </div>

          {/* Add to Cart button — hover par */}
          <button
            onClick={addCart}
            style={{
              position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
              background: inCart || added ? '#22c55e' : 'linear-gradient(135deg,#c9a84c,#e8c96a)',
              color: '#000', border: 'none', borderRadius: 50,
              padding: '8px 18px', fontSize: 12, fontWeight: 700,
              display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
              whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(0,0,0,.2)',
              zIndex: 3, fontFamily: 'var(--font)',
              opacity: hov ? 1 : 0,
              transition: 'all .3s',
            }}
          >
            <ShoppingCart size={13} />
            {inCart ? 'In Cart' : added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>

        {/* Info */}
        <div style={{ padding: '14px 16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 10, color: catInfo.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: .8, marginBottom: 5 }}>
            {catInfo.label}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 5, lineHeight: 1.35 }}>{product.title}</div>
          <div style={{ fontSize: 11, color: '#999', lineHeight: 1.6, marginBottom: 10, flex: 1 }}>{product.description?.slice(0, 70)}…</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#c9a84c' }}>Rs. {product.price.toLocaleString()}</div>
              {disc > 0 && <div style={{ fontSize: 11, color: '#ccc', textDecoration: 'line-through', marginTop: 1 }}>Rs. {product.originalPrice.toLocaleString()}</div>}
            </div>
            <StarRating n={product.rating} />
          </div>
        </div>
      </div>

      {modal && <ProductModal product={product} onClose={() => setModal(false)} />}
      {auth  && <AuthModal mode={auth} onClose={() => setAuth(null)} onSwitch={() => setAuth(m => m === 'signin' ? 'signup' : 'signin')} />}
    </>
  );
}

export default function ProductGrid({ products, category }) {
  const list  = category === 'all' ? products : (products || []).filter(p => p.category === category);
  const catInfo = CAT_COLORS[category] || null;

  return (
    <div id="products-section" style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div style={{ fontFamily: 'var(--display)', fontSize: 26, fontWeight: 800, color: '#111' }}>
          {category === 'all' ? 'All Products' : (CAT_LABELS?.[category] || category)}
        </div>
        <div style={{ background: '#f0f0f0', borderRadius: 50, padding: '4px 14px', fontSize: 13, color: '#666' }}>
          {list.length} items
        </div>
      </div>

      {list.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#aaa', fontSize: 15 }}>
          No products in this category yet
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))', gap: 22 }}>
          {list.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}

