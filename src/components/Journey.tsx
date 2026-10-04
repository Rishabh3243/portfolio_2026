import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  BrainCircuit,
  Eye,
  Cpu,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { journeyMilestones } from '../data/journey';

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  BrainCircuit,
  Eye,
  Cpu,
  Sparkles,
  Workflow,
};

export const Journey: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // Default to Edge AI

  return (
    <div>
      <SectionHeading
        eyebrow="Chronological Progression"
        title="Technical Evolution Journey"
        subtitle="The progression from software fundamentals to real-time vision, edge silicon, and autonomous agent loops."
      />

      {/* Steps Pill Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
        {journeyMilestones.map((m, idx) => {
          const Icon = iconMap[m.icon] || Terminal;
          const isSelected = activeStep === idx;
          return (
            <button
              key={m.title}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-[#405C3A] text-[#F6F0DC] border-[#405C3A] shadow-xs'
                  : 'paper-card hover:bg-[#F6F0DC] text-[#77745F]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#F6F0DC]' : 'text-[#405C3A]'}`}>
                  0{m.step}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#F6F0DC]' : 'text-[#77745F]'}`} />
              </div>
              <div className={`text-[10px] font-mono uppercase ${isSelected ? 'text-[#DCD4BC]' : 'text-[#77745F]'}`}>
                {m.domain}
              </div>
              <div className={`text-xs font-bold truncate ${isSelected ? 'text-[#FAF7EE]' : 'text-[#39402F]'}`}>
                {m.title.split('&')[0]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Showcase */}
      {activeStep !== null && (
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="paper-card p-6 sm:p-8 bg-[#F6F0DC] border border-[#DCD4BC]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-[#DCD4BC]">
            <div className="flex items-center gap-2 font-mono text-xs text-[#405C3A] font-semibold uppercase">
              <span>Phase 0{journeyMilestones[activeStep].step}</span>
              <span>&bull;</span>
              <span>{journeyMilestones[activeStep].domain}</span>
            </div>
            <div className="text-xs font-mono text-[#77745F]">
              Step {activeStep + 1} of 6 in Evolution
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#39402F] mb-2 font-sans">
            {journeyMilestones[activeStep].title}
          </h3>

          <p className="text-xs sm:text-sm text-[#77745F] leading-relaxed mb-5 font-normal">
            {journeyMilestones[activeStep].description}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#DCD4BC]">
            <span className="text-xs font-mono text-[#77745F] mr-1">Key Technologies:</span>
            {journeyMilestones[activeStep].keyTech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#E8E1C9] text-[#344C30] border border-[#C8BE9E]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};
