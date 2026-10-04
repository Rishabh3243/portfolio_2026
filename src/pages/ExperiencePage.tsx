import React from 'react';
import { Experience } from '../components/Experience';

export const ExperiencePage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="max-w-2xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#FAF7EE] border border-[#DCD4BC] text-[#405C3A] mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
          <span>Track Record &amp; Leadership</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#39402F] tracking-tight mb-2 font-sans">
          Experience
        </h1>
        <p className="text-xs sm:text-sm text-[#77745F] leading-relaxed font-normal">
          Industrial Edge AI engineering roles exhibited at international expos, alongside voluntary collegiate leadership and open-source contributions.
        </p>
      </div>

      {/* Experience Timeline with Work & Voluntary Tabs */}
      <div>
        <Experience showHeader={false} />
      </div>
    </div>
  );
};
