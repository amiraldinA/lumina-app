import React from 'react';
import { HeartHandshake, Phone, Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <HeartHandshake size={24} className="text-brand-400" aria-hidden="true" />
              <span className="font-serif text-xl font-bold">Lumina</span>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              Lighting the path to mental wellness. We provide resources, community, and support to help you navigate your journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/disorders" className="hover:text-brand-300 transition-colors focus:outline-none focus:text-brand-300 focus:underline">Mental Health A-Z</Link></li>
              <li><Link to="/resources" className="hover:text-brand-300 transition-colors focus:outline-none focus:text-brand-300 focus:underline">Find Help</Link></li>
              <li><Link to="/counseling" className="hover:text-brand-300 transition-colors focus:outline-none focus:text-brand-300 focus:underline">Book Appointment</Link></li>
              <li><Link to="/blog" className="hover:text-brand-300 transition-colors focus:outline-none focus:text-brand-300 focus:underline">Latest Articles</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-400" aria-hidden="true" />
                <span>1-800-LUMINA-HELP</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-400" aria-hidden="true" />
                <span>support@lumina.org</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-400" aria-hidden="true" />
                <span>123 Wellness Way, Suite 400</span>
              </li>
            </ul>
          </div>

          {/* Crisis Banner */}
          <div className="bg-brand-950 p-6 rounded-xl border border-brand-800">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true"></span>
              In Crisis?
            </h3>
            <p className="text-sm mb-4 text-slate-300">
              Immediate help is available 24/7.
            </p>
            <a href="tel:988" className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-white">
              Call 988 Now
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Lumina. All rights reserved. BPA Website Design Team (435).</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <a href="#" aria-label="Follow us on Instagram" className="hover:text-white focus:outline-none focus:text-white"><Instagram size={18} aria-hidden="true" /></a>
             <a href="#" aria-label="Follow us on Twitter" className="hover:text-white focus:outline-none focus:text-white"><Twitter size={18} aria-hidden="true" /></a>
             <a href="#" aria-label="Follow us on Facebook" className="hover:text-white focus:outline-none focus:text-white"><Facebook size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};