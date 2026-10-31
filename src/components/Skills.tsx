import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Terminal,
  Cpu,
  Eye,
  Zap,
  Sparkles,
  Server,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { skillCategories } from '../data/skills';

const categoryIcons: Record<string, React.ElementType> = {
  programming: Terminal,
  aiml: Cpu,
  computervision: Eye,
  edgeai: Zap,
  genai: Sparkles,
  devops: Server,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isAllView = selectedCategory === 'all' && !searchQuery.trim();

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => (selectedCategory === 'all' ? true : cat.id === selectedCategory))
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const filteredSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );
        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <SectionHeading
        eyebrow="Toolchain &amp; Expertise"
        title="Skills &amp; Technologies"
        subtitle="Categorized proficiency across deep learning frameworks, embedded runtimes, and engineering languages."
      />

      {/* Filter Controls & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap border cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#405C3A] text-[#F6F0DC] border-[#405C3A] shadow-xs font-semibold'
                : 'bg-[#FAF7EE] text-[#77745F] border-[#DCD4BC] hover:text-[#39402F]'
            }`}
          >
            All Toolchains
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#405C3A] text-[#F6F0DC] border-[#405C3A] shadow-xs font-semibold'
                  : 'bg-[#FAF7EE] text-[#77745F] border-[#DCD4BC] hover:text-[#39402F]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Quick Search */}
        <div className="relative w-full md:w-60">
          <Search className="w-3.5 h-3.5 text-[#77745F] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technology..."
            className="w-full pl-8 pr-3 py-1.5 bg-[#FAF7EE] border border-[#DCD4BC] rounded-xl text-xs font-mono text-[#39402F] placeholder:text-[#77745F] focus:outline-none focus:border-[#405C3A]"
          />
        </div>
      </div>

      {/* Back to All Toolchains button when in specific category view */}
      {selectedCategory !== 'all' && !searchQuery.trim() && (
        <div className="mb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#405C3A] hover:text-[#344C30] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Toolchains</span>
          </button>
        </div>
      )}

      {/* Categories & Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Terminal;

            // In "All Toolchains" view: Render Title Card only (not detailed)
            if (isAllView) {
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className="paper-card p-5 sm:p-6 hover:bg-[#F6F0DC] transition-all flex flex-col justify-between cursor-pointer group hover:border-[#405C3A] hover:shadow-cozy"
                  title={`Click to view detailed skills for ${category.title}`}
                >
                  <div>
                    {/* Header: Category Icon + Skill Count */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] text-[#405C3A] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E8E1C9] text-[#405C3A] font-semibold border border-[#DCD4BC]">
                        {category.skills.length} skills
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-base text-[#39402F] mb-1.5 group-hover:text-[#405C3A] transition-colors font-sans">
                      {category.title}
                    </h3>

                    {/* Description Summary */}
                    <p className="text-xs text-[#77745F] leading-relaxed font-normal">
                      {category.description}
                    </p>
                  </div>

                  {/* Title Card Action Link */}
                  <div className="pt-3.5 mt-3.5 border-t border-[#DCD4BC] flex items-center justify-between text-xs font-mono font-semibold text-[#405C3A]">
                    <span className="group-hover:underline">Explore Technologies</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            }

            // Detailed view (Specific category selected or active search)
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className={`paper-card p-5 sm:p-6 transition-all flex flex-col justify-between ${
                  selectedCategory !== 'all' ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] text-[#405C3A]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-[#39402F] font-sans">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E8E1C9] text-[#77745F] border border-[#DCD4BC]">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <p className="text-xs text-[#77745F] mb-5 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  {/* Detailed Skill Pills Tag Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                          skill.highlight
                            ? 'bg-[#E8E1C9] text-[#344C30] border-[#8A9A62] font-semibold shadow-2xs'
                            : 'bg-[#FAF7EE] text-[#39402F] border-[#DCD4BC]'
                        }`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-[#77745F]">
                            &bull; {skill.level}
                          </span>
                        )}
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
  );
};
