import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle, Mail, Clock, HelpCircle } from 'lucide-react';
import { COMPANY_NAME, BRAND_NAME, PHONE_NUMBER, WHATS_APP_NUMBER, COMPANY_ADDRESS, OWNER_NAME } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contactNum: '',
    origin: 'Batala',
    destination: 'Kandla Port (Gujarat)',
    weight: '15',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate premade whatsapp link for booking
  const getWhatsAppLink = (isForm = false) => {
    let text = "";
    if (isForm) {
      text = `Hello Saran Golden Transport, I want to book a truck:
*Name:* ${formData.name}
*Phone:* ${formData.contactNum}
*Route:* ${formData.origin} to ${formData.destination}
*Weight:* ${formData.weight} Tons
*Notes:* ${formData.notes || 'None'}`;
    } else {
      text = `Hello Saran Golden Transport (Owner Diwanshu Kohli), I got your contact from your website and want to ask about booking a truck.`;
    }
    
    return `https://wa.me/${WHATS_APP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-12">
      {/* Intro */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Contact Us</h2>
        <p className="text-slate-400 text-sm">Call us or send a message on WhatsApp to book trucks and get quick transport prices.</p>
      </div>

      {/* Main Grid: Direct Contacts + Address & Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Cards and Direct Quick Call Actions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-brand-card border border-white/5 rounded-2xl p-6 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Quick Contact</h3>
            
            <div className="space-y-3.5">
              {/* Phone Direct */}
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-bg border border-white/5 hover:border-brand-gold/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-[#FFD700] group-hover:text-black transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Call Us Directly</span>
                  <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">+91 95925-29758</span>
                </div>
              </a>

              {/* WhatsApp Business */}
              <a 
                href={getWhatsAppLink(false)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-bg border border-white/5 hover:border-emerald-500/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-450 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-mono tracking-wider block">Chat on WhatsApp</span>
                  <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">Start WhatsApp Chat</span>
                </div>
              </a>
            </div>
          </div>

          {/* Physical Address Block */}
          <div className="bg-brand-card border border-white/5 rounded-2xl p-6 space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <MapPin className="w-4.5 h-4.5 text-brand-gold" />
              <span>Our Shop Address in Batala</span>
            </h3>

            <div className="space-y-3 font-medium text-xs sm:text-sm text-slate-300">
              <p className="bg-brand-bg px-4 py-3 border border-white/5 rounded-xl leading-relaxed">
                <span className="font-bold text-white block text-sm mb-1">{COMPANY_NAME}</span>
                {COMPANY_ADDRESS.shop}, {COMPANY_ADDRESS.market}, <br />
                {COMPANY_ADDRESS.subOffice}, {COMPANY_ADDRESS.road}, <br /> 
                {COMPANY_ADDRESS.city} ({COMPANY_ADDRESS.state}) - {COMPANY_ADDRESS.pincode}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-brand-bg border border-white/5 rounded-xl space-y-1">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase block">Working Hours</span>
                  <span className="text-[11px] font-bold text-slate-200 font-sans">Open 24 Hours</span>
                </div>

                <div className="p-3 bg-[#13161c] border border-white/5 rounded-xl space-y-1">
                  <HelpCircle className="w-4 h-4 text-slate-450" />
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider uppercase block">Transport Network</span>
                  <span className="text-[11px] font-bold text-slate-200 font-sans">All India Delivery</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Smart Interactive Lead Generation Booking Form */}
        <div className="lg:col-span-7">
          <div className="bg-brand-card border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-white/5 pb-4">
              <h3 className="text-lg font-bold text-white">Booking Request Form</h3>
              <p className="text-slate-400 text-xs mt-0.5">Fill in this form to send a booking request directly to owner Diwanshu Kohli.</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Your Name / Factory Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Batala Iron Factory" 
                        className="w-full bg-brand-bg border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Your Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="e.g. 9592529758" 
                        className="w-full bg-brand-bg border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold"
                        value={formData.contactNum}
                        onChange={(e) => setFormData({...formData, contactNum: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">From (Punjab)</label>
                      <select 
                        className="w-full bg-brand-bg border border-white/5 rounded-xl px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-brand-gold"
                        value={formData.origin}
                        onChange={(e) => setFormData({...formData, origin: e.target.value})}
                      >
                        <option value="Batala">Batala Hub</option>
                        <option value="Amritsar">Amritsar Gate</option>
                        <option value="Gurdaspur">Gurdaspur Block</option>
                        <option value="Pathankot">Pathankot Station</option>
                        <option value="Qadian (Akadiyan)">Qadian Depot</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">To (Destination)</label>
                      <select 
                        className="w-full bg-brand-bg border border-white/5 rounded-xl px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-brand-gold"
                        value={formData.destination}
                        onChange={(e) => setFormData({...formData, destination: e.target.value})}
                      >
                        <option value="Kandla Port (Gujarat)">Kandla Port (Gujarat)</option>
                        <option value="Mundra Port (Gujarat)">Mundra Port (Gujarat)</option>
                        <option value="Mumbai FTL Terminal">Mumbai Terminal</option>
                        <option value="Delhi NCR Hub">Delhi NCR Zone</option>
                        <option value="Chennai Terminal">Chennai Port</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Weight (Tons)</label>
                      <input 
                        type="number" 
                        min="10" 
                        required
                        placeholder="Min 10"
                        className="w-full bg-brand-bg border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold"
                        value={formData.weight}
                        onChange={(e) => setFormData({...formData, weight: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Special Requests / Notes</label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. Need waterproof sheet to cover iron pipes"
                      className="w-full bg-brand-bg border border-white/5 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-brand-gold resize-none"
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>

                  <div className="pt-2 font-sans">
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#FFD700] hover:bg-[#ffe13d] text-black font-bold rounded-xl shadow-lg shadow-brand-gold/10 transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Create WhatsApp Message</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="w-16 h-16 bg-brand-gold/10 border border-brand-gold/20 text-[#FFD700] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-white">Booking Details Created!</h4>
                    <p className="text-slate-400 text-xs max-w-sm mx-auto">Your booking details are ready. Click the button below to send them to Diwanshu Kohli on WhatsApp!</p>
                  </div>

                  <div className="p-4 bg-brand-bg border border-white/5 rounded-xl max-w-sm mx-auto text-left font-mono text-[10px] text-slate-350 space-y-1">
                    <p className="text-brand-gold font-bold border-b border-white/5 pb-1 mb-1 font-sans">MESSAGE PREVIEW:</p>
                    <p><b>Name:</b> {formData.name}</p>
                    <p><b>Weight:</b> {formData.weight} Tons</p>
                    <p><b>Route:</b> {formData.origin} ➔ {formData.destination}</p>
                    {formData.notes && <p><b>Notes:</b> {formData.notes}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 font-sans">
                    <a
                      href={getWhatsAppLink(true)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Message on WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 bg-white/5 hover:bg-white/10 text-slate-300 font-medium rounded-xl text-xs cursor-pointer"
                    >
                      Go Back
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Styled Interactive Punjab Direct Lines map overlay banner */}
      <div className="bg-brand-card border border-white/5 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1 md:max-w-md text-left">
          <h4 className="font-bold text-white text-base">Are you a Truck Driver or Owner?</h4>
          <p className="text-xs text-slate-400 leading-relaxed">If you want regular heavy loads of 10 Tons and above starting from Batala, Amritsar, or Mehta, calling Diwanshu Kohli directly is best.</p>
        </div>
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="px-6 py-3 w-full md:w-auto text-center bg-brand-gold/10 border border-brand-gold/20 text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all rounded-xl font-bold text-xs"
        >
          Call Owner Diwanshu
        </a>
      </div>

    </div>
  );
}
