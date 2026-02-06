
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BATCHES } from '../constants';

const BatchDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const batch = BATCHES.find(b => b.id === id);

  if (!batch) {
    return (
      <div className="pt-[120px] pb-20 container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Batch not found</h1>
        <Link to="/batches" className="text-gold">Back to Batches</Link>
      </div>
    );
  }

  return (
    <div className="pt-[100px] pb-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Banner Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[300px] md:h-[450px] w-full rounded-[32px] overflow-hidden mb-12 border border-gold-border/30"
        >
          <img 
            src={`https://picsum.photos/seed/${batch.id}42/1200/450`} 
            alt={batch.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <span className="text-xs font-bold text-gold bg-gold/10 border border-gold/30 px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
              {batch.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{batch.title}</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="glass-card p-10 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-6">About this Batch</h2>
              <p className="text-text-secondary leading-relaxed mb-10 text-lg">
                {batch.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h3 className="text-xl font-bold mb-6">Course Curriculum</h3>
              <div className="space-y-4">
                {['Fundamentals & Introduction', 'Advanced Core Concepts', 'Hands-on Projects & Case Studies', 'Mock Tests & Exam Strategies', 'Personalized Doubt Clearing'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-elevated/50 p-4 rounded-xl border border-gold-border/10">
                    <span className="text-gold font-bold">0{i+1}</span>
                    <span className="text-text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6">Meet your Mentor</h2>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center text-2xl font-bold text-gold overflow-hidden">
                   <img src={`https://picsum.photos/seed/${batch.mentor}/200/200`} alt={batch.mentor} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{batch.mentor}</h4>
                  <p className="text-text-secondary">Senior Educator & Subject Matter Expert with 10+ years experience.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing/Action Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-[100px] glass-card p-8 rounded-3xl border-2 border-gold/20 shadow-[0_30px_60px_rgba(212,175,55,0.1)]">
              <div className="mb-8">
                <div className="text-text-tertiary uppercase tracking-widest text-xs font-bold mb-2">Total Price</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gold">₹{batch.price.toLocaleString()}</span>
                  <span className="text-text-tertiary line-through text-lg">₹{(batch.price * 1.5).toLocaleString()}</span>
                </div>
                <div className="text-green-500 text-sm mt-1 font-bold">33% Discount Applied</div>
              </div>

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between py-2 border-b border-gold-border/10">
                  <span className="text-text-secondary">Start Date</span>
                  <span className="font-bold">{batch.startDate}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gold-border/10">
                  <span className="text-text-secondary">Duration</span>
                  <span className="font-bold">{batch.duration}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gold-border/10">
                  <span className="text-text-secondary">Sessions</span>
                  <span className="font-bold">120+ Classes</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gold-border/10">
                  <span className="text-text-secondary">Access</span>
                  <span className="font-bold">Lifetime Validity</span>
                </div>
              </div>

              <button className="w-full bg-gold text-background font-bold py-4 rounded-xl text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all active:scale-95 mb-4">
                Enroll Now
              </button>
              <p className="text-center text-[10px] text-text-tertiary uppercase tracking-widest">Secure Payment • 7 Day Refund Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetail;
