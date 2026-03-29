export const C = {
  bg: '#0a0a14',
  bgCard: '#12121f',
  bgCard2: '#1a1a2e',
  border: 'rgba(108,99,255,0.2)',
  purple: '#6c63ff',
  purpleLight: '#8b85ff',
  purpleDark: '#4a42cc',
  gold: '#f5c842',
  teal: '#00d4aa',
  pink: '#ff6b9d',
  text: '#e2e8f0',
  textMuted: '#94a3b8',
  textDim: '#64748b',
  white: '#ffffff',
};

export const gradients = {
  hero: 'linear-gradient(135deg, #0a0a14 0%, #1a0a2e 50%, #0a1428 100%)',
  card: 'linear-gradient(135deg, #12121f 0%, #1a1a2e 100%)',
  purple: 'linear-gradient(135deg, #6c63ff 0%, #a855f7 100%)',
  gold: 'linear-gradient(135deg, #f5c842 0%, #f97316 100%)',
  teal: 'linear-gradient(135deg, #00d4aa 0%, #0891b2 100%)',
  pink: 'linear-gradient(135deg, #ff6b9d 0%, #ec4899 100%)',
};

export const glow = (color = '#6c63ff', size = '40px') =>
  `0 0 ${size} ${color}33`;

export const sectionHeader = {
  textAlign: 'center',
  marginBottom: '3rem',
};

export const chip = (color = '#6c63ff') => ({
  display: 'inline-block',
  padding: '4px 14px',
  borderRadius: '100px',
  fontSize: '12px',
  fontWeight: 600,
  background: `${color}22`,
  color: color,
  border: `1px solid ${color}44`,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
});

export const card = {
  background: gradients.card,
  border: `1px solid rgba(108,99,255,0.15)`,
  borderRadius: '16px',
  padding: '1.5rem',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

export const btn = {
  primary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 28px',
    background: gradients.purple,
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(108,99,255,0.4)',
  },
  secondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '11px 28px',
    background: 'transparent',
    color: '#6c63ff',
    border: '2px solid #6c63ff',
    borderRadius: '10px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textDecoration: 'none',
  },
  gold: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 28px',
    background: gradients.gold,
    color: '#0a0a14',
    border: 'none',
    borderRadius: '10px',
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(245,200,66,0.4)',
  },
};

export const pageHeader = {
  background: 'linear-gradient(135deg, #0f0f20 0%, #1a0a2e 100%)',
  padding: '5rem 1rem 3rem',
  textAlign: 'center',
  borderBottom: '1px solid rgba(108,99,255,0.2)',
  position: 'relative',
  overflow: 'hidden',
};

export const container = {
  maxWidth: '1100px',
  margin: '0 auto',
  padding: '0 1.25rem',
};
