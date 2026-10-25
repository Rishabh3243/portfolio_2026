import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Sparkles, Bot, Eye } from 'lucide-react';
import { RealGitHubIcon } from './BrandIcons';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const FallbackIllustration: React.FC<{ category: string; title: string }> = ({ category, title }) => {
  const getIcon = () => {
    switch (category) {
      case 'Edge AI':
        return <Cpu className="w-8 h-8 text-[#405C3A]" />;
      case 'GenAI':
      case 'LLM':
        return <Sparkles className="w-8 h-8 text-[#B59A5A]" />;
      case 'AI Agents':
        return <Bot className="w-8 h-8 text-[#405C3A]" />;
      case 'Computer Vision':
      default:
        return <Eye className="w-8 h-8 text-[#405C3A]" />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FAF7EE] to-[#E8E1C9] text-center relative overflow-hidden select-none">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#405C3A 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex items-center justify-center shadow-xs mb-2">
          {getIcon()}
        </div>
        <div className="text-xs font-mono font-bold text-[#39402F] truncate max-w-[200px]">
          {title}
        </div>
        <div className="text-[10px] font-mono text-[#77745F] mt-0.5 uppercase tracking-wider">
          Architecture &bull; {category}
        </div>
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const isGithubAvailable = project.githubUrl && project.githubUrl !== '#';
  const isDemoAvailable = project.demoUrl && project.demoUrl !== '#';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="paper-card hover:bg-[#F6F0DC] transition-all flex flex-col justify-between overflow-hidden group shadow-cozy hover:shadow-cozy-lg border border-[#DCD4BC]"
    >
      <div>
        {/* Project Image Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#E8E1C9] border-b border-[#DCD4BC] p-2">
          <div className="w-full h-full rounded-xl overflow-hidden border border-[#DCD4BC] bg-[#FAF7EE] shadow-inner flex items-center justify-center">
            {!imgError && project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                loading="eager"
                decoding="async"
                onError={() => setImgError(true)}
              />
            ) : (
              <FallbackIllustration category={project.category} title={project.title} />
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#F6F0DC] text-[#405C3A] border border-[#DCD4BC] shadow-xs">
              {project.category}
            </span>
          </div>

          {project.featured && (
            <div className="absolute top-3.5 right-3.5 z-10">
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#B59A5A]/20 text-[#39402F] border border-[#B59A5A]/50">
                FEATURED
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-[#39402F] mb-2 group-hover:text-[#405C3A] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#77745F] leading-relaxed mb-4 font-normal">
            {project.shortDescription}
          </p>

          {/* Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] mb-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-[10px] font-mono text-[#77745F] truncate">
                    {m.label}
                  </div>
                  <div className="text-xs font-mono font-bold text-[#405C3A]">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Hardware tags */}
          {project.hardware && project.hardware.length > 0 && (
            <div className="mb-3.5">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#77745F] mb-1">
                <Cpu className="w-3 h-3 text-[#405C3A]" />
                <span>Verified Silicon:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.hardware.map((hw) => (
                  <span
                    key={hw}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E8E1C9] text-[#39402F] border border-[#D4CCA8]"
                  >
                    {hw}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FAF7EE] text-[#405C3A] border border-[#DCD4BC]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-5 pt-0 mt-2 border-t border-[#DCD4BC] flex items-center justify-between gap-3">
        {/* GitHub Button */}
        {isGithubAvailable ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-[#39402F] bg-[#FAF7EE] hover:bg-[#E8E1C9] border border-[#DCD4BC] transition-colors"
          >
            <RealGitHubIcon className="w-3.5 h-3.5 text-[#24292F]" />
            <span>Code Repo</span>
          </a>
        ) : (
          <div
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-[#77745F] bg-[#FAF7EE]/60 border border-[#DCD4BC]/60 cursor-not-allowed"
            title="Repository link coming soon"
          >
            <RealGitHubIcon className="w-3.5 h-3.5 opacity-40 text-[#77745F]" />
            <span>Coming Soon</span>
          </div>
        )}

        {/* Demo Button */}
        {isDemoAvailable ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-[#F6F0DC] bg-[#405C3A] hover:bg-[#344C30] transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <div className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-[11px] font-mono text-[#77745F] bg-[#FAF7EE]/60 border border-[#DCD4BC]/60">
            <span>Demo on Request</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
