import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/tracks', label: 'Tracks' },
  { to: '/dates', label: 'Dates' },
  { to: '/committee', label: 'Committee' },
  { to: '/publications', label: 'Publications' },
  { to: '/brochure', label: 'Brochure' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    transition: 'all 0.3s',
    background: scrolled ? 'rgba(10,10,20,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(108,99,255,0.2)' : 'none',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px', color: '#fff', boxShadow: '0 4px 15px rgba(108,99,255,0.5)', flexShrink: 0 }}>AC</div>
          <div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '17px', color: '#fff' }}>ACSIS</span>
            <span style={{ color: '#6c63ff', fontWeight: 700, fontSize: '17px' }}>-2026</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'nowrap' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '6px 11px', borderRadius: '8px', fontSize: '13px', fontWeight: 500,
              color: pathname === l.to ? '#6c63ff' : '#cbd5e1',
              background: pathname === l.to ? 'rgba(108,99,255,0.15)' : 'transparent',
              textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}>{l.label}</Link>
          ))}
          <Link to="/submit" style={{ marginLeft: '8px', padding: '8px 18px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', color: '#fff', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 15px rgba(108,99,255,0.4)', whiteSpace: 'nowrap' }}>
            Submit Paper
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(v => !v)} style={{ background: 'none', border: 'none', color: '#e2e8f0', cursor: 'pointer', padding: '6px', display: 'none' }} className="hamburger">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(10,10,20,0.98)', borderTop: '1px solid rgba(108,99,255,0.2)', padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '10px 14px', borderRadius: '8px', fontSize: '15px', fontWeight: 500,
              color: pathname === l.to ? '#6c63ff' : '#cbd5e1',
              background: pathname === l.to ? 'rgba(108,99,255,0.15)' : 'transparent',
              textDecoration: 'none',
            }}>{l.label}</Link>
          ))}
          <Link to="/submit" style={{ marginTop: '8px', padding: '12px 18px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', color: '#fff', borderRadius: '8px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
            Submit Paper
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } .hamburger { display: flex !important; } }
        @media (min-width: 901px) { .hamburger { display: none !important; } }
      `}</style>
    </nav>
  );
}
