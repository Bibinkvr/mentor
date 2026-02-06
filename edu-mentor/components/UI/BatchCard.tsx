
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Batch } from '../../types';

interface BatchCardProps {
  batch: Batch;
}

const BatchCard: React.FC<BatchCardProps> = ({ batch }) => {
  const isEnrolled = batch.progress !== undefined;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl p-8 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
          {batch.category}
        </span>
        {batch.seatsLeft !== undefined && !isEnrolled && batch.seatsLeft < 50 && (
          <span className="text-[10px] font-bold text-red-400 animate-pulse">
            ONLY {batch.seatsLeft} SEATS LEFT
          </span>
        )}
        {isEnrolled && (
          <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20 uppercase tracking-widest">
            Enrolled
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-tight group-hover:text-gold transition-colors">
        {batch.title}
      </h3>
      <p className="text-text-secondary text-sm mb-6 line-clamp-3 leading-relaxed">
        {batch.description}
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-full bg-elevated border border-gold-border flex items-center justify-center text-[10px] text-gold font-bold">
              {batch.mentor.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="text-text-primary font-medium">{batch.mentor}</span>
          </div>
          {batch.rating && (
            <div className="flex items-center gap-2 pl-11">
              <div className="flex items-center text-gold">
                <span className="text-xs">★</span>
                <span className="text-xs font-bold ml-1">{batch.rating}</span>
              </div>
              <span className="text-[10px] text-text-tertiary">
                ({batch.reviewCount?.toLocaleString()} reviews)
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-6 text-xs text-text-tertiary">
          <div className="flex items-center gap-1">
            <span className="text-gold">📅</span> {batch.startDate}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-gold">⏳</span> {batch.duration}
          </div>
        </div>
        {!isEnrolled && (
          <div className="text-xs text-text-tertiary">
            <span className="text-gold">👥</span> {batch.studentsEnrolled.toLocaleString()} Students Enrolled
          </div>
        )}
      </div>

      {isEnrolled && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] uppercase tracking-widest text-text-tertiary font-bold">Course Progress</span>
            <span className="text-xs font-bold text-gold">{batch.progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-elevated rounded-full overflow-hidden border border-gold-border/10">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${batch.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"
            />
          </div>
        </div>
      )}

      <div className="mt-auto flex items-center justify-between pt-6 border-t border-gold-border/30">
        <div className="flex flex-col">
          {isEnrolled ? (
            <span className="text-sm font-medium text-text-secondary">Continue learning</span>
          ) : (
            <>
              <span className="text-[10px] text-text-tertiary uppercase tracking-wider">Starting at</span>
              <span className="text-xl font-bold text-gold">₹{batch.price.toLocaleString()}</span>
            </>
          )}
        </div>
        <Link
          to={`/batches/${batch.id}`}
          className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
            isEnrolled 
              ? 'bg-secondary text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
              : 'bg-gold/10 hover:bg-gold text-gold hover:text-background border border-gold/30'
          }`}
        >
          {isEnrolled ? 'Go to Classroom' : 'Enroll Now'}
        </Link>
      </div>
    </motion.div>
  );
};

export default BatchCard;
