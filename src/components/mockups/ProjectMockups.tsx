import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, PieChart, ArrowUpRight, CheckCircle2, DollarSign, Wallet, Layers, Sparkles } from 'lucide-react';

/**
 * Mockup 1: Personal Finance & Cashflow System
 * Matches the warm sand container and desktop/tablet browser aesthetic in reference
 */
export function FinanceDashboardMockup() {
  const [savingsRate, setSavingsRate] = useState(40);
  const [activeTab, setActiveTab] = useState<'overview' | 'budget'>('overview');

  return (
    <div className="w-full max-w-xl bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-black/10 overflow-hidden text-neutral-800 text-xs select-none">
      {/* Browser window header */}
      <div className="bg-neutral-100/90 border-b border-black/10 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          <span className="ml-2 text-[11px] font-mono font-medium text-neutral-600">wealth-os.app / cashflow-engine</span>
        </div>
        <div className="text-[10px] font-medium text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-600" />
          <span>선저축 자동 배정 활성화됨</span>
        </div>
      </div>

      {/* App Body */}
      <div className="p-4 md:p-5 space-y-4">
        {/* Banner */}
        <div className="bg-neutral-900 text-white rounded-lg p-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-400">Monthly Core Discipline</div>
            <div className="text-sm font-semibold tracking-tight">급여일 자동 선저축 40% & 6개월 비상금 안전망</div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-emerald-400 font-bold">목표 달성률 100%</span>
          </div>
        </div>

        {/* 3 Key Buckets Grid */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5">
            <div className="text-[10px] text-neutral-500 flex items-center gap-1">
              <Wallet className="w-3 h-3 text-amber-600" />
              <span>월 저축 목표</span>
            </div>
            <div className="text-base font-bold font-mono text-neutral-900 mt-1">{savingsRate}%</div>
            <div className="text-[10px] text-emerald-600 font-medium mt-0.5">선배정 완료</div>
          </div>

          <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5">
            <div className="text-[10px] text-neutral-500 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-blue-600" />
              <span>비상예비자금</span>
            </div>
            <div className="text-base font-bold font-mono text-neutral-900 mt-1">6개월분</div>
            <div className="text-[10px] text-blue-600 font-medium mt-0.5">안전 버퍼 충족</div>
          </div>

          <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5">
            <div className="text-[10px] text-neutral-500 flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-emerald-600" />
              <span>복리 전환율</span>
            </div>
            <div className="text-base font-bold font-mono text-neutral-900 mt-1">30%</div>
            <div className="text-[10px] text-neutral-500 font-medium mt-0.5">ETF 장기 투자</div>
          </div>
        </div>

        {/* Interactive Slider Bar */}
        <div className="bg-neutral-50/70 rounded-lg p-3 border border-neutral-200/60">
          <div className="flex items-center justify-between text-[11px] mb-1.5">
            <span className="font-semibold text-neutral-700">목표 저축률 시뮬레이터 (급여 대비)</span>
            <span className="font-mono font-bold text-[#ea3822]">{savingsRate}% 저축 (월 120만 원+)</span>
          </div>
          <input
            type="range"
            min="20"
            max="60"
            value={savingsRate}
            onChange={(e) => setSavingsRate(Number(e.target.value))}
            className="w-full accent-[#ea3822] cursor-pointer h-1.5 bg-neutral-200 rounded-lg"
          />
          <div className="flex justify-between text-[9px] text-neutral-600 font-mono mt-1">
            <span>최소 20%</span>
            <span>권장 기준 40% (현재 설정)</span>
            <span>최대 60%</span>
          </div>
        </div>

        {/* Allocation Breakdown Bar */}
        <div>
          <div className="flex justify-between text-[10px] font-medium text-neutral-500 mb-1">
            <span>자산 배분 구조 (현금흐름 분할)</span>
            <span>100% 할당됨</span>
          </div>
          <div className="h-3 w-full rounded-full overflow-hidden flex bg-neutral-200">
            <div style={{ width: '40%' }} className="bg-[#ea3822] h-full" title="저축/비상금 40%"></div>
            <div style={{ width: '30%' }} className="bg-neutral-800 h-full" title="고정 생활비 30%"></div>
            <div style={{ width: '20%' }} className="bg-amber-600 h-full" title="변동 지출 20%"></div>
            <div style={{ width: '10%' }} className="bg-emerald-600 h-full" title="자기계발/도서 10%"></div>
          </div>
          <div className="flex items-center gap-3 mt-1.5 text-[10px] text-neutral-600">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#ea3822]"></span>선저축 40%</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-neutral-800"></span>고정비 30%</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-600"></span>변동비 20%</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-600"></span>자기계발 10%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mockup 2: Long-term Investment Portfolio
 * Matches the warm golden khaki container in reference
 */
export function EtfPortfolioMockup() {
  const [selectedAsset, setSelectedAsset] = useState<string>('all');

  return (
    <div className="w-full max-w-xl bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-black/10 overflow-hidden text-neutral-800 text-xs select-none">
      {/* Header */}
      <div className="bg-neutral-100/90 border-b border-black/10 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          <span className="text-[11px] font-mono font-medium text-neutral-600">portfolio-matrix / global-etf</span>
        </div>
        <div className="text-[10px] font-mono text-neutral-600">
          Target: <strong className="text-neutral-900">100,000,000 KRW</strong>
        </div>
      </div>

      <div className="p-4 md:p-5 space-y-4">
        {/* Core Growth Metric Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">10-Year Target Framework</div>
            <div className="text-lg font-extrabold font-serif text-neutral-900 tracking-tight">1억 원 자산 증식 로드맵</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-neutral-500">월 정기 납입</div>
            <div className="text-sm font-bold font-mono text-emerald-700">1,000,000 KRW / 월</div>
          </div>
        </div>

        {/* Allocation Cards */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 border border-neutral-200/80 hover:border-neutral-400 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px]">S&P</div>
              <div>
                <div className="font-semibold text-neutral-900 text-[11px]">미국 광범위 시장 지수 (S&P 500 ETF)</div>
                <div className="text-[10px] text-neutral-500">VOO / IVV / TIGER 미국S&P500</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-neutral-900">50%</span>
              <div className="text-[9px] text-neutral-500">핵심 성장 엔진</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 border border-neutral-200/80 hover:border-neutral-400 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[11px]">QQQ</div>
              <div>
                <div className="font-semibold text-neutral-900 text-[11px]">글로벌 혁신 기술주 (Nasdaq-100 ETF)</div>
                <div className="text-[10px] text-neutral-500">QQQM / TIGER 미국나스닥100</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-neutral-900">25%</span>
              <div className="text-[9px] text-neutral-500">성장 가속화</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 border border-neutral-200/80 hover:border-neutral-400 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px]">SCHD</div>
              <div>
                <div className="font-semibold text-neutral-900 text-[11px]">배당 성장 & 하방 방어 (U.S. Dividend Equity)</div>
                <div className="text-[10px] text-neutral-500">SCHD / ACE 미국배당다우존스</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-neutral-900">15%</span>
              <div className="text-[9px] text-neutral-500">재투자 현금흐름</div>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 border border-neutral-200/80 hover:border-neutral-400 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[11px]">CASH</div>
              <div>
                <div className="font-semibold text-neutral-900 text-[11px]">단기 채권 및 리밸런싱 대기 버퍼</div>
                <div className="text-[10px] text-neutral-500">KOFR 금리액티브 / 단기국채</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-neutral-900">10%</span>
              <div className="text-[9px] text-neutral-500">하락장 매수 여력</div>
            </div>
          </div>
        </div>

        {/* Safe Margin Principle Footer */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-lg p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-[10px] font-medium text-amber-900">원칙: 단기 시세 예측 금지 · 분기별 정기 리밸런싱</span>
          </div>
          <span className="text-[10px] font-mono text-amber-800">Rule of 72 복리적용</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Mockup 3: Additional Income Pipelines (Mobile Mockup style)
 * Matches the warm pink/coral container with smartphone frames in reference
 */
export function SidePipelineMockup() {
  return (
    <div className="w-full max-w-xl flex items-center justify-center gap-4 py-2 select-none">
      {/* Phone 1: Pipeline Status */}
      <div className="w-[190px] md:w-[220px] bg-neutral-900 text-white rounded-[2rem] p-3 shadow-2xl border-4 border-neutral-800 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
        {/* Notch */}
        <div className="w-16 h-3.5 bg-neutral-800 rounded-full mx-auto mb-3"></div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-[10px] text-neutral-400">
            <span>Pipeline Hub</span>
            <span className="text-emerald-400 font-mono">Live</span>
          </div>

          <div>
            <div className="text-[10px] text-neutral-400">월 추가 목표 수익</div>
            <div className="text-base font-extrabold font-mono text-white">₩1,000,000</div>
          </div>

          <div className="space-y-2 text-[10px]">
            <div className="bg-neutral-800/90 rounded-lg p-2 border border-neutral-700/60">
              <div className="flex items-center justify-between text-neutral-200 font-medium">
                <span>01. 노션 재무 템플릿</span>
                <span className="text-emerald-400 font-mono">₩400K</span>
              </div>
              <div className="text-[9px] text-neutral-400 mt-0.5">디지털 제품 자동 판매</div>
            </div>

            <div className="bg-neutral-800/90 rounded-lg p-2 border border-neutral-700/60">
              <div className="flex items-center justify-between text-neutral-200 font-medium">
                <span>02. 지식 콘텐츠 발행</span>
                <span className="text-emerald-400 font-mono">₩350K</span>
              </div>
              <div className="text-[9px] text-neutral-400 mt-0.5">재무관리 전자책 & 뉴스레터</div>
            </div>

            <div className="bg-neutral-800/90 rounded-lg p-2 border border-neutral-700/60">
              <div className="flex items-center justify-between text-neutral-200 font-medium">
                <span>03. 소규모 제휴 비즈니스</span>
                <span className="text-emerald-400 font-mono">₩250K</span>
              </div>
              <div className="text-[9px] text-neutral-400 mt-0.5">금융툴 큐레이션</div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone 2: Weekly Time & ROI Control */}
      <div className="w-[190px] md:w-[220px] bg-white text-neutral-900 rounded-[2rem] p-3 shadow-2xl border-4 border-neutral-200 transform rotate-3 hover:rotate-0 transition-transform duration-300 hidden sm:block">
        <div className="w-16 h-3.5 bg-neutral-200 rounded-full mx-auto mb-3"></div>

        <div className="space-y-3 text-[11px]">
          <div className="flex justify-between items-center text-[10px] text-neutral-500">
            <span>Work-Life Balance</span>
            <span className="font-semibold text-neutral-900">철도 안전 1순위</span>
          </div>

          <div className="bg-rose-50 rounded-lg p-2.5 border border-rose-100">
            <div className="text-[10px] text-rose-700 font-semibold">본업 보호 규칙</div>
            <div className="text-xs font-bold text-neutral-900 mt-0.5">주당 부업 투입 &lt; 10시간</div>
            <div className="text-[9px] text-neutral-500 mt-1">충분한 수면과 안전 집중력 보장</div>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">초기 투자 비용</span>
              <span className="font-mono font-bold text-neutral-800">최소화 (린 검증)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-500">목표 파이프라인 수</span>
              <span className="font-mono font-bold text-neutral-800">3개 채널</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-neutral-500">검증 주기</span>
              <span className="font-mono font-bold text-emerald-600">3개월 단위 피벗</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
