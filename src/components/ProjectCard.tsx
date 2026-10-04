import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
          <div className="w-full h-full rounded-xl overflow-hidden border border-[#DCD4BC] bg-[#FAF7EE] shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
              loading="lazy"
            />
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
            <Github className="w-3.5 h-3.5 text-[#405C3A]" />
            <span>Code Repo</span>
          </a>
        ) : (
          <div
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-[#77745F] bg-[#FAF7EE]/60 border border-[#DCD4BC]/60 cursor-not-allowed"
            title="Repository link coming soon"
          >
            <Github className="w-3.5 h-3.5 opacity-40" />
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
