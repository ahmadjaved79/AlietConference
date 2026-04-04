import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, ExternalLink, Info, FileText, ChevronRight, Mail } from 'lucide-react';

// ── EMAILJS CONFIG ─────────────────────────────────────────────────
// Get these from https://emailjs.com (see README for step-by-step)
const EMAILJS_SERVICE_ID  = 'service_7okw56o';
const EMAILJS_TEMPLATE_ID = 'template_691t3p6';
const EMAILJS_PUBLIC_KEY  = 'cj_Pe-vrnE65m43Kx';
// ──────────────────────────────────────────────────────────────────

// Google Form embed URL
const GOOGLE_FORM_EMBED  = 'https://docs.google.com/forms/d/e/1FAIpQLSe3I9UxHME0HRxBDemJSp3BOA2qyVR4cURpco1uJdebubu6og/viewform?embedded=true';
const GOOGLE_FORM_DIRECT = 'https://docs.google.com/forms/d/e/1FAIpQLSe3I9UxHME0HRxBDemJSp3BOA2qyVR4cURpco1uJdebubu6og/viewform';

export default function Submit() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '' });
  const [emailStatus, setEmailStatus] = useState('idle'); // idle | sending | sent | error
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const sendConfirmationEmail = async () => {
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') return; // not configured yet
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name:         form.name,
          to_email:        form.email,
          author_name:     form.name,
          author_email:    form.email,
          submission_date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
          conference_date: 'April 10, 2026',
          form_link:        'https://docs.google.com/forms/d/e/1FAIpQLSe3I9UxHME0HRxBDemJSp3BOA2qyVR4cURpco1uJdebubu6og/viewform',
          template_link:    'https://rebrand.ly/11tcryj',
          copyright_link:   'https://docs.google.com/document/d/1F_g6GZEdMZBQFTnjw8QWU1ZfGrCde-z3/edit?usp=sharing&ouid=111670299455959308279&rtpof=true&sd=true',
          contact_email:    'acsis2k26@aliet.ac.in',
          contact_phone1:   '99592 34233 (Dr. K. Venkateswara Rao)',
          contact_phone2:   '83749 70121 (Mr. V.V.R Manoj)',
          bank_name:        'Indian Overseas Bank (IOB), ALC Branch',
          bank_account:     '153101000019941',
          bank_ifsc:        'IOBA0001531',
          bank_holder:      'The Loyola College Society, Guntur / Vijayawada',
        },
        EMAILJS_PUBLIC_KEY
      );
      setEmailStatus('sent');
    } catch {
      setEmailStatus('error');
    }
  };

  const handleProceed = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setEmailStatus('sending');
    await sendConfirmationEmail();
    setStep(2);
    setTimeout(() => {
      document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const inp = {
    width: '100%', padding: '11px 14px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(108,99,255,0.25)',
    borderRadius: '10px', color: '#e2e8f0',
    fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif",
    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
  };

  return (
    <div style={{ paddingTop: '64px', background: '#0a0a14', minHeight: '100vh' }}>

      {/* HEADER */}
      <div style={{ background: 'linear-gradient(135deg,#0f0f20,#1a0a2e)', padding: '4rem 1.25rem 2.5rem', textAlign: 'center', borderBottom: '1px solid rgba(108,99,255,0.2)' }}>
        <div style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '100px', fontSize: '11px', color: '#6c63ff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          Paper Submission
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,6vw,42px)', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>
          Submit Your Research Paper
        </h1>
        <p style={{ color: '#64748b', fontSize: '15px', maxWidth: '560px', margin: '0 auto' }}>
          Enter your details to get a confirmation email, then fill the Google Form below to upload your Word document.
        </p>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '2.5rem 1.25rem' }}>

        {/* PROGRESS STEPS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px', marginBottom: '2.5rem' }}>
          {[
            { n:'1', label:'Your Details', done: step > 1, active: step === 1 },
            { n:'2', label:'Fill & Upload', done: false, active: step === 2 },
            { n:'3', label:'Submitted ✓',  done: false, active: false },
          ].map((s, i) => (
            <div key={i} style={{ background: s.done ? 'rgba(34,197,94,0.1)' : s.active ? 'rgba(108,99,255,0.15)' : 'rgba(255,255,255,0.03)', border: `1px solid ${s.done ? 'rgba(34,197,94,0.35)' : s.active ? 'rgba(108,99,255,0.4)' : 'rgba(255,255,255,0.07)'}`, borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: s.done ? '#22c55e' : s.active ? 'linear-gradient(135deg,#6c63ff,#a855f7)' : 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px', fontSize: '12px', fontWeight: 700, color: s.active || s.done ? '#fff' : '#475569' }}>
                {s.done ? '✓' : s.n}
              </div>
              <p style={{ fontSize: '12px', fontWeight: 600, color: s.active ? '#e2e8f0' : s.done ? '#22c55e' : '#475569' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* ══ STEP 1 ══ */}
        {step === 1 && (
          <>
            {/* How it works banner */}
            <div style={{ background: 'rgba(0,212,170,0.07)', border: '1px solid rgba(0,212,170,0.22)', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '1.75rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <Info size={17} color="#00d4aa" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.75 }}>
                <strong style={{ color: '#00d4aa' }}>How submission works:</strong>
                <ol style={{ marginTop: '6px', paddingLeft: '16px' }}>
                  <li>Enter your name & email → receive a <strong style={{ color: '#e2e8f0' }}>confirmation email</strong></li>
                  <li>Google Form loads right here on this page</li>
                  <li>Fill all details and <strong style={{ color: '#e2e8f0' }}>upload your Word document</strong> inside the form</li>
                  <li>Click Submit — data goes straight to <strong style={{ color: '#e2e8f0' }}>Google Sheets</strong> automatically ✅</li>
                </ol>
              </div>
            </div>

            <form onSubmit={handleProceed}>
              <div style={{ background: 'linear-gradient(135deg,#12121f,#1a1a2e)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '16px', padding: '2rem', display: 'grid', gap: '1.25rem' }}>
                <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '16px' }}>Step 1 — Enter Your Details</h3>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Author Name <span style={{ color: '#ff6b9d' }}>*</span>
                  </label>
                  <input style={inp} placeholder="Dr. / Mr. / Ms. Full Name" value={form.name}
                    onChange={e => set('name', e.target.value)}
                    onFocus={e => e.target.style.borderColor='#6c63ff'}
                    onBlur={e => e.target.style.borderColor='rgba(108,99,255,0.25)'}
                    required autoComplete="name" />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#94a3b8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Email Address <span style={{ color: '#ff6b9d' }}>*</span>
                  </label>
                  <input type="email" style={inp} placeholder="your@email.com" value={form.email}
                    onChange={e => set('email', e.target.value)}
                    onFocus={e => e.target.style.borderColor='#6c63ff'}
                    onBlur={e => e.target.style.borderColor='rgba(108,99,255,0.25)'}
                    required autoComplete="email" />
                  <p style={{ fontSize: '12px', color: '#475569', marginTop: '5px' }}>📧 A confirmation email will be sent here</p>
                </div>

                <div style={{ background: 'rgba(245,200,66,0.07)', border: '1px solid rgba(245,200,66,0.2)', borderRadius: '10px', padding: '10px 14px', fontSize: '12px', color: '#f5c842' }}>
                  ⚠️ Deadline: <strong>April 4, 2026</strong> · Upload format: <strong>Word (.doc / .docx)</strong> · Max 100 MB
                </div>

                <button type="submit" disabled={emailStatus === 'sending'} style={{
                  padding: '13px', background: emailStatus === 'sending' ? 'rgba(108,99,255,0.5)' : 'linear-gradient(135deg,#6c63ff,#a855f7)',
                  color: '#fff', border: 'none', borderRadius: '11px', fontSize: '15px', fontWeight: 700,
                  cursor: emailStatus === 'sending' ? 'not-allowed' : 'pointer',
                  fontFamily: "'Space Grotesk',sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  boxShadow: '0 6px 25px rgba(108,99,255,0.4)',
                }}>
                  {emailStatus === 'sending'
                    ? <><div style={{ width:'17px',height:'17px',border:'2px solid rgba(255,255,255,0.4)',borderTopColor:'#fff',borderRadius:'50%',animation:'spin 0.8s linear infinite' }} /> Sending confirmation...</>
                    : <><Send size={16}/> Proceed to Submission Form <ChevronRight size={16}/></>
                  }
                </button>
              </div>
            </form>

            {/* Template download */}
            <div style={{ marginTop: '1.5rem', background: 'rgba(0,212,170,0.05)', border: '1px solid rgba(0,212,170,0.18)', borderRadius: '12px', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p style={{ color: '#00d4aa', fontWeight: 700, fontSize: '13px' }}>📄 Download Paper Template First</p>
                <p style={{ color: '#475569', fontSize: '12px' }}>Use the official manuscript template before submitting</p>
              </div>
              <a href="https://rebrand.ly/11tcryj" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', background: 'rgba(0,212,170,0.12)', border: '1px solid rgba(0,212,170,0.28)', borderRadius: '8px', color: '#00d4aa', fontSize: '13px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                <ExternalLink size={13}/> Download Template
              </a>
            </div>

            {/* Copyright Form download */}
            <div style={{ marginTop: '1rem', background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.22)', borderRadius: '12px', padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p style={{ color: '#a855f7', fontWeight: 700, fontSize: '13px' }}>📋 Download Copyright Form</p>
                <p style={{ color: '#475569', fontSize: '12px' }}>Sign and email the scanned form to acsis2k26@aliet.ac.in</p>
              </div>
              <a href="/Copyright_Form_ACSIS2026.docx" download
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '9px 18px', background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.28)', borderRadius: '8px', color: '#a855f7', fontSize: '13px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                <ExternalLink size={13}/> Download Copyright Form
              </a>
            </div>

            {/* Bank Details */}
            <div style={{ marginTop: '1rem', background: 'rgba(245,200,66,0.05)', border: '1px solid rgba(245,200,66,0.22)', borderRadius: '12px', padding: '1.25rem' }}>
              <p style={{ color: '#f5c842', fontWeight: 700, fontSize: '13px', marginBottom: '12px' }}>🏦 Bank Details for Registration Fee Payment (₹600)</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                {[
                  ['Account Number', '153101000019941'],
                  ['Bank & Branch',  'Indian Overseas Bank (IOB), ALC Branch'],
                  ['IFSC Code',      'IOBA0001531'],
                  ['Account Name',   'The Loyola College Society, Guntur / Vijayawada'],
                ].map(([label, val]) => (
                  <div key={label} style={{ background: 'rgba(245,200,66,0.06)', borderRadius: '8px', padding: '10px 12px' }}>
                    <p style={{ fontSize: '10px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>{label}</p>
                    <p style={{ fontSize: '13px', color: '#e2e8f0', fontWeight: 600 }}>{val}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '15px', color: '#64748b', marginTop: '10px' }}>
                ⚠️ once after payment is completed send the screenshot of payment to  <span style={{ color: '#f5c842' }}>whatsapp group without fail</span>
              </p>
            </div>
          </>
        )}

        {/* ══ STEP 2: Embedded Google Form ══ */}
        {step === 2 && (
          <div id="form-section">

            {/* Email status banner */}
            <div style={{ marginBottom: '1.5rem', background: emailStatus === 'error' ? 'rgba(255,107,157,0.08)' : 'rgba(34,197,94,0.08)', border: `1px solid ${emailStatus==='error' ? 'rgba(255,107,157,0.3)' : 'rgba(34,197,94,0.3)'}`, borderRadius: '12px', padding: '1rem 1.25rem', display: 'flex', gap: '10px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {emailStatus === 'error'
                ? <AlertCircle size={18} color="#ff6b9d" style={{ flexShrink:0, marginTop:'2px' }}/>
                : <CheckCircle size={18} color="#22c55e" style={{ flexShrink:0, marginTop:'2px' }}/>
              }
              <div>
                <p style={{ color: emailStatus==='error' ? '#ff6b9d' : '#22c55e', fontWeight: 700, fontSize: '13px' }}>
                  {emailStatus === 'sent'   && `✅ Confirmation email sent to ${form.email}`}
                  {emailStatus === 'error'  && 'Email could not be sent — but please continue filling the form below!'}
                  {emailStatus === 'idle'   && `Hello ${form.name} — please complete the form below`}
                </p>
                <p style={{ color: '#475569', fontSize: '12px', marginTop: '3px' }}>
                  Now fill <strong style={{ color:'#e2e8f0' }}>all fields</strong> in the Google Form and upload your <strong style={{ color:'#e2e8f0' }}>Word document</strong> at the bottom of the form, then click <strong style={{ color:'#e2e8f0' }}>Submit</strong>.
                </p>
              </div>
            </div>

            {/* Quick tips */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '10px', marginBottom: '1.5rem' }}>
              {[
                { icon:'✍️', text:'Fill all required fields' },
                { icon:'📎', text:'Upload Word doc at the bottom' },
                { icon:'🖱️', text:'Click Submit in the form' },
                { icon:'✅', text:'Data saved to Google Sheets' },
              ].map((tip,i) => (
                <div key={i} style={{ background:'rgba(108,99,255,0.06)', border:'1px solid rgba(108,99,255,0.15)', borderRadius:'10px', padding:'10px 12px', display:'flex', gap:'8px', alignItems:'center' }}>
                  <span style={{ fontSize:'16px' }}>{tip.icon}</span>
                  <p style={{ fontSize:'11px', color:'#94a3b8', lineHeight:1.4 }}>{tip.text}</p>
                </div>
              ))}
            </div>

            {/* ── EMBEDDED GOOGLE FORM ── */}
            <div style={{ background:'linear-gradient(135deg,#12121f,#1a1a2e)', border:'1px solid rgba(108,99,255,0.25)', borderRadius:'16px', overflow:'hidden' }}>
              {/* Form header */}
              <div style={{ background:'linear-gradient(135deg,#6c63ff,#a855f7)', padding:'1rem 1.5rem', display:'flex', alignItems:'center', gap:'10px' }}>
                <FileText size={20} color="#fff"/>
                <div>
                  <p style={{ color:'#fff', fontWeight:700, fontSize:'15px' }}>ACSIS-2026 Paper Submission Form</p>
                  <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'11px' }}>Fill all fields · Upload your Word document · Click Submit</p>
                </div>
              </div>

              {/* IFRAME — Google Form embedded */}
              <iframe
                src={GOOGLE_FORM_EMBED}
                width="100%"
                height="2400"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="ACSIS-2026 Paper Submission"
                style={{ display:'block', background:'#fff' }}
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>

            {/* Fallback + back */}
            <div style={{ marginTop:'1.25rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'10px' }}>
              <button onClick={() => { setStep(1); setEmailStatus('idle'); }}
                style={{ background:'none', border:'1px solid rgba(108,99,255,0.3)', borderRadius:'8px', color:'#6c63ff', padding:'8px 18px', fontSize:'13px', fontWeight:600, cursor:'pointer', fontFamily:"'Space Grotesk',sans-serif" }}>
                ← Go Back
              </button>
              <a href={GOOGLE_FORM_DIRECT} target="_blank" rel="noopener noreferrer"
                style={{ display:'inline-flex', alignItems:'center', gap:'5px', color:'#475569', fontSize:'12px', textDecoration:'none' }}>
                Form not loading? Open directly <ExternalLink size={12}/>
              </a>
            </div>

            <div style={{ marginBottom:'3rem' }} />
          </div>
        )}
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}