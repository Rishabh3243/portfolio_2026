import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Camera,
  Layers,
  Zap,
  Gauge,
  Activity,
  HardDrive,
  Maximize2,
  ChevronRight,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import {
  SiliconCategory,
  SocSubcategory,
  HardwareProfile,
  siliconCategories,
  socSubcategories,
  hardwareProfiles,
} from '../data/silicon';

const pipelineSteps = [
  {
    step: '01',
    name: 'Camera Ingestion',
    tech: 'RTSP / MIPI / USB',
    desc: 'Fault-tolerant ingestion across IP & MIPI sensors with zero packet drop buffer.',
    icon: Camera,
  },
  {
    step: '02',
    name: 'Preprocessing',
    tech: 'OpenCV / Zero-Copy',
    desc: 'Hardware color space conversion, letterboxing, & normalized tensor packing.',
    icon: Layers,
  },
  {
    step: '03',
    name: 'AI Model Graph',
    tech: 'PyTorch / YOLO / OCR',
    desc: 'Deep learning weights trained and exported into frozen computation graphs.',
    icon: Activity,
  },
  {
    step: '04',
    name: 'Quantization',
    tech: 'INT8 / FP16 PTQ',
    desc: 'Layer fusion, weight pruning, and hardware-aware precision calibration.',
    icon: Zap,
  },
  {
    step: '05',
    name: 'Edge Accelerator',
    tech: 'TensorRT / RKNN / eIQ',
    desc: 'Direct compilation to native serialized binaries for NPU and GPU runtimes.',
    icon: Cpu,
  },
  {
    step: '06',
    name: 'Real-Time Output',
    tech: 'FastAPI / WebSocket',
    desc: 'Deterministic sub-20ms inference events delivered to client backends.',
    icon: Gauge,
  },
];

export const EdgeAI: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SiliconCategory>('SOC');
  const [selectedSocSub, setSelectedSocSub] = useState<SocSubcategory>('all');
  const [selectedHwId, setSelectedHwId] = useState<string>('nvidia-jetson-orin');

  // Filter profiles based on selected category & SOC subcategory
  const categoryProfiles = hardwareProfiles.filter((hw) => hw.category === selectedCategory);
  
  const filteredProfiles =
    selectedCategory === 'SOC' && selectedSocSub !== 'all'
      ? categoryProfiles.filter((hw) => hw.socType === selectedSocSub)
      : categoryProfiles;

  // Active selected device
  const activeDevice: HardwareProfile =
    filteredProfiles.find((hw) => hw.id === selectedHwId) ||
    filteredProfiles[0] ||
    hardwareProfiles[0];

  const handleCategoryChange = (category: SiliconCategory) => {
    setSelectedCategory(category);
    const firstInCategory = hardwareProfiles.find((hw) => hw.category === category);
    if (firstInCategory) {
      setSelectedHwId(firstInCategory.id);
    }
  };

  const handleSocSubChange = (sub: SocSubcategory) => {
    setSelectedSocSub(sub);
    const firstInSub =
      sub === 'all'
        ? hardwareProfiles.find((hw) => hw.category === 'SOC')
        : hardwareProfiles.find((hw) => hw.category === 'SOC' && hw.socType === sub);
    if (firstInSub) {
      setSelectedHwId(firstInSub.id);
    }
  };

  return (
    <div className="paper-card p-5 sm:p-7 mb-8 shadow-cozy border border-[#DCD4BC]">
      <SectionHeading
        eyebrow="Hardware Acceleration Lab"
        title="Edge AI Lab & Silicon Optimization"
        subtitle="Optimizing and deploying vision neural networks directly onto power-constrained edge silicon, SBCs, SOMs, sensors, and MCUs."
      />

      {/* Real Benchmark Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
        <div className="p-4 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC]">
          <div className="flex items-center justify-between mb-1.5 text-xs font-mono text-[#405C3A] font-semibold uppercase">
            <span>Throughput Uplift</span>
            <Activity className="w-4 h-4 text-[#405C3A]" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#39402F] mb-0.5">
            +30% FPS
          </div>
          <div className="text-[11px] text-[#77745F]">
            Measured via TensorRT FP16/INT8
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC]">
          <div className="flex items-center justify-between mb-1.5 text-xs font-mono text-[#405C3A] font-semibold uppercase">
            <span>Memory Footprint</span>
            <HardDrive className="w-4 h-4 text-[#405C3A]" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#39402F] mb-0.5">
            -50% RAM
          </div>
          <div className="text-[11px] text-[#77745F]">
            Drop achieved via weight pruning
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC]">
          <div className="flex items-center justify-between mb-1.5 text-xs font-mono text-[#405C3A] font-semibold uppercase">
            <span>Inference Speed</span>
            <Gauge className="w-4 h-4 text-[#405C3A]" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#39402F] mb-0.5">
            60 FPS
          </div>
          <div className="text-[11px] text-[#77745F]">
            Sustained real-time on edge compute
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC]">
          <div className="flex items-center justify-between mb-1.5 text-xs font-mono text-[#B59A5A] font-semibold uppercase">
            <span>Global Expos</span>
            <Maximize2 className="w-4 h-4 text-[#B59A5A]" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#39402F] mb-0.5">
            CES &bull; EW
          </div>
          <div className="text-[11px] text-[#77745F]">
            CES, Embedded World, Japan IT Week
          </div>
        </div>
      </div>

      {/* Model ➔ Optimization ➔ Hardware ➔ Inference Pipeline */}
      <div className="mb-10">
        <div className="text-xs font-mono uppercase tracking-wider text-[#405C3A] font-semibold mb-3">
          Hardware / Software Pipeline Architecture
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {pipelineSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="p-3.5 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#405C3A] bg-[#E8E1C9] px-1.5 py-0.5 rounded">
                      {step.step}
                    </span>
                    <Icon className="w-4 h-4 text-[#405C3A]" />
                  </div>
                  <div className="text-xs font-bold text-[#39402F] mb-0.5">
                    {step.name}
                  </div>
                  <div className="text-[10px] font-mono text-[#77745F] mb-2">
                    {step.tech}
                  </div>
                </div>
                <p className="text-[11px] text-[#77745F] leading-snug">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Target Silicon Profiles Section */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#405C3A] font-bold">
              Target Silicon Profiles
            </div>
            <p className="text-xs text-[#77745F] mt-0.5">
              Production-tested silicon architectures across SOC, SBC, SOM, Sensors, and MCUs.
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#77745F] bg-[#FAF7EE] px-2.5 py-1 rounded-lg border border-[#DCD4BC] self-start sm:self-auto shrink-0">
            {hardwareProfiles.length} Targets
          </span>
        </div>

        {/* 1. Main Category Tabs: SOC | SBC | SOM | SENSORS | MCU */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-3">
          {siliconCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = hardwareProfiles.filter((hw) => hw.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`p-2.5 rounded-xl text-left border transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-[#405C3A] text-[#FAF7EE] border-[#344C30] shadow-sm'
                    : 'bg-[#FAF7EE] text-[#39402F] border-[#DCD4BC] hover:bg-[#F2ECD8]'
                }`}
              >
                {/* Category Thumbnail Image */}
                <div
                  className={`w-8 h-8 rounded-lg p-1 shrink-0 flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#344C30] border border-[#506B42]'
                      : 'bg-[#E8E1C9] border border-[#DCD4BC]'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`text-xs font-bold font-mono ${
                        isSelected ? 'text-[#FAF7EE]' : 'text-[#39402F]'
                      }`}
                    >
                      {cat.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? 'bg-[#344C30] text-[#E8E1C9]'
                          : 'bg-[#E8E1C9] text-[#405C3A]'
                      }`}
                    >
                      {count}
                    </span>
                  </div>
                  <div
                    className={`text-[10px] truncate ${
                      isSelected ? 'text-[#E8E1C9]' : 'text-[#77745F]'
                    }`}
                  >
                    {cat.tagline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Secondary SOC Subcategory Selector (when SOC is active) */}
        <AnimatePresence>
          {selectedCategory === 'SOC' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden mb-3.5"
            >
              <div className="p-2 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#39402F]">
                  <Sliders className="w-3.5 h-3.5 text-[#405C3A]" />
                  <span>SoC Cores:</span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {socSubcategories.map((sub) => {
                    const isSubSelected = selectedSocSub === sub.id;
                    const subCount =
                      sub.id === 'all'
                        ? hardwareProfiles.filter((hw) => hw.category === 'SOC').length
                        : hardwareProfiles.filter(
                            (hw) => hw.category === 'SOC' && hw.socType === sub.id
                          ).length;

                    return (
                      <button
                        key={sub.id}
                        onClick={() => handleSocSubChange(sub.id)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all border ${
                          isSubSelected
                            ? 'bg-[#E8E1C9] text-[#39402F] border-[#405C3A] font-bold shadow-xs'
                            : 'bg-[#FAF7EE] text-[#77745F] border-[#DCD4BC] hover:bg-[#F2ECD8] hover:text-[#39402F]'
                        }`}
                      >
                        <img
                          src={sub.image}
                          alt={sub.label}
                          className="w-3.5 h-3.5 object-contain"
                        />
                        <span>{sub.label}</span>
                        <span
                          className={`text-[10px] px-1 rounded ${
                            isSubSelected
                              ? 'bg-[#405C3A] text-[#FAF7EE]'
                              : 'bg-[#E8E1C9] text-[#77745F]'
                          }`}
                        >
                          {subCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. Hardware Targets Matrix: List Selector (Left) & Streamlined Details Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
          {/* Hardware List Selector */}
          <div className="lg:col-span-5 space-y-2">
            {filteredProfiles.map((hw) => {
              const isSelected = activeDevice.id === hw.id;
              return (
                <button
                  key={hw.id}
                  onClick={() => setSelectedHwId(hw.id)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all border flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#FAF7EE] border-[#405C3A] shadow-xs text-[#39402F]'
                      : 'bg-[#FAF7EE]/60 border-[#DCD4BC] text-[#77745F] hover:bg-[#FAF7EE] hover:text-[#39402F]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-[#E8E1C9]/80 border border-[#DCD4BC] p-1 flex items-center justify-center shrink-0">
                      <img
                        src={hw.image}
                        alt={hw.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-xs sm:text-sm text-[#39402F] truncate">
                          {hw.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#E8E1C9] text-[#405C3A] font-semibold shrink-0">
                          {hw.vendor}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#77745F] truncate mt-0.5">
                        {hw.badge}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#405C3A] translate-x-0.5' : 'text-[#DCD4BC]'
                    }`}
                  />
                </button>
              );
            })}

            {filteredProfiles.length === 0 && (
              <div className="p-6 text-center text-xs text-[#77745F] bg-[#FAF7EE] rounded-xl border border-[#DCD4BC]">
                No profiles match this filter.
              </div>
            )}
          </div>

          {/* Selected Hardware Details Card (Streamlined: Key Information Only) */}
          <div className="lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-[#FAF7EE] border border-[#DCD4BC] flex flex-col justify-between">
            <div className="space-y-3.5">
              {/* Header: Image, Title, Vendor & Badge */}
              <div className="flex items-center gap-3 pb-3 border-b border-[#DCD4BC]">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-[#E8E1C9]/80 border border-[#DCD4BC] p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src={activeDevice.image}
                    alt={activeDevice.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#405C3A] uppercase">
                      {activeDevice.vendor}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E8E1C9] text-[#39402F] font-semibold border border-[#D4CCA8]">
                      {activeDevice.badge}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#39402F] mt-0.5 truncate">
                    {activeDevice.name}
                  </h4>
                </div>
              </div>

              {/* Core Information: Only Top Important Specs (Architecture & Key Highlight) */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC]">
                  <div className="font-mono text-[#77745F] uppercase text-[10px] font-semibold mb-0.5">
                    Architecture
                  </div>
                  <div className="text-[#39402F] font-medium leading-relaxed">
                    {activeDevice.architecture}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#E8E1C9]/70 border border-[#DCD4BC] flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#405C3A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[#405C3A] uppercase text-[10px] font-bold block mb-0.5">
                      Key Highlight
                    </span>
                    <span className="text-[#39402F] leading-relaxed">
                      {activeDevice.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Key Frameworks Only */}
            <div className="pt-3 mt-3.5 border-t border-[#DCD4BC] flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono text-[#77745F] uppercase">
                Frameworks:
              </span>
              {activeDevice.runtimes.map((rt) => (
                <span
                  key={rt}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#E8E1C9] text-[#39402F] border border-[#D4CCA8]"
                >
                  {rt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
