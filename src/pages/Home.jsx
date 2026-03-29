import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Award, BookOpen, Users, FileText, Clock, Zap, ChevronRight } from 'lucide-react';

const TRACKS = [
  { icon: '🤖', title: 'AI, GenAI & AI-Driven Smart Grid', color: '#6c63ff' },
  { icon: '🧠', title: 'Machine Learning, Deep Learning, Data Science & IoT', color: '#a855f7' },
  { icon: '🌐', title: 'Web / App Development', color: '#00d4aa' },
  { icon: '🔐', title: 'Communication, Networking & Cyber Security', color: '#f5c842' },
  { icon: '⚛️', title: 'Quantum Computing & Blockchain Technology', color: '#ff6b9d' },
  { icon: '⚡', title: 'Intelligent Electrical & Electronic Systems + EV Industry', color: '#f97316' },
  { icon: '📊', title: 'Digital Marketing, E-Learning & Social Media', color: '#06b6d4' },
  { icon: '🌱', title: 'Sustainability & Green Technology', color: '#22c55e' },
];

const DATES = [
  { label: 'Submission Opens', date: 'March 29, 2026', done: true },
  { label: 'Submission Closes', date: 'April 2, 2026', done: false },
  { label: 'Notification of Acceptance', date: 'April 4, 2026', done: false },
  { label: 'Registration of Accepted Paper', date: 'April 6, 2026', done: false },
  { label: 'Conference Day', date: 'April 10, 2026', done: false },
];

function CountdownTimer() {
  const target = new Date('2026-04-10T09:00:00');
  const calc = () => {
    const diff = target - new Date();
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc());
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);

  const box = (val, label) => (
    <div style={{ textAlign: 'center', minWidth: '70px' }}>
      <div style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, color: '#fff', lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>{String(val).padStart(2, '0')}</div>
      <div style={{ fontSize: '11px', color: '#6c63ff', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{label}</div>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: 'clamp(16px,4vw,32px)', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
      {box(t.d, 'Days')}
      <span style={{ fontSize: '32px', color: '#6c63ff', fontWeight: 300, marginBottom: '12px' }}>:</span>
      {box(t.h, 'Hours')}
      <span style={{ fontSize: '32px', color: '#6c63ff', fontWeight: 300, marginBottom: '12px' }}>:</span>
      {box(t.m, 'Minutes')}
      <span style={{ fontSize: '32px', color: '#6c63ff', fontWeight: 300, marginBottom: '12px' }}>:</span>
      {box(t.s, 'Seconds')}
    </div>
  );
}

export default function Home() {
  const heroRef = useRef();

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; } }), { threshold: 0.1 });
    els.forEach(el => { el.style.opacity = 0; el.style.transform = 'translateY(30px)'; el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section ref={heroRef} style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0a14 0%, #12082a 40%, #0a1428 100%)',
        padding: '80px 1.25rem 3rem', position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '15%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,99,255,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '100px', fontSize: '12px', color: '#a5b4fc', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
            <Zap size={13} color="#6c63ff" /> INTERNATIONAL CONFERENCE · ALIET VIJAYAWADA
          </div>

          {/* Main title */}
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 8vw, 72px)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '0.5rem' }}>
            ACSIS<span style={{ color: '#6c63ff' }}>-2026</span>
          </h1>
          <p style={{ fontSize: 'clamp(13px, 2.5vw, 17px)', color: '#a5b4fc', fontWeight: 500, marginBottom: '0.75rem', fontStyle: 'italic' }}>
            Advances in Computer Science and Interdisciplinary Systems
          </p>
          <p style={{ fontSize: 'clamp(12px, 2vw, 15px)', color: '#64748b', marginBottom: '2rem' }}>
            Andhra Loyola Institute of Engineering & Technology (Autonomous), Vijayawada
          </p>

          {/* Info chips */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {[
              [<Calendar size={14} />, '10th April 2026'],
              [<MapPin size={14} />, 'Vijayawada, AP'],
              [<Award size={14} />, 'Best Paper Award'],
              [<BookOpen size={14} />, 'Published in JCES'],
            ].map(([icon, text], i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', fontSize: '13px', color: '#94a3b8' }}>
                <span style={{ color: '#6c63ff' }}>{icon}</span> {text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link to="/submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: '16px', textDecoration: 'none', boxShadow: '0 8px 30px rgba(108,99,255,0.5)' }}>
              Submit Paper <ArrowRight size={18} />
            </Link>
            <Link to="/brochure" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: 'rgba(245,200,66,0.1)', border: '2px solid rgba(245,200,66,0.5)', color: '#f5c842', borderRadius: '12px', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}>
              View Brochure
            </Link>
          </div>

          {/* Countdown */}
          <div style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', padding: '1.5rem 2rem' }}>
            <p style={{ fontSize: '11px', color: '#6c63ff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Conference Starts In</p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: 'rgba(108,99,255,0.08)', borderTop: '1px solid rgba(108,99,255,0.15)', borderBottom: '1px solid rgba(108,99,255,0.15)', padding: '1.5rem 1.25rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          {[
            ['₹600', 'Registration Fee'],
            ['8+', 'Research Tracks'],
            ['JCES', 'Peer Reviewed Publication'],
            ['Apr 10', '2026 Conference Day'],
            ['Apr 2', 'Submission Deadline'],
          ].map(([val, label]) => (
            <div key={label} className="reveal">
              <div style={{ fontSize: 'clamp(20px,4vw,28px)', fontWeight: 800, color: '#6c63ff', fontFamily: "'Playfair Display', serif" }}>{val}</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRACKS PREVIEW ── */}
      <section style={{ padding: '5rem 1.25rem', background: '#0a0a14' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '100px', fontSize: '11px', color: '#6c63ff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Research Tracks</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px, 5vw, 36px)', color: '#fff', fontWeight: 700 }}>8 Focused Research Domains</h2>
            <p style={{ color: '#64748b', marginTop: '0.5rem', fontSize: '15px' }}>Submit your research in one of our carefully curated tracks</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {TRACKS.map((t, i) => (
              <div key={i} className="reveal" style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: `1px solid ${t.color}22`, borderRadius: '14px', padding: '1.25rem', borderLeft: `3px solid ${t.color}`, transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{t.icon}</div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#e2e8f0', lineHeight: 1.5 }}>{t.title}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }} className="reveal">
            <Link to="/tracks" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#6c63ff', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
              View full track details <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPORTANT DATES ── */}
      <section style={{ padding: '5rem 1.25rem', background: 'linear-gradient(180deg, #0a0a14 0%, #0f0820 100%)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(245,200,66,0.12)', border: '1px solid rgba(245,200,66,0.3)', borderRadius: '100px', fontSize: '11px', color: '#f5c842', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Timeline</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px,5vw,36px)', color: '#fff', fontWeight: 700 }}>Important Dates</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, #6c63ff, #a855f7)', borderRadius: '2px' }} />
            {DATES.map((d, i) => (
              <div key={i} className="reveal" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1.5rem', paddingLeft: '0' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: d.done ? 'linear-gradient(135deg, #6c63ff, #a855f7)' : '#12121f', border: `2px solid ${d.done ? '#6c63ff' : 'rgba(108,99,255,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                  {d.done ? <Award size={16} color="#fff" /> : <Clock size={16} color="#6c63ff" />}
                </div>
                <div style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(108,99,255,0.15)', borderRadius: '12px', padding: '1rem 1.25rem', flex: 1 }}>
                  <p style={{ fontSize: '11px', color: '#6c63ff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{d.label}</p>
                  <p style={{ fontSize: '18px', fontFamily: "'Playfair Display', serif", color: '#fff', fontWeight: 700, marginTop: '2px' }}>{d.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTRATION FEE & INCLUDES ── */}
      <section style={{ padding: '5rem 1.25rem', background: '#0a0a14' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(24px,5vw,36px)', color: '#fff', fontWeight: 700 }}>Registration Fee</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="reveal" style={{ background: 'linear-gradient(135deg, #6c63ff, #a855f7)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
              <Users size={32} color="rgba(255,255,255,0.8)" style={{ marginBottom: '1rem' }} />
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>All Participants</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>UG / PG / Research Scholars</p>
              <div style={{ fontSize: '48px', fontWeight: 800, color: '#fff', fontFamily: "'Playfair Display', serif", margin: '1rem 0' }}>₹600</div>
              <Link to="/submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 24px', background: 'rgba(255,255,255,0.2)', color: '#fff', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
                Register Now <ArrowRight size={15} />
              </Link>
            </div>
            <div className="reveal" style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', padding: '2rem' }}>
              <h3 style={{ color: '#f5c842', fontWeight: 700, marginBottom: '1.25rem', fontSize: '16px' }}>Fee Includes:</h3>
              {['Conference Goodie', 'Refreshments', 'Participation Certificate', 'All accepted papers published in JCES journal', 'Best papers published in conference proceedings'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(245,200,66,0.2)', border: '1px solid rgba(245,200,66,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <span style={{ color: '#f5c842', fontSize: '11px', fontWeight: 700 }}>✓</span>
                  </div>
                  <span style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ padding: '4rem 1.25rem', background: 'linear-gradient(135deg, #12082a, #0a1428)' }}>
        <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(168,85,247,0.1))', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '20px', padding: 'clamp(2rem,5vw,3.5rem) clamp(1.5rem,5vw,3rem)' }}>
          <FileText size={40} color="#6c63ff" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px,5vw,32px)', color: '#fff', fontWeight: 700, marginBottom: '1rem' }}>Ready to Present Your Research?</h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', marginBottom: '2rem', lineHeight: 1.7 }}>
            Submit your paper by <strong style={{ color: '#f5c842' }}>April 2, 2026</strong>. Accepted papers will be published in the <strong style={{ color: '#6c63ff' }}>JCES peer-reviewed journal</strong>.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'linear-gradient(135deg, #6c63ff, #a855f7)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 6px 25px rgba(108,99,255,0.5)' }}>
              Submit Paper <ArrowRight size={17} />
            </Link>
            <Link to="/dates" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'transparent', border: '2px solid rgba(108,99,255,0.5)', color: '#a5b4fc', borderRadius: '10px', fontWeight: 600, fontSize: '15px', textDecoration: 'none' }}>
              View All Dates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
