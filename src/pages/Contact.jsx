import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`ACSIS-2026 Enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:acsis2k26@aliet.ac.in?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '11px 14px', background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(108,99,255,0.25)', borderRadius: '10px',
    color: '#e2e8f0', fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif",
    outline: 'none', boxSizing: 'border-box',
  };

  return (
    <div style={{ paddingTop: '64px', background: '#0a0a14', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #0f0f20, #1a0a2e)', padding: '4rem 1.25rem 3rem', textAlign: 'center', borderBottom: '1px solid rgba(108,99,255,0.2)' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,6vw,42px)', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Contact Us</h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>Get in touch with the ICACSIS-2026 organizing committee</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '22px', marginBottom: '0.5rem' }}>Get in Touch</h2>

            {[
              { icon: <Mail size={18} />, label: 'Email', val: 'acsis2k26@aliet.ac.in', href: 'mailto:acsis2k26@aliet.ac.in', color: '#6c63ff' },
              { icon: <Phone size={18} />, label: 'Dr. K. Venkateswara Rao', val: '99592 34233', href: 'tel:+919959234233', color: '#00d4aa' },
              { icon: <Phone size={18} />, label: 'Mr. V.V.R Manoj', val: '99089 89456', href: 'tel:+918374970121', color: '#00d4aa' },
              { icon: <MapPin size={18} />, label: 'Venue', val: 'Andhra Loyola Institute of Engineering and Technology (Autonomous), Vijayawada – 520008, Andhra Pradesh', color: '#f5c842' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: `${item.color}18`, border: `1px solid ${item.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ color: '#e2e8f0', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>{item.val}</a>
                  ) : (
                    <p style={{ color: '#e2e8f0', fontSize: '14px', lineHeight: 1.5 }}>{item.val}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', padding: '2rem' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle size={48} color="#22c55e" style={{ marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '18px', marginBottom: '0.5rem' }}>Email Client Opened!</h3>
                <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '1.5rem' }}>Please send the email from your mail app. We'll respond within 24 hours.</p>
                <button onClick={() => setSent(false)} style={{ padding: '10px 24px', background: 'rgba(108,99,255,0.2)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '8px', color: '#6c63ff', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif" }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '18px' }}>Send a Message</h3>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Name</label>
                  <input style={inputStyle} placeholder="Dr. / Mr. / Ms. Name" value={form.name} onChange={e => set('name', e.target.value)} required onFocus={e => e.target.style.borderColor='#6c63ff'} onBlur={e => e.target.style.borderColor='rgba(108,99,255,0.25)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</label>
                  <input type="email" style={inputStyle} placeholder="you@email.com" value={form.email} onChange={e => set('email', e.target.value)} required onFocus={e => e.target.style.borderColor='#6c63ff'} onBlur={e => e.target.style.borderColor='rgba(108,99,255,0.25)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                  <textarea style={{ ...inputStyle, height: '120px', resize: 'vertical' }} placeholder="Your question or message..." value={form.message} onChange={e => set('message', e.target.value)} required onFocus={e => e.target.style.borderColor='#6c63ff'} onBlur={e => e.target.style.borderColor='rgba(108,99,255,0.25)'} />
                </div>
                <button type="submit" style={{ padding: '13px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontFamily: "'Space Grotesk', sans-serif", boxShadow: '0 6px 20px rgba(108,99,255,0.4)' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
