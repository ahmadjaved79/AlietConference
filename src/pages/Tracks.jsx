import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TRACKS = [
  { icon: '🤖', title: 'Artificial Intelligence, GenAI & AI-Driven Smart Grid Technologies', color: '#6c63ff', topics: ['Large Language Models', 'Generative AI', 'AI Ethics', 'Smart Grid Automation', 'Neural Networks'] },
  { icon: '🧠', title: 'Machine Learning, Deep Learning, Data Science & IoT', color: '#a855f7', topics: ['Deep Neural Networks', 'Federated Learning', 'Big Data Analytics', 'Edge AI', 'Smart Sensors & IoT'] },
  { icon: '🌐', title: 'Web / App Development', color: '#00d4aa', topics: ['Progressive Web Apps', 'Full-Stack Frameworks', 'Mobile Development', 'Cloud-Native Apps', 'API Design'] },
  { icon: '🔐', title: 'Communication, Networking & Cyber Security', color: '#f5c842', topics: ['Zero Trust Architecture', '5G Networks', 'Intrusion Detection', 'Cryptography', 'Network Protocols'] },
  { icon: '⚛️', title: 'Quantum Computing & Blockchain Technology', color: '#ff6b9d', topics: ['Quantum Algorithms', 'Post-Quantum Crypto', 'Smart Contracts', 'DeFi', 'Web3 Applications'] },
  { icon: '⚡', title: 'Intelligent Electrical & Electronic Systems + Advancements in EV Industry', color: '#f97316', topics: ['EV Battery Technology', 'Smart Grids', 'Power Electronics', 'Motor Drives', 'Renewable Integration'] },
  { icon: '📊', title: 'Digital Marketing, E-Learning & Social Media', color: '#06b6d4', topics: ['AI-Driven Marketing', 'EdTech Platforms', 'Learning Analytics', 'Social Media Analytics', 'Gamification'] },
  { icon: '🌱', title: 'Sustainability & Green Technology', color: '#22c55e', topics: ['Carbon Footprint AI', 'Smart Agriculture', 'Eco-Friendly Computing', 'Green Data Centers', 'Climate Tech'] },
];

export default function Tracks() {
  return (
    <div style={{ paddingTop: '64px', background: '#0a0a14', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #0f0f20, #1a0a2e)', padding: '4rem 1.25rem 3rem', textAlign: 'center', borderBottom: '1px solid rgba(108,99,255,0.2)' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,6vw,42px)', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Conference Tracks</h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>Submit your research in one of our 8 focused domains</p>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 460px), 1fr))', gap: '1.5rem' }}>
          {TRACKS.map((t, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, #12121f, #1a1a2e)',
              border: `1px solid ${t.color}22`,
              borderLeft: `4px solid ${t.color}`,
              borderRadius: '14px', padding: '1.5rem',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 30px ${t.color}22`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <span style={{ fontSize: '32px', lineHeight: 1 }}>{t.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'inline-block', padding: '2px 10px', background: `${t.color}18`, border: `1px solid ${t.color}33`, borderRadius: '100px', fontSize: '11px', color: t.color, fontWeight: 700, marginBottom: '8px' }}>
                    Track {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '15px', lineHeight: 1.5, marginBottom: '10px' }}>{t.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {t.topics.map(topic => (
                      <span key={topic} style={{ padding: '3px 10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', fontSize: '11px', color: '#64748b' }}>{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '18px', marginBottom: '0.5rem' }}>Submission Guidelines</h3>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '1.5rem', maxWidth: '600px', margin: '0.5rem auto 1.5rem' }}>
            Papers must be original and unpublished. Submit in <strong style={{ color: '#e2e8f0' }}>Microsoft Word (.doc/.docx)</strong> format. Maximum file size: 100 MB. All papers undergo peer review.
          </p>
          <Link to="/submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 6px 25px rgba(108,99,255,0.4)' }}>
            Submit Your Paper <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}
