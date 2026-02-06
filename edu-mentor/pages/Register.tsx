
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-stretch">
      {/* Left Side: Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-surface relative overflow-hidden items-center justify-center p-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-elevated/20 to-gold/5" />
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-64 h-80 bg-elevated/80 border border-gold/30 rounded-3xl mx-auto mb-12 flex items-center justify-center overflow-hidden"
          >
             <img src="https://picsum.photos/seed/register-visual/400/600" alt="Register" className="w-full h-full object-cover opacity-60" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Join <span className="text-gold">Edu</span> Mentor</h2>
          <p className="text-text-secondary text-lg">Start your structured learning journey today.</p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <Link to="/" className="text-2xl font-bold lg:hidden mb-12 block">
              <span className="text-gold">Edu</span> Mentor
            </Link>
            <h1 className="text-4xl font-bold mb-4">Create account</h1>
            <p className="text-text-secondary">Join thousands of students learning and growing.</p>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-text-tertiary">Full Name</label>
              <input 
                type="text" 
                className="bg-elevated border border-gold-border/30 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-text-tertiary">Email Address</label>
              <input 
                type="email" 
                className="bg-elevated border border-gold-border/30 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-text-tertiary">Password</label>
                <input 
                  type="password" 
                  className="bg-elevated border border-gold-border/30 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-text-tertiary">Confirm</label>
                <input 
                  type="password" 
                  className="bg-elevated border border-gold-border/30 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="terms" className="accent-gold w-4 h-4" />
              <label htmlFor="terms" className="text-xs text-text-secondary leading-tight">
                I agree to the <Link to="#" className="text-gold hover:underline">Terms of Service</Link> and <Link to="#" className="text-gold hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-gold text-background font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all active:scale-95"
            >
              Create Account
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gold-border/20"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-4 text-text-tertiary">Or sign up with</span>
              </div>
            </div>

            <button 
              type="button"
              className="w-full bg-elevated border border-gold-border/30 text-text-primary font-bold py-4 rounded-xl hover:bg-gold-border/10 transition-all flex items-center justify-center gap-3"
            >
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
              Sign up with Google
            </button>
          </form>

          <p className="mt-10 text-center text-text-secondary text-sm">
            Already have an account? <Link to="/login" className="text-gold font-bold hover:underline">Sign in instead</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
