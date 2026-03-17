export default function Documents({ onNext, onBack }) {
  return (
    <div style={{ backgroundColor: '#F5F4F0', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', height: '844px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '390px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '32px', paddingRight: '32px', paddingTop: '56px' }}>
        <div style={{ alignItems: 'center', display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <div onClick={onBack} style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '8px', cursor: 'pointer', display: 'flex', flexShrink: 0, height: '32px', justifyContent: 'center', width: '32px' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="#1C1C1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '14px', textTransform: 'uppercase' }}>Step 3 of 3</div>
        </div>
        <div style={{ color: '#1C1C1A', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05, whiteSpace: 'pre-wrap' }}>Upload<br />Documents</div>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '18px', marginTop: '6px' }}>Attach KYC and supporting documents.</div>
      </div>

      {/* Document 1 - Uploaded */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '28px', paddingInline: '32px' }}>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Document 1</div>
        <div style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', paddingBlock: '14px', paddingInline: '16px' }}>
          <div style={{ color: '#1C1C1A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', lineHeight: '18px' }}>Aadhaar Card</div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8L7 11L12 5" stroke="#1A3FBF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div style={{ alignItems: 'center', backgroundColor: '#EEF1FB', borderRadius: '10px', display: 'flex', gap: '12px', paddingBlock: '14px', paddingInline: '16px' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="3" y="2" width="12" height="14" rx="2" fill="#1A3FBF" style={{ opacity: 0.15 }} />
            <path d="M3 2h7l5 5v9a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="#1A3FBF" strokeWidth="1.4" />
            <path d="M10 2v5h5" stroke="#1A3FBF" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <div style={{ color: '#1A3FBF', flex: 1, fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>aadhaar_front.jpg</div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8L7 11L12 5" stroke="#1A3FBF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>

      {/* Document 2 - With dropdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px', paddingInline: '32px' }}>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Document 2</div>
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', overflow: 'clip' }}>
          <div style={{ alignItems: 'center', borderBottom: '1px solid #F0EEE8', display: 'flex', justifyContent: 'space-between', paddingBlock: '14px', paddingInline: '16px' }}>
            <div style={{ color: '#C8C6C0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', lineHeight: '18px' }}>Select document type</div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="#8A8880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{ paddingBlock: '6px' }}>
            {['PAN Card', 'Aadhaar Card', 'Driving Licence', 'Bank Statement'].map((item, i) => (
              <div key={item} style={{ backgroundColor: i === 1 ? '#F5F4F0' : 'transparent', paddingBlock: '11px', paddingInline: '16px' }}>
                <div style={{ color: '#1C1C1A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', lineHeight: '18px' }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', opacity: 0.4, paddingBlock: '14px', paddingInline: '16px' }}>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', lineHeight: '18px' }}>Upload document</div>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 12V6M9 6L6.5 8.5M9 6L11.5 8.5" stroke="#8A8880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="2" y="13" width="14" height="3" rx="1.5" fill="#8A8880" style={{ opacity: 0.3 }} />
          </svg>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px', paddingInline: '32px' }}>
        <div style={{ alignItems: 'center', border: '1.5px dashed #C8C6C0', borderRadius: '10px', display: 'flex', gap: '8px', justifyContent: 'center', paddingBlock: '14px', paddingInline: '16px' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#1A3FBF" strokeWidth="1.8" strokeLinecap="round" /></svg>
          <div style={{ color: '#1A3FBF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '18px' }}>Add another document</div>
        </div>
        <div onClick={onNext} style={{ alignItems: 'center', backgroundColor: '#1A3FBF', borderRadius: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'center', paddingBlock: '16px', paddingInline: '16px' }}>
          <div style={{ color: '#FFFFFF', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: '20px' }}>Continue</div>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', gap: '6px', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#D8D6D0', borderRadius: '2px', flexShrink: 0, height: '4px', width: '8px' }} />
          <div style={{ backgroundColor: '#D8D6D0', borderRadius: '2px', flexShrink: 0, height: '4px', width: '8px' }} />
          <div style={{ backgroundColor: '#1A3FBF', borderRadius: '2px', flexShrink: 0, height: '4px', width: '24px' }} />
        </div>
      </div>
    </div>
  );
}
