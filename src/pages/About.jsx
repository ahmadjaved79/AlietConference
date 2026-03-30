// ═══════════════════════════════
//  About.jsx
// ═══════════════════════════════
import { Target, Eye, BookOpen, Globe, Award } from 'lucide-react';

export function About() {
  return (
    <div style={{ paddingTop: '64px', background: '#0a0a14', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #0f0f20, #1a0a2e)', padding: '4rem 1.25rem 3rem', textAlign: 'center', borderBottom: '1px solid rgba(108,99,255,0.2)' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,6vw,42px)', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>About ICACSIS-2026</h1>
        <p style={{ color: '#64748b', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>International Conference on Advances in Computer Science and Interdisciplinary Systems</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.25rem', display: 'grid', gap: '2rem' }}>
        {/* Overview */}
        <div style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '22px', marginBottom: '1rem' }}>Conference Overview</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '15px', marginBottom: '1rem' }}>
            ICACSIS-2026 is a premier international conference hosted by the <strong style={{ color: '#e2e8f0' }}>Department of Computer Science & Engineering</strong> in association with the <strong style={{ color: '#e2e8f0' }}>Journal of Computer and Electrical Sciences (JCES)</strong> at Andhra Loyola Institute of Engineering and Technology (Autonomous), Vijayawada.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '15px', marginBottom: '1rem' }}>
            The conference brings together researchers, engineers, academicians, and industry professionals from around the world to present and discuss the latest advancements in computer science, engineering, and interdisciplinary systems.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '15px' }}>
            All accepted and presented papers will be published in <strong style={{ color: '#6c63ff' }}>JCES, a peer-reviewed journal</strong>. Best papers will be published in the conference proceedings.
          </p>
        </div>

        {/* Institute */}
        <div style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(0,212,170,0.2)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '22px', marginBottom: '1rem' }}>Organizing Institute</h2>
          <p style={{ color: '#00d4aa', fontWeight: 700, fontSize: '16px', marginBottom: '0.5rem' }}>Andhra Loyola Institute of Engineering and Technology (Autonomous)</p>
          <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '1rem' }}>Approved by AICTE · Recognized by Govt of AP · Affiliated to JNTUK-Kakinada · ISO 9001:2015 Certified · NAAC A+ · NBA Accredited</p>
          <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '15px', marginBottom: '1rem' }}>
            Located in Vijayawada – 520008, Andhra Pradesh, ALIET is one of the premier autonomous institutions in the region with world-class infrastructure, distinguished faculty, and strong industry-academia partnerships.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['AICTE Approved', 'NAAC A+', 'NBA Accredited', 'JNTUK Affiliated', 'ISO 9001:2015'].map(tag => (
              <span key={tag} style={{ padding: '4px 12px', background: 'rgba(0,212,170,0.1)', border: '1px solid rgba(0,212,170,0.25)', borderRadius: '100px', fontSize: '12px', color: '#00d4aa', fontWeight: 600 }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Vision & Objectives */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(108,99,255,0.2)', borderLeft: '4px solid #6c63ff', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <Eye size={20} color="#6c63ff" />
              <h3 style={{ color: '#fff', fontWeight: 700 }}>Vision</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7 }}>To be a globally recognized platform that bridges academia and industry, nurturing original research and accelerating technological innovation for societal benefit.</p>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #12121f, #1a1a2e)', border: '1px solid rgba(168,85,247,0.2)', borderLeft: '4px solid #a855f7', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <Target size={20} color="#a855f7" />
              <h3 style={{ color: '#fff', fontWeight: 700 }}>Objectives</h3>
            </div>
            <ul style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.9, paddingLeft: '16px' }}>
              <li>Provide a forum for presenting innovative research</li>
              <li>Foster interdisciplinary collaboration</li>
              <li>Encourage student and researcher participation</li>
              <li>Promote quality publication in JCES journal</li>
              <li>Connect academia with industry leaders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
