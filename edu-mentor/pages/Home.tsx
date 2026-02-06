
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BatchCard from '../components/UI/BatchCard';
import { BATCHES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  // Gallery images mimic the mentor in the screenshot
  const gallery = [
    { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop', w: '240px', h: '320px', t: '5%', r: '35%', rot: '-2deg', z: 10 },
    { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop', w: '260px', h: '340px', t: '15%', r: '5%', rot: '2deg', z: 20 },
    { img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=600&auto=format&fit=crop', w: '280px', h: '380px', t: '40%', r: '20%', rot: '-1deg', z: 30 },
    { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop', w: '220px', h: '280px', b: '5%', r: '40%', rot: '3deg', z: 25 },
    { img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop', w: '250px', h: '320px', b: '10%', r: '5%', rot: '-2deg', z: 15 },
    { img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop', w: '200px', h: '260px', t: '25%', r: '55%', rot: '1deg', z: 5 },
  ];

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-[120px] pb-20">
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold uppercase tracking-[0.2em] text-[10px] font-bold">Enterprise AI Training</span>
            </div>

            {/* Headline */}
            <h1 className="text-[3rem] lg:text-[5.5rem] leading-[1] font-bold mb-8 tracking-tight text-white relative">
              Master <span className="text-gold">AI</span> That<br />Actually Ships
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-20 bg-gold ml-2 align-middle"
              />
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-[540px] leading-relaxed">
              20 years in enterprise tech. 6 years at FAANG. I don't teach theory — I teach what gets <span className="text-gold">deployed to production</span>.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">11K+</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">YouTube Subscribers</div>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Years Experience</div>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 backdrop-blur-md col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">F500</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Trained</div>
                </div>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-6 items-center">
              <Link 
                to="/batches" 
                className="group bg-white text-background px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all active:scale-95"
              >
                Explore Courses
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 12h15"/></svg>
              </Link>
              <a 
                href="#"
                className="flex items-center gap-3 text-white/80 hover:text-white font-bold group"
              >
                <div className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center group-hover:bg-white/5 transition-all">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </div>
                Watch Free on YouTube
              </a>
            </div>
          </motion.div>

          {/* Right Column Floating Gallery */}
          <div className="relative w-full h-[700px] hidden lg:block">
            {/* Fix: Casting p to any to avoid union type access errors for properties like 't', 'b', and 'l' */}
            {gallery.map((p: any, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                style={{
                  position: 'absolute',
                  width: p.w,
                  height: p.h,
                  top: p.t,
                  right: p.r,
                  bottom: p.b,
                  left: p.l,
                  zIndex: p.z,
                  transform: `rotate(${p.rot})`,
                }}
                className="rounded-3xl overflow-hidden border border-gold/40 shadow-2xl"
              >
                <img src={p.img} alt="Mentor" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Floating Nav */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl flex items-center gap-6 shadow-2xl">
            {[
              { icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/> },
              { icon: <path d="M4 6h16M4 12h16M4 18h16"/> },
              { icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/> },
              { icon: <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/> },
              { icon: <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/> },
              { icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/> }
            ].map((item, i) => (
              <button key={i} className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">{item.icon}</svg>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections (Popular Batches etc.) */}
      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Enterprise Batches</h2>
              <p className="text-white/50">Next-level training for engineers and leaders.</p>
            </div>
            <Link to="/batches" className="text-gold font-bold flex items-center gap-2 group">
              View All <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 12h15"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BATCHES.slice(0, 3).map((batch) => (
              <BatchCard key={batch.id} batch={batch} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
