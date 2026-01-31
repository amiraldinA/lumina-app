import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, HeartHandshake } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Disorders', path: '/disorders' },
    { label: 'Resources', path: '/resources' },
    { label: 'Counseling', path: '/counseling' },
    { label: 'Community', path: '/community' },
    { label: 'Blog', path: '/blog' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100" role="navigation" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
            <div className="bg-brand-600 p-2 rounded-lg text-white group-hover:bg-brand-700 transition-colors">
              <HeartHandshake size={28} aria-hidden="true" />
            </div>
            <span className="font-serif text-2xl font-bold text-slate-800 tracking-tight">Lumina</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 border-b-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-sm ${
                    isActive
                      ? 'border-brand-600 text-brand-800'
                      : 'border-transparent text-slate-600 hover:text-brand-700 hover:border-brand-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 p-2 rounded-md"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    isActive
                      ? 'bg-brand-50 text-brand-800'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-brand-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};