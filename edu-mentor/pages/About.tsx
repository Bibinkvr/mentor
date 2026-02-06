
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-[120px] pb-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            About <span className="text-gold">Edu Mentor</span>
          </motion.h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We are redefining the digital learning experience with premium content, structured curricula, and personalized mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square rounded-[40px] overflow-hidden border border-gold-border/30 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              alt="Students collaborating" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Edu Mentor was born out of a simple realization: while information is everywhere, quality education remains scarce. We started as a small group of passionate educators with a mission to bridge the gap between academic theory and practical results.
              </p>
              <p>
                Today, we have evolved into a premium SaaS-driven education platform that serves thousands of students globally. Our focus remains unchanged – providing the best mentors and the most structured learning environments for real-world success.
              </p>
              <h3 className="text-xl font-bold text-white mt-12 mb-4">Why choose us?</h3>
              <ul className="space-y-4">
                {[
                  'Expert Mentors with proven track records',
                  'Highly structured and updated curriculum',
                  'Interactive Live Classes & 24/7 Support',
                  'Measurable results and performance tracking'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-gold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Mission', text: 'To empower every learner with high-quality education that is accessible and goal-oriented.', icon: '🎯' },
            { label: 'Vision', text: 'To be the global leader in professional and academic mentorship, fostering a community of winners.', icon: '👁️' },
            { label: 'Values', text: 'Integrity, Excellence, and Student Success are the core pillars of everything we do.', icon: '💎' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-3xl text-center"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h4 className="text-xl font-bold mb-4">{item.label}</h4>
              <p className="text-text-secondary">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
