import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap border ${
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
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap border ${
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

      {/* Categories & Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="paper-card p-5 hover:bg-[#F6F0DC] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm sm:text-base text-[#39402F]">
                    {category.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E8E1C9] text-[#77745F] border border-[#DCD4BC]">
                    {category.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-[#77745F] mb-4 leading-relaxed font-normal">
                  {category.description}
                </p>

                {/* Soft Pills Tag Cloud */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all border ${
                        skill.highlight
                          ? 'bg-[#E8E1C9] text-[#344C30] border-[#8A9A62] font-semibold'
                          : 'bg-[#FAF7EE] text-[#39402F] border-[#DCD4BC]'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
                      )}
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[9px] text-[#77745F]">
                          &bull; {skill.level}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
