import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#070710', borderTop: '1px solid rgba(108,99,255,0.2)', paddingTop: '3rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', paddingBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px', color: '#fff' }}>AC</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '18px', color: '#fff' }}>ICACSIS-2026</span>
            </div>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.7, marginBottom: '1rem' }}>
              International Conference on Advances in Computer Science and Interdisciplinary Systems
            </p>
            <p style={{ fontSize: '13px', color: '#6c63ff', fontWeight: 600 }}>April 10, 2026 · Vijayawada, AP</p>
          </div>

          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: 700, marginBottom: '1rem', fontSize: '15px' }}>Quick Links</h4>
            {[['/', 'Home'], ['/about', 'About Conference'], ['/tracks', 'Conference Tracks'], ['/dates', 'Important Dates'], ['/submit', 'Submit Paper'], ['/committee', 'Committee'], ['/brochure', 'Brochure']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', color: '#64748b', fontSize: '13px', textDecoration: 'none', padding: '3px 0', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#6c63ff'}
                onMouseLeave={e => e.target.style.color = '#64748b'}
              >{label}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: 700, marginBottom: '1rem', fontSize: '15px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={14} style={{ color: '#6c63ff', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>Andhra Loyola Institute of Engineering and Technology (Autonomous), Vijayawada – 520008</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={14} style={{ color: '#6c63ff', flexShrink: 0 }} />
                <a href="mailto:acsis2k26@aliet.ac.in" style={{ fontSize: '13px', color: '#64748b', textDecoration: 'none' }}>acsis2k26@aliet.ac.in</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={14} style={{ color: '#6c63ff', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#64748b' }}>Dr. K. Venkateswara Rao: 99592 34233</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={14} style={{ color: '#6c63ff', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#64748b' }}>Mr. V.V.R Manoj: 83749 70121</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: 700, marginBottom: '1rem', fontSize: '15px' }}>Paper Template</h4>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '1rem', lineHeight: 1.6 }}>Download the manuscript template and submit via Microsoft CMT</p>
            <a href="https://rebrand.ly/11tcryj" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '8px', color: '#6c63ff', fontSize: '13px', fontWeight: 600, textDecoration: 'none', marginBottom: '8px' }}>
              <ExternalLink size={13} /> Download Template
            </a>
            <br />
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(108,99,255,0.1)', padding: '1.5rem 0', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#334155' }}>© 2026 ACSIS-2026 · Andhra Loyola Institute of Engineering and Technology · Vijayawada, Andhra Pradesh</p>
          <p style={{ fontSize: '11px', color: '#1e293b', marginTop: '4px' }}>Approved by AICTE · Recognized by Govt of AP · Affiliated to JNTUK-Kakinada · ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
}
