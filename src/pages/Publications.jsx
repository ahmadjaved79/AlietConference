// Publications.jsx
import { BookOpen, CheckCircle, ExternalLink, Award } from 'lucide-react';

export function Publications() {
  const benefits = [
    'Peer-reviewed double-blind review process',
    'Published in JCES — Journal of Computer and Electrical Sciences',
    'Best papers published in conference proceedings',
    'Digital Object Identifier (DOI) for each paper',
    'Participation certificate for all presenters',
    'Best Paper Award in each track',
    'High visibility through Google Scholar and ResearchGate',
    'Networking with researchers from India and abroad',
  ];

  return (
    <div style={{ paddingTop: '64px', background: '#0a0a14', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #0f0f20, #1a0a2e)', padding: '4rem 1.25rem 3rem', textAlign: 'center', borderBottom: '1px solid rgba(108,99,255,0.2)' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,6vw,42px)', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Publications</h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>Get your research published in a reputed peer-reviewed journal</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.25rem', display: 'grid', gap: '2rem' }}>
        {/* JCES info */}
        <div style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={26} color="#fff" />
            </div>
            <div>
              <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '18px' }}>Journal of Computer and Electrical Sciences (JCES)</h2>
              <p style={{ color: '#6c63ff', fontSize: '13px', fontWeight: 600 }}>Official Publication Partner · Peer Reviewed</p>
            </div>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            JCES is a peer-reviewed journal dedicated to advancing research in computing, engineering, and allied sciences. All papers accepted and presented at ACSIS-2026 will be considered for publication. Best papers will additionally be featured in the official conference proceedings.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {[['Peer Reviewed', '✓'], ['Open Access', '✓'], ['DOI Assigned', '✓'], ['Conference Proceedings', '✓']].map(([label, val]) => (
              <div key={label} style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <p style={{ color: '#6c63ff', fontWeight: 800, fontSize: '18px' }}>{val}</p>
                <p style={{ color: '#64748b', fontSize: '12px', marginTop: '4px' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: '16px', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <Award size={22} color="#f5c842" />
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '18px' }}>What You Get</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Template */}
        <div style={{ background: 'rgba(0,212,170,0.06)', border: '1px solid rgba(0,212,170,0.2)', borderRadius: '16px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: '#00d4aa', fontWeight: 700, fontSize: '16px' }}>Manuscript Template</p>
            <p style={{ color: '#64748b', fontSize: '13px', marginTop: '4px' }}>Use the official template · Microsoft Word format</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="https://rebrand.ly/11tcryj" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: 'rgba(0,212,170,0.15)', border: '1px solid rgba(0,212,170,0.3)', borderRadius: '8px', color: '#00d4aa', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
              <ExternalLink size={14} /> Download Template
            </a>
            <a href="https://cmt3.research.microsoft.com/user/login?ReturnURL=%2FICATES2025" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '8px', color: '#6c63ff', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
              <ExternalLink size={14} /> Submit via CMT
            </a>
          </div>
        </div>

        {/* Plagiarism */}
        <div style={{ background: 'rgba(255,107,157,0.06)', border: '1px solid rgba(255,107,157,0.2)', borderRadius: '12px', padding: '1.25rem' }}>
          <p style={{ color: '#ff6b9d', fontWeight: 700, fontSize: '14px', marginBottom: '6px' }}>⚠️ Plagiarism Policy</p>
          <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.7 }}>All submitted papers are screened for plagiarism. Papers with similarity index above 20% will be rejected without review. Self-plagiarism is also not permitted. Authors must ensure their work is original and properly cited.</p>
        </div>
      </div>
    </div>
  );
}

export default Publications;
