import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    // domAnimation carga solo lo necesario (sin drag ni layout animations)
    <LazyMotion features={domAnimation} strict>
      {/* Respeta la preferencia del sistema: sin animaciones si el usuario las desactiva */}
      <MotionConfig reducedMotion="user">
        <Router>
          <div className="app-container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
