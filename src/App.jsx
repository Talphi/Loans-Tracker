import { useState } from 'react';
import Login from './screens/Login';
import PersonalDetails from './screens/PersonalDetails';
import BankDetails from './screens/BankDetails';
import Documents from './screens/Documents';
import Review from './screens/Review';

export default function App() {
  const [screen, setScreen] = useState('login');
  const [history, setHistory] = useState([]);

  function go(next) {
    setHistory(h => [...h, screen]);
    setScreen(next);
  }

  function back() {
    setHistory(h => {
      const prev = [...h];
      const last = prev.pop();
      setScreen(last || 'login');
      return prev;
    });
  }

  return (
    <div style={{ alignItems: 'center', backgroundColor: '#E8E6E0', display: 'flex', justifyContent: 'center', minHeight: '100vh', width: '100vw' }}>
      {screen === 'login' && <Login onNext={() => go('personal')} />}
      {screen === 'personal' && <PersonalDetails onNext={() => go('bank')} onBack={back} />}
      {screen === 'bank' && <BankDetails onNext={() => go('documents')} onBack={back} />}
      {screen === 'documents' && <Documents onNext={() => go('review')} onBack={back} />}
      {screen === 'review' && (
        <Review
          onBack={back}
          onSubmit={() => go('personal')}
          onAddCoApplicant={() => go('personal')}
        />
      )}
    </div>
  );
}
