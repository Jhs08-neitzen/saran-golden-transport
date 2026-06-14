import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldAlert, Navigation, Cpu, Users, Building, Map } from 'lucide-react';
import { COMPANY_NAME, BRAND_NAME, OWNER_NAME, EXPERIENCE_YEARS, STATS, SAMPLE_ROUTES } from '../data';

export default function AboutSection() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Visual Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-[#FFD700] text-xs font-semibold uppercase tracking-wider font-mono">
            TRUSTED SINCE 2014
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            12 Years of Trusted Transport Service
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We started Saran Golden Transport with a simple goal: to safely move heavy cargo from the factories in Batala (Punjab) to major seaport gates in Gujarat, like Kandla Port.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Led by <b>{OWNER_NAME}</b>, we have grown to become a premium partner for factory owners across Punjab who need high-capacity trucks, commission brokering, and direct safe routes anywhere in India.
          </p>
        </div>

        {/* Dynamic Quote Box / Owner Card */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-brand-card border border-white/5 space-y-4 shadow-2xl overflow-hidden group">
          <div className="absolute -right-16 -bottom-16 w-44 h-44 bg-brand-gold/5 rounded-full blur-2xl group-hover:bg-brand-gold/10 transition-all duration-500" />
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFD700] text-black font-extrabold flex items-center justify-center text-lg shadow-md shadow-brand-gold/10">
              DK
            </div>
            <div>
              <p className="text-xs text-[#FFD700] font-mono uppercase tracking-wider font-semibold">Managing Director</p>
              <h3 className="text-base font-bold text-white">{OWNER_NAME}</h3>
            </div>
          </div>

          <blockquote className="text-slate-300 italic text-xs sm:text-sm leading-relaxed border-l-2 border-brand-gold/40 pl-4 py-1">
            "We believe transport is all about trust. By keeping a minimum limit of 10 Tons, we can focus on giving you direct, secure, and fast truck deliveries. We treat your cargo like our own and make sure it reaches its destination safely."
          </blockquote>

          <div className="pt-2 text-[10px] text-slate-500 font-mono text-right uppercase tracking-wider">
            — Diwanshu Kohli
          </div>
        </div>
      </div>

      {/* Grid containing 4 stats from /src/data.ts */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-brand-card border border-white/5 p-5 rounded-2xl space-y-2 text-center"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FFD700] font-mono">
              {stat.value}
            </div>
            <div className="text-xs font-bold text-slate-200">
              {stat.label}
            </div>
            <div className="text-[10px] text-slate-400">
              {stat.desc}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lane Map View / Primary Routes Tracker */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-white/5 pb-4">
          <Map className="w-5 h-5 text-[#FFD700]" />
          <div>
            <h3 className="text-lg font-bold text-white">Our Core Transport Routes</h3>
            <p className="text-slate-400 text-xs mt-0.5">Here are some of our most popular direct truck routes from Punjab</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SAMPLE_ROUTES.map((route, i) => (
            <div 
              key={route.id}
              className="p-5 rounded-2xl bg-brand-card border border-white/5 flex flex-col justify-between space-y-4 hover:border-brand-gold/25 transition-all group"
            >
              <div className="flex justify-between items-start gap-2">
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                  route.status === 'High Demand' 
                    ? 'bg-brand-gold/10 text-[#FFD700] border border-brand-gold/20'
                    : route.status === 'Express'
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {route.status}
                </span>
                <span className="text-[10px] font-mono text-slate-500">{route.duration}</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-300">{route.from}</span>
                  <span className="text-[#FFD700] text-xs font-bold">➔</span>
                  <span className="text-xs font-bold text-white group-hover:text-[#FFD700] transition-colors">{route.to}</span>
                </div>
                <div className="text-[10px] text-slate-500 flex justify-between">
                  <span>Distance: {route.distance}</span>
                </div>
              </div>

              {/* Major stop points */}
              <div className="border-t border-white/5 pt-2">
                <p className="text-[9px] text-slate-500 uppercase font-mono tracking-wider mb-1">Cities on the way</p>
                <div className="flex flex-wrap gap-1">
                  {route.majorHubs.map(hub => (
                    <span key={hub} className="text-[9px] bg-brand-bg text-slate-300 border border-white/5 px-1.5 py-0.5 rounded">
                      {hub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
