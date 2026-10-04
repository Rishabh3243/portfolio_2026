import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { profileData } from '../data/profile';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 pt-8 pb-10 border-t border-[#DCD4BC] text-[#77745F] text-xs">
      <div className="max-w-[1360px] mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#DCD4BC]/70">
          <div>
            <div className="font-bold text-[#39402F] text-sm flex items-center gap-2">
              <span>{profileData.name}</span>
              <span className="text-[10px] font-mono text-[#405C3A] font-normal">&bull; AI/ML Developer</span>
            </div>
            <p className="text-[11px] text-[#77745F] mt-0.5">
              AI Agents &bull; LLMs &bull; GenAI &bull; Edge AI &bull; Computer Vision
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <button onClick={() => navigateTo('/')} className="hover:text-[#405C3A]">
              Home
            </button>
            <button onClick={() => navigateTo('/about')} className="hover:text-[#405C3A]">
              About
            </button>
            <button onClick={() => navigateTo('/projects')} className="hover:text-[#405C3A]">
              Projects
            </button>
            <button onClick={() => navigateTo('/ai-lab')} className="hover:text-[#405C3A]">
              AI Lab
            </button>
            <button onClick={() => navigateTo('/experience')} className="hover:text-[#405C3A]">
              Experience
            </button>
            <button onClick={() => navigateTo('/awards')} className="hover:text-[#405C3A]">
              Awards
            </button>
            <button onClick={() => navigateTo('/contact')} className="hover:text-[#405C3A]">
              Contact
            </button>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono">
          <div>
            &copy; 2026 {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#405C3A] flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#405C3A] flex items-center gap-1"
            >
              <Linkedin className="w-3 h-3" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-[#405C3A] flex items-center gap-1 ml-2"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
