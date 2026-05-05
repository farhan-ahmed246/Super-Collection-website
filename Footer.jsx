import React, { useState } from 'react';

const WHATSAPP_NUMBER = '923363016943'; // apna number yahan likhein
const INSTAGRAM_URL   = 'https://instagram.com/supercollection'; // apna link
const FACEBOOK_URL    = 'https://facebook.com/supercollection';   // apna link

export default function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);
  const [showRefund,  setShowRefund]  = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer style={{
        background: 'linear-gradient(135deg,#111 0%,#1a1a1a 60%,#222 100%)',
        color: '#fff',
        padding: '48px 24px 28px',
        marginTop: 60,
        fontFamily: 'var(--font)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          {/* Top Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 36,
            marginBottom: 44,
          }}>

            {/* Brand */}
            <div>
              <div style={{
                fontFamily: 'var(--display)',
                fontSize: 26,
                fontWeight: 900,
                background: 'linear-gradient(135deg,#c9a84c,#e8c96a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 10,
              }}>
                Super Collection
              </div>
              <p style={{ fontSize: 13, color: '#aaa', lineHeight: 1.8, maxWidth: 220, margin: 0 }}>
                Pakistan ki best online shop — quality products, fast delivery, trusted by thousands.
              </p>
              {/* Social Icons */}
              <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  style={{
                    width: 40, height: 40,
                    borderRadius: 12,
                    background: '#25D366',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'transform .2s, opacity .2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {/* WhatsApp SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  style={{
                    width: 40, height: 40,
                    borderRadius: 12,
                    background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'transform .2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="#fff">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  style={{
                    width: 40, height: 40,
                    borderRadius: 12,
                    background: '#1877F2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'transform .2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 16, color: '#e8c96a', letterSpacing: 1, textTransform: 'uppercase' }}>Quick Links</div>
              {[
                { label: '🏠 Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { label: '🛍️ Products', action: () => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' }) },
                { label: '📦 My Orders', action: () => document.getElementById('orders-section')?.scrollIntoView({ behavior: 'smooth' }) },
              ].map(l => (
                <button key={l.label} onClick={l.action} style={{
                  display: 'block',
                  background: 'none', border: 'none',
                  color: '#ccc', cursor: 'pointer',
                  fontSize: 13, padding: '5px 0',
                  fontFamily: 'var(--font)',
                  textAlign: 'left',
                  transition: 'color .2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e8c96a'}
                  onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Policies */}
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 16, color: '#e8c96a', letterSpacing: 1, textTransform: 'uppercase' }}>Policies</div>
              {[
                { label: '📜 Terms & Conditions', fn: () => setShowPolicy(true) },
                { label: '↩️ Return & Refund Policy', fn: () => setShowRefund(true) },
                { label: '🔒 Privacy Policy', fn: () => setShowPrivacy(true) },
              ].map(l => (
                <button key={l.label} onClick={l.fn} style={{
                  display: 'block',
                  background: 'none', border: 'none',
                  color: '#ccc', cursor: 'pointer',
                  fontSize: 13, padding: '5px 0',
                  fontFamily: 'var(--font)',
                  textAlign: 'left',
                  transition: 'color .2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e8c96a'}
                  onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 16, color: '#e8c96a', letterSpacing: 1, textTransform: 'uppercase' }}>Contact Us</div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'linear-gradient(135deg,#25D366,#128C7E)',
                  color: '#fff', borderRadius: 12,
                  padding: '10px 18px',
                  fontSize: 13, fontWeight: 700,
                  textDecoration: 'none',
                  marginBottom: 12,
                  transition: 'transform .2s, box-shadow .2s',
                  boxShadow: '0 4px 15px rgba(37,211,102,.3)',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,211,102,.3)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp par Message karein
              </a>
              <div style={{ fontSize: 12, color: '#777', marginTop: 6, lineHeight: 1.7 }}>
                📞 +92 3363016943<br/>
                🕐 Mon–Sat: 9am – 9pm
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: 22, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 12, color: '#666' }}>
              © {new Date().getFullYear()} Super Collection. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: 18 }}>
              {[
                { label: 'Terms', fn: () => setShowPolicy(true) },
                { label: 'Refund', fn: () => setShowRefund(true) },
                { label: 'Privacy', fn: () => setShowPrivacy(true) },
              ].map(l => (
                <button key={l.label} onClick={l.fn} style={{
                  background: 'none', border: 'none',
                  color: '#555', fontSize: 12, cursor: 'pointer',
                  fontFamily: 'var(--font)',
                  transition: 'color .2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e8c96a'}
                  onMouseLeave={e => e.currentTarget.style.color = '#555'}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div style={{ fontSize: 12, color: '#444' }}>
              Made with ❤️ in Pakistan 🇵🇰
            </div>
          </div>
        </div>
      </footer>

      {/* ===== POLICY MODALS ===== */}
      {showPolicy && (
        <PolicyModal title="📜 Terms & Conditions" onClose={() => setShowPolicy(false)}>
          <PolicySection title="1. General">
            Super Collection ki website use karne se aap in terms se agree karte hain. Hamara haq hai ke hum in terms ko kabhi bhi update karein.
          </PolicySection>
          <PolicySection title="2. Orders">
            Order place karne ke baad confirmation SMS ya WhatsApp message milega. Order delivery 3–7 business days mein hogi.
          </PolicySection>
          <PolicySection title="3. Payment">
            Abhi sirf Cash on Delivery (COD) available hai. Online payment jald aa rahi hai.
          </PolicySection>
          <PolicySection title="4. Cancellation">
            Order sirf 10 ghante ke andar cancel kiya ja sakta hai order place hone ke baad.
          </PolicySection>
          <PolicySection title="5. Contact">
            Kisi bhi masle ke liye WhatsApp ya email par rabta karein.
          </PolicySection>
        </PolicyModal>
      )}

      {showRefund && (
        <PolicyModal title="↩️ Return & Refund Policy" onClose={() => setShowRefund(false)}>
          <PolicySection title="Return Conditions">
            Product sirf tab return hoga jab:
            <ul style={{ marginTop: 8, paddingLeft: 20, lineHeight: 2 }}>
              <li>Product damaged ya defective ho</li>
              <li>Wrong product deliver hua ho</li>
              <li>Return request 24 ghante ke andar ki gayi ho</li>
            </ul>
          </PolicySection>
          <PolicySection title="Refund Process">
            Return accept hone ke baad 5–7 business days mein refund process hoga. Refund same payment method par hoga.
          </PolicySection>
          <PolicySection title="How to Return">
            WhatsApp par order number ke saath photos bhejein. Hamari team 24 ghante mein response degi.
          </PolicySection>
        </PolicyModal>
      )}

      {showPrivacy && (
        <PolicyModal title="🔒 Privacy Policy" onClose={() => setShowPrivacy(false)}>
          <PolicySection title="Data Collection">
            Hum sirf woh information collect karte hain jo aap khud dete hain — jaise naam, email, phone number, aur delivery address.
          </PolicySection>
          <PolicySection title="Data Usage">
            Aapki information sirf order process karne aur delivery ke liye use hoti hai. Hum aapka data kisi third party ko nahi bechte.
          </PolicySection>
          <PolicySection title="Cookies">
            Hum cookies use karte hain website experience behtar banane ke liye. Aap apne browser settings se cookies disable kar sakte hain.
          </PolicySection>
          <PolicySection title="Security">
            Aapka data secure servers par store hota hai. Hum industry-standard security measures use karte hain.
          </PolicySection>
          
        </PolicyModal>
      )}
    </>
  );
}

function PolicySection({ title, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontWeight: 700, fontSize: 14, color: '#111', marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 13, color: '#555', lineHeight: 1.8 }}>{children}</div>
    </div>
  );
}

function PolicyModal({ title, children, onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(0,0,0,.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: '#fff',
        borderRadius: 20,
        maxWidth: 560,
        width: '100%',
        maxHeight: '85vh',
        overflowY: 'auto',
        boxShadow: '0 20px 60px rgba(0,0,0,.2)',
        animation: 'scaleIn .2s ease',
      }}>
        <div style={{
          padding: '20px 24px 16px',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          position: 'sticky', top: 0, background: '#fff', borderRadius: '20px 20px 0 0', zIndex: 1,
        }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: 18, fontWeight: 800 }}>{title}</div>
          <button onClick={onClose} style={{
            background: '#f5f5f5', border: 'none',
            borderRadius: '50%', width: 34, height: 34,
            cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>×</button>
        </div>
        <div style={{ padding: '20px 24px 28px' }}>{children}</div>
      </div>
    </div>
  );
}