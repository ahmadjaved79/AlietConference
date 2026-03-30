import { Download, ZoomIn, X } from 'lucide-react';
import { useState } from 'react';

const brochures = [
  { src: '/brochures/brochure1.jpeg', title: 'ACSIS-2026 Brochure — Version 1', desc: 'Conference overview with tracks, dates, committee and submission details' }
];

export default function Brochure() {
  const [lightbox, setLightbox] = useState(null);

  const handleDownload = (src, title) => {
    const a = document.createElement('a');
    a.href = src;
    a.download = title.replace(/ /g, '_') + '.jpeg';
    a.click();
  };

  return (
    <div style={{ paddingTop: '64px', background: '#0a0a14', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f0f20, #1a0a2e)', padding: '4rem 1.25rem 3rem', textAlign: 'center', borderBottom: '1px solid rgba(108,99,255,0.2)' }}>
        <div style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(245,200,66,0.12)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: '100px', fontSize: '11px', color: '#f5c842', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Official Brochure</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,6vw,42px)', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Conference Brochure</h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>Click to zoom · Download for offline reference</p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '2rem' }}>
          {brochures.map((b, i) => (
            <div key={i} style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', overflow: 'hidden' }}>
              {/* Image */}
              <div style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden' }} onClick={() => setLightbox(b)}>
                <img src={b.src} alt={b.title} style={{ width: '100%', display: 'block', transition: 'transform 0.3s' }}
                  onMouseEnter={e => { e.target.style.transform = 'scale(1.02)'; }}
                  onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.4)'; e.currentTarget.querySelector('.zoom-icon').style.opacity = '1'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0)'; e.currentTarget.querySelector('.zoom-icon').style.opacity = '0'; }}
                >
                  <div className="zoom-icon" style={{ opacity: 0, transition: 'opacity 0.3s', background: 'rgba(108,99,255,0.9)', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ZoomIn size={24} color="#fff" />
                  </div>
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{b.title}</h3>
                <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '1rem' }}>{b.desc}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => setLightbox(b)} style={{ flex: 1, padding: '9px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '8px', color: '#6c63ff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontFamily: "'Space Grotesk', sans-serif" }}>
                    <ZoomIn size={14} /> View Full
                  </button>
                  <button onClick={() => handleDownload(b.src, b.title)} style={{ flex: 1, padding: '9px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontFamily: "'Space Grotesk', sans-serif" }}>
                    <Download size={14} /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share section */}
        <div style={{ marginTop: '3rem', background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(168,85,247,0.05))', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '18px', marginBottom: '0.5rem' }}>Share with Colleagues</h3>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '1.5rem' }}>Help spread the word about ACSIS-2026</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/?text=Check%20out%20ACSIS-2026%20International%20Conference%20at%20ALIET%20Vijayawada%20on%20April%2010%2C%202026!%20Submit%20your%20paper%20by%20April%202." target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: '8px', color: '#25d366', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
              Share on WhatsApp
            </a>
            <a href="mailto:?subject=ACSIS-2026 International Conference&body=Hi, please check out the ACSIS-2026 International Conference at ALIET Vijayawada on April 10, 2026. Submissions open till April 2." style={{ padding: '10px 20px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '8px', color: '#6c63ff', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
              Share via Email
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }} onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <X size={20} />
          </button>
          <img src={lightbox.src} alt={lightbox.title} style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }} onClick={e => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
