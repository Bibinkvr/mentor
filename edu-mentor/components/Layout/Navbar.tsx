
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', path: '/batches' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-[80px] flex items-center ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-gold-border/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-[1400px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gold/10 border border-gold/30 px-3 py-1 rounded-lg">
            <span className="text-white font-bold text-sm tracking-tight">AI <span className="text-white/60 font-normal">with</span> <span className="text-gold">Surya</span></span>
          </div>
        </Link>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : 'text-text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-white font-bold text-xs uppercase tracking-widest border border-white/20 px-6 py-2.5 rounded-lg hover:bg-white/5 transition-all"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gold text-background px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all active:scale-95 flex items-center gap-2"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-0 right-0 bg-surface border-b border-gold-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-gold' : 'text-text-secondary'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
              <Link to="/login" className="text-center font-bold text-sm py-3 border border-white/20 rounded-xl">LOGIN</Link>
              <Link to="/register" className="text-center bg-gold text-background font-bold text-sm py-3 rounded-xl">GET STARTED</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
