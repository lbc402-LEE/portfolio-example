import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Train, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-black/5 bg-white/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea3822] mb-2">
              Career Trajectory & Dual Engine
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-neutral-900">
              Experience & Activities
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
            철도 안전 규율의 높은 집중력을 자산 시스템 구축에 투영하여, 흔들리지 않는 현금흐름과 자본 성장을 견인합니다.
          </p>
        </div>

        {/* 2 Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={exp.id}
              className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header with index */}
                <div className="flex items-center justify-between border-b border-black/5 pb-4">
                  <span className="font-serif italic font-bold text-2xl text-[#ea3822]">
                    0{index + 1}.
                  </span>
                  <div className="text-xs font-mono text-neutral-500 font-medium">
                    {exp.period}
                  </div>
                </div>

                {/* Role and Organization */}
                <div>
                  <div className="text-xs font-mono text-neutral-500 mb-1">{exp.tag}</div>
                  <h3 className="text-2xl font-bold font-sans text-neutral-900 tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-neutral-700 mt-1">
                    {exp.company}
                  </div>
                </div>

                {/* Key Duties */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider">
                    주요 직무 및 실행 영역
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    {exp.keyDuties.map((duty, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="bg-neutral-50 rounded-2xl p-4 border border-black/5 text-xs text-neutral-700 leading-relaxed">
                  <strong className="text-neutral-900 block mb-1">성과 및 기여:</strong>
                  {exp.achievements}
                </div>
              </div>

              {/* Takeaway Insight */}
              <div className="mt-6 pt-6 border-t border-black/5 flex items-start gap-3 text-xs text-neutral-600">
                <span className="font-bold text-[#ea3822] shrink-0 font-serif italic text-base">“</span>
                <p className="italic text-neutral-700 leading-relaxed font-sans">{exp.takeaway}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
