import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-8 md:mb-10 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-2.5 bg-[#FAF7EE] border border-[#D4CCA8] text-[#405C3A] shadow-2xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-2xl sm:text-3xl font-bold tracking-tight text-[#39402F] mb-2 font-sans"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-xs sm:text-sm text-[#77745F] leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
