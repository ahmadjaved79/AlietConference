const COMMITTEE = {
  chiefPatron: [
    { name: 'Rev. Fr. Dr. B. Joji Reddy SJ', role: 'Director and Secretary, ALIET' },
  ],
  patrons: [
    { name: 'Dr. O. Mahesh', role: 'Principal, ALIET' },
    { name: 'Fr. Dr. S. Emmanuel SJ', role: 'Director of Examinations, ALIET' },
  ],
  advisory: [
    { name: 'Dr. Siva Rama Krishna Rudrubati', role: 'Mediatek Wireless Ltd, Cambridge, UK' },
    { name: 'Mr. V. Vidyasagar', role: 'HOD – IT' },
    { name: 'Dr. K. Siva Ramakrishna', role: 'HOD – AIML' },
    { name: 'Dr. T. Lakshmi Narayana', role: 'HOD – ECE' },
    { name: 'Dr. G. Naveen Kumar', role: 'HOD – EEE' },
    { name: 'Dr. M. Geeta Rani', role: 'HOD – MECH' },
    { name: 'Mr. Ch. Nagaraju', role: 'HOD – CIVIL' },
    { name: 'Dr. Y. Sudhakar', role: 'HOD – S&H' },
    { name: 'Dr. M. Vijay Kumar', role: 'HOD – MBA' },
  ],
  conveners: [
    { name: 'Dr. L. Kanya Kumari', role: 'Convener' },
    { name: 'Dr. K. Sireesha', role: 'Convener' },
    { name: 'Dr. K. Venkateswara Rao', role: 'Convener' },
    { name: 'Mrs. P. Nancy Anurag', role: 'Convener' },
    { name: 'Mrs. K. Neeharika', role: 'Convener' },
  ],
  coordinators: [
    { name: 'V.V.R. Manoj', role: 'Coordinator' },
    { name: 'Mrs. Y. Karuna Manjusha', role: 'Coordinator' },
    { name: 'Mrs. Ch. Pavani', role: 'Coordinator' },
    { name: 'Mr. M. Samuel Sandeep', role: 'Coordinator' },
    { name: 'Dr. Y. Prakasa Rao', role: 'Coordinator' },
    { name: 'Dr. M. Sumender Roy', role: 'Coordinator' },
  ],
};

function PersonCard({ person, big, color }) {
  const initials = person.name.split(' ').filter(w => w.match(/[A-Z]/)).map(w => w[0]).join('').slice(0, 2);
  return (
    <div style={{
      background: 'linear-gradient(135deg, #12121f, #1a1a2e)',
      border: `1px solid ${color || 'rgba(108,99,255,0.2)'}`,
      borderRadius: '14px', padding: big ? '1.75rem' : '1.25rem', textAlign: 'center',
      transition: 'transform 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ width: big ? '60px' : '48px', height: big ? '60px' : '48px', borderRadius: '50%', background: `linear-gradient(135deg, ${color || '#6c63ff'}, #a855f7)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: big ? '18px' : '14px', color: '#fff', margin: '0 auto 10px' }}>
        {initials}
      </div>
      <p style={{ color: '#e2e8f0', fontWeight: 700, fontSize: big ? '15px' : '13px', lineHeight: 1.4, marginBottom: '4px' }}>{person.name}</p>
      <p style={{ color: '#64748b', fontSize: '12px', lineHeight: 1.4 }}>{person.role}</p>
    </div>
  );
}

function Section({ title, people, cols, big, color }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
        <div style={{ height: '3px', width: '32px', background: color || '#6c63ff', borderRadius: '2px' }} />
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 'clamp(18px,4vw,22px)', fontWeight: 700 }}>{title}</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${big ? '200px' : '160px'}, 1fr))`, gap: '1rem' }}>
        {people.map((p, i) => <PersonCard key={i} person={p} big={big} color={color} />)}
      </div>
    </div>
  );
}

export default function Committee() {
  return (
    <div style={{ paddingTop: '64px', background: '#0a0a14', minHeight: '100vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #0f0f20, #1a0a2e)', padding: '4rem 1.25rem 3rem', textAlign: 'center', borderBottom: '1px solid rgba(108,99,255,0.2)' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,6vw,42px)', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>Organizing Committee</h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>The distinguished team behind ACSIS-2026</p>
      </div>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.25rem' }}>
        <Section title="Chief Patron" people={COMMITTEE.chiefPatron} big color="#f5c842" />
        <Section title="Patrons" people={COMMITTEE.patrons} big color="#a855f7" />
        <Section title="Advisory Board" people={COMMITTEE.advisory} color="#6c63ff" />
        <Section title="Conveners" people={COMMITTEE.conveners} color="#00d4aa" />
        <Section title="Coordinators" people={COMMITTEE.coordinators} color="#ff6b9d" />
      </div>
    </div>
  );
}
