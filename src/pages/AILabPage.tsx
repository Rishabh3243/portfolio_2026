import React, { useState } from 'react';
import { EdgeAI } from '../components/EdgeAI';
import { GenAI } from '../components/GenAI';
import { AIAgents } from '../components/AIAgents';
import { ComputerVision } from '../components/ComputerVision';

type TabKey = 'all' | 'edge' | 'genai' | 'agents' | 'cv';

export const AILabPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('all');

  return (
    <div>
      {/* Page Header */}
      <div className="max-w-2xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#FAF7EE] border border-[#DCD4BC] text-[#405C3A] mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
          <span>Deep-Tech Research &amp; Deployments</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#39402F] tracking-tight mb-2 font-sans">
          AI Lab &amp; Architectures
        </h1>
        <p className="text-xs sm:text-sm text-[#77745F] leading-relaxed font-normal">
          An in-depth technical examination of hardware-accelerated Edge AI, local RAG architectures, and autonomous agent loops.
        </p>
      </div>

      {/* Quick Section Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
        {[
          { id: 'all', label: 'All Architectures' },
          { id: 'edge', label: 'Edge AI & Silicon' },
          { id: 'genai', label: 'Local RAG & LLMs' },
          { id: 'agents', label: 'Autonomous Agents' },
          { id: 'cv', label: '5-Domain Matrix' },
        ].map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabKey)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-[#405C3A] text-[#F6F0DC] border-[#344C30] shadow-xs font-semibold'
                  : 'bg-[#F2ECD8] text-[#77745F] border-[#DCD4BC] hover:text-[#39402F] hover:bg-[#FAF7EE]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Dynamic Sections Render */}
      <div className="space-y-12">
        {(activeTab === 'all' || activeTab === 'edge') && (
          <div>
            <EdgeAI />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'genai') && (
          <div>
            <GenAI />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'agents') && (
          <div>
            <AIAgents />
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'cv') && (
          <div>
            <ComputerVision />
          </div>
        )}
      </div>
    </div>
  );
};
