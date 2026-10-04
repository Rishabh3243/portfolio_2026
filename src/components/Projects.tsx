import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectCategory } from '../types';

const categories: ProjectCategory[] = [
  'All',
  'Computer Vision',
  'Edge AI',
  'GenAI',
  'LLM',
  'AI Agents',
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All'
          ? true
          : activeCategory === 'LLM'
          ? project.category === 'GenAI' ||
            project.category === 'LLM' ||
            project.technologies.some((t) => t.toLowerCase().includes('llm'))
          : project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div>
      {/* Filters & Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const count =
              cat === 'All'
                ? projectsData.length
                : cat === 'LLM'
                ? projectsData.filter(
                    (p) =>
                      p.category === 'GenAI' ||
                      p.category === 'LLM' ||
                      p.technologies.some((t) => t.toLowerCase().includes('llm'))
                  ).length
                : projectsData.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-[#405C3A] text-[#F6F0DC] border-[#344C30] shadow-xs font-semibold'
                    : 'bg-[#FAF7EE] text-[#77745F] border-[#DCD4BC] hover:text-[#39402F] hover:bg-[#F2ECD8]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-[#344C30] text-[#F6F0DC] font-bold'
                      : 'bg-[#E8E1C9] text-[#506B42]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-3.5 h-3.5 text-[#77745F] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech or names..."
            className="w-full pl-8 pr-3.5 py-1.5 bg-[#FAF7EE] border border-[#DCD4BC] rounded-xl text-xs font-mono text-[#39402F] placeholder:text-[#77745F] focus:outline-none focus:border-[#405C3A]"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-[#F2ECD8] rounded-2xl border border-[#DCD4BC] text-[#77745F] font-mono text-xs">
          No projects matched your criteria. Try adjusting the search query or category filter.
        </div>
      )}
    </div>
  );
};
