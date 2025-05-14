import './App.css';
import ResumeBuilder from './components/ResumeBuilder';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <ResumeBuilder />
      <Analytics />
    </>
  );
}

export default App;
