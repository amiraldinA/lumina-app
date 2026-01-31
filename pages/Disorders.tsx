import React, { useState } from 'react';
import { DISORDERS } from '../constants';
import { ChevronDown, ChevronUp, Activity, AlertCircle } from 'lucide-react';

export const Disorders: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('anxiety');

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Mental Health Conditions</h1>
          <p className="text-lg text-slate-600">Understanding is the first step towards healing. Explore comprehensive information about common mental health challenges.</p>
        </div>

        <div className="space-y-6">
          {DISORDERS.map((disorder) => {
            const isOpen = openId === disorder.id;
            const contentId = `content-${disorder.id}`;
            const headerId = `header-${disorder.id}`;
            
            return (
              <div 
                key={disorder.id} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'shadow-lg border-brand-200' : 'shadow-sm border-slate-200 hover:border-brand-200'}`}
              >
                <h3>
                  <button 
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenId(isOpen ? null : disorder.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-slate-50 focus:ring-2 focus:ring-inset focus:ring-brand-500 rounded-t-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${isOpen ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <Activity size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <span className="text-xl font-bold text-slate-800 block">{disorder.name}</span>
                        {!isOpen && <span className="text-slate-500 text-sm mt-1 block">{disorder.shortDescription}</span>}
                      </div>
                    </div>
                    {isOpen ? <ChevronUp className="text-brand-600" aria-hidden="true" /> : <ChevronDown className="text-slate-400" aria-hidden="true" />}
                  </button>
                </h3>

                <div 
                  id={contentId}
                  role="region" 
                  aria-labelledby={headerId}
                  hidden={!isOpen}
                  className={isOpen ? "block" : "hidden"}
                >
                  <div className="px-6 pb-8 animate-fadeIn">
                    <p className="text-slate-700 leading-relaxed mb-8 text-lg border-l-4 border-brand-200 pl-4">
                      {disorder.fullDescription}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h4 className="text-red-800 font-bold mb-4 flex items-center gap-2">
                          <AlertCircle size={20} aria-hidden="true" /> Common Symptoms
                        </h4>
                        <ul className="space-y-2">
                          {disorder.symptoms.map((s, i) => (
                            <li key={i} className="flex items-start gap-2 text-red-700 text-sm">
                              <span className="block w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" aria-hidden="true"></span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                         <h4 className="text-green-800 font-bold mb-4 flex items-center gap-2">
                          <Activity size={20} aria-hidden="true" /> Treatment Options
                        </h4>
                        <ul className="space-y-2">
                          {disorder.treatment.map((t, i) => (
                            <li key={i} className="flex items-start gap-2 text-green-700 text-sm">
                              <span className="block w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" aria-hidden="true"></span>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 bg-indigo-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Think you might need help?</h3>
          <p className="text-indigo-200 mb-6">These descriptions are for informational purposes only. Only a professional can provide a diagnosis.</p>
          <a href="#/counseling" className="inline-block bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-4 focus:ring-indigo-300">
            Speak to a Professional
          </a>
        </div>
      </div>
    </div>
  );
};