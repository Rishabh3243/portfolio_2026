import React, { useState } from 'react';
import {
  Sparkles,
  Database,
  Search,
  Cpu,
  CheckCircle2,
  Sliders,
  FileText,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface RAGDemoQuery {
  id: string;
  query: string;
  type: 'Document Grounded' | 'General Conversational';
  simScore: number;
  routedTo: 'ChromaDB Vector Retrieval' | 'Direct Conversational Memory';
  retrievedSnippet?: string;
  sourceDoc?: string;
  llmOutput: string;
}

const sampleQueries: RAGDemoQuery[] = [
  {
    id: 'q1',
    query: 'What was the inference latency improvement achieved on Jetson Orin?',
    type: 'Document Grounded',
    simScore: 0.89,
    routedTo: 'ChromaDB Vector Retrieval',
    retrievedSnippet: 'TensorRT FP16 quantization demonstrated up to 30% faster throughput and 50% lower memory footprint across Jetson and NXP i.MX 8M Plus platforms.',
    sourceDoc: 'embedded_benchmarks_report.pdf (Page 4, Chunk #12)',
    llmOutput: 'According to the benchmark records, TensorRT FP16 quantization provided up to a 30% throughput uplift and a 50% reduction in memory consumption.',
  },
  {
    id: 'q2',
    query: 'Hello, can you explain how adaptive similarity routing works?',
    type: 'General Conversational',
    simScore: 0.42,
    routedTo: 'Direct Conversational Memory',
    retrievedSnippet: 'Similarity score (0.42) is below retrieval threshold (0.75). Vector lookup bypassed to prevent hallucinated chunk injection.',
    sourceDoc: 'Internal Dual-Layer Memory',
    llmOutput: 'Adaptive routing calculates cosine similarity against document embeddings. If similarity falls below 0.75, it avoids injecting unrelated document snippets.',
  },
];

export const GenAI: React.FC = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState<number>(0);
  const activeQuery = sampleQueries[activeQueryIndex];

  return (
    <div className="paper-card p-5 sm:p-7 mb-8 shadow-cozy border border-[#DCD4BC]">
      <SectionHeading
        eyebrow="Retrieval & Language Systems"
        title="Generative AI & LLM Engineering"
        subtitle="Deterministic local RAG pipelines, ChromaDB persistent vector retrieval, and adaptive similarity-based query routing."
      />

      {/* Tech pills row */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          'Local 360M LLMs',
          'ChromaDB Vector DB',
          'LangChain',
          'LangGraph',
          'Adaptive Routing',
          'Dual-Layer Memory',
          'Semantic Chunking',
          'FastAPI Backend',
        ].map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#FAF7EE] text-[#405C3A] border border-[#DCD4BC]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Document ➔ Embedding ➔ Vector Database ➔ Retriever ➔ LLM ➔ Response */}
      <div className="p-6 rounded-2xl bg-[#FAF7EE] border border-[#DCD4BC] mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-[#DCD4BC]">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#405C3A] font-semibold uppercase">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Pipeline Simulation</span>
            </div>
            <h3 className="text-base font-bold text-[#39402F]">
              Document ➔ Vector DB ➔ Adaptive Retriever ➔ Local LLM
            </h3>
          </div>

          {/* Query Selector Tabs */}
          <div className="flex items-center gap-2">
            {sampleQueries.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => setActiveQueryIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                  activeQueryIndex === idx
                    ? 'bg-[#405C3A] text-[#F6F0DC] border-[#405C3A] shadow-xs'
                    : 'bg-[#E8E1C9] text-[#39402F] border-[#DCD4BC] hover:bg-[#DCD4BC]'
                }`}
              >
                Sample Query #{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Current Query Inspector */}
        <div className="p-3.5 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] mb-6">
          <div className="text-[10px] font-mono text-[#77745F] uppercase mb-0.5">
            Test Input Query:
          </div>
          <div className="text-xs sm:text-sm font-medium text-[#39402F]">
            "{activeQuery.query}"
          </div>
        </div>

        {/* Step-by-Step Flow */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5 mb-6">
          <div className="p-3 rounded-xl bg-[#F2ECD8] border border-[#DCD4BC] text-center">
            <Search className="w-4 h-4 text-[#405C3A] mx-auto mb-1.5" />
            <div className="text-[11px] font-bold text-[#39402F]">User Query</div>
            <div className="text-[10px] font-mono text-[#77745F]">Tokenized</div>
          </div>

          <div className="p-3 rounded-xl bg-[#F2ECD8] border border-[#DCD4BC] text-center">
            <Sliders className="w-4 h-4 text-[#405C3A] mx-auto mb-1.5" />
            <div className="text-[11px] font-bold text-[#39402F]">Router</div>
            <div className="text-[10px] font-mono text-[#405C3A] font-semibold">
              Sim: {activeQuery.simScore}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#F2ECD8] border border-[#DCD4BC] text-center">
            <Database className="w-4 h-4 text-[#405C3A] mx-auto mb-1.5" />
            <div className="text-[11px] font-bold text-[#39402F]">ChromaDB</div>
            <div className="text-[10px] font-mono text-[#77745F]">Vector Store</div>
          </div>

          <div className="p-3 rounded-xl bg-[#F2ECD8] border border-[#DCD4BC] text-center">
            <FileText className="w-4 h-4 text-[#405C3A] mx-auto mb-1.5" />
            <div className="text-[11px] font-bold text-[#39402F]">Context</div>
            <div className="text-[10px] font-mono text-[#77745F]">Dual Memory</div>
          </div>

          <div className="p-3 rounded-xl bg-[#F2ECD8] border border-[#DCD4BC] text-center">
            <Cpu className="w-4 h-4 text-[#405C3A] mx-auto mb-1.5" />
            <div className="text-[11px] font-bold text-[#39402F]">Local LLM</div>
            <div className="text-[10px] font-mono text-[#405C3A] font-semibold">360M Param</div>
          </div>

          <div className="p-3 rounded-xl bg-[#F2ECD8] border border-[#DCD4BC] text-center">
            <Sparkles className="w-4 h-4 text-[#B59A5A] mx-auto mb-1.5" />
            <div className="text-[11px] font-bold text-[#39402F]">Response</div>
            <div className="text-[10px] font-mono text-[#77745F]">With Citation</div>
          </div>
        </div>

        {/* Verification Output Console */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#DCD4BC]">
              <span className="font-mono text-[#77745F] text-[10px] uppercase font-bold">
                Retrieval Verification
              </span>
              <span className="px-2 py-0.2 rounded text-[10px] font-mono font-bold bg-[#FAF7EE] text-[#405C3A] border border-[#DCD4BC]">
                {activeQuery.simScore >= 0.75 ? 'DOCUMENT GROUNDED' : 'CONVERSATIONAL'}
              </span>
            </div>
            <div className="space-y-1.5 text-[#39402F]">
              <div>
                <span className="text-[#77745F]">Routing Decision: </span>
                <span className="font-semibold text-[#405C3A]">{activeQuery.routedTo}</span>
              </div>
              <div>
                <span className="text-[#77745F]">Source Document: </span>
                <span className="font-mono text-[11px] text-[#39402F]">{activeQuery.sourceDoc}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF7EE] border border-[#DCD4BC] mt-2 text-[#77745F] text-[11px] leading-relaxed">
                "{activeQuery.retrievedSnippet}"
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#DCD4BC]">
              <span className="font-mono text-[#77745F] text-[10px] uppercase font-bold">
                Local LLM Generated Response
              </span>
              <span className="text-[10px] font-mono text-[#405C3A] font-semibold">
                Latency: 18ms
              </span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7EE] border border-[#DCD4BC] text-xs text-[#39402F] leading-relaxed mb-2 font-medium">
              {activeQuery.llmOutput}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#405C3A]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Grounded Citation &bull; Zero Hallucination Verified</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
