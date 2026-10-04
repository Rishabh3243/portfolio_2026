import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { useRouter } from '../context/RouterContext';
import { Hero } from '../components/Hero';
import { AIStack } from '../components/AIStack';

export const HomePage: React.FC = () => {
  const { navigateTo } = useRouter();
  const currentRole = experienceData[0];

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Verification Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-8">
        {profileData.stats.map((stat) => (
          <div
            key={stat.label}
            className="paper-card p-4 text-center bg-[#F2ECD8] border border-[#DCD4BC]"
          >
            <div className="text-2xl sm:text-3xl font-bold font-mono text-[#39402F] mb-0.5">
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-[#405C3A]">
              {stat.label}
            </div>
            <div className="text-[11px] text-[#77745F] mt-0.5">
              {stat.subtext}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Specialized Focus Areas Bento Grid */}
      <div className="mb-8">
        <AIStack />
      </div>

      {/* 4. Experience Snapshot Banner */}
      <div className="paper-card p-6 sm:p-7 mb-8 border border-[#DCD4BC] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 bg-[#F6F0DC]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-[#405C3A] bg-[#E8E1C9] border border-[#DCD4BC] mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
            <span>Current Role &bull; {currentRole.company}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#39402F] mb-1.5 font-sans">
            {currentRole.role} ({currentRole.period})
          </h3>
          <p className="text-xs sm:text-sm text-[#77745F] max-w-2xl leading-relaxed">
            {currentRole.points[0]}
          </p>
        </div>

        <button
          onClick={() => navigateTo('/experience')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#F6F0DC] bg-[#405C3A] hover:bg-[#344C30] transition-colors shrink-0 shadow-xs"
        >
          <span>View Career History</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 5. Ready to Collaborate Callout Banner */}
      <div className="paper-card p-7 text-center border border-[#DCD4BC] bg-[#F2ECD8]">
        <h3 className="text-xl font-bold text-[#39402F] mb-1.5 font-sans">
          Let's Build Intelligent Systems
        </h3>
        <p className="text-xs sm:text-sm text-[#77745F] mb-4 max-w-md mx-auto leading-relaxed">
          Looking to optimize real-time vision on edge silicon or deploy local RAG &amp; agentic pipelines?
        </p>
        <button
          onClick={() => navigateTo('/contact')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#F6F0DC] bg-[#405C3A] hover:bg-[#344C30] transition-colors shadow-sm"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Directly</span>
        </button>
      </div>
    </div>
  );
};
