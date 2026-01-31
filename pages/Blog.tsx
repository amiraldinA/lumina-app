import React from 'react';
import { BLOG_POSTS } from '../constants';
import { User, Calendar, Clock, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Lumina Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Expert advice, personal stories, and mental health news to keep you informed and inspired.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row group cursor-pointer border border-slate-100 hover:shadow-lg transition-all focus-within:ring-2 focus-within:ring-brand-500">
            <div className="md:w-1/2 overflow-hidden">
               <img src={BLOG_POSTS[0].imageUrl} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-brand-700 font-bold uppercase tracking-wider text-sm mb-4">{BLOG_POSTS[0].category}</span>
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4 group-hover:text-brand-700 transition-colors">
                <a href="#" className="focus:outline-none">{BLOG_POSTS[0].title}</a>
              </h2>
              <p className="text-slate-600 mb-6 text-lg">{BLOG_POSTS[0].excerpt}</p>
              
              <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
                <span className="flex items-center gap-2"><User size={16} aria-hidden="true" /> {BLOG_POSTS[0].author}</span>
                <span className="flex items-center gap-2"><Calendar size={16} aria-hidden="true" /> {BLOG_POSTS[0].date}</span>
                <span className="flex items-center gap-2"><Clock size={16} aria-hidden="true" /> {BLOG_POSTS[0].readTime}</span>
              </div>
              
              <span className="inline-flex items-center gap-2 text-brand-700 font-bold group-hover:gap-3 transition-all" aria-hidden="true">
                Read Article <ArrowRight size={20} />
              </span>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-all flex flex-col focus-within:ring-2 focus-within:ring-brand-500">
              <div className="h-48 overflow-hidden">
                <img src={post.imageUrl} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold uppercase text-brand-700 bg-brand-50 px-2 py-1 rounded">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-700 transition-colors">
                  <a href="#" className="focus:outline-none">{post.title}</a>
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex justify-between items-center">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
          
          {/* Placeholder for more content */}
           <div className="bg-slate-100 rounded-xl border border-slate-200 border-dashed flex flex-col items-center justify-center p-8 text-slate-500 min-h-[300px]">
             <p className="mb-4 text-center">More inspiring stories coming soon...</p>
             <button className="px-6 py-2 border border-slate-300 rounded-full hover:bg-white hover:text-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500">Subscribe for updates</button>
           </div>
        </div>

      </div>
    </div>
  );
};