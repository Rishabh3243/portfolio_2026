import React, { useState } from 'react';
import { Eye, Cpu, Sparkles, Bot, Server, CheckCircle2, Layers } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface CategoryData {
  id: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  technologies: string[];
  keyCapabilities: string[];
  samplePipeline: string;
}

const categories: CategoryData[] = [
  {
    id: 'cv',
    title: 'Computer Vision',
    icon: Eye,
    tagline: 'Real-Time Spatial Perception & Object Analytics',
    description: 'High-throughput video analytics pipelines for low-latency detection, multi-object tracking, and text OCR across live industrial camera streams.',
    technologies: ['Object Detection', 'Classification', 'Segmentation', 'OCR', 'Object Tracking', 'YOLO (v5/v8/v11)', 'OpenCV', 'PaddleOCR', 'PyTorch'],
    keyCapabilities: [
      'Multi-stream RTSP, USB, CSI, and MIPI camera ingestion',
      'Custom detection models (mobile phone, item tracking, vehicles)',
      'DeepSORT & ByteTrack spatial trajectory analysis',
      'CPU & NPU-accelerated OCR text recognition engines',
    ],
    samplePipeline: 'Camera Stream ➔ Frame Decode ➔ YOLO Detection ➔ ByteTrack Tracking ➔ PaddleOCR ➔ JSON Event',
  },
  {
    id: 'edge',
    title: 'Edge AI',
    icon: Cpu,
    tagline: 'Deep Learning on Power-Constrained Silicon',
    description: 'Hardware-aware acceleration using FP16/INT8 post-training quantization, memory footprint pruning, and platform-specific compilation for NPUs and embedded SBCs.',
    technologies: ['NVIDIA Jetson', 'NXP i.MX 8M Plus', 'Rockchip', 'Axelera AI', 'Raspberry Pi', 'ONNX Runtime', 'TensorRT', 'RKNN', 'TFLite'],
    keyCapabilities: [
      'Engineered showcase prototypes exhibited at CES, Embedded World, EuroShop',
      'Achieved up to 30% faster throughput & 50% memory reduction',
      'Deployment on Sony IMX500, MediaTek Arbor, and DeepX NPUs',
      'Zero-drift thermal and runtime monitoring on headless Linux',
    ],
    samplePipeline: 'PyTorch .pt ➔ ONNX Graph ➔ Calibration & Quantization (INT8) ➔ TensorRT / RKNN Engine ➔ Edge Inference',
  },
  {
    id: 'genai',
    title: 'Generative AI',
    icon: Sparkles,
    tagline: 'Context-Aware Retrieval & Local Language Models',
    description: 'Privacy-first document QA architectures, semantic vector retrieval, and adaptive similarity-based query routers powering multi-turn conversational intelligence.',
    technologies: ['LLMs', 'RAG', 'Embeddings', 'Vector Databases', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Document QA'],
    keyCapabilities: [
      'ChromaDB persistent vector stores with semantic chunking',
      'Threshold-based adaptive query routing eliminating hallucination',
      'Dual-layer rolling conversation memory (recent context + neural summary)',
      'Optimized lightweight 360M local LLMs with FastAPI backends',
    ],
    samplePipeline: 'User Query ➔ Semantic Router ➔ Vector Retriever (ChromaDB) ➔ Context Assembly ➔ Local LLM ➔ Citation Response',
  },
  {
    id: 'agents',
    title: 'AI Agents',
    icon: Bot,
    tagline: 'Autonomous Execution & Multi-Step Reasoning',
    description: 'Engineering reliable autonomous agents utilizing LangGraph state machines, cyclical reasoning graphs, and structured tool-calling sandboxes.',
    technologies: ['Tool Calling', 'Agent Workflows', 'LangGraph', 'Function Calling', 'Multi-step Reasoning', 'API Integration'],
    keyCapabilities: [
      'Stateful graph execution with cyclic feedback loops',
      'Dynamic tool invocation across databases, search APIs, and scripts',
      'Deterministic error correction and execution checkpoints',
      'Decoupled REST microservices for production orchestration',
    ],
    samplePipeline: 'User Objective ➔ Planner Node ➔ Reasoning & Tool Selection ➔ Sandboxed API Exec ➔ State Evaluation ➔ Solution',
  },
  {
    id: 'deployment',
    title: 'Deployment & DevOps',
    icon: Server,
    tagline: 'Robust Production Microservices & Linux Pipelines',
    description: 'High-performance asynchronous inference APIs, containerized environments, automated edge deployment scripts, and on-site client hardware calibration.',
    technologies: ['Docker', 'FastAPI', 'Linux (Ubuntu)', 'REST APIs', 'ONNX', 'Model Optimization', 'Quantization', 'Pruning'],
    keyCapabilities: [
      'Multi-stage Docker builds for minimal container footprint',
      'FastAPI asynchronous REST endpoints with schema validation',
      'Automated Linux Bash setup and systemd edge daemon scripts',
      'On-site client deployment, live validation, and latency tuning',
    ],
    samplePipeline: 'Model Container ➔ Docker Multi-Stage ➔ FastAPI Asynchronous Worker ➔ Reverse Proxy / Nginx ➔ Client UI',
  },
];

export const ComputerVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cv');
  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];
  const ActiveIcon = activeCategory.icon;

  return (
    <div className="paper-card p-5 sm:p-7 mb-8 shadow-cozy border border-[#DCD4BC]">
      <SectionHeading
        eyebrow="Specialization Matrix"
        title="What I Build"
        subtitle="End-to-end technical capabilities across Computer Vision, Edge Silicon, Generative AI, and Deployment."
      />

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = activeTab === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-[#405C3A] text-[#F6F0DC] border-[#405C3A] shadow-xs'
                  : 'bg-[#FAF7EE] text-[#77745F] border-[#DCD4BC] hover:text-[#39402F]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Domain Panel */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF7EE] border border-[#DCD4BC]">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] text-[#405C3A]">
            <ActiveIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#39402F]">
              {activeCategory.title}
            </h3>
            <div className="text-xs font-mono text-[#405C3A]">
              {activeCategory.tagline}
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#77745F] leading-relaxed mb-6">
          {activeCategory.description}
        </p>

        {/* Key capabilities */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-mono uppercase text-[#77745F] font-semibold">
            Key Implementations
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activeCategory.keyCapabilities.map((cap, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-[#39402F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#405C3A] shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline Diagram */}
        <div className="p-3.5 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] mb-6">
          <div className="text-[10px] font-mono uppercase text-[#77745F] mb-1.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#405C3A]" />
            <span>Execution Pipeline</span>
          </div>
          <div className="text-xs font-mono text-[#39402F] overflow-x-auto whitespace-nowrap py-1">
            {activeCategory.samplePipeline}
          </div>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#DCD4BC]">
          {activeCategory.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#F2ECD8] text-[#405C3A] border border-[#DCD4BC]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
