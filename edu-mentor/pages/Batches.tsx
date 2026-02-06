
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import BatchCard from '../components/UI/BatchCard';
import { BATCHES } from '../constants';

const Batches: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [examType, setExamType] = useState('All');

  const filteredBatches = useMemo(() => {
    return BATCHES.filter(batch => {
      const matchesSearch = batch.title.toLowerCase().includes(search.toLowerCase()) || 
                            batch.mentor.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || batch.category === category;
      const matchesExam = examType === 'All' || batch.examType === examType;
      return matchesSearch && matchesCategory && matchesExam;
    });
  }, [search, category, examType]);

  const categories = ['All', ...new Set(BATCHES.map(b => b.category))];
  const examTypes = ['All', ...new Set(BATCHES.map(b => b.examType).filter(Boolean))];

  return (
    <div className="pt-[120px] pb-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Batches</h1>
          <p className="text-text-secondary">Find the perfect learning path curated by our top experts.</p>
        </header>

        {/* Filter Bar */}
        <div className="glass-card p-6 rounded-2xl mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="w-full lg:w-1/3 relative group">
            <input
              type="text"
              placeholder="Search by batch or mentor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-elevated border border-gold-border/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold hover:border-gold-border/60 hover:bg-elevated/80 transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-50 transition-opacity">🔍</span>
          </div>

          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <div className="flex flex-col gap-1 flex-1 lg:flex-none min-w-[140px]">
              <label className="text-[10px] uppercase tracking-widest text-text-tertiary ml-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-elevated border border-gold-border/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold hover:border-gold-border/60 hover:bg-elevated/80 transition-all cursor-pointer"
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            
            <div className="flex flex-col gap-1 flex-1 lg:flex-none min-w-[140px]">
              <label className="text-[10px] uppercase tracking-widest text-text-tertiary ml-1">Exam Type</label>
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                className="bg-elevated border border-gold-border/30 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold hover:border-gold-border/60 hover:bg-elevated/80 transition-all cursor-pointer"
              >
                {examTypes.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredBatches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBatches.map((batch) => (
              <motion.div
                key={batch.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <BatchCard batch={batch} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-gold-border rounded-3xl">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-2">No batches found</h3>
            <p className="text-text-secondary">Try adjusting your filters or search keywords.</p>
            <button 
              onClick={() => { setSearch(''); setCategory('All'); setExamType('All'); }}
              className="mt-6 text-gold font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Batches;
