import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </Router>
  );
}

export default App;