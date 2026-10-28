import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingHelp from './components/common/FloatingHelp';
import Preloader from './components/common/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Helper to scroll to top whenever the pathname changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock body scroll while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  // Handle initial site entry / refresh
  useEffect(() => {
    let timer;
    const hideLoader = () => {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 850);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
      const fallbackTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);

      return () => {
        window.removeEventListener('load', hideLoader);
        clearTimeout(fallbackTimer);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Brand Preloader with rotating ICON.png on white background */}
      <Preloader isLoading={isLoading} />

      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F5F6F8] text-[#222222] font-poppins selection:bg-[#F04423] selection:text-white relative">
          {/* Sticky Desktop & Mobile Header */}
          <Header />

          {/* Page Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Animated Floating Quick-Help (Call & WhatsApp) */}
          <FloatingHelp />
        </div>
      </BrowserRouter>
    </>
  );
}
