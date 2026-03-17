export default function BankDetails({ onNext, onBack }) {
  return (
    <div style={{ backgroundColor: '#F5F4F0', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', height: '844px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', WebkitFontSmoothing: 'antialiased', width: '390px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '32px', paddingRight: '32px', paddingTop: '56px' }}>
        <div style={{ alignItems: 'center', display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <div onClick={onBack} style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '8px', cursor: 'pointer', display: 'flex', flexShrink: 0, height: '32px', justifyContent: 'center', width: '32px' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="#1C1C1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '14px', textTransform: 'uppercase' }}>Step 2 of 3</div>
        </div>
        <div style={{ color: '#1C1C1A', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05, whiteSpace: 'pre-wrap' }}>Bank<br />Details</div>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '18px', marginTop: '6px' }}>Collect the applicant's banking information.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '28px', paddingInline: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Bank Name</div>
          <div style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', paddingBlock: '14px', paddingInline: '16px' }}>
            <div style={{ color: '#1C1C1A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '20px' }}>State Bank of India</div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="#8A8880" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Account Number</div>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', paddingBlock: '14px', paddingInline: '16px' }}>
            <div style={{ color: '#1C1C1A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', letterSpacing: '0.05em', lineHeight: '20px' }}>3821 0045 6712 09</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Confirm Account Number</div>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', paddingBlock: '14px', paddingInline: '16px' }}>
            <div style={{ color: '#1C1C1A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', letterSpacing: '0.05em', lineHeight: '20px' }}>3821 0045 6712 09</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px', paddingInline: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>IFSC Code</div>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', paddingBlock: '14px', paddingInline: '16px' }}>
            <div style={{ color: '#1C1C1A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', letterSpacing: '0.05em', lineHeight: '20px' }}>SBIN0012847</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Account Type</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ alignItems: 'center', backgroundColor: '#1A3FBF', borderRadius: '10px', display: 'flex', flex: 1, justifyContent: 'center', paddingBlock: '13px', paddingInline: '16px' }}>
              <div style={{ color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '18px' }}>Savings</div>
            </div>
            <div style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '10px', display: 'flex', flex: 1, justifyContent: 'center', paddingBlock: '13px', paddingInline: '16px' }}>
              <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '18px' }}>Current</div>
            </div>
            <div style={{ alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '10px', display: 'flex', flex: 1, justifyContent: 'center', paddingBlock: '13px', paddingInline: '16px' }}>
              <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '18px' }}>Jan Dhan</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Account Holder Name</div>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', paddingBlock: '14px', paddingInline: '16px' }}>
            <div style={{ color: '#1C1C1A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '20px' }}>Ramesh Kumar Verma</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '24px', paddingInline: '32px' }}>
        <div onClick={onNext} style={{ alignItems: 'center', backgroundColor: '#1A3FBF', borderRadius: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', paddingBlock: '16px', paddingInline: '16px' }}>
          <div style={{ color: '#FFFFFF', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, lineHeight: '20px' }}>Next: Upload Documents</div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5L13 10L8 15" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', gap: '6px', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ backgroundColor: '#D8D6D0', borderRadius: '2px', flexShrink: 0, height: '4px', width: '8px' }} />
          <div style={{ backgroundColor: '#1A3FBF', borderRadius: '2px', flexShrink: 0, height: '4px', width: '24px' }} />
          <div style={{ backgroundColor: '#D8D6D0', borderRadius: '2px', flexShrink: 0, height: '4px', width: '8px' }} />
        </div>
      </div>
    </div>
  );
}
