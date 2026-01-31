import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Calendar, Phone, Quote } from 'lucide-react';
import { TESTIMONIALS, BLOG_POSTS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-800 border border-brand-600 text-brand-100 text-sm font-medium mb-6">
            You are not alone
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Lighting the Path to <br/>
            <span className="text-brand-300">Mental Wellness</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
            Lumina is your safe haven for mental health resources, community support, and professional counseling. We are here to listen, support, and guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/resources" className="inline-flex justify-center items-center px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-brand-900/50 focus:outline-none focus:ring-4 focus:ring-brand-700">
              Find Help Now
            </Link>
            <Link to="/community" className="inline-flex justify-center items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full transition-all focus:outline-none focus:ring-4 focus:ring-white/50">
              Join Community
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust Indicators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20" aria-label="Statistics">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-brand-50 p-4 rounded-full text-brand-700 mb-4">
              <Users size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">24/7</h3>
            <p className="text-slate-600 mt-2">Community Support Available</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border-t md:border-t-0 md:border-l md:border-r border-slate-100">
            <div className="bg-brand-50 p-4 rounded-full text-brand-700 mb-4">
              <ShieldCheck size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">100%</h3>
            <p className="text-slate-600 mt-2">Confidential & Secure</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
             <div className="bg-brand-50 p-4 rounded-full text-brand-700 mb-4">
              <Calendar size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Easy</h3>
            <p className="text-slate-600 mt-2">Professional Appointment Scheduling</p>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Our Services">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">How We Can Help</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you are looking for information, needing someone to talk to, or seeking professional help, we have the tools for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link to="/disorders" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-500">
            <div className="bg-accent-50 w-12 h-12 rounded-lg flex items-center justify-center text-accent-700 mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Learn about Disorders</h3>
            <p className="text-slate-600 mb-4">Comprehensive guides on anxiety, depression, and other mental health conditions.</p>
            <span className="text-brand-700 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight size={16} aria-hidden="true" /></span>
          </Link>

          {/* Card 2 */}
          <Link to="/resources" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-500">
             <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
              <Phone size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Crisis Resources</h3>
            <p className="text-slate-600 mb-4">Direct access to national and local helplines, available 24/7 for immediate support.</p>
            <span className="text-brand-700 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Find Help <ArrowRight size={16} aria-hidden="true" /></span>
          </Link>

          {/* Card 3 */}
          <Link to="/counseling" className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-500">
             <div className="bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center text-green-700 mb-6 group-hover:scale-110 transition-transform">
              <Calendar size={24} aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Book an Appointment</h3>
            <p className="text-slate-600 mb-4">Schedule sessions with certified counselors directly through our secure platform.</p>
            <span className="text-brand-700 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Schedule Now <ArrowRight size={16} aria-hidden="true" /></span>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-accent-50 py-20" aria-label="Testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Stories of Hope</h2>
            <p className="text-slate-600">Real stories from real people who have overcome challenges.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-accent-100 relative">
                <Quote className="absolute top-6 right-8 text-accent-200" size={48} aria-hidden="true" />
                <p className="text-lg text-slate-700 italic mb-6 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.imageUrl} alt={`Portrait of ${t.name}`} loading="lazy" width="48" height="48" className="w-12 h-12 rounded-full object-cover ring-2 ring-accent-100" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}, Age {t.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Recent Blog Posts">
         <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-2">Latest Insights</h2>
              <p className="text-slate-600">Educational articles and wellness tips.</p>
            </div>
            <Link to="/blog" className="text-brand-700 font-medium hover:text-brand-800 hidden sm:block focus:outline-none focus:underline">View all posts &rarr;</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article key={post.id} className="flex flex-col group cursor-pointer">
                <div className="rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <img src={post.imageUrl} alt="" loading="lazy" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex gap-2 text-xs font-medium text-brand-700 mb-2 uppercase tracking-wide">
                  <span>{post.category}</span>
                  <span className="text-slate-300" aria-hidden="true">•</span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-700 transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
              </article>
            ))}
          </div>
      </section>

    </div>
  );
};