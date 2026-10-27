import React, { useState } from 'react';
import { BarChart3, TrendingUp, Calendar, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export function MetricsSection() {
  const [activeTab, setActiveTab] = useState<'metrics' | 'timeline' | 'skills'>('metrics');

  return (
    <section id="metrics" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea3822] mb-2">
              Quantified Roadmap & Visual Analytics
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-neutral-900">
              Performance & Metrics
            </h2>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center gap-1 p-1 bg-neutral-200/70 rounded-full select-none">
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeTab === 'metrics'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              핵심 지표 비교
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              성장 타임라인
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeTab === 'skills'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              역량-성과 연계
            </button>
          </div>
        </div>

        {/* Tab 1: Chart 1 - 프로젝트별 핵심 지표 비교 막대 차트 */}
        {activeTab === 'metrics' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xs space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-black/5 gap-2">
              <div>
                <h3 className="text-xl font-bold font-sans text-neutral-900">
                  프로젝트별 핵심 목표 지표 비교
                </h3>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">
                  저축률 40% · 누적 투자 자산 1억 원 · 월 추가 부수입 100만 원
                </p>
              </div>
              <div className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                정량적 성과 관리 모드
              </div>
            </div>

            {/* Visual Bar Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bar 1 */}
              <div className="bg-neutral-50/80 rounded-2xl p-6 border border-black/5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#ea3822] font-semibold uppercase">Project 01</div>
                  <div className="text-base font-bold text-neutral-900 mt-1">월 저축률 달성</div>
                  <div className="text-xs text-neutral-500 mt-0.5">급여 대비 자동 선배정</div>

                  <div className="my-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-3xl font-mono font-extrabold text-[#ea3822]">40%</span>
                      <span className="text-xs font-mono text-neutral-500">기준 저축률 20% 대비 2배</span>
                    </div>
                    {/* Progress visual */}
                    <div className="w-full bg-neutral-200 h-4 rounded-full overflow-hidden flex">
                      <div className="bg-[#ea3822] h-full w-[40%]" title="40% 달성"></div>
                      <div className="bg-neutral-300 h-full w-[60%]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 text-xs text-neutral-600 space-y-1">
                  <div className="flex justify-between">
                    <span>비상예비자금:</span>
                    <strong className="text-neutral-900 font-mono">생활비 6개월분</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>지출 관리 방식:</span>
                    <strong className="text-neutral-900">선저축 후소비</strong>
                  </div>
                </div>
              </div>

              {/* Bar 2 */}
              <div className="bg-neutral-50/80 rounded-2xl p-6 border border-black/5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-emerald-600 font-semibold uppercase">Project 02</div>
                  <div className="text-base font-bold text-neutral-900 mt-1">누적 투자 자산 형성</div>
                  <div className="text-xs text-neutral-500 mt-0.5">글로벌 ETF 장기 복리</div>

                  <div className="my-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-3xl font-mono font-extrabold text-emerald-700">100,000,000₩</span>
                      <span className="text-xs font-mono text-neutral-500">1단계 마일스톤</span>
                    </div>
                    {/* Progress visual */}
                    <div className="w-full bg-neutral-200 h-4 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-600 h-full w-[100%]" title="100M KRW"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 text-xs text-neutral-600 space-y-1">
                  <div className="flex justify-between">
                    <span>정기 분할 매수:</span>
                    <strong className="text-neutral-900 font-mono">1,000,000₩ / 월</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>주요 축:</span>
                    <strong className="text-neutral-900">S&P500 + 배당성장</strong>
                  </div>
                </div>
              </div>

              {/* Bar 3 */}
              <div className="bg-neutral-50/80 rounded-2xl p-6 border border-black/5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-purple-600 font-semibold uppercase">Project 03</div>
                  <div className="text-base font-bold text-neutral-900 mt-1">월 추가 부수입 창출</div>
                  <div className="text-xs text-neutral-500 mt-0.5">3대 무자본 린 파이프라인</div>

                  <div className="my-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-3xl font-mono font-extrabold text-purple-700">1,000,000₩</span>
                      <span className="text-xs font-mono text-neutral-500">월간 추가 현금흐름</span>
                    </div>
                    {/* Progress visual */}
                    <div className="w-full bg-neutral-200 h-4 rounded-full overflow-hidden flex">
                      <div className="bg-purple-600 h-full w-[100%]" title="1,000,000 KRW/month"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/5 text-xs text-neutral-600 space-y-1">
                  <div className="flex justify-between">
                    <span>구축 파이프라인 수:</span>
                    <strong className="text-neutral-900 font-mono">3개 독립 채널</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>주당 투입 상한:</span>
                    <strong className="text-neutral-900">&lt; 10시간 (안전 보장)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Chart 2 - 프로젝트 기간 및 성과 타임라인 */}
        {activeTab === 'timeline' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xs space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold font-sans text-neutral-900">
                10개년 프로젝트 로드맵 & 마일스톤 타임라인
              </h3>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                2026.10 ~ 2035.12 체계적 단계별 자산 및 소득 목표 실현
              </p>
            </div>

            <div className="relative border-l-2 border-neutral-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
              {/* Phase 1 */}
              <div className="relative">
                <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#ea3822] border-4 border-white shadow-xs"></div>
                <div className="text-xs font-mono font-bold text-[#ea3822]">
                  PHASE 1 · 2026.10.27 ~ 2029.12.31 (3개년)
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mt-1">
                  추가 소득 파이프라인 구축 및 월 100만 원 부수입 실현
                </h4>
                <p className="text-sm text-neutral-700 mt-1 leading-relaxed">
                  노션 템플릿, 금융 분석 가이드, 지식 콘텐츠 등 무자본 디지털 자산 3개 파이프라인 런칭.
                  본업의 근무 시간에 지장을 주지 않으면서 월 100만 원의 추가 현금흐름 달성.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span>목표 수익: <strong>월 1,000,000₩</strong></span>
                  <span>·</span>
                  <span>상태: <strong>시장 조사 및 MVP 제작</strong></span>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-4 border-white shadow-xs"></div>
                <div className="text-xs font-mono font-bold text-neutral-600">
                  PHASE 2 · 2026.10.27 ~ 2030.12.31 (4개년)
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mt-1">
                  경제적 자유 기반 달성 (저축률 40% & 6개월 비상예비자금)
                </h4>
                <p className="text-sm text-neutral-700 mt-1 leading-relaxed">
                  근로소득의 40% 이상을 안정적으로 선저축하는 지출 시스템 완성.
                  생활비 6개월분 비상금 버퍼를 CMA에 완전히 격리하여 금융 위기에도 원금을 헐값 매각하지 않는 철벽 재무 안정성 확보.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span>목표 저축률: <strong>40%+</strong></span>
                  <span>·</span>
                  <span>비상금: <strong>6개월 생활비 완전 확보</strong></span>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-xs"></div>
                <div className="text-xs font-mono font-bold text-emerald-700">
                  PHASE 3 · 2026.10.27 ~ 2035.12.31 (10개년)
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mt-1">
                  장기 투자 포트폴리오 1억 원+ 복리 실현
                </h4>
                <p className="text-sm text-neutral-700 mt-1 leading-relaxed">
                  월 100만 원 정기 적립식 분할 매수와 글로벌 ETF(S&P500, 배당다우존스) 리밸런싱을 통해
                  원금 손실 리스크를 통제하고 1억 원 이상의 우량 금융 자산 확보.
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span>누적 자산: <strong>100,000,000₩+</strong></span>
                  <span>·</span>
                  <span>핵심: <strong>인플레이션 헷지 및 복리 엔진</strong></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Chart 3 - 기술 역량과 성과 연계 매트릭스 */}
        {activeTab === 'skills' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-xs space-y-6 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold font-sans text-neutral-900">
                핵심 역량과 프로젝트 성과 연계 매트릭스
              </h3>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                체계적인 역량 훈련이 실질적인 자산 성과로 이어지는 구조
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-black/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-neutral-900">개인 재무관리 & 예산 설계</span>
                  <span className="text-xs font-mono text-[#ea3822] font-bold">Project 01 주관</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  수입/지출을 객관적인 데이터로 기록하고 불필요한 누수를 차단하여 직접적으로 저축률 40%를 달성하게 하는 기초 체력 역량.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-black/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-neutral-900">위험 관리 & 안전마진 설계</span>
                  <span className="text-xs font-mono text-emerald-600 font-bold">Project 02 주관</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  철도기관사의 안전 수칙 원칙을 차용하여, 하락장에서도 감정적 손절을 하지 않고 견뎌내는 MDD 통제 및 리스크 관리 역량.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-black/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-neutral-900">ETF 분석 & 복리 계산</span>
                  <span className="text-xs font-mono text-emerald-600 font-bold">Project 02 주관</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  운용 보수, 추종 지수, 배당 수익률을 종합 검토하여 10년 뒤 1억 원 이상의 복리 가치를 수학적으로 산출하고 검증하는 역량.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-black/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-neutral-900">시장 조사 & 린 비즈니스 모델링</span>
                  <span className="text-xs font-mono text-purple-600 font-bold">Project 03 주관</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  초기 자본을 들이지 않고 디지털 콘텐츠 수요를 발굴하여, 월 100만 원의 다각화된 현금흐름 채널을 셋업하는 기획 역량.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
