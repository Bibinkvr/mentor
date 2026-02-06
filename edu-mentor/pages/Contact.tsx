
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-[120px] pb-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact <span className="text-gold">Us</span></h1>
          <p className="text-xl text-text-secondary max-w-xl mx-auto">
            Have questions? We are here to help. Reach out to our support team for any queries.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-16 rounded-[40px] text-center"
            >
              <div className="text-6xl mb-6">📩</div>
              <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
              <p className="text-text-secondary mb-8">We have received your query and will get back to you within 24 hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-gold font-bold hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Direct Email</h3>
                  <a href="mailto:hello@edumentor.com" className="text-xl font-medium hover:text-gold transition-colors">hello@edumentor.com</a>
                </div>
                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Office Address</h3>
                  <p className="text-lg leading-relaxed">
                    123 Luxury Avenue,<br />
                    Education Hub, Silicon Valley,<br />
                    CA 94043, USA
                  </p>
                </div>
              </div>

              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="glass-card p-10 rounded-[40px] space-y-6 border-gold/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-text-tertiary">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="bg-elevated border border-gold-border/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest text-text-tertiary">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="bg-elevated border border-gold-border/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-text-tertiary">Subject</label>
                    <input 
                      required
                      type="text" 
                      className="bg-elevated border border-gold-border/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="Admission query"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-text-tertiary">Message</label>
                    <textarea 
                      required
                      rows={5}
                      className="bg-elevated border border-gold-border/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-gold text-background font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
