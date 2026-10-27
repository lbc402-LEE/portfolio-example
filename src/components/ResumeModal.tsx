import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { PROFILE, EXPERIENCES, PROJECTS, SKILLS_LIST, BOOKS_LIST, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden text-neutral-900 max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:border-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (hidden in print) */}
        <div className="bg-neutral-100/90 px-6 py-4 border-b border-black/10 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase text-[#ea3822]">CURRICULUM VITAE</span>
            <span className="text-neutral-400">·</span>
            <span className="text-xs text-neutral-600 font-medium">{PROFILE.name} ({PROFILE.englishName})</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>인쇄 / PDF 저장</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors text-neutral-700 cursor-pointer"
              aria-label="닫기"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-10 text-neutral-800 print:overflow-visible print:p-6">
          {/* Header */}
          <div className="border-b-2 border-neutral-900 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-black text-neutral-900">
                {PROFILE.name} <span className="text-xl font-sans font-normal text-neutral-500">/ {PROFILE.englishName}</span>
              </h1>
              <div className="text-base font-semibold text-[#ea3822] mt-1">
                {PROFILE.currentRole} ➔ {PROFILE.targetRole}
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-xl leading-relaxed">
                {PROFILE.vision}
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-600 space-y-1 sm:text-right shrink-0">
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>{PROFILE.email}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <span>{PROFILE.phone}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{PROFILE.location}</span>
              </div>
            </div>
          </div>

          {/* 1. 자기소개 요약 */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 mb-2 border-b border-black/10 pb-1">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700">
              철도기관사로서 책임감과 집중력을 바탕으로 안전하고 정확한 열차 운행 업무를 수행하고 있습니다.
              현재의 안정적인 근로소득을 디딤돌 삼아, 개인 금융 지식과 장기적인 글로벌 ETF 분산 투자 전략을 체계화하고 있습니다.
              소비 통제와 선저축(저축률 40%), 생활비 6개월분 비상금 안전망, 그리고 3대 추가 소득 파이프라인 구축을 통해
              시간과 삶의 자유를 직접 선택하는 지속 가능한 부의 기반을 완성하는 것이 궁극적인 목표입니다.
            </p>
          </div>

          {/* 2. 경력 사항 */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 mb-3 border-b border-black/10 pb-1">
              Work Experience & Activities
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-sm text-neutral-900">
                      {exp.role} <span className="font-normal text-neutral-600">· {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-neutral-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-neutral-700 space-y-1">
                    {exp.keyDuties.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <div className="text-xs text-neutral-600 bg-neutral-50 p-2.5 rounded-lg border border-black/5 mt-1">
                    <strong>주요 성과:</strong> {exp.achievements}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. 3대 핵심 프로젝트 */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 mb-3 border-b border-black/10 pb-1">
              Core Strategic Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-neutral-50 border border-black/5">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-sm text-neutral-900">{proj.name}</h4>
                    <span className="text-xs font-mono text-neutral-500">{proj.period}</span>
                  </div>
                  <p className="text-xs text-neutral-700 mb-2 leading-relaxed">{proj.headline}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-neutral-600">
                    <span>지표 1: <strong>{proj.metrics.label1} {proj.metrics.value1}</strong></span>
                    <span>·</span>
                    <span>지표 2: <strong>{proj.metrics.label2} {proj.metrics.value2}</strong></span>
                    <span>·</span>
                    <span>역할: {proj.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. 핵심 역량 & 독서 & 자격증 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 mb-2 border-b border-black/10 pb-1">
                Skills & Competencies
              </h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {SKILLS_LIST.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-1.5 bg-neutral-50 rounded">
                    <span className="font-medium text-neutral-800">{s.name}</span>
                    <span className="text-amber-600 font-mono text-[10px]">{'★'.repeat(s.rating)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 mb-2 border-b border-black/10 pb-1">
                Certifications & Education
              </h2>
              <div className="space-y-2 text-xs">
                {CERTIFICATIONS.map((c, i) => (
                  <div key={i} className="flex justify-between p-1.5 bg-neutral-50 rounded">
                    <span className="font-medium text-neutral-800">{c.name}</span>
                    <span className="text-neutral-500 font-mono">{c.status}</span>
                  </div>
                ))}
                <div className="p-2 bg-neutral-50 rounded text-neutral-700">
                  <div className="font-semibold text-neutral-900 mb-0.5">학력 및 지속 학습</div>
                  <div>대학교 졸업 ({EDUCATION.major})</div>
                  <div className="text-[11px] text-neutral-500 mt-1">{EDUCATION.selfDevelopment}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
