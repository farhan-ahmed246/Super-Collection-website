import React, { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ShoppingCart,
  Gift,
  Truck,
  Star
} from 'lucide-react';

import { useApp } from '../context/AppContext';
import AuthModal from './AuthModal';
import OrderModal from './OrderModal';

export default function ProductModal({ product, onClose }) {
  const { addToCart, cart, user, hasGift, products } = useApp();

  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('signup');
  const [showOrder, setShowOrder] = useState(false);

  const inCart = cart.some(i => i.id === product.id);

  const discount =
    product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0;

  const giftPrice =
    hasGift && user ? Math.round(product.price * 0.5) : product.price;

  const imgs = product.images || [];

  const alsoLike = (products || [])
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 11);

  // ADD TO CART (NO SIZE)
  const handleAddCart = () => {
    addToCart({
      ...product,
      quantity: qty
    });
  };

  const handleOrder = () => {
    if (!user) {
      setAuthMode('signup');
      setShowAuth(true);
      return;
    }
    setShowOrder(true);
  };

  return (
    <>
      <div
        style={S.overlay}
        onClick={e => e.target === e.currentTarget && onClose()}
      >
        <div style={S.box}>
          <button onClick={onClose} style={S.close}>
            <X size={18} />
          </button>

          <div style={S.grid}>

            {/* LEFT IMAGE SECTION */}
            <div style={S.galleryCol}>
              <div style={S.mainImgBox}>
                <img
                  src={
                    imgs[imgIdx] ||
                    'https://via.placeholder.com/400?text=No+Image'
                  }
                  alt={product.title}
                  style={S.mainImg}
                />

                {imgs.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setImgIdx(i =>
                          (i - 1 + imgs.length) % imgs.length
                        )
                      }
                      style={{ ...S.navBtn, left: 10 }}
                    >
                      <ChevronLeft size={16} />
                    </button>

                    <button
                      onClick={() =>
                        setImgIdx(i => (i + 1) % imgs.length)
                      }
                      style={{ ...S.navBtn, right: 10 }}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}

                {discount > 0 && (
                  <div style={S.discBadge}>-{discount}%</div>
                )}
              </div>

              <div style={S.thumbRow}>
                {imgs.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setImgIdx(i)}
                    style={{
                      ...S.thumb,
                      border:
                        i === imgIdx
                          ? '2.5px solid #c9a84c'
                          : '2px solid transparent',
                      opacity: i === imgIdx ? 1 : 0.65
                    }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT DETAILS */}
            <div style={S.detailCol}>
              <div style={S.title}>{product.title}</div>

              <div style={S.priceRow}>
                <span style={S.price}>
                  Rs. {giftPrice.toLocaleString()}
                </span>

                {discount > 0 && (
                  <span style={S.orig}>
                    Rs. {product.originalPrice?.toLocaleString()}
                  </span>
                )}
              </div>

              <div style={S.desc}>{product.description}</div>

              {/* QUANTITY */}
              <div style={S.optionSection}>
                <div style={S.optionLabel}>Quantity</div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#f5f5f5',
                    borderRadius: 50
                  }}
                >
                  <button
                    onClick={() =>
                      setQty(q => Math.max(1, q - 1))
                    }
                    style={btn}
                  >
                    <Minus size={14} />
                  </button>

                  <span style={{ padding: '0 12px', fontWeight: 700 }}>
                    {qty}
                  </span>

                  <button
                    onClick={() =>
                      setQty(q => Math.min(10, q + 1))
                    }
                    style={btn}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* COD */}
              <div style={S.cod}>
                <Truck size={15} /> Cash on Delivery Available
              </div>

              {/* BUTTONS */}
              <div style={{ display: 'flex', gap: 12 }}>
                <button onClick={handleAddCart} style={btnBlack}>
                  <ShoppingCart size={16} /> Add to Cart
                </button>

                <button onClick={handleOrder} style={btnGold}>
                  Order Now
                </button>
              </div>
            </div>
          </div>

          {/* ALSO MAY LIKE */}
          {alsoLike.length > 0 && (
            <div style={S.alsoLike}>
              <h3>Also May Like</h3>

              <div style={S.gridLike}>
                {alsoLike.map(p => (
                  <div
                    key={p.id}
                    style={S.likeCard}
                    onClick={onClose}
                  >
                    <img src={p.images?.[0]} style={S.likeImg} />
                    <div style={{ padding: 8 }}>
                      <div style={{ fontSize: 12 }}>
                        {p.title}
                      </div>
                      <div style={{ color: '#c9a84c', fontWeight: 700 }}>
                        Rs. {p.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {showAuth && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuth(false)}
        />
      )}

      {showOrder && (
        <OrderModal
          product={product}
          qty={qty}
          price={giftPrice}
          onClose={() => setShowOrder(false)}
        />
      )}
    </>
  );
}

/* BUTTONS */
const btn = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '10px 16px',
  display: 'flex',
  alignItems: 'center'
};

const btnBlack = {
  flex: 1,
  background: '#111',
  color: '#fff',
  border: 'none',
  borderRadius: 50,
  padding: 14,
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'center',
  gap: 6,
  cursor: 'pointer'
};

const btnGold = {
  flex: 1,
  background: 'linear-gradient(135deg,#c9a84c,#e8c96a)',
  color: '#000',
  border: 'none',
  borderRadius: 50,
  padding: 14,
  fontWeight: 700,
  cursor: 'pointer'
};

/* STYLES */
const S = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: 20
  },
  box: {
    background: '#fff',
    borderRadius: 22,
    padding: 32,
    maxWidth: 900,
    width: '100%',
    maxHeight: '93vh',
    overflowY: 'auto',
    position: 'relative'
  },
  close: {
    position: 'absolute',
    top: 14,
    right: 14,
    background: '#f5f5f5',
    border: 'none',
    borderRadius: '50%',
    width: 36,
    height: 36,
    cursor: 'pointer'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
    gap: 32
  },
  galleryCol: { display: 'flex', flexDirection: 'column', gap: 10 },
  mainImgBox: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    aspectRatio: '1'
  },
  mainImg: { width: '100%', height: '100%', objectFit: 'cover' },
  navBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#fff',
    borderRadius: '50%',
    width: 34,
    height: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  discBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    background: '#ef4444',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: 6,
    fontSize: 12
  },
  thumbRow: { display: 'flex', gap: 8 },
  thumb: { width: 58, height: 58, objectFit: 'cover', borderRadius: 10 },
  detailCol: { display: 'flex', flexDirection: 'column' },
  title: { fontSize: 22, fontWeight: 800 },
  priceRow: { display: 'flex', gap: 10, alignItems: 'center' },
  price: { fontSize: 24, fontWeight: 900, color: '#c9a84c' },
  orig: { textDecoration: 'line-through', color: '#aaa' },
  desc: { marginTop: 10, fontSize: 13, color: '#666' },
  optionSection: { marginTop: 15 },
  optionLabel: { fontSize: 12, fontWeight: 700, marginBottom: 6 },
  cod: {
    marginTop: 12,
    padding: 10,
    background: '#f0fff4',
    color: '#16a34a',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 6
  },
  alsoLike: { marginTop: 30 },
  gridLike: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))',
    gap: 10
  },
  likeCard: {
    border: '1px solid #eee',
    borderRadius: 10,
    cursor: 'pointer'
  },
  likeImg: { width: '100%', height: 80, objectFit: 'cover' }
};