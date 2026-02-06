
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-gold-border/30 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-gold">Edu</span> Mentor
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Smart learning. Real results. Empowering students with premium digital education and expert mentorship.
            </p>
          </div>

          {/* Links Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gold font-semibold uppercase tracking-widest text-xs">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-text-secondary">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="hover:text-gold transition-colors">About</Link>
              <Link to="/batches" className="hover:text-gold transition-colors">Batches</Link>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
              <Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-gold transition-colors">Terms</Link>
            </div>
          </div>

          {/* Socials/Copyright Col */}
          <div className="flex flex-col gap-4 md:items-end">
            <h4 className="text-gold font-semibold uppercase tracking-widest text-xs">Follow Us</h4>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="text-text-secondary hover:text-gold transition-all text-sm">{s}</a>
              ))}
            </div>
            <div className="mt-auto pt-4">
              <p className="text-text-tertiary text-xs">
                © {new Date().getFullYear()} Edu Mentor. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
