import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
