export default function Review({ onBack, onSubmit, onAddCoApplicant }) {
  return (
    <div style={{ backgroundColor: '#F5F4F0', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', height: '844px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '390px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '32px', paddingRight: '32px', paddingTop: '56px' }}>
        <div style={{ alignItems: 'center', display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <div onClick={onBack} style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '8px', cursor: 'pointer', display: 'flex', flexShrink: 0, height: '32px', justifyContent: 'center', width: '32px' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="#1C1C1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '14px', textTransform: 'uppercase' }}>Almost Done</div>
        </div>
        <div style={{ color: '#1C1C1A', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05, whiteSpace: 'pre-wrap' }}>Review<br />Application</div>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '18px', marginTop: '6px' }}>Confirm applicant details before submitting.</div>
      </div>

      {/* Applicant */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '28px', paddingInline: '32px' }}>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Applicant</div>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', paddingBlock: '20px', paddingInline: '20px' }}>
          <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ alignItems: 'center', display: 'flex', gap: '14px' }}>
              <div style={{ alignItems: 'center', backgroundColor: '#EEF1FB', borderRadius: '50%', display: 'flex', flexShrink: 0, height: '44px', justifyContent: 'center', width: '44px' }}>
                <div style={{ color: '#1A3FBF', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '17px', fontWeight: 700, lineHeight: '22px' }}>RK</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div style={{ color: '#1C1C1A', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '17px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: '22px' }}>Ramesh Kumar Verma</div>
                <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '18px' }}>+91 98765 43210</div>
              </div>
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8L7 11L12 5" stroke="#1A3FBF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{ backgroundColor: '#F0EEE8', height: '1px', marginBlock: '16px' }} />
          <div style={{ display: 'flex', gap: '24px' }}>
            {[['Bank', 'SBI'], ['Documents', '2 uploaded'], ['Aadhaar', 'XXXX 4521']].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', lineHeight: '14px', textTransform: 'uppercase' }}>{label}</div>
                <div style={{ color: '#1C1C1A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '18px' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Co-applicant */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px', paddingInline: '32px' }}>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Co-applicant</div>
        <div onClick={onAddCoApplicant} style={{ alignItems: 'center', backgroundColor: '#FFFFFF', border: '1.5px dashed #D8D6D0', borderRadius: '12px', cursor: 'pointer', display: 'flex', gap: '14px', paddingBlock: '20px', paddingInline: '20px' }}>
          <div style={{ alignItems: 'center', backgroundColor: '#F5F4F0', borderRadius: '50%', display: 'flex', flexShrink: 0, height: '44px', justifyContent: 'center', width: '44px' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v14M3 10h14" stroke="#C8C6C0" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ color: '#1A3FBF', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, lineHeight: '20px' }}>Add a co-applicant</div>
            <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '13px', lineHeight: '16px' }}>Personal details, bank info & documents</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '28px', paddingInline: '32px' }}>
        <div onClick={onSubmit} style={{ alignItems: 'center', backgroundColor: '#1A3FBF', borderRadius: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'center', paddingBlock: '16px', paddingInline: '16px' }}>
          <div style={{ color: '#FFFFFF', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: '20px' }}>Submit Application</div>
        </div>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', lineHeight: 1.6, marginTop: '14px', textAlign: 'center', whiteSpace: 'pre-wrap' }}>
          By submitting, you confirm all details are accurate<br />and provided with the applicant's consent.
        </div>
      </div>
    </div>
  );
}
