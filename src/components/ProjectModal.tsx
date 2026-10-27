import React from 'react';
import { X, ArrowUpRight, CheckCircle2, AlertTriangle, Lightbulb, Target, UserCheck, Calendar } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#fbf9f5] rounded-3xl shadow-2xl border border-black/10 overflow-hidden text-neutral-900 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 bg-[#fbf9f5]/95 backdrop-blur-md px-6 md:px-8 py-5 border-b border-black/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea3822]">
              {project.category}
            </span>
            <span aria-hidden="true" className="text-neutral-400">·</span>
            <span className="text-xs font-mono text-neutral-500">
              {project.period}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-neutral-200/80 hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-colors text-neutral-700"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto px-6 md:px-10 py-8 space-y-10">
          {/* Header Title */}
          <div>
            <div className="text-sm font-mono text-neutral-500 mb-2 font-medium">
              {project.subtitle}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-neutral-900 leading-tight">
              {project.headline}
            </h2>
            <p className="mt-4 text-base text-neutral-700 leading-relaxed">
              {project.shortSummary}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-black/5 shadow-xs">
            <div>
              <div className="text-[11px] text-neutral-500 font-medium">핵심 지표 1</div>
              <div className="text-sm font-bold text-neutral-900 font-mono mt-0.5">{project.metrics.label1}</div>
              <div className="text-lg font-extrabold text-[#ea3822] font-mono">{project.metrics.value1}</div>
            </div>
            <div>
              <div className="text-[11px] text-neutral-500 font-medium">핵심 지표 2</div>
              <div className="text-sm font-bold text-neutral-900 font-mono mt-0.5">{project.metrics.label2}</div>
              <div className="text-lg font-extrabold text-neutral-900 font-mono">{project.metrics.value2}</div>
            </div>
            <div>
              <div className="text-[11px] text-neutral-500 font-medium">담당 역할</div>
              <div className="text-sm font-bold text-neutral-900 mt-1 line-clamp-2">{project.role}</div>
            </div>
            <div>
              <div className="text-[11px] text-neutral-500 font-medium">실행 기간</div>
              <div className="text-sm font-bold font-mono text-neutral-900 mt-1">{project.period}</div>
            </div>
          </div>

          {/* 1. 배경 & 목적 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 p-6 rounded-2xl border border-black/5 space-y-3">
              <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
                <Target className="w-4 h-4 text-[#ea3822]" />
                <span>추진 배경 (Background)</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {project.details.background}
              </p>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-black/5 space-y-3">
              <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>프로젝트 목적 (Purpose)</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {project.details.purpose}
              </p>
            </div>
          </div>

          {/* 2. 구체적 목표 (Goals) */}
          <div className="bg-white/80 p-6 rounded-2xl border border-black/5 space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider font-mono">
              핵심 실행 목표 (Actionable Goals)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.details.goals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 수행 역할 & 주요 키워드 */}
          <div className="bg-white/80 p-6 rounded-2xl border border-black/5 space-y-4">
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
              <UserCheck className="w-4 h-4 text-blue-600" />
              <span>수행 역할 및 책임 (Roles & Responsibilities)</span>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700 list-disc list-inside">
              {project.details.roles.map((r, idx) => (
                <li key={idx} className="leading-relaxed">{r}</li>
              ))}
            </ul>
            <div className="pt-3 border-t border-black/5 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="font-bold text-neutral-700">Keywords:</span>
              {project.details.keywords.map((kw, i) => (
                <span key={i} className="text-neutral-700">#{kw}</span>
              ))}
            </div>
          </div>

          {/* 4. 문제점과 해결 방법 (Problem & Solution) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 문제점 */}
            <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 space-y-3">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>직면 과제 및 리스크 (Problems)</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                {project.details.problems.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 해결 방법 */}
            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>체계적 해결 방법 (Solutions)</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                {project.details.solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 5. 배운 점과 느낀 점 (Takeaways) */}
          <div className="bg-neutral-900 text-white p-6 md:p-8 rounded-2xl space-y-3">
            <div className="text-xs font-mono font-bold text-[#ea3822] uppercase tracking-wider">
              Key Learnings & Philosophy
            </div>
            <h4 className="text-lg font-serif font-bold tracking-tight text-white">
              배운 점과 느낀 점
            </h4>
            <div className="space-y-2.5 pt-2">
              {project.details.takeaways.map((takeaway, idx) => (
                <p key={idx} className="text-sm text-neutral-300 leading-relaxed flex items-start gap-2">
                  <span className="text-[#ea3822] font-bold">›</span>
                  <span>{takeaway}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-neutral-100 px-6 md:px-8 py-4 border-t border-black/10 flex items-center justify-between text-xs font-mono text-neutral-500">
          <span>Project ID: {project.id}</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 font-sans font-medium transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
