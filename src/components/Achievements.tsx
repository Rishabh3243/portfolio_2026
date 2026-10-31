import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, FileText, CheckCircle2, Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { achievementsData } from '../data/achievements';
import { Achievement } from '../types';

interface AchievementsProps {
  showHeader?: boolean;
}

const SIHTrophyIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 160 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sihGoldCup" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9E79F" />
        <stop offset="30%" stopColor="#D4AF37" />
        <stop offset="70%" stopColor="#B59A5A" />
        <stop offset="100%" stopColor="#8C7335" />
      </linearGradient>

      <linearGradient id="sihGoldShine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
        <stop offset="45%" stopColor="#FAF7EE" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
      </linearGradient>

      <linearGradient id="sihBaseGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#506B42" />
        <stop offset="50%" stopColor="#405C3A" />
        <stop offset="100%" stopColor="#2D4129" />
      </linearGradient>

      <linearGradient id="sihLaurelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8A9A62" />
        <stop offset="100%" stopColor="#405C3A" />
      </linearGradient>

      <radialGradient id="sihBadgeBackdrop" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FAF7EE" />
        <stop offset="70%" stopColor="#F2ECD8" />
        <stop offset="100%" stopColor="#E2D9BC" />
      </radialGradient>
    </defs>

    {/* Circular Badge Background */}
    <circle cx="80" cy="80" r="76" fill="url(#sihBadgeBackdrop)" />
    <circle cx="80" cy="80" r="75" stroke="#B59A5A" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
    <circle cx="80" cy="80" r="70" stroke="#DCD4BC" strokeWidth="1" />

    {/* Laurel Wreath Leaves (Left & Right framing) */}
    <g fill="url(#sihLaurelGrad)" opacity="0.95">
      {/* Left Branch */}
      <path d="M42 108 C36 94 36 76 46 60" fill="none" stroke="#405C3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 108 C38 104 34 100 37 96 C40 92 44 98 42 108 Z" />
      <path d="M38 95 C33 92 29 87 33 83 C37 79 40 86 38 95 Z" />
      <path d="M36 82 C30 80 27 74 32 70 C37 66 39 74 36 82 Z" />
      <path d="M38 69 C33 66 32 60 37 57 C42 54 43 62 38 69 Z" />
      <path d="M45 58 C41 53 43 47 48 46 C53 45 51 52 45 58 Z" />

      {/* Right Branch */}
      <path d="M118 108 C124 94 124 76 114 60" fill="none" stroke="#405C3A" strokeWidth="2" strokeLinecap="round" />
      <path d="M118 108 C122 104 126 100 123 96 C120 92 116 98 118 108 Z" />
      <path d="M122 95 C127 92 131 87 127 83 C123 79 120 86 122 95 Z" />
      <path d="M124 82 C130 80 133 74 128 70 C123 66 121 74 124 82 Z" />
      <path d="M122 69 C127 66 128 60 123 57 C118 54 117 62 122 69 Z" />
      <path d="M115 58 C119 53 117 47 112 46 C107 45 109 52 115 58 Z" />
    </g>

    {/* Trophy Handles */}
    <path d="M58 44 C38 44 32 58 38 72 C44 84 54 86 60 86" fill="none" stroke="url(#sihGoldCup)" strokeWidth="5" strokeLinecap="round" />
    <path d="M58 44 C40 44 35 58 40 70 C45 80 54 84 58 84" fill="none" stroke="#FAF7EE" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />

    <path d="M102 44 C122 44 128 58 122 72 C116 84 106 86 100 86" fill="none" stroke="url(#sihGoldCup)" strokeWidth="5" strokeLinecap="round" />
    <path d="M102 44 C120 44 125 58 120 70 C115 80 106 84 102 84" fill="none" stroke="#FAF7EE" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />

    {/* Trophy Cup Body */}
    <path d="M56 34 H104 C104 64 94 82 80 88 C66 82 56 64 56 34 Z" fill="url(#sihGoldCup)" />
    <path d="M56 34 H104 C104 64 94 82 80 88 C66 82 56 64 56 34 Z" fill="url(#sihGoldShine)" />

    {/* Cup Lip / Rim */}
    <ellipse cx="80" cy="34" rx="25" ry="5" fill="#F9E79F" />
    <ellipse cx="80" cy="34" rx="23" ry="3.5" fill="#B59A5A" />
    <ellipse cx="80" cy="33" rx="21" ry="2" fill="#FAF7EE" opacity="0.85" />

    {/* 1st Place Medallion on Cup */}
    <g transform="translate(80, 57)">
      <circle cx="0" cy="0" r="13" fill="#344C30" opacity="0.95" />
      <circle cx="0" cy="0" r="11.5" fill="none" stroke="#F9E79F" strokeWidth="1" />
      <text x="0" y="4.5" fontFamily="'DM Sans', system-ui, sans-serif" fontSize="12" fontWeight="900" fill="#F9E79F" textAnchor="middle">1</text>
    </g>

    {/* Cup Stem */}
    <path d="M74 88 H86 V98 H74 Z" fill="url(#sihGoldCup)" />
    <path d="M72 98 H88 V102 H72 Z" fill="#D4AF37" />

    {/* Pedestal Base */}
    <path d="M60 102 H100 L104 126 H56 L60 102 Z" fill="url(#sihBaseGreen)" />
    <rect x="52" y="126" width="56" height="6" rx="2" fill="#253622" />

    {/* Gold Plaque on Base */}
    <rect x="61" y="108" width="38" height="13" rx="2" fill="url(#sihGoldCup)" stroke="#F9E79F" strokeWidth="0.75" />
    <text x="80" y="117.5" fontFamily="'JetBrains Mono', monospace" fontSize="7.5" fontWeight="bold" fill="#253622" textAnchor="middle" letterSpacing="0.5">SIH 2023</text>

    {/* Sparkles */}
    <g fill="#F9E79F">
      <path d="M46 30 Q46 36 40 36 Q46 36 46 42 Q46 36 52 36 Q46 36 46 30 Z" />
      <path d="M116 26 Q116 32 110 32 Q116 32 116 38 Q116 32 122 32 Q116 32 116 26 Z" />
      <circle cx="114" cy="46" r="1.5" fill="#FFFFFF" />
      <circle cx="48" cy="48" r="1.2" fill="#FFFFFF" />
    </g>
  </svg>
);

export const Achievements: React.FC<AchievementsProps> = ({ showHeader = false }) => {
  const [selectedCertificate, setSelectedCertificate] = useState<Achievement | null>(null);
  const featuredAchievement = achievementsData[0];
  const otherAchievements = achievementsData.slice(1);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    if (selectedCertificate) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCertificate]);

  return (
    <div>
      {showHeader && (
        <SectionHeading
          eyebrow="Honors &amp; Credentials"
          title="Awards &amp; Recognition"
          subtitle="National competition laurels, academic consistency, and student chapter leadership."
        />
      )}

      {/* Featured National Winner Card */}
      {featuredAchievement && (
        <div className="paper-card p-6 sm:p-8 mb-6 border border-[#B59A5A]/50 bg-gradient-to-br from-[#F6F0DC] to-[#F2ECD8] shadow-cozy relative overflow-hidden">
          {/* Subtle decorative gold corner motif */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-15 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="100" cy="0" r="80" stroke="#B59A5A" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="100" cy="0" r="50" fill="#B59A5A" opacity="0.2" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#E8E1C9] border border-[#B59A5A]/40 text-[#405C3A] mb-3">
                <Trophy className="w-3.5 h-3.5 text-[#B59A5A]" />
                <span>National Champion &bull; Smart India Hackathon 2023</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#39402F] mb-2 font-sans">
                {featuredAchievement.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#77745F] leading-relaxed mb-4">
                {featuredAchievement.description}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#B59A5A] text-[#F6F0DC] shadow-xs">
                  {featuredAchievement.prize || '₹1,00,000 Cash Prize'}
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono text-[#39402F] bg-[#E8E1C9] border border-[#DCD4BC]">
                  {featuredAchievement.organization}
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-mono text-[#405C3A] bg-[#E8E1C9] border border-[#DCD4BC]">
                  Year: {featuredAchievement.year}
                </span>

                {/* View Certificate Button on Featured Card */}
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(featuredAchievement)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#405C3A] text-[#F6F0DC] hover:bg-[#344C30] transition-colors shadow-xs cursor-pointer ml-auto sm:ml-0"
                  title="View Official Certificate"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>

            {/* Dedicated SIH 2023 Trophy Showcase */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#E8E1C9] border-2 border-[#B59A5A]/50 p-2.5 flex items-center justify-center shadow-cozy relative group hover:scale-105 transition-transform">
                <SIHTrophyIcon className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <span className="mt-2 text-[10px] font-mono font-bold text-[#405C3A] bg-[#E8E1C9] border border-[#DCD4BC] px-2.5 py-0.5 rounded-full shadow-2xs">
                SIH 2023 Trophy
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Collectible Information Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherAchievements.map((ach, idx) => (
          <motion.div
            key={ach.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            className="paper-card p-5 hover:bg-[#F6F0DC] transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Card Image: Every card has an image now */}
              {ach.image && (
                <div className="w-full h-32 rounded-xl bg-[#E8E1C9] border border-[#DCD4BC] overflow-hidden p-1.5 mb-3.5 flex items-center justify-center group-hover:border-[#405C3A]/50 transition-colors">
                  <img
                    src={ach.image}
                    alt={ach.title}
                    className="w-full h-full object-contain rounded-lg drop-shadow-2xs"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono font-semibold text-[#405C3A]">
                  {ach.year}
                </span>
                {ach.tag && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E8E1C9] text-[#77745F] border border-[#DCD4BC]">
                    {ach.tag}
                  </span>
                )}
              </div>

              <h4 className="text-base font-bold text-[#39402F] mb-1 font-sans">
                {ach.title}
              </h4>
              <div className="text-xs font-medium text-[#77745F] mb-2.5 font-mono">
                {ach.subtitle} &bull; {ach.organization}
              </div>

              <p className="text-xs text-[#77745F] leading-relaxed font-normal">
                {ach.description}
              </p>
            </div>

            {/* Bottom Card Action: Prize badge + Certificate Button */}
            <div className="pt-3.5 mt-3.5 border-t border-[#DCD4BC] flex items-center justify-between gap-2">
              {ach.prize ? (
                <div className="text-xs font-mono text-[#B59A5A] font-semibold">
                  {ach.prize}
                </div>
              ) : (
                <div className="text-[11px] font-mono text-[#77745F] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#405C3A]" />
                  <span>Verified Credential</span>
                </div>
              )}

              <button
                type="button"
                onClick={() => setSelectedCertificate(ach)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-[#405C3A] bg-[#E8E1C9] border border-[#DCD4BC] hover:bg-[#405C3A] hover:text-[#F6F0DC] hover:border-[#405C3A] transition-all cursor-pointer shadow-2xs"
                title={`Inspect certificate for ${ach.title}`}
              >
                <FileText className="w-3 h-3" />
                <span>Certificate</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal Dialog */}
      <AnimatePresence>
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#253622]/65 backdrop-blur-xs overflow-y-auto"
            onClick={() => setSelectedCertificate(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-[#FAF7EE] border-2 border-[#B59A5A]/60 rounded-2xl shadow-2xl p-5 sm:p-7 max-h-[92vh] overflow-y-auto my-auto no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#DCD4BC]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#E8E1C9] text-[#405C3A]">
                    <Award className="w-4 h-4 text-[#B59A5A]" />
                  </div>
                  <div>
                    <h3
                      id="certificate-modal-title"
                      className="text-sm font-bold text-[#39402F] font-sans"
                    >
                      Official Certificate &amp; Verification
                    </h3>
                    <div className="text-[11px] font-mono text-[#77745F]">
                      Record ID: {selectedCertificate.credentialId || `RP-CERT-${selectedCertificate.id.toUpperCase()}`}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="p-1.5 rounded-lg text-[#77745F] hover:text-[#39402F] hover:bg-[#E8E1C9] transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Physical Certificate Parchment Frame */}
              <div className="p-5 sm:p-8 rounded-xl bg-gradient-to-b from-[#FFFDF8] to-[#F6F0DC] border-2 border-[#B59A5A]/50 relative shadow-inner overflow-hidden my-3">
                {/* Ornate Inner Dashed Frame */}
                <div className="border border-[#B59A5A]/40 border-dashed rounded-lg p-5 sm:p-7 text-center relative">
                  {/* Decorative Corner Seals */}
                  <div className="absolute top-2 left-2 text-[#B59A5A] text-xs font-mono opacity-60">❖</div>
                  <div className="absolute top-2 right-2 text-[#B59A5A] text-xs font-mono opacity-60">❖</div>
                  <div className="absolute bottom-2 left-2 text-[#B59A5A] text-xs font-mono opacity-60">❖</div>
                  <div className="absolute bottom-2 right-2 text-[#B59A5A] text-xs font-mono opacity-60">❖</div>

                  {/* Top Seal Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-[#E8E1C9] text-[#405C3A] border border-[#DCD4BC] mb-3">
                    <Award className="w-3 h-3 text-[#B59A5A]" />
                    <span>Certificate of Recognition</span>
                  </div>

                  <div className="text-[11px] font-mono text-[#77745F] uppercase tracking-wider mb-1">
                    This official credential is conferred upon
                  </div>

                  {/* Recipient Name */}
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#39402F] tracking-wide mb-1">
                    Rishabh Parmar
                  </div>

                  {/* Gold decorative underline */}
                  <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#B59A5A] to-transparent mx-auto mb-3" />

                  <div className="text-xs font-mono text-[#77745F] mb-1">
                    in recognition of outstanding accomplishment in
                  </div>

                  {/* Award Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-[#405C3A] font-sans mb-1">
                    {selectedCertificate.title}
                  </h4>

                  {/* Organization & Year */}
                  <div className="text-xs font-mono font-semibold text-[#39402F] mb-3">
                    {selectedCertificate.organization} &bull; Year {selectedCertificate.year}
                  </div>

                  {/* Certificate Image Illustration */}
                  {selectedCertificate.image && (
                    <div className="w-full max-w-[280px] h-28 mx-auto my-3 rounded-lg bg-[#FAF7EE] border border-[#DCD4BC] p-2 flex items-center justify-center shadow-xs">
                      <img
                        src={selectedCertificate.image}
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {/* Description / Citation */}
                  <p className="text-xs text-[#77745F] max-w-lg mx-auto leading-relaxed italic mb-4">
                    &ldquo;{selectedCertificate.certificateDetails || selectedCertificate.description}&rdquo;
                  </p>

                  {/* Prize / Badge pill if applicable */}
                  {selectedCertificate.prize && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#B59A5A] text-[#F6F0DC] text-xs font-mono font-bold shadow-xs mb-4">
                      <span>Prize Awarded: {selectedCertificate.prize}</span>
                    </div>
                  )}

                  {/* Verification Signature & Seals Footer */}
                  <div className="pt-4 mt-2 border-t border-[#DCD4BC] grid grid-cols-2 gap-4 text-left font-mono">
                    <div>
                      <div className="text-[10px] text-[#77745F] uppercase">Verification Status</div>
                      <div className="text-xs font-bold text-[#405C3A] flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#405C3A]" />
                        <span>Officially Verified</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#77745F] uppercase">Issuing Authority</div>
                      <div className="text-xs font-semibold text-[#39402F] mt-0.5 truncate">
                        {selectedCertificate.organization}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dialog Actions Bottom Bar */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-[#77745F]">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-[#E8E1C9] text-[#39402F] font-semibold text-[10px]">Esc</kbd> to dismiss
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#405C3A] text-[#F6F0DC] hover:bg-[#344C30] transition-colors cursor-pointer"
                >
                  Close Dialog
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};