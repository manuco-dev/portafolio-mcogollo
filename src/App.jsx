import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, LazyMotion, domAnimation, MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  // Al cambiar de ruta se vuelve arriba; sin esto se hereda el scroll anterior
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/legal" element={<PageTransition><Legal /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    // domAnimation carga solo lo necesario (sin drag ni layout animations)
    <LazyMotion features={domAnimation} strict>
      {/* Respeta la preferencia del sistema: sin animaciones si el usuario las desactiva */}
      <MotionConfig reducedMotion="user">
        <Router>
          <div className="app-container">
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </div>
        </Router>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
