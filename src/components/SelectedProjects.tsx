import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { FinanceDashboardMockup, EtfPortfolioMockup, SidePipelineMockup } from './mockups/ProjectMockups';

interface SelectedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export function SelectedProjects({ onSelectProject }: SelectedProjectsProps) {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading: Matches reference's "SELECTED PROJECTS" */}
        <div className="mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-wider text-neutral-900 uppercase">
            Selected Projects
          </h2>
        </div>

        {/* Project List */}
        <div className="space-y-20 md:space-y-32">
          {/* Project 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Sand Linen Canvas with Mockup */}
            <div 
              style={{ backgroundColor: PROJECTS[0].bgColor }} 
              className="lg:col-span-7 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 flex items-center justify-center shadow-xs transition-transform duration-300 hover:shadow-md"
            >
              <FinanceDashboardMockup />
            </div>

            {/* Right Column: Editorial Typographic Info */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 md:space-y-6">
              {/* Category / Subtitle with colored dot */}
              <div className="text-xs sm:text-sm font-sans tracking-wide text-neutral-600">
                <span className="text-[#ea3822] font-bold">Personal Finance</span>
                <span className="mx-1.5 text-neutral-400">·</span>
                <span>Cashflow & Capital System</span>
              </div>

              {/* Big Bold Headline */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
                Designing personal cashflow systems that maximize savings rate to 40% and build 6-month safety reserves
              </h3>

              {/* Korean Narrative Description */}
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                철도기관사의 안정적인 근로소득을 기반으로, 급여일 자동 선저축 시스템과 생활비 6개월분 비상금 안전망을 구축하여 지속 가능한 경제적 자유의 토대를 마련합니다.
              </p>

              {/* Unboxed Metadata Metrics (Zero-Pill Compliance) */}
              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-600 border-t border-black/5">
                <span>저축률 목표: <strong className="text-neutral-900">40%</strong></span>
                <span aria-hidden="true">·</span>
                <span>비상금: <strong className="text-neutral-900">6개월분</strong></span>
                <span aria-hidden="true">·</span>
                <span>기간: <strong>2026~2030</strong></span>
              </div>

              {/* Action Link: Matches "Explore my Work ↗" in reference */}
              <div className="pt-3">
                <button
                  onClick={() => onSelectProject(PROJECTS[0])}
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-900 hover:text-[#ea3822] transition-colors cursor-pointer"
                >
                  <span>Explore my Work</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Project 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Golden Khaki Canvas with Mockup */}
            <div 
              style={{ backgroundColor: PROJECTS[1].bgColor }} 
              className="lg:col-span-7 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 flex items-center justify-center shadow-xs transition-transform duration-300 hover:shadow-md"
            >
              <EtfPortfolioMockup />
            </div>

            {/* Right Column: Editorial Typographic Info */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 md:space-y-6">
              <div className="text-xs sm:text-sm font-sans tracking-wide text-neutral-600">
                <span className="text-[#ea3822] font-bold">Global ETF</span>
                <span className="mx-1.5 text-neutral-400">·</span>
                <span>Systematic Asset Allocation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
                Designing risk-controlled ETF portfolios that compound steady capital toward 100M KRW
              </h3>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                단기 시장 변동성에 흔들리지 않고 안전마진과 분산 투자 원칙을 고수하여, 월 100만 원 정기 납입으로 1억 원의 핵심 복리 자산을 형성하는 장기 포트폴리오 모델입니다.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-600 border-t border-black/5">
                <span>월 납입: <strong className="text-neutral-900">100만 원</strong></span>
                <span aria-hidden="true">·</span>
                <span>자산 목표: <strong className="text-neutral-900">1억 원</strong></span>
                <span aria-hidden="true">·</span>
                <span>기간: <strong>2026~2035</strong></span>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onSelectProject(PROJECTS[1])}
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-900 hover:text-[#ea3822] transition-colors cursor-pointer"
                >
                  <span>Explore my Work</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Project 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Soft Blush Pink/Coral Canvas with Mockup */}
            <div 
              style={{ backgroundColor: PROJECTS[2].bgColor }} 
              className="lg:col-span-7 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 flex items-center justify-center shadow-xs transition-transform duration-300 hover:shadow-md"
            >
              <SidePipelineMockup />
            </div>

            {/* Right Column: Editorial Typographic Info */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 md:space-y-6">
              <div className="text-xs sm:text-sm font-sans tracking-wide text-neutral-600">
                <span className="text-[#ea3822] font-bold">Income Stream</span>
                <span className="mx-1.5 text-neutral-400">·</span>
                <span>Lean Business Pipeline</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
                Building 3 sustainable additional income pipelines while preserving peak railway operational focus
              </h3>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                철도기관사 본업의 안전과 컨디션을 엄격히 보호하면서, 초기 비용이 적은 디지털 콘텐츠와 지식 자산을 통해 월 100만 원의 부수입을 창출하는 다각화 파이프라인입니다.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-600 border-t border-black/5">
                <span>월 부수입 목표: <strong className="text-neutral-900">100만 원</strong></span>
                <span aria-hidden="true">·</span>
                <span>채널 수: <strong className="text-neutral-900">3개 파이프라인</strong></span>
                <span aria-hidden="true">·</span>
                <span>원칙: <strong>린 검증</strong></span>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onSelectProject(PROJECTS[2])}
                  className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-900 hover:text-[#ea3822] transition-colors cursor-pointer"
                >
                  <span>Explore my Work</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
