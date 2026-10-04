import React from 'react';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Journey } from '../components/Journey';

export const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="max-w-2xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#FAF7EE] border border-[#DCD4BC] text-[#405C3A] mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
          <span>Profile &amp; Technical Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#39402F] tracking-tight mb-2 font-sans">
          About Me
        </h1>
        <p className="text-xs sm:text-sm text-[#77745F] leading-relaxed font-normal">
          Bridging deep learning research with resource-constrained embedded silicon and autonomous software systems.
        </p>
      </div>

      {/* Narrative & Directives */}
      <div className="mb-10">
        <About />
      </div>

      {/* Technical Skills Component */}
      <div className="mb-10">
        <Skills />
      </div>

      {/* Education Credentials */}
      <div className="mb-10">
        <Education />
      </div>

      {/* Technical Journey Evolution */}
      <div>
        <Journey />
      </div>
    </div>
  );
};
