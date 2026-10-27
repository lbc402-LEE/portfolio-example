import React from 'react';
import { ArrowUpRight, Info } from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
  onOpenDesignSystem: () => void;
}

export function Navbar({ onOpenCv, onOpenDesignSystem }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f5]/90 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark / Monogram */}
        <a 
          href="#" 
          className="group flex items-center gap-2 text-neutral-900 transition-transform active:scale-95"
          aria-label="Chi-Hoon Lee Portfolio Home"
        >
          <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-xs group-hover:border-[#ea3822] transition-colors">
            <span className="font-serif italic font-extrabold text-xl text-[#ea3822] tracking-tighter">CL</span>
          </div>
          <span className="hidden sm:inline font-sans text-xs tracking-widest font-bold uppercase text-neutral-800">
            Chi-Hoon Lee
          </span>
        </a>

        {/* Zone 2: Navigation Links (Single-line, clean typography with hover underline) */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold tracking-wider uppercase text-neutral-700">
          <a
            href="#projects"
            className="text-[#ea3822] hover:text-[#d02c17] transition-colors whitespace-nowrap"
          >
            My Projects
          </a>
          <a
            href="#about"
            className="hover:text-neutral-900 transition-colors whitespace-nowrap"
          >
            About & Vision
          </a>
          <a
            href="#experience"
            className="hover:text-neutral-900 transition-colors whitespace-nowrap"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="hover:text-neutral-900 transition-colors whitespace-nowrap"
          >
            Skills & Books
          </a>
          <a
            href="#metrics"
            className="hover:text-neutral-900 transition-colors whitespace-nowrap"
          >
            Metrics & Roadmap
          </a>
        </nav>

        {/* Zone 3: Primary Action Pill Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenDesignSystem}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-black/5 rounded-full border border-black/10 transition-colors whitespace-nowrap cursor-pointer"
            title="참고한 설계 시스템 요약표 및 변경점"
          >
            <Info className="w-3.5 h-3.5 text-neutral-500" />
            <span>설계 시스템 요약</span>
          </button>

          <button
            onClick={onOpenCv}
            className="flex items-center gap-1.5 px-4 md:px-5 py-2 text-xs font-bold tracking-wider uppercase text-neutral-900 bg-transparent hover:bg-neutral-900 hover:text-white rounded-full border border-neutral-900 transition-all duration-200 active:scale-95 whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>View My CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
