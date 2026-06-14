import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, Phone, MessageSquare, MapPin, Info, Navigation, 
  Sparkles, Clock, User, CheckCircle2, ChevronRight, Menu, X 
} from 'lucide-react';

import { 
  COMPANY_NAME, BRAND_NAME, OWNER_NAME, PHONE_NUMBER, 
  WHATS_APP_NUMBER, EXPERIENCE_YEARS, COMPANY_ADDRESS 
} from './data';


import HomeSection from './components/HomeSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import RouteEstimator from './components/RouteEstimator';

// Absolute asset path for the generated hero image
const HERO_IMAGE_URL = "/src/assets/images/saran_golden_hero_1780727754852.png";

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'about' | 'contact' | 'estimator'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Nav height tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick whatsapp linker
  const directWhatsAppLink = `https://wa.me/${WHATS_APP_NUMBER}?text=${encodeURIComponent(
    `Hello Saran Golden Transport, I saw your website and want to ask about booking a truck.`
  )}`;

  const renderSection = () => {
    switch (activeTab) {
      case 'home':
        return <HomeSection onNavigate={(tab) => setActiveTab(tab)} heroImgUrl={HERO_IMAGE_URL} />;
      case 'services':
        return <ServicesSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      case 'estimator':
        return <RouteEstimator initialOrigin="Batala" />;
      default:
        return <HomeSection onNavigate={(tab) => setActiveTab(tab)} heroImgUrl={HERO_IMAGE_URL} />;
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'estimator', label: 'Route Planner' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  return (
    <div className="min-h-screen bg-brand-bg text-slate-300 flex flex-col font-sans relative antialiased selection:bg-brand-gold selection:text-black">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.06),transparent_65%)] blur-2xl pointer-events-none z-0" />

      {/* STICKY MAIN HEADER */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-bg/95 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
          : 'bg-transparent border-b border-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo & Dual brand titles */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-md shadow-brand-gold/10">
              <Truck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xs sm:text-xs font-bold tracking-widest text-white uppercase leading-none font-mono">
                SARAN GOLDEN
              </div>
              <div className="text-[9px] text-[#FFD700] uppercase tracking-widest font-bold leading-none mt-1">
                {BRAND_NAME}
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-brand-card/90 p-1 rounded-xl border border-white/5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-[#FFD700] text-black font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Direct Callback Hotline CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="px-4 py-2 rounded-xl bg-brand-card hover:bg-[#1f232c] hover:border-brand-gold/30 transition-all text-xs font-mono font-bold text-slate-200 border border-white/5 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>+91 95925-29758</span>
            </a>
          </div>

          {/* Mobile responsive toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-brand-card text-slate-200 hover:text-white border border-white/5"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 bg-brand-bg/95 backdrop-blur-md border-b border-white/5 z-40 p-4 md:hidden space-y-3.5 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-xs rounded-xl font-bold transition-all ${
                    activeTab === item.id
                      ? 'bg-[#FFD700] text-black'
                      : 'text-slate-300 hover:bg-brand-card'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="border-t border-white/5 pt-3 flex flex-col gap-2">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="w-full text-center py-2.5 rounded-xl bg-brand-card text-slate-200 font-mono text-xs font-bold border border-white/5 block"
              >
                Call: +91 95925-29758
              </a>
              <a 
                href={directWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold block"
              >
                WhatsApp Diwanshu Kohli
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PERSISTENT FLOATING ACTIONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="w-12 h-12 rounded-full bg-brand-bg border border-white/10 hover:border-brand-gold/40 text-brand-gold flex items-center justify-center shadow-2xl hover:scale-105 transition-all"
          title="Call Saran Golden Transport"
        >
          <Phone className="w-5 h-5 text-[#FFD700]" />
        </a>

        <a 
          href={directWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 border border-[#22c55e]/20 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all"
          title="WhatsApp Saran Golden"
        >
          <MessageSquare className="w-5 h-5 fill-white/10" />
        </a>
      </div>

      {/* CORE WRAPPER BODY CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-16 space-y-12 z-10 relative">
        


        {/* Dynamic section rendering with framer-motion page transition */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>

      </main>

      {/* GLOBAL FOOTER */}
      <footer className="bg-brand-card border-t border-white/5 relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs text-slate-400">
          
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FFD700] flex items-center justify-center text-black font-bold">
                SG
              </div>
              <div>
                <span className="font-extrabold text-white text-sm block leading-none">{COMPANY_NAME}</span>
                <span className="text-[10px] text-[#FFD700] font-mono tracking-widest block mt-0.5">{BRAND_NAME}</span>
              </div>
            </div>
            <p className="leading-relaxed text-slate-400 pr-4">
              We have over 12 years of experience and cover more than 50 routes across India. We carry heavy loads from Batala, Gurdaspur, and Amritsar to any part of India safely.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Registered Address</h4>
            <div className="space-y-1.5 leading-relaxed text-slate-400">
              <p>
                <b>Saran Golden Transport Company</b><br />
                {COMPANY_ADDRESS.shop}, {COMPANY_ADDRESS.market}, {COMPANY_ADDRESS.subOffice}, {COMPANY_ADDRESS.road}, {COMPANY_ADDRESS.city} - {COMPANY_ADDRESS.pincode}, Gurdaspur, Punjab
              </p>
              <p className="text-slate-500 text-[11px]">
                Landmark: Near Batala-Dera Road Junction
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Proprietorship Contacts</h4>
            <div className="space-y-1.5 leading-relaxed text-slate-400">
              <p>
                <b>Managing Director:</b> {OWNER_NAME}<br />
                <b>Phone:</b> +91 95925-29758<br />
                <b>Active support:</b> 24 hours open
              </p>
              
              <div className="pt-2 text-[10px] text-brand-gold font-mono">
                Approved transport and truck booking agency in Punjab.
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </div>
          <div>
            Managed under owner Diwanshu Kohli guidelines.
          </div>
        </div>
      </footer>

    </div>
  );
}
