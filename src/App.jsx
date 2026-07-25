import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';
import PrivacyPage from './pages/PrivacyPage';

const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL ||
  'https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage calendlyUrl={CALENDLY_URL} />} />
        <Route path="/thank-you" element={<ThankYouPage calendlyUrl={CALENDLY_URL} />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
