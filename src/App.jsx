import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import FrontPage from './components/FrontPage';
import Demo from './components/Demo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/demo" element={<FrontPage />} />
        <Route path="/" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;