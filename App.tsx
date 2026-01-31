import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Disorders } from './pages/Disorders';
import { Resources } from './pages/Resources';
import { Counseling } from './pages/Counseling';
import { Community } from './pages/Community';
import { Blog } from './pages/Blog';

// ScrollToTop component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// 404 Component
const NotFound: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-6xl font-serif font-bold text-brand-700 mb-4">404</h1>
    <h2 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
    <p className="text-slate-600 mb-8 max-w-md">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <Link to="/" className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors">
      Return Home
    </Link>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disorders" element={<Disorders />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/counseling" element={<Counseling />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;