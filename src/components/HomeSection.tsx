import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Navigation, Award, CornerDownRight, User, ShieldAlert,
  ArrowRight, ShieldCheck, Heart, Sparkles, Building, Globe, CheckCircle2, Phone, MessageSquare
} from 'lucide-react';
import { COMPANY_NAME, BRAND_NAME, OWNER_NAME, PHONE_NUMBER, WHATS_APP_NUMBER } from '../data';

interface HomeSectionProps {
  onNavigate: (tab: 'services' | 'about' | 'contact' | 'estimator') => void;
  heroImgUrl: string;
}

// Image URLs generated specifically for this layout
const HERO_IMG = "/src/assets/images/golden_transport_hero_1780737460022.png";
const YARD_IMG = "/src/assets/images/truck_warehouse_yard_1780737477101.png";
const DRIVER_IMG = "/src/assets/images/professional_driver_1780737490270.png";

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  const directWhatsAppLink = `https://wa.me/${WHATS_APP_NUMBER}?text=${encodeURIComponent(
    `Hello Saran Golden Transport, I saw your website and want to ask about booking a truck.`
  )}`;

  return (
    <div className="space-y-24">
      
      {/* PAGE 1: HERO BANNER (Sunset truck driving on highway layout) */}
      <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center bg-brand-bg border border-white/5 shadow-2xl">
        <div className="absolute inset-0 z-0 select-none">
          <img 
            src={HERO_IMG}
            alt="Golden Transport Company Heavy Cargo Truck"
            className="w-full h-full object-cover opacity-35 filter brightness-95"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-bg to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl px-6 sm:px-12 py-16 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-semibold uppercase tracking-wider font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Batala – Kandla Roadline</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Golden Transport Company
            </h1>
            <p className="text-lg sm:text-xl font-sans tracking-wide text-amber-100 font-medium">
              Connecting Punjab to All of India
            </p>
          </div>

          <p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-xl">
            Reliable, professional transport services from Batala, Amritsar, Gurdaspur, Pathankot & surrounding areas — delivering across India with a minimum load of 10 tons. Your cargo, our commitment.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 font-sans">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 bg-[#FFD700] hover:bg-[#ffe13d] text-black font-bold rounded-xl shadow-lg shadow-brand-gold/10 transition-all text-xs flex items-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <Navigation className="w-4 h-4" />
              <span>Get a Quote</span>
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all text-xs flex items-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <span>Our Services</span>
            </button>
          </div>
        </div>
      </div>

      {/* PAGE 2: WHO WE ARE (Layout with Depot Image + Profile Details) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Modern artistic truck yard illustration */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
          <img 
            src={YARD_IMG} 
            alt="Golden Transport Company Depot" 
            className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
        </div>

        {/* Right Side: Description and credentials cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold font-mono">Company Profile</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">Who We Are</h2>
          </div>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Golden Transport Company is a trusted transport and mediation business based in Batala, Punjab. Owned by <strong className="text-white font-semibold">Diwanshu Kohli</strong>, we specialize in connecting local businesses and contractors to national markets — moving goods reliably from Punjab to every corner of India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-brand-card border border-white/5 p-5 rounded-2xl space-y-1.5">
              <div className="flex items-center gap-2 text-brand-gold">
                <Building className="w-4.5 h-4.5" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Established</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Deep roots in Batala's local transport, factory, and trading community.</p>
            </div>

            <div className="bg-brand-card border border-white/5 p-5 rounded-2xl space-y-1.5">
              <div className="flex items-center gap-2 text-[#FFD700]">
                <ShieldAlert className="w-4.5 h-4.5" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Fleet Ready</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Dedicated vehicles with a minimum 10-ton load capacity for commercial consignments.</p>
            </div>

            <div className="bg-brand-card border border-white/5 p-5 rounded-2xl sm:col-span-2 space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400">
                <Globe className="w-4.5 h-4.5" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Pan-India Reach</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">Serving all major commercial towns and industrial highway corridors, with extensive routes extending from Punjab directly to Gujarat ports and beyond.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 3: OUR SERVICES OVERVIEW */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold font-mono">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">Transport Solutions</h2>
          <p className="text-slate-400 text-xs sm:text-sm">We offer a complete range of transport solutions — whether you're a business owner, contractor, or commission agent looking to move goods across India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-card border border-white/5 p-6 rounded-2xl space-y-3.5">
            <span className="text-xs font-bold uppercase text-brand-gold font-mono block">01 / Full Truck Load</span>
            <h3 className="text-base font-bold text-slate-100 font-sans">Full Truck Load (FTL)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Minimum 10-ton loads transported safely across India with professional handling and timely delivery.</p>
          </div>

          <div className="bg-brand-card border border-white/5 p-6 rounded-2xl space-y-3.5">
            <span className="text-xs font-bold uppercase text-brand-gold font-mono block">02 / Partner Services</span>
            <h3 className="text-base font-bold text-slate-100 font-sans">Transporter & Contractor Services</h3>
            <p className="text-xs text-slate-400 leading-relaxed">We partner with contractors and businesses to manage logistics end-to-end, from pickup to final delivery.</p>
          </div>

          <div className="bg-brand-card border border-white/5 p-6 rounded-2xl space-y-3.5">
            <span className="text-xs font-bold uppercase text-brand-gold font-mono block">03 / Mediator Network</span>
            <h3 className="text-base font-bold text-slate-100 font-sans">Commission Agent Network</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Acting as honest mediators, we connect shippers with the right truck owners for efficient, cost-effective movement.</p>
          </div>

          <div className="bg-brand-card border border-white/5 p-6 rounded-2xl space-y-3.5">
            <span className="text-xs font-bold uppercase text-brand-gold font-mono block">04 / Dedicated Route</span>
            <h3 className="text-base font-bold text-slate-100 font-sans">Batala – Kandla Roadline</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Specialized route expertise and truck availability on the Batala–Kandla corridor and all major national highways.</p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button 
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1 text-xs text-brand-gold hover:underline font-mono"
          >
            <span>Learn more about services</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* PAGE 4: SERVICE AREAS (Origins List and National Destinations) */}
      <div className="bg-brand-card hover:bg-[#151922] border border-white/5 rounded-3xl p-6 sm:p-10 space-y-8 transition-colors">
        <div className="border-b border-white/5 pb-4 space-y-1">
          <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold font-mono">Geographic Reach</span>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">Service Areas</h2>
          <p className="text-slate-400 text-xs sm:text-sm">We operate from key cities and towns across Punjab, connecting local businesses to national markets. Our network covers all major routes to every state in India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Origin Cities list */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#FFD700] font-mono flex items-center gap-1.5">
              <span>📍 Origin Cities in Punjab</span>
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Batala (Headquarters)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Amritsar</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Mehta</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Gurdaspur</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Pathankot</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Dera Baba Nanak</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Kalanaur</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Harchowal</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold" /> Akadian</li>
            </ul>
          </div>

          {/* Destination & Minimum Load Alert info card */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#FFD700] font-mono flex items-center gap-1.5">
              <span>🇮🇳 Destination Delivery Network</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p><strong className="text-white">All Over India：</strong> We deliver to every state and union territory, including Gujarat (Kandla/Mundra), Maharashtra, Delhi NCR, Rajasthan, Karnataka, Tamil Nadu, Uttar Pradesh, and beyond.</p>
              
              <div className="bg-brand-bg/80 border border-[#FFD700]/15 p-4 rounded-xl flex items-start gap-3">
                <ShieldAlert className="w-4.5 h-4.5 text-brand-gold mt-0.5 shrink-0" />
                <p className="text-xs text-slate-450 leading-snug">
                  <strong className="text-white block mb-0.5">Commercial Limit Check</strong>
                  Minimum commercial dispatch load: <span className="text-brand-gold font-bold">10 Tons</span>. Contact us directly to consult pricing for specialized trailer configurations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 5: WHY CHOOSE US (Layout with List and Driver Image) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left list of benefits */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold font-mono">Value Proposition</span>
            <h2 className="text-3xl font-serif font-bold text-white tracking-tight">Why Choose Golden Transport?</h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-2 border-[#FFD700] pl-4 space-y-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Local Expertise, National Reach</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Deep knowledge of Punjab's transport landscape combined with pan-India delivery networks and direct highway corridor permits.</p>
            </div>

            <div className="border-l-2 border-[#FFD700]/50 pl-4 space-y-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Trusted Mediation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">We act as honest brokers between shippers and transporters, ensuring fair deals, transparent booking rates, and smooth operations.</p>
            </div>

            <div className="border-l-2 border-[#FFD700]/50 pl-4 space-y-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Reliable & Accountable</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Owned and managed personally by Diwanshu Kohli, a name trusted in Batala's industrial community for highly consistent and professional service.</p>
            </div>

            <div className="border-l-2 border-[#FFD700]/50 pl-4 space-y-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Scalable for Growth</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Whether you are moving a single 10-ton machine or managing repeated 100-ton FTL cargo bookings, our transport networks scale smoothly with your business goals.</p>
            </div>
          </div>
        </div>

        {/* Right side: Modern driver character art */}
        <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
          <img 
            src={DRIVER_IMG} 
            alt="Golden Transport Professional Team" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* PAGE 6: HOW IT WORKS (Pinwheel list logic simplified into clean step cards) */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold font-mono">How It Works</span>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">Our 4-Step Process</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Getting your goods transported with Golden Transport is simple and hassle-free. From your first call to final destination, our team handles all logistics.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-brand-card border border-white/5 p-5 rounded-2xl text-center space-y-3 flex flex-col justify-between h-44">
            <div className="w-10 h-10 rounded-full bg-brand-bg text-brand-gold flex items-center justify-center font-mono font-bold text-xs mx-auto border border-white/5">1</div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Contact Us</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-1">Dial owner Diwanshu Kohli directly or send a route enquiry via WhatsApp.</p>
            </div>
          </div>

          <div className="bg-brand-card border border-white/5 p-5 rounded-2xl text-center space-y-3 flex flex-col justify-between h-44">
            <div className="w-10 h-10 rounded-full bg-brand-bg text-brand-gold flex items-center justify-center font-mono font-bold text-xs mx-auto border border-white/5">2</div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Get a Quote</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-1">Receive crystal clear, competitive heavy cargo transit quotes instantly.</p>
            </div>
          </div>

          <div className="bg-brand-card border border-white/5 p-5 rounded-2xl text-center space-y-3 flex flex-col justify-between h-44">
            <div className="w-10 h-10 rounded-full bg-brand-bg text-brand-gold flex items-center justify-center font-mono font-bold text-xs mx-auto border border-white/5">3</div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Pickup & Load</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-1">Our certified container truck arrives at your Punjab loading hub to load safely.</p>
            </div>
          </div>

          <div className="bg-brand-card border border-white/5 p-5 rounded-2xl text-center space-y-3 flex flex-col justify-between h-44">
            <div className="w-10 h-10 rounded-full bg-brand-bg text-brand-gold flex items-center justify-center font-mono font-bold text-xs mx-auto border border-white/5">4</div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Delivery</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed mt-1">Your cargo moves across national highways smoothly to arrive secure and on time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 7: NETWORK AT A GLANCE */}
      <div className="bg-brand-card border border-white/5 p-8 rounded-3xl text-center space-y-8">
        <div className="max-w-xl mx-auto space-y-1">
          <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold font-mono">Statistical Dashboard</span>
          <h2 className="text-3xl font-serif font-bold text-white tracking-tight">Our Network at a Glance</h2>
          <p className="text-slate-450 text-xs">Our growing network of transporters, contractors, and commission agents ensures your cargo always moves — on time, every time.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-extrabold text-white block">9+</span>
            <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider font-mono block">Origin Cities</span>
            <span className="text-[10px] text-slate-500 font-sans">Across Punjab region</span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-extrabold text-white block">10T</span>
            <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider font-mono block">Min Load Limit</span>
            <span className="text-[10px] text-slate-500 font-sans">Minimum shipment capacity</span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-extrabold text-white block">29</span>
            <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider font-mono block">States Covered</span>
            <span className="text-[10px] text-slate-500 font-sans">All India delivery network</span>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-extrabold text-white block">1</span>
            <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider font-mono block">Trusted Owner</span>
            <span className="text-[10px] text-slate-500 font-sans">Diwanshu Kohli, Batala</span>
          </div>
        </div>
      </div>

      {/* PAGE 8: GO ONLINE — GROW YOUR BUSINESS (Direct Answer to publication query) */}
      <div className="space-y-6">
        <div className="space-y-1 text-left">
          <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold font-mono">Digital Strategy</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">Go Online — Grow Your Business</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Expanding online is the smartest move for any transport business today. Here is how Golden Transport can grow digitally:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-brand-card border border-white/5 p-5 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs uppercase">Web</div>
            <h4 className="text-xs font-bold text-slate-100 uppercase font-sans">Professional Website</h4>
            <p className="text-xs text-slate-400 leading-relaxed">A clean, high-performance portal acts as an active digital storefront, building instant credibility with national clients searching for Punjab transporters.</p>
          </div>

          <div className="bg-brand-card border border-white/5 p-5 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#FFD700]/10 text-[#FFD700] flex items-center justify-center font-bold text-xs uppercase">Maps</div>
            <h4 className="text-xs font-bold text-slate-100 uppercase font-sans">Google Business Profile</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Registering on Google Maps verifies your physical shop location at Shastri Market, Batala, ensuring clients searching "transport in Batala" find you first.</p>
          </div>

          <div className="bg-brand-card border border-white/5 p-5 rounded-2xl space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">WA</div>
            <h4 className="text-xs font-bold text-slate-100 uppercase font-sans">Social & Chat Presence</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Sharing actual vehicle photos, loading operations, and customer receipt updates directly on WhatsApp stories or social media attracts direct factory partnerships.</p>
          </div>
        </div>
      </div>

      {/* PAGE 9: MEET THE OWNER (Interactive CTA Profile) */}
      <div className="bg-brand-card border border-white/5 p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 max-w-xl text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-gold/15 border border-brand-gold/20 text-[#FFD700] text-[10px] font-bold font-mono uppercase tracking-wide">
            Founder & Proprietor
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">Diwanshu Kohli</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Diwanshu Kohli is the driving force behind Golden Transport Company. With deep roots in Batala's transport community and a strong network of contractors and commission agents across Punjab, Diwanshu is committed to delivering reliable, professional logistics solutions to businesses across India.
          </p>
          <div className="flex flex-wrap gap-4 pt-1 font-mono text-[10px] text-slate-450 uppercase tracking-wider">
            <span>📍 Based In: <strong className="text-white">Batala, Punjab</strong></span>
            <span>🚛 Specialization: <strong className="text-white">Batala-Kandla FTL</strong></span>
          </div>
        </div>

        <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto font-sans">
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="w-full text-center px-6 py-3 bg-[#FFD700] text-black font-bold text-xs rounded-xl hover:bg-[#ffe13d] transition-colors block uppercase tracking-wider"
          >
            Call Diwanshu Kohli
          </a>
          <a 
            href={directWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors block uppercase tracking-wider"
          >
            WhatsApp Message
          </a>
        </div>
      </div>

    </div>
  );
}

