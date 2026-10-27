import React from 'react';
import { ArrowDown, Train, TrendingUp, Compass, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="about" className="pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Typographic Headline Block */}
        <div className="relative">
          <div className="flex flex-col items-start md:items-center text-left md:text-center select-none">
            {/* Line 1: I'M + Inline Pill Graphic */}
            <div className="flex items-center gap-3 sm:gap-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter text-neutral-900 leading-none">
              <span>I'M</span>
              <div 
                className="inline-flex items-center justify-center w-16 sm:w-24 md:w-32 h-9 sm:h-12 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-700 shadow-md border border-neutral-600 overflow-hidden relative group"
                title="철도기관사의 정밀함"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:8px_8px] opacity-20"></div>
                <div className="flex items-center gap-1.5 text-white z-10">
                  <Train className="w-4 sm:w-6 h-4 sm:h-6 text-sky-300" />
                  <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-sky-200 uppercase hidden sm:inline">RAIL</span>
                </div>
              </div>
            </div>

            {/* Line 2: CHI-HOON LEE (Large Red Serif Italic, exactly like MARY DANIEL in reference) */}
            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic font-extrabold text-[#ea3822] tracking-tight leading-[0.9] my-1 sm:my-2">
              CHI-HOON LEE
            </div>

            {/* Line 3 & 4 with inline image and side annotation */}
            <div className="relative w-full flex flex-col md:items-center">
              {/* Line 3: WEALTH + Inline stamp + BUILDER */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter text-neutral-900 leading-tight">
                <span>WEALTH</span>
                <div 
                  className="inline-flex items-center justify-center w-14 sm:w-20 md:w-28 h-9 sm:h-12 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 shadow-md border border-emerald-500 overflow-hidden relative"
                  title="자산 복리 증식"
                >
                  <TrendingUp className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                </div>
                <span>BUILDER</span>
              </div>

              {/* Line 4: & INVESTOR with inline stamp */}
              <div className="flex items-center gap-2 sm:gap-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-neutral-900 font-bold leading-tight">
                <div 
                  className="inline-flex items-center justify-center w-12 sm:w-16 md:w-20 h-9 sm:h-12 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#ea3822] to-amber-500 shadow-md border border-red-400 overflow-hidden"
                  title="전략적 자산 배분"
                >
                  <Compass className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <span>& INVESTOR</span>
              </div>

              {/* Floating Side Editorial Annotation (matches "WITH GOOD AESTHETIC VISION" in reference) */}
              <div className="mt-4 md:mt-0 md:absolute md:right-0 md:top-2 text-left md:text-right max-w-[140px] text-[10px] md:text-[11px] font-sans font-bold tracking-widest text-neutral-500 uppercase leading-snug">
                WITH
                <br />
                DISCIPLINED
                <br />
                RAILWAY
                <br />
                PRECISION
              </div>
            </div>
          </div>

          {/* Editorial Bio Text - Offset to the right/center (directly matching reference) */}
          <div className="mt-12 md:mt-16 max-w-2xl ml-auto text-neutral-800">
            <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-neutral-800">
              현재 서울을 거점으로 활동하며,{' '}
              <span className="font-semibold text-neutral-900">철도기관사</span>로서 열차의 안전 운행과 엄격한 규율을 수행하고 있습니다.{' '}
              <span className="text-[#ea3822] font-bold">
                안정적인 근로소득을 디딤돌 삼아 장기적인 경제적 자유와 자산 복리 시스템을 구축 중이며,
              </span>{' '}
              단순히 돈을 많이 버는 것을 넘어 시간과 삶을 스스로 선택할 수 있는 지속 가능한 부의 기반을 만들고 있습니다.
            </p>

            {/* Quick Micro-Credentials Unboxed Strip (Zero-Pill Compliance) */}
            <div className="mt-6 pt-6 border-t border-black/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-neutral-600 font-mono">
              <span className="text-neutral-900 font-bold">CURRENT: 철도기관사</span>
              <span aria-hidden="true" className="text-neutral-400">/</span>
              <span>AIM: 투자자 · 사업가</span>
              <span aria-hidden="true" className="text-neutral-400">/</span>
              <span>FOCUS: 저축률 40% & ETF 1억 원 자산 형성</span>
              <span aria-hidden="true" className="text-neutral-400">/</span>
              <span>BASED: SEOUL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
