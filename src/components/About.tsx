import React from 'react';
import { Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Narrative & Directives */}
      <div className="lg:col-span-8 paper-card p-6 sm:p-8 border border-[#DCD4BC]">
        <div className="flex items-center gap-2 font-mono text-xs text-[#405C3A] mb-4 uppercase tracking-wider font-semibold">
          <Terminal className="w-4 h-4" />
          <span>Engineering Profile &amp; Directives</span>
        </div>

        <div className="space-y-3.5 text-[#39402F] text-xs sm:text-sm leading-relaxed font-normal">
          {profileData.aboutText.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Core Directives */}
        <div className="mt-6 pt-5 border-t border-[#DCD4BC]">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#77745F] mb-3">
            Core Engineering Directives
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="flex items-start gap-2 text-xs text-[#39402F]">
              <CheckCircle2 className="w-4 h-4 text-[#405C3A] shrink-0 mt-0.5" />
              <span>Sub-20ms Real-Time Inference on Edge</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-[#39402F]">
              <CheckCircle2 className="w-4 h-4 text-[#405C3A] shrink-0 mt-0.5" />
              <span>INT8 / FP16 Quantization Calibration</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-[#39402F]">
              <CheckCircle2 className="w-4 h-4 text-[#405C3A] shrink-0 mt-0.5" />
              <span>Multi-Protocol Stream Ingestion (RTSP/MIPI)</span>
            </div>
            <div className="flex items-start gap-2 text-xs text-[#39402F]">
              <CheckCircle2 className="w-4 h-4 text-[#405C3A] shrink-0 mt-0.5" />
              <span>Deterministic Local RAG &amp; Agent Workflows</span>
            </div>
          </div>
        </div>
      </div>

      {/* Snapshot Metrics */}
      <div className="lg:col-span-4 space-y-4">
        <div className="paper-card p-6 border border-[#DCD4BC]">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#77745F] mb-4 font-semibold">
            Snapshot Metrics
          </h4>
          <div className="space-y-3.5">
            {profileData.stats.map((s) => (
              <div key={s.label} className="pb-3 border-b border-[#DCD4BC] last:border-b-0 last:pb-0">
                <div className="text-2xl font-bold font-mono text-[#39402F]">
                  {s.value}
                </div>
                <div className="text-xs text-[#405C3A] font-semibold">
                  {s.label}
                </div>
                <div className="text-[11px] text-[#77745F]">
                  {s.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] text-xs font-mono text-[#77745F] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#405C3A] shrink-0" />
          <span>Based in Ahmedabad, Gujarat, India</span>
        </div>
      </div>
    </div>
  );
};
