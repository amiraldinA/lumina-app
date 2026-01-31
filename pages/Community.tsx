import React, { useState } from 'react';
import { FORUM_TOPICS } from '../constants';
import { MessageSquare, Users, TrendingUp, Search, Lock } from 'lucide-react';

export const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'forum' | 'chat'>('forum');

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Community Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Community Support</h1>
          <p className="text-slate-600">A safe space to share, listen, and grow together.</p>
          
          <div className="flex space-x-6 mt-8" role="tablist">
            <button 
              role="tab"
              aria-selected={activeTab === 'forum'}
              onClick={() => setActiveTab('forum')}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-t ${activeTab === 'forum' ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Discussion Forums
            </button>
            <button 
              role="tab"
              aria-selected={activeTab === 'chat'}
              onClick={() => setActiveTab('chat')}
              className={`pb-3 text-sm font-bold border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-t ${activeTab === 'chat' ? 'border-brand-600 text-brand-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
            >
              Live Chat Rooms
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {activeTab === 'forum' ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-brand-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
                New Discussion
              </button>
              
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">Categories</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex justify-between items-center cursor-pointer hover:bg-slate-50 p-2 rounded">
                    <span>General Support</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded-full text-xs">1.2k</span>
                  </li>
                  <li className="flex justify-between items-center cursor-pointer hover:bg-slate-50 p-2 rounded">
                    <span>Anxiety & Stress</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded-full text-xs">845</span>
                  </li>
                  <li className="flex justify-between items-center cursor-pointer hover:bg-slate-50 p-2 rounded">
                    <span>Success Stories</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded-full text-xs">432</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1">
                  <label htmlFor="forum-search" className="sr-only">Search topics</label>
                  <Search className="absolute left-3 top-3 text-slate-400" size={20} aria-hidden="true" />
                  <input id="forum-search" type="text" placeholder="Search topics..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" />
                </div>
                <div className="flex bg-white rounded-lg border border-slate-300 p-1">
                   <button className="px-3 py-1 rounded bg-slate-100 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500">Newest</button>
                   <button className="px-3 py-1 rounded text-slate-500 text-sm font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500">Popular</button>
                </div>
              </div>

              <div className="space-y-4">
                {FORUM_TOPICS.map((topic) => (
                  <div key={topic.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-bold uppercase">{topic.category}</span>
                      <span className="text-xs text-slate-400">{topic.lastActive}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{topic.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Users size={14} aria-hidden="true" /> {topic.author}</span>
                      <span className="flex items-center gap-1"><MessageSquare size={14} aria-hidden="true" /> {topic.replies} replies</span>
                      <span className="flex items-center gap-1"><TrendingUp size={14} aria-hidden="true" /> {topic.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Mock Chat Interface */
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 h-[600px] flex overflow-hidden">
            {/* Rooms List */}
            <div className="w-64 bg-slate-50 border-r border-slate-200 hidden md:flex flex-col">
              <div className="p-4 border-b border-slate-200">
                <h3 className="font-bold text-slate-800">Active Rooms</h3>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                <div className="p-3 bg-white border border-brand-200 rounded-lg cursor-pointer">
                  <div className="font-bold text-slate-800 text-sm">#general-support</div>
                  <div className="text-xs text-slate-500 mt-1">34 online</div>
                </div>
                 <div className="p-3 hover:bg-white border border-transparent hover:border-slate-200 rounded-lg cursor-pointer transition-colors">
                  <div className="font-bold text-slate-700 text-sm">#mindfulness</div>
                  <div className="text-xs text-slate-400 mt-1">12 online</div>
                </div>
                 <div className="p-3 hover:bg-white border border-transparent hover:border-slate-200 rounded-lg cursor-pointer transition-colors">
                  <div className="font-bold text-slate-700 text-sm">#venting-safe-space</div>
                  <div className="text-xs text-slate-400 mt-1">8 online</div>
                </div>
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-white">
                <div>
                   <h3 className="font-bold text-slate-800">#general-support</h3>
                   <p className="text-xs text-slate-500">Welcome! Please be kind and respectful.</p>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Live
                </div>
              </div>
              
              <div className="flex-1 bg-slate-50 p-6 overflow-y-auto space-y-4">
                 <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-xs">JD</div>
                   <div>
                     <div className="flex items-baseline gap-2">
                       <span className="font-bold text-slate-800 text-sm">JaneDoe</span>
                       <span className="text-xs text-slate-400">10:42 AM</span>
                     </div>
                     <p className="text-slate-700 text-sm bg-white p-3 rounded-r-lg rounded-bl-lg shadow-sm">Has anyone tried the 5-4-3-2-1 grounding technique? It really helped me yesterday.</p>
                   </div>
                 </div>

                 <div className="flex gap-3 flex-row-reverse">
                   <div className="w-8 h-8 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-bold text-xs">Me</div>
                   <div className="text-right">
                     <div className="flex items-baseline gap-2 justify-end">
                       <span className="text-xs text-slate-400">10:44 AM</span>
                       <span className="font-bold text-slate-800 text-sm">You</span>
                     </div>
                     <p className="text-white text-sm bg-brand-600 p-3 rounded-l-lg rounded-br-lg shadow-sm text-left">Yes! It is my go-to for anxiety spikes.</p>
                   </div>
                 </div>

                 <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xs">MK</div>
                   <div>
                     <div className="flex items-baseline gap-2">
                       <span className="font-bold text-slate-800 text-sm">MikeK</span>
                       <span className="text-xs text-slate-400">10:45 AM</span>
                     </div>
                     <p className="text-slate-700 text-sm bg-white p-3 rounded-r-lg rounded-bl-lg shadow-sm">I need to try that. Breathing exercises aren't working as well for me lately.</p>
                   </div>
                 </div>
              </div>

              <div className="p-4 bg-white border-t border-slate-200">
                <div className="flex gap-2">
                  <label htmlFor="chat-input" className="sr-only">Type a message</label>
                  <input id="chat-input" type="text" placeholder="Type a message..." className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none" />
                  <button className="bg-brand-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">Send</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
          <Lock className="text-blue-500 mt-1 flex-shrink-0" size={20} aria-hidden="true" />
          <p className="text-sm text-blue-800">
            <strong>Privacy Note:</strong> This is a safe space. Harassment or hate speech is not tolerated. Moderators are active 24/7.
            Please do not share personal contact information in public chats.
          </p>
        </div>

      </div>
    </div>
  );
};