import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Truck, Handshake, ShieldCheck, CheckCircle2, ChevronRight, Gauge, AlertCircle } from 'lucide-react';
import { SERVICES, BRAND_NAME } from '../data';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState("s1");
  const [testWeight, setTestWeight] = useState(15); // Default to a valid 15 Ton cargo

  const currentService = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  const getIcon = (name: string) => {
    switch(name) {
      case 'Truck': return <Truck className="w-6 h-6 text-brand-gold" />;
      case 'Handshake': return <Handshake className="w-6 h-6 text-[#FFD700]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Truck className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <div className="space-y-12">
      {/* Intro section */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Our Services</h2>
        <p className="text-slate-400 text-sm">Simple and honest truck booking services from Batala to anywhere in India.</p>
      </div>

      {/* Main interactive services selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left selector menu */}
        <div className="lg:col-span-5 space-y-3">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedService(s.id)}
              className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 cursor-pointer hover:bg-[#1a1e26] ${
                selectedService === s.id
                  ? 'bg-brand-card border-brand-gold/40 shadow-xl shadow-brand-gold/5'
                  : 'bg-brand-card/50 border-white/5'
              }`}
            >
              <div className={`p-3 rounded-xl ${selectedService === s.id ? 'bg-brand-gold/15' : 'bg-brand-bg'}`}>
                {getIcon(s.iconName)}
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-100">{s.title}</span>
                  <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${selectedService === s.id ? 'translate-x-1 text-brand-gold' : ''}`} />
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{s.description}</p>
                <span className="inline-block text-[10px] text-brand-gold font-mono font-semibold pt-1">{s.loadRange}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right showcase detail pane */}
        <div className="lg:col-span-7 bg-brand-card border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-5">
            <div className="space-y-1.5 animate-fade-in">
              <span className="text-[10px] bg-brand-bg text-slate-450 border border-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono font-bold">Service Details</span>
              <h3 className="text-xl font-bold text-white">{currentService.title}</h3>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 text-[#FFD700] flex items-center justify-center font-bold">
              ★
            </div>
          </div>

          <p className="text-slate-350 text-sm leading-relaxed">{currentService.description}</p>

          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-slate-500">Key Features Included:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentService.features.map((feature) => (
                <div key={feature} className="flex gap-2.5 items-start bg-brand-bg p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-medium leading-normal">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-bg border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider block">Direct Agent</span>
              <span className="text-xs text-slate-200 font-semibold">{BRAND_NAME}</span>
            </div>
            <div>
              <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider block">Customer Rating</span>
              <span className="text-xs text-[#FFD700] font-bold">★★★★★ Highly Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive cargo scale check component */}
      <div className="bg-brand-card p-6 sm:p-8 rounded-3xl border border-white/5 space-y-6">
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Gauge className="w-5 h-5 text-brand-gold" />
            <span>Check Your Load Weight</span>
          </h3>
          <p className="text-slate-400 text-xs">
            We only carry heavy loads of 10 Tons and above. Drag the slider to see if your goods are heavy enough for our trucks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Slider input */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-500">Light Loads</span>
              <span className="text-slate-500">Heavy Loads</span>
            </div>

            <div className="relative">
              <input 
                type="range" 
                min="2" 
                max="60" 
                value={testWeight} 
                onChange={(e) => setTestWeight(Number(e.target.value))}
                className="w-full h-2.5 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-[#FFD700]"
              />
              <div className="flex justify-between text-xs mt-2 font-mono text-slate-550">
                <span>2 Tons</span>
                <span>10 Tons (Limit)</span>
                <span>30 Tons</span>
                <span>60 Tons</span>
              </div>
            </div>
          </div>

          {/* Indicator panel */}
          <div className="md:col-span-4">
            <div className={`p-5 rounded-2xl border flex flex-col items-center justify-center text-center transition-all ${
              testWeight >= 10 
                ? 'bg-[#FFD700]/5 border-brand-gold/30 text-[#FFD700] shadow-[0_0_20px_var(--color-brand-glow)]' 
                : 'bg-rose-950/20 border-rose-500/20 text-rose-455'
            }`}>
              <div className="text-3xl font-extrabold mb-1 font-mono tracking-tight">
                {testWeight} <span className="text-xs">Tons</span>
              </div>

              {testWeight >= 10 ? (
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-gold flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700]" /> Ready to Go!
                  </span>
                  <p className="text-[11px] text-slate-300 leading-tight">Your load is heavy enough! We can easily book a truck for you.</p>
                </div>
              ) : (
                <div className="space-y-1 text-rose-400">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Too Light
                  </span>
                  <p className="text-[11px] text-slate-400 leading-tight">We need at least 10 Tons of weight to send a truck.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
