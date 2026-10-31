import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Award, Briefcase, HeartHandshake, ExternalLink } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { experienceData } from '../data/experience';

type ExperienceFilter = 'all' | 'work' | 'voluntary';

interface ExperienceProps {
  showHeader?: boolean;
}

const getExperienceYear = (period: string): string => {
  const match = period.match(/\b(20\d\d)\b/);
  return match ? match[1] : '';
};

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

      {/* Content Area: Overview Timeline for 'All Roles', Full Detailed Cards for 'Work' & 'Voluntary' */}
      {activeFilter === 'all' ? (
        /* ========================================================= */
        /* ALL ROLES: CENTER VERTICAL OVERVIEW TIMELINE              */
        /* ========================================================= */
        <div className="relative py-2">
          {/* Central Vertical Line (Centered on md+, Left on mobile) */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-[#405C3A] rounded-full opacity-40 pointer-events-none" />

          <div className="space-y-8 md:space-y-10">
            <AnimatePresence mode="popLayout">
              {filteredList.map((exp, idx) => {
                const isVoluntary = exp.category === 'voluntary';
                const isEven = idx % 2 === 0;
                const currentYear = getExperienceYear(exp.period);
                const prevYear = idx > 0 ? getExperienceYear(filteredList[idx - 1]?.period) : '';
                const isNewYear = idx === 0 || (currentYear !== '' && currentYear !== prevYear);

                return (
                  <React.Fragment key={exp.id}>
                    {/* Middle Line Break: Year Mention Badge */}
                    {isNewYear && currentYear && (
                      <motion.div
                        key={`year-marker-${currentYear}`}
                        layout
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.2 }}
                        className="relative flex items-center justify-start md:justify-center my-4 md:my-8 z-30"
                      >
                        {/* Timeline Node on Mobile - Centered on the vertical line */}
                        <div className="md:hidden absolute left-4 sm:left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FAF7EE] border-[2.5px] border-[#405C3A] shadow-xs flex items-center justify-center z-20">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
                        </div>

                        {/* Year Badge: Placed with safe padding on mobile so it never gets cut off */}
                        <div className="relative pl-8 sm:pl-12 md:pl-0">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF7EE] border-2 border-[#405C3A] text-[#405C3A] font-mono font-bold text-xs shadow-xs tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
                            <span>{currentYear}</span>
                          </span>
                        </div>
                      </motion.div>
                    )}

                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                      className="relative"
                    >
                      {/* Timeline Node Dot - Centered on the vertical line */}
                      <div className="absolute left-4 sm:left-6 md:left-1/2 top-7 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#FAF7EE] border-[2.5px] border-[#405C3A] shadow-xs flex items-center justify-center z-20">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isVoluntary ? 'bg-[#B59A5A]' : 'bg-[#405C3A]'
                          }`}
                        />
                      </div>

                      {/* Alternating Overview Card Container */}
                      <div
                        className={`relative pl-10 sm:pl-16 md:pl-0 md:w-[calc(50%-1.75rem)] lg:w-[calc(50%-2rem)] ${
                          isEven ? 'md:mr-auto' : 'md:ml-auto'
                        }`}
                      >
                        {/* Horizontal Connector Line (desktop only) */}
                        {isEven ? (
                          <div className="hidden md:block absolute top-7 -right-7 lg:-right-8 w-7 lg:w-8 h-[2px] bg-[#405C3A]/30 pointer-events-none" />
                        ) : (
                          <div className="hidden md:block absolute top-7 -left-7 lg:-left-8 w-7 lg:w-8 h-[2px] bg-[#405C3A]/30 pointer-events-none" />
                        )}

                        {/* Compact Overview Card */}
                        <div className="paper-card p-5 sm:p-6 shadow-cozy hover:shadow-cozy-lg transition-all group">
                          {/* Top: Organization Logo + Role & Organization Name */}
                          <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-[#DCD4BC]">
                            <div className="flex items-start gap-3 min-w-0">
                              {/* Organization Logo */}
                              {exp.logo && (
                                <a
                                  href={exp.orgUrl || '#'}
                                  target={exp.orgUrl ? '_blank' : undefined}
                                  rel="noopener noreferrer"
                                  className="w-11 h-11 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] p-1.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#405C3A] group-hover:scale-105 transition-all"
                                  title={`Visit ${exp.company}`}
                                >
                                  <img
                                    src={exp.logo}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-full h-full object-contain"
                                    loading="eager"
                                  />
                                </a>
                              )}

                              <div className="min-w-0 pt-0.5">
                                <h3 className="text-base sm:text-lg font-bold text-[#39402F] leading-snug group-hover:text-[#405C3A] transition-colors">
                                  {exp.role}
                                </h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                  {exp.orgUrl ? (
                                    <a
                                      href={exp.orgUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs font-semibold text-[#405C3A] hover:text-[#344C30] hover:underline inline-flex items-center gap-1 transition-colors"
                                    >
                                      <span>{exp.company}</span>
                                      <ExternalLink className="w-3 h-3 text-[#77745F] shrink-0" />
                                    </a>
                                  ) : (
                                    <span className="text-xs font-semibold text-[#405C3A]">
                                      {exp.company}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Subcategory Label Tag */}
                            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#E8E1C9] text-[#405C3A] border border-[#DCD4BC] shadow-2xs shrink-0">
                              {isVoluntary ? (
                                <>
                                  <HeartHandshake className="w-3 h-3 text-[#B59A5A]" />
                                  <span className="hidden sm:inline">VOLUNTARY</span>
                                  <span className="sm:hidden">VOL</span>
                                </>
                              ) : (
                                <>
                                  <Briefcase className="w-3.5 h-3.5 text-[#405C3A]" />
                                  <span className="hidden sm:inline">WORK</span>
                                  <span className="sm:hidden">WORK</span>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Middle: Period & Location (Never Truncated) */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-xs font-mono mb-3 text-[#77745F]">
                            <div className="flex items-center gap-1.5 font-semibold text-[#39402F]">
                              <Calendar className="w-3.5 h-3.5 text-[#405C3A] shrink-0" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1 text-[11px] text-[#77745F]">
                              <MapPin className="w-3 h-3 text-[#77745F] shrink-0" />
                              <span className="whitespace-normal sm:whitespace-nowrap">{exp.location}</span>
                            </div>
                          </div>

                          {/* Bottom: Duration & Link to Full Details */}
                          <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-[#DCD4BC]">
                            <span className="text-[11px] font-mono text-[#77745F]">
                              {exp.duration}
                            </span>

                            <button
                              type="button"
                              onClick={() => setActiveFilter(isVoluntary ? 'voluntary' : 'work')}
                              className="text-xs font-mono font-semibold text-[#405C3A] hover:text-[#344C30] hover:underline whitespace-nowrap inline-flex items-center gap-1 cursor-pointer"
                              title={`Inspect full technical details in ${isVoluntary ? 'Voluntary' : 'Work'} section`}
                            >
                              <span>Full Details</span>
                              <span>&rarr;</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        /* ========================================================= */
        /* DETAILED TIMELINE: WORK & VOLUNTARY (100% UNCHANGED)      */
        /* ========================================================= */
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
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-3.5 mb-4 border-b border-[#DCD4BC]">
                        <div className="flex items-start gap-3.5 min-w-0">
                          {/* Organization Logo */}
                          {exp.logo && (
                            <a
                              href={exp.orgUrl || '#'}
                              target={exp.orgUrl ? '_blank' : undefined}
                              rel="noopener noreferrer"
                              className="w-12 h-12 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] p-1.5 flex items-center justify-center shrink-0 shadow-xs hover:border-[#405C3A] hover:scale-105 transition-all group/logo"
                              title={`Visit ${exp.company}`}
                            >
                              <img
                                src={exp.logo}
                                alt=""
                                aria-hidden="true"
                                className="w-full h-full object-contain"
                                loading="eager"
                              />
                            </a>
                          )}

                          <div className="min-w-0 pt-0.5">
                            <h3 className="text-lg sm:text-xl font-bold text-[#39402F] leading-snug">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              {exp.orgUrl ? (
                                <a
                                  href={exp.orgUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-semibold text-[#405C3A] hover:text-[#344C30] hover:underline inline-flex items-center gap-1.5 transition-colors group/link"
                                >
                                  <span>{exp.company}</span>
                                  <ExternalLink className="w-3.5 h-3.5 text-[#77745F] group-hover/link:text-[#405C3A] transition-colors" />
                                </a>
                              ) : (
                                <span className="text-sm font-semibold text-[#405C3A]">{exp.company}</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Right: Subcategory Tag, Period, and Location in ONE Aligned Column */}
                        <div className="flex flex-col items-start gap-1.5 shrink-0 text-xs font-mono sm:pl-4">
                          {/* Subcategory Label Tag */}
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#E8E1C9] text-[#405C3A] border border-[#DCD4BC] shadow-2xs">
                            {isVoluntary ? (
                              <>
                                <HeartHandshake className="w-3.5 h-3.5 text-[#B59A5A]" />
                                <span>VOLUNTARY &amp; LEADERSHIP</span>
                              </>
                            ) : (
                              <>
                                <Briefcase className="w-3.5 h-3.5 text-[#405C3A]" />
                                <span>INDUSTRY WORK EXPERIENCE</span>
                              </>
                            )}
                          </div>

                          {/* Period */}
                          <div className="flex items-center gap-2 text-xs font-semibold text-[#39402F]">
                            <Calendar className="w-3.5 h-3.5 text-[#405C3A] shrink-0" />
                            <span>{exp.period}</span>
                          </div>

                          {/* Location */}
                          <div className="flex items-center gap-2 text-[11px] text-[#77745F]">
                            <MapPin className="w-3.5 h-3.5 text-[#77745F] shrink-0" />
                            <span>{exp.location}</span>
                          </div>
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
      )}
    </div>
  );
};
