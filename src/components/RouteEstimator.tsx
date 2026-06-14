import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navigation, Route as RouteIcon, MapPin, Scale, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { ORIGIN_HUBS, DESTINATIONS, SAMPLE_ROUTES, WHATS_APP_NUMBER } from '../data';

interface RouteEstimatorProps {
  initialOrigin?: string;
}

export default function RouteEstimator({ initialOrigin = 'Batala' }: RouteEstimatorProps) {
  const [origin, setOrigin] = useState(initialOrigin);
  const [destination, setDestination] = useState(DESTINATIONS[0]);
  const [cargoType, setCargoType] = useState('Iron / Structural Steel');
  const [weight, setWeight] = useState(15);
  const [materialNotes, setMaterialNotes] = useState('');

  // Auto-align distance calculations if match sample routes, else generate mock distance
  const getRouteMetrics = () => {
    const matched = SAMPLE_ROUTES.find(
      r => r.from.toLowerCase().includes(origin.toLowerCase()) && 
           r.to.toLowerCase().includes(destination.toLowerCase())
    );

    if (matched) {
      return {
        distance: matched.distance,
        duration: matched.duration,
        majorHubs: matched.majorHubs,
        isDirect: true
      };
    }

    // Rough dynamic approximation for non-configured paths
    let distanceValue = 1200;
    if (origin === 'Batala' && destination.includes('Delhi')) distanceValue = 460;
    if (origin === 'Batala' && destination.includes('Ahmedabad')) distanceValue = 1080;
    if (origin === 'Batala' && destination.includes('Kandla')) distanceValue = 1140;

    const days = Math.ceil(distanceValue / 400); 

    return {
      distance: `${distanceValue} km`,
      duration: `${days * 24} hrs`,
      majorHubs: ["Batala Bypass", "NH-15 Corridor", "State Toll Hub"],
      isDirect: false
    };
  };

  const metrics = getRouteMetrics();
  const weightValid = weight >= 10;

  // Prepare whatsapp template
  const handleBookingClick = () => {
    const text = `Hello Saran Golden Transport, I checked my route on your website and want to book a truck:
*Booking Enquiry:*
*From:* ${origin} (Punjab)
*To:* ${destination}
*Goods:* ${cargoType}
*Weight:* ${weight} Tons
*Notes:* ${materialNotes || 'None'}
Please tell me the price. Thank you!`;

    window.open(`https://wa.me/${WHATS_APP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b border-white/5 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Navigation className="w-6 h-6 text-brand-gold" />
          <span>Route Planner</span>
        </h2>
        <p className="text-slate-400 text-xs mt-1">Check the distance and time for your route, and see how long it takes to deliver your load.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Planner Inputs Form */}
        <div className="lg:col-span-5 bg-brand-card border border-white/5 p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Your Route Details</h3>
          
          {/* Origin selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-mono uppercase">From (Where to load)</label>
            <select
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full bg-brand-bg border border-white/5 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-brand-gold"
            >
              {ORIGIN_HUBS.map(hub => (
                <option key={hub} value={hub}>{hub}</option>
              ))}
            </select>
          </div>

          {/* Destination Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-mono uppercase">To (Where to deliver)</label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-brand-bg border border-white/5 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-brand-gold"
            >
              {DESTINATIONS.map(dest => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
          </div>

          {/* Cargo Type */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-mono uppercase">Type of goods</label>
            <input 
              type="text"
              value={cargoType}
              onChange={(e) => setCargoType(e.target.value)}
              placeholder="e.g. Iron pipes, machinery, paper rolls, grain"
              className="w-full bg-brand-bg border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold"
            />
          </div>

          {/* Weight */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] text-slate-400 font-mono uppercase">
              <span>Weight of goods</span>
              <span className={weightValid ? 'text-brand-gold' : 'text-rose-455'}>Min 10 Tons</span>
            </div>
            
            <div className="flex gap-2">
              <input 
                type="number"
                min="5"
                max="100"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-24 bg-brand-bg border border-white/5 rounded-xl px-3 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-brand-gold text-center font-mono"
              />
              <div className="flex-1 flex gap-2 items-center text-xs justify-center bg-brand-bg border border-white/5 rounded-xl px-3 font-semibold text-slate-400">
                <Scale className="w-4 h-4 text-slate-500" />
                <span>Tons (Weight limit)</span>
              </div>
            </div>
            
            {!weightValid && (
              <p className="text-[10px] text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>We need a minimum load of 10 Tons to send a truck.</span>
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] text-slate-400 font-mono uppercase">Special notes (Optional)</label>
            <input 
              type="text"
              value={materialNotes}
              onChange={(e) => setMaterialNotes(e.target.value)}
              placeholder="e.g. Needs waterproof sheet covers"
              className="w-full bg-brand-bg border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold"
            />
          </div>
        </div>

        {/* Estimation Output Details & Visual Track */}
        <div className="lg:col-span-7 bg-brand-card border border-white/5 p-6 sm:p-8 rounded-2xl space-y-6">
          <h3 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider flex justify-between items-center">
            <span>Route and Distance Details</span>
            {metrics.isDirect ? (
              <span className="text-[9px] bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                Direct Route
              </span>
            ) : (
              <span className="text-[9px] bg-white/5 text-slate-400 border border-white/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                Standard Route
              </span>
            )}
          </h3>

          {/* Visual Route Pipeline map mock */}
          <div className="p-4 rounded-xl bg-brand-bg border border-white/5 space-y-4">
            <div className="relative flex justify-between items-center">
              {/* Path line */}
              <div className="absolute top-[40%] left-[8%] right-[8%] h-0.5 bg-dashed border-t border-dashed border-white/10 z-0" />
              <div className="absolute top-[40%] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-brand-gold to-white/20 z-0 shadow-[0_0_8px_var(--color-brand-glow)]" style={{ width: weightValid ? '100%' : '50%' }} />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#FFD700] text-black flex items-center justify-center font-bold text-xs shadow-md shadow-brand-gold/10">
                  A
                </div>
                <span className="text-[10px] text-slate-200 mt-1.5 block font-bold">{origin}</span>
                <span className="text-[8px] text-slate-500 font-mono">Punjab Hub</span>
              </div>

              {/* Middle Point */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-brand-card border border-white/5 text-brand-gold flex items-center justify-center font-bold text-[10px]">
                  +
                </div>
                <span className="text-[9px] text-slate-400 mt-1 block font-mono">Agent booking check</span>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-white/10 text-white border border-white/5 flex items-center justify-center font-bold text-xs">
                  B
                </div>
                <span className="text-[10px] text-slate-200 mt-1.5 block font-bold shrink-0 text-center max-w-[80px] truncate">{destination}</span>
                <span className="text-[8px] text-slate-500 font-mono">Unload Hub</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-brand-bg border border-white/5 rounded-xl space-y-1">
              <div className="flex items-center gap-1.5 text-slate-450">
                <RouteIcon className="w-4 h-4 text-brand-gold" />
                <span className="text-[9px] uppercase font-mono tracking-wider">Estimated Distance</span>
              </div>
              <p className="text-xl font-bold text-slate-200 font-mono">{metrics.distance}</p>
            </div>

            <div className="p-4 bg-brand-bg border border-white/5 rounded-xl space-y-1">
              <div className="flex items-center gap-1.5 text-slate-455">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span className="text-[9px] uppercase font-mono tracking-wider">Estimated Time</span>
              </div>
              <p className="text-xl font-bold text-slate-200 font-mono">~{metrics.duration}</p>
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 space-y-2">
            <span className="text-[9px] text-slate-500 uppercase font-mono tracking-wider block">Cities on the way</span>
            <div className="flex flex-wrap gap-2">
              {metrics.majorHubs.map((hub) => (
                <span key={hub} className="text-xs bg-brand-bg text-slate-300 border border-white/5 px-2.5 py-1 rounded-lg">
                  {hub}
                </span>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-brand-bg p-4 border border-white/5 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-0.5 text-left">
              <span className="text-[8px] text-slate-500 uppercase font-mono block">Send route info to owner Diwanshu</span>
              <span className="text-xs font-bold text-slate-200">Get current transport price</span>
            </div>

            <button
              disabled={!weightValid}
              onClick={handleBookingClick}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all w-full sm:w-auto cursor-pointer ${
                weightValid 
                  ? 'bg-[#FFD700] hover:bg-[#ffe13d] text-black shadow-md shadow-brand-gold/10' 
                  : 'bg-white/5 text-slate-500 cursor-not-allowed border border-white/5'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask price on WhatsApp</span>
            </button>
          </div>

          <p className="text-[10px] text-slate-500 leading-tight border-t border-white/5 pt-3">
            *Note: Distances and travel times are estimated for heavy trucks. Actual transport charges are calculated by the owner Diwanshu Kohli based on current diesel prices and truck availability.
          </p>
        </div>
      </div>
    </div>
  );
}
