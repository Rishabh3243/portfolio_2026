import React from 'react';
import { Eye, Cpu, Sparkles, Bot, ChevronRight, Layers } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const AIStack: React.FC = () => {
  const { navigateTo } = useRouter();

  const focusCards = [
    {
      title: 'Autonomous AI Agents',
      desc: 'LangGraph stateful agent loops, tool-calling pipelines, cyclic reasoning graphs, and deterministic action execution.',
      icon: Bot,
      tag: 'LangGraph &bull; Cyclic States',
      motif: 'Multi-Step Tool Sandboxes',
    },
    {
      title: 'Generative AI & RAG',
      desc: 'Privacy-first local LLM systems with ChromaDB, persistent vector retrieval, and adaptive similarity-based query routing.',
      icon: Sparkles,
      tag: 'ChromaDB &bull; Local 360M LLM',
      motif: 'Semantic Vector Retrieval',
    },
    {
      title: 'Edge AI Lab',
      desc: 'Hardware-aware model optimization and quantization (TensorRT, RKNN, TFLite) for Jetson, NXP, Rockchip, and Axelera.',
      icon: Cpu,
      tag: 'INT8 PTQ &bull; +30% FPS',
      motif: 'NPU Hardware Acceleration',
    },
    {
      title: 'Computer Vision',
      desc: 'Real-time detection, segmentation, OCR, and tracking systems across multi-protocol RTSP/MIPI camera streams.',
      icon: Eye,
      tag: 'YOLOv8 &bull; PaddleOCR &bull; OpenCV',
      motif: 'Detection Grid &bull; 60 FPS',
    },
  ];

  return (
    <div className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-2">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#405C3A] font-semibold mb-1">
            Core Specializations
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#39402F]">
            Technical Focus Areas
          </h2>
        </div>
        <button
          onClick={() => navigateTo('/ai-lab')}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#405C3A] hover:text-[#344C30] transition-colors"
        >
          <span>Open AI Lab Deep-Dive</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {focusCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              onClick={() => navigateTo('/ai-lab')}
              className="paper-card p-5 hover:bg-[#F6F0DC] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="p-2.5 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] text-[#405C3A] group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-[#77745F] bg-[#E8E1C9] px-2 py-0.5 rounded-md border border-[#DCD4BC]">
                    {card.motif}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#39402F] mb-1.5 group-hover:text-[#405C3A] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#77745F] leading-relaxed mb-4 font-normal">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCD4BC] text-[11px] font-mono text-[#405C3A] flex items-center justify-between font-medium">
                <span dangerouslySetInnerHTML={{ __html: card.tag }} />
                <ChevronRight className="w-3.5 h-3.5 text-[#77745F] group-hover:text-[#405C3A] transition-colors" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
