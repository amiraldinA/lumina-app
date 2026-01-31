import React, { useState } from 'react';
import { COUNSELORS } from '../constants';
import { Calendar, Clock, CheckCircle, User, ArrowLeft } from 'lucide-react';
import { Counselor } from '../types';

export const Counseling: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setStep(3); // Success step
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 animate-fadeIn">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Schedule an Appointment</h1>
          <p className="text-slate-600">Connect with a licensed professional from the comfort of your home.</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12" aria-label="Progress">
          <ol className="flex items-center">
            <li className="flex items-center relative">
              <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${step >= 1 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}`} aria-current={step === 1 ? "step" : undefined}>1</span>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-500 w-20 text-center">Specialist</span>
            </li>
            <li className={`w-20 h-1 transition-colors duration-300 ${step >= 2 ? 'bg-brand-600' : 'bg-slate-200'}`} aria-hidden="true"></li>
            <li className="flex items-center relative">
              <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${step >= 2 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}`} aria-current={step === 2 ? "step" : undefined}>2</span>
               <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-500 w-20 text-center">Details</span>
            </li>
            <li className={`w-20 h-1 transition-colors duration-300 ${step >= 3 ? 'bg-brand-600' : 'bg-slate-200'}`} aria-hidden="true"></li>
            <li className="flex items-center relative">
              <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${step >= 3 ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-500'}`} aria-current={step === 3 ? "step" : undefined}>3</span>
               <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-500 w-20 text-center">Confirmed</span>
            </li>
          </ol>
        </div>

        {/* Step 1: Choose Counselor */}
        {step === 1 && (
          <div className="space-y-6 animate-slideUp" role="region" aria-label="Choose a Specialist">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Choose a Specialist</h2>
            <div className="grid gap-6">
              {COUNSELORS.map((c) => (
                <button 
                  key={c.id}
                  onClick={() => setSelectedCounselor(c)}
                  aria-pressed={selectedCounselor?.id === c.id}
                  className={`w-full text-left bg-white p-6 rounded-xl border-2 cursor-pointer transition-all flex flex-col sm:flex-row gap-6 items-center sm:items-start focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    selectedCounselor?.id === c.id ? 'border-brand-500 shadow-lg ring-1 ring-brand-500' : 'border-transparent hover:border-slate-200 shadow-sm'
                  }`}
                >
                  <img src={c.imageUrl} alt="" className="w-24 h-24 rounded-full object-cover ring-2 ring-slate-100" />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-slate-900">{c.name}</h3>
                    <p className="text-brand-700 font-medium mb-3">{c.specialty}</p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {c.availableTimes.map((time) => (
                         <span
                           key={time}
                           onClick={(e) => {
                             e.stopPropagation();
                             setSelectedCounselor(c);
                             setSelectedTime(time);
                           }}
                           role="button"
                           tabIndex={0}
                           onKeyDown={(e) => {
                             if(e.key === 'Enter' || e.key === ' ') {
                               e.stopPropagation();
                               setSelectedCounselor(c);
                               setSelectedTime(time);
                             }
                           }}
                           className={`text-sm px-3 py-1 rounded-full border transition-colors cursor-pointer ${
                             selectedCounselor?.id === c.id && selectedTime === time 
                               ? 'bg-brand-600 text-white border-brand-600 shadow-sm' 
                               : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-brand-300 hover:bg-white'
                           }`}
                         >
                           {time}
                         </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <button 
                disabled={!selectedCounselor || !selectedTime}
                onClick={() => setStep(2)}
                className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 flex items-center gap-2"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Details Form */}
        {step === 2 && (
          <form onSubmit={handleBook} className="bg-white p-8 rounded-2xl shadow-sm animate-slideUp" aria-label="Appointment Details">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Your Details</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-8 flex items-start gap-3 border border-blue-100">
              <User className="text-blue-600 mt-1" size={20} aria-hidden="true" />
              <div>
                <p className="font-bold text-slate-800">Booking with {selectedCounselor?.name}</p>
                <p className="text-sm text-slate-600 flex items-center gap-1">
                    <Clock size={14}/> {selectedTime}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input 
                  id="name"
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  id="email"
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-1">Reason for visit (Optional)</label>
                <textarea 
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow"
                  placeholder="Briefly describe what you'd like to discuss..."
                />
              </div>
            </div>

            <div className="flex justify-between mt-8 items-center">
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="text-slate-500 hover:text-slate-800 font-medium focus:outline-none focus:underline flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Back
              </button>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-75 disabled:cursor-wait flex items-center gap-2"
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success */}
        {step === 3 && (
          <div className="bg-white p-12 rounded-2xl shadow-sm text-center animate-fadeIn" role="alert">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 shadow-inner">
              <CheckCircle size={40} aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Appointment Confirmed!</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              We have sent a confirmation email to <span className="font-semibold text-slate-900">{formData.email}</span>. 
              <br/>Please arrive 5 minutes early for your session with {selectedCounselor?.name}.
            </p>
            <button 
              onClick={() => {
                setStep(1);
                setSelectedCounselor(null);
                setSelectedTime(null);
                setFormData({name: '', email: '', notes: ''});
              }}
              className="bg-brand-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 shadow-lg shadow-brand-200"
            >
              Book Another
            </button>
          </div>
        )}

      </div>
    </div>
  );
};