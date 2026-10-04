import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <div>
      <SectionHeading
        eyebrow="Academic Credentials"
        title="Education"
        subtitle="Formal engineering degree with focus on deep learning, algorithms, and embedded systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {educationData.map((edu, idx) => (
          <div
            key={edu.id}
            className={`paper-card p-6 flex flex-col justify-between ${
              idx === 0 ? 'border border-[#405C3A]/50 bg-[#F6F0DC]' : ''
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 pb-3 mb-3 border-b border-[#DCD4BC]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#E8E1C9] text-[#405C3A] border border-[#DCD4BC]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#39402F]">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-semibold text-[#405C3A]">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-[#E8E1C9] text-[#405C3A] border border-[#DCD4BC] font-semibold shrink-0">
                  {edu.scoreLabel}: {edu.score}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#77745F] mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>{edu.location}</span>
                <span>&bull;</span>
                <span>{edu.period}</span>
              </div>

              <div className="text-xs text-[#39402F] font-medium mb-3">
                {edu.field}
              </div>
            </div>

            {edu.highlights && edu.highlights.length > 0 && (
              <div className="space-y-1 text-xs text-[#77745F] pt-3 border-t border-[#DCD4BC]">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#405C3A]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
