import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Award, Briefcase, HeartHandshake, Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { experienceData } from '../data/experience';

type ExperienceFilter = 'all' | 'work' | 'voluntary';

interface ExperienceProps {
  showHeader?: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ showHeader = true }) => {
  const [activeFilter, setActiveFilter] = useState<ExperienceFilter>('all');

  const filteredList = useMemo(() => {
    if (activeFilter === 'all') return experienceData;
    return experienceData.filter((exp) => exp.category === activeFilter);
  }, [activeFilter]);

  const workCount = experienceData.filter((exp) => exp.category === 'work').length;
  const voluntaryCount = experienceData.filter((exp) => exp.category === 'voluntary').length;

  return (
    <div className="relative">
      {showHeader && (
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional &amp; Community Experience"
          subtitle="Engineering roles shipping real-time edge vision pipelines, alongside voluntary technical mentorship &amp; community leadership."
        />
      )}

      {/* Subcategory Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
        {[
          { id: 'all' as ExperienceFilter, label: 'All Roles', count: experienceData.length, icon: Briefcase },
          { id: 'work' as ExperienceFilter, label: 'Work & Industry Experience', count: workCount, icon: Briefcase },
          { id: 'voluntary' as ExperienceFilter, label: 'Voluntary & Leadership Experience', count: voluntaryCount, icon: HeartHandshake },
        ].map((tab) => {
          const isSelected = activeFilter === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-[#405C3A] text-[#F6F0DC] border-[#344C30] shadow-xs font-semibold'
                  : 'bg-[#FAF7EE] text-[#77745F] border-[#DCD4BC] hover:text-[#39402F] hover:bg-[#F2ECD8]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-[#344C30] text-[#F6F0DC] font-bold' : 'bg-[#E8E1C9] text-[#506B42]'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Illustrated Forest Green Timeline */}
      <div className="relative">
        {/* Forest Green Vertical Line */}
        <div className="absolute left-4 sm:left-6 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-[#405C3A] rounded-full opacity-40 pointer-events-none" />

        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredList.map((exp, idx) => {
              const isVoluntary = exp.category === 'voluntary';
              return (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: idx * 0.05 }}
                  className="relative pl-9 sm:pl-16"
                >
                  {/* Timeline Marker Dot - Mathematically Centered On The Vertical Line */}
                  <div className="absolute left-4 sm:left-6 top-7 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FAF7EE] border-[2.5px] border-[#405C3A] shadow-xs flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
                  </div>

                  {/* Cream Experience Card */}
                  <div className="paper-card p-6 sm:p-7 shadow-cozy hover:shadow-cozy-lg transition-all">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3.5 mb-4 border-b border-[#DCD4BC]">
                      <div>
                        {/* Subcategory Label Tag */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-[#E8E1C9] text-[#405C3A] border border-[#DCD4BC] mb-2">
                          {isVoluntary ? (
                            <>
                              <HeartHandshake className="w-3 h-3 text-[#B59A5A]" />
                              <span>VOLUNTARY &amp; LEADERSHIP</span>
                            </>
                          ) : (
                            <>
                              <Briefcase className="w-3 h-3 text-[#405C3A]" />
                              <span>INDUSTRY WORK EXPERIENCE</span>
                            </>
                          )}
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-[#39402F]">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-semibold text-[#405C3A] mt-0.5">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#77745F] shrink-0">
                        <span className="flex items-center gap-1.5 bg-[#FAF7EE] px-2.5 py-1 rounded-md border border-[#DCD4BC]">
                          <Calendar className="w-3.5 h-3.5 text-[#405C3A]" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 bg-[#FAF7EE] px-2.5 py-1 rounded-md border border-[#DCD4BC]">
                          <MapPin className="w-3.5 h-3.5 text-[#77745F]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <div className="space-y-2 mb-5">
                      {exp.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#39402F] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#405C3A] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expo / Engineering Highlights */}
                    {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                      <div className="p-3.5 rounded-xl bg-[#E8E1C9] border border-[#D4CCA8] mb-5">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#405C3A] uppercase tracking-wider mb-1.5">
                          <Award className="w-3.5 h-3.5 text-[#B59A5A]" />
                          <span>Key Milestones &amp; Highlights</span>
                        </div>
                        <div className="space-y-1">
                          {exp.keyAchievements.map((ach, aIdx) => (
                            <div key={aIdx} className="text-xs text-[#39402F] flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technology Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#DCD4BC]">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#FAF7EE] text-[#405C3A] border border-[#DCD4BC]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
