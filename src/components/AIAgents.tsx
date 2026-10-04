import React from 'react';
import {
  Bot,
  User,
  Cpu,
  Workflow,
  Search,
  Database,
  Code,
  CheckCircle2,
  RefreshCw,
  Terminal,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const agentTools = [
  {
    name: 'Vector & SQL DB Tool',
    desc: 'Structured SQL queries & semantic vector similarity retrieval',
    icon: Database,
  },
  {
    name: 'Search & Ingestion Tool',
    desc: 'Live web scraping, technical documentation indexing, & text parsing',
    icon: Search,
  },
  {
    name: 'REST API Executor',
    desc: 'Authenticated HTTP calls against edge endpoints & microservices',
    icon: Workflow,
  },
  {
    name: 'Python Code Sandbox',
    desc: 'Isolated mathematical computation, tensor reshaping, & data formatting',
    icon: Code,
  },
];

export const AIAgents: React.FC = () => {
  return (
    <div className="paper-card p-5 sm:p-7 mb-8 shadow-cozy border border-[#DCD4BC]">
      <SectionHeading
        eyebrow="Agentic Workflows"
        title="Autonomous AI Agents & LangGraph"
        subtitle="Stateful multi-step reasoning loops, cyclic tool execution, and deterministic action pipelines."
      />

      {/* Engineering Philosophy Banner */}
      <div className="p-4 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] mb-8 text-xs sm:text-sm text-[#77745F] leading-relaxed">
        <strong className="text-[#39402F] font-semibold">Practical System Focus: </strong>
        Building practical AI architectures that autonomously call tools, query live databases, and self-correct across multi-step execution graphs — beyond simple chatbot interfaces.
      </div>

      {/* Architecture Flow: User ➔ LLM ➔ Agent ➔ Tools ➔ Result */}
      <div className="p-6 rounded-2xl bg-[#FAF7EE] border border-[#DCD4BC] mb-8">
        <div className="text-xs font-mono uppercase tracking-wider text-[#405C3A] font-semibold mb-4">
          Stateful LangGraph Architecture
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center mb-8">
          {/* Node 1: User */}
          <div className="p-4 rounded-xl bg-[#F2ECD8] border border-[#DCD4BC] text-center">
            <User className="w-5 h-5 text-[#405C3A] mx-auto mb-1.5" />
            <div className="text-xs font-bold text-[#39402F]">1. User Goal</div>
            <div className="text-[10px] font-mono text-[#77745F]">Task Input</div>
          </div>

          {/* Node 2: LLM Planner */}
          <div className="p-4 rounded-xl bg-[#F2ECD8] border border-[#DCD4BC] text-center">
            <Cpu className="w-5 h-5 text-[#405C3A] mx-auto mb-1.5" />
            <div className="text-xs font-bold text-[#39402F]">2. LLM Planner</div>
            <div className="text-[10px] font-mono text-[#77745F]">Step Decomp</div>
          </div>

          {/* Node 3: Agent Router */}
          <div className="p-4 rounded-xl bg-[#F2ECD8] border border-[#405C3A] text-center shadow-xs">
            <Workflow className="w-5 h-5 text-[#405C3A] mx-auto mb-1.5" />
            <div className="text-xs font-bold text-[#39402F]">3. Agent State</div>
            <div className="text-[10px] font-mono text-[#405C3A] font-semibold">Cyclic Loop</div>
          </div>

          {/* Node 4: Tools Sandbox */}
          <div className="p-4 rounded-xl bg-[#F2ECD8] border border-[#DCD4BC] text-center">
            <Database className="w-5 h-5 text-[#405C3A] mx-auto mb-1.5" />
            <div className="text-xs font-bold text-[#39402F]">4. Tool Execution</div>
            <div className="text-[10px] font-mono text-[#77745F]">Sandboxed APIs</div>
          </div>

          {/* Node 5: Result */}
          <div className="p-4 rounded-xl bg-[#F2ECD8] border border-[#B59A5A] text-center">
            <Bot className="w-5 h-5 text-[#B59A5A] mx-auto mb-1.5" />
            <div className="text-xs font-bold text-[#39402F]">5. Verified Result</div>
            <div className="text-[10px] font-mono text-[#77745F]">State Persisted</div>
          </div>
        </div>

        {/* Tool Sandboxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {agentTools.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className="p-3.5 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC]"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-[#405C3A]" />
                  <span className="text-xs font-bold text-[#39402F]">{t.name}</span>
                </div>
                <p className="text-[11px] text-[#77745F] leading-snug">
                  {t.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Production Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#77745F]">
        <div className="p-3.5 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#405C3A] shrink-0 mt-0.5" />
          <span>Strict schema validation via Pydantic models</span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#405C3A] shrink-0 mt-0.5" />
          <span>Infinite cycle detection &amp; error self-correction</span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#405C3A] shrink-0 mt-0.5" />
          <span>FastAPI async endpoints with background task state</span>
        </div>
      </div>

    </div>
  );
};
