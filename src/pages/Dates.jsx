// ═══════ Dates.jsx ═══════
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const DATES = [
  { label: 'Paper Submission Starts', date: 'March 29, 2026', icon: '🟢', color: '#22c55e', status: 'open' },
  { label: 'Paper Submission Closes', date: 'April 2, 2026', icon: '🔴', color: '#ff6b9d', status: 'deadline' },
  { label: 'Notification of Acceptance', date: 'April 4, 2026', icon: '📧', color: '#6c63ff', status: 'upcoming' },
  { label: 'Registration of Accepted Paper', date: 'April 6, 2026', icon: '✅', color: '#f5c842', status: 'upcoming' },
  { label: 'Conference Day', date: 'April 10, 2026', icon: '🎓', color: '#a855f7', status: 'conference' },
];

export function Dates() {
  return (
    <div style={{ paddingTop: '64px', background: '#0a0a14', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #0f0f20, #1a0a2e)', padding: '4rem 1.25rem 3rem', textAlign: 'center', borderBottom: '1px solid rgba(108,99,255,0.2)' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,6vw,42px)', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Important Dates</h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>All deadlines are at 11:59 PM IST</p>
      </div>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '3rem 1.25rem' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '24px', top: '24px', bottom: '24px', width: '2px', background: 'linear-gradient(180deg, #22c55e, #ff6b9d, #6c63ff, #f5c842, #a855f7)' }} />
          {DATES.map((d, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.75rem', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: `${d.color}18`, border: `2px solid ${d.color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0, zIndex: 1 }}>
                {d.icon}
              </div>
              <div style={{ flex: 1, background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: `1px solid ${d.color}22`, borderLeft: `3px solid ${d.color}`, borderRadius: '12px', padding: '1rem 1.25rem' }}>
                <p style={{ fontSize: '11px', color: d.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{d.label}</p>
                <p style={{ fontSize: 'clamp(18px,4vw,24px)', fontFamily: "'Playfair Display', serif", color: '#fff', fontWeight: 700 }}>{d.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '1rem', background: 'rgba(245,200,66,0.08)', border: '1px solid rgba(245,200,66,0.25)', borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '12px' }}>
          <AlertTriangle size={18} color="#f5c842" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '13px', color: '#f5c842', lineHeight: 1.7 }}>All deadlines are strict. Authors are encouraged to submit well before the deadline. The organising committee reserves the right to modify dates with prior notice.</p>
        </div>
      </div>
    </div>
  );
}

export default Dates;
