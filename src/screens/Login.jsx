export default function Login({ onNext }) {
  return (
    <div style={{ backgroundColor: '#F5F4F0', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontSynthesis: 'none', height: '844px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', position: 'relative', WebkitFontSmoothing: 'antialiased', width: '390px' }}>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '32px', paddingRight: '32px', paddingTop: '60px' }}>
        <div style={{ color: '#1A3FBF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', lineHeight: '14px', textTransform: 'uppercase' }}>LoanConnect</div>
        <div style={{ color: '#1C1C1A', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '40px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.05, whiteSpace: 'pre-wrap' }}>Salesperson<br />Portal</div>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '15px', lineHeight: 1.5, marginTop: '4px' }}>Sign in to collect loan applications from customers.</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '48px', paddingInline: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Employee ID</div>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', paddingBlock: '14px', paddingInline: '16px' }}>
            <div style={{ color: '#1C1C1A', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '20px' }}>EMP-2041</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', lineHeight: '14px', textTransform: 'uppercase' }}>Password</div>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '10px', paddingBlock: '14px', paddingInline: '16px' }}>
            <div style={{ color: '#C8C6C0', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '20px' }}>••••••••</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '12px', paddingInline: '32px' }}>
        <div onClick={onNext} style={{ alignItems: 'center', backgroundColor: '#1A3FBF', borderRadius: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'center', paddingBlock: '16px', paddingInline: '16px' }}>
          <div style={{ color: '#FFFFFF', fontFamily: '"Inter Tight", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: '20px' }}>Sign In</div>
        </div>
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '13px', lineHeight: '16px', marginTop: '16px', textAlign: 'center' }}>Forgot your password? Contact your manager.</div>
      </div>
      <div style={{ alignItems: 'center', bottom: '40px', display: 'flex', gap: '8px', left: '32px', position: 'absolute', right: '32px' }}>
        <div style={{ backgroundColor: '#1A3FBF', borderRadius: '50%', flexShrink: 0, height: '8px', width: '8px' }} />
        <div style={{ color: '#8A8880', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', lineHeight: '16px' }}>Offline mode available — data syncs when connected</div>
      </div>
    </div>
  );
}
