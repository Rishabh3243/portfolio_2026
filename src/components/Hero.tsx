import React from 'react';
import { ArrowRight, FileText, Github, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile';
import { useRouter } from '../context/RouterContext';

export const Hero: React.FC = () => {
  const { navigateTo } = useRouter();

  return (
    <div className="paper-card p-5 sm:p-8 mb-8 relative overflow-hidden">
      {/* Subtle organic decorative background accent (top-right) */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 150 C70 90, 130 90, 160 30"
            stroke="#405C3A"
            strokeWidth="3"
            strokeDasharray="4 6"
            strokeLinecap="round"
          />
          <circle cx="160" cy="30" r="8" fill="#405C3A" />
          <circle cx="100" cy="100" r="5" fill="#8A9A62" />
          <circle cx="50" cy="150" r="6" fill="#B59A5A" />
          <path
            d="M100 100 Q130 140 170 120"
            stroke="#8A9A62"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Domain Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#E8E1C9] border border-[#D4CCA8] text-[#344C30] mb-4 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
          <span>Technical Workspace &bull; Edge AI &amp; Vision Systems</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#39402F] mb-2 font-sans">
          {profileData.name}
        </h1>

        <div className="text-lg sm:text-2xl font-mono font-medium text-[#405C3A] mb-4">
          AI/ML Developer
        </div>

        {/* Supporting text */}
        <p className="text-sm sm:text-base text-[#77745F] leading-relaxed mb-6 max-w-2xl font-normal">
          {profileData.heroSupportingText}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => navigateTo('/projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#F6F0DC] bg-[#405C3A] hover:bg-[#344C30] transition-colors shadow-sm"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[#405C3A] bg-[#F6F0DC] border border-[#405C3A] hover:bg-[#E8E1C9] transition-colors"
          >
            <FileText className="w-4 h-4 text-[#405C3A]" />
            <span>Download Resume</span>
          </a>

          <div className="flex items-center gap-2 pl-1">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 text-[#39402F] hover:text-[#405C3A] bg-[#F6F0DC] hover:bg-[#E8E1C9] border border-[#DCD4BC] rounded-xl transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 text-[#39402F] hover:text-[#405C3A] bg-[#F6F0DC] hover:bg-[#E8E1C9] border border-[#DCD4BC] rounded-xl transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Small Soft Technology Badges */}
        <div className="pt-5 border-t border-[#DCD4BC]">
          <div className="text-[11px] font-mono text-[#77745F] uppercase tracking-wider mb-2.5">
            Core Runtimes &bull; Silicon Toolchain
          </div>
          <div className="flex flex-wrap gap-2">
            {profileData.badges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#E8E1C9] border border-[#C8BE9E] text-[#344C30] shadow-2xs"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
