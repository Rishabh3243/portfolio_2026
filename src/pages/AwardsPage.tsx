import React from 'react';
import { Achievements } from '../components/Achievements';

export const AwardsPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="max-w-2xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#FAF7EE] border border-[#DCD4BC] text-[#405C3A] mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
          <span>Honors &amp; Laurels</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#39402F] tracking-tight mb-2 font-sans">
          Awards &amp; Recognition
        </h1>
        <p className="text-xs sm:text-sm text-[#77745F] leading-relaxed font-normal">
          National engineering championships, academic consistency recognitions, and collegiate student chapter leadership.
        </p>
      </div>

      {/* Main Achievements Component */}
      <Achievements />
    </div>
  );
};
