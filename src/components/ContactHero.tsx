import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, MessageSquare, Linkedin, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function ContactHero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-20 md:pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Giant Conversation Headline (Faithfully recreates Mary Daniel's bottom hero!) */}
        <div className="text-center select-none">
          {/* Line 1: [inline badge] LET'S HAVE A */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black tracking-tighter text-neutral-900 leading-none">
            <div 
              className="inline-flex items-center justify-center w-12 sm:w-16 md:w-20 h-9 sm:h-12 md:h-16 rounded-xl sm:rounded-2xl bg-neutral-900 text-white shadow-md border border-neutral-700"
              title="대화의 시작"
            >
              <MessageSquare className="w-5 sm:w-7 h-5 sm:h-7 text-[#ea3822]" />
            </div>
            <span>LET'S HAVE A</span>
          </div>

          {/* Line 2: CONVERSATION [inline badge] (Large Red Serif Italic) */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 my-2 sm:my-3">
            <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic font-extrabold text-[#ea3822] tracking-tight leading-[0.9]">
              CONVERSATION
            </span>
            <div 
              className="hidden sm:inline-flex items-center justify-center w-14 sm:w-20 md:w-24 h-9 sm:h-12 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-700 shadow-md border border-neutral-600 text-amber-300"
              title="비전 공유"
            >
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase">WEALTH</span>
            </div>
          </div>

          {/* Subtext Paragraph */}
          <p className="mt-8 max-w-xl mx-auto text-sm sm:text-base text-neutral-700 leading-relaxed font-sans">
            I'm always up for a chat about{' '}
            <span className="text-[#ea3822] font-bold">disciplined cashflows</span> (or we can go into deep{' '}
            <span className="text-[#ea3822] font-bold">wealth philosophies</span> from which it is impossible to return).
          </p>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500">
            철도 안전 규율에서 출발한 자산 관리 시스템, 또는 새로운 파이프라인 협업에 대한 대화는 언제든 환영합니다.
          </p>

          {/* Big Contact Links (matches reference large uppercase email & phone) */}
          <div className="mt-12 space-y-4">
            <div>
              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 text-lg sm:text-2xl md:text-3xl font-mono font-bold tracking-wider text-neutral-900 hover:text-[#ea3822] transition-colors uppercase cursor-pointer"
              >
                <span>{PROFILE.email}</span>
                {copiedEmail ? (
                  <Check className="w-5 h-5 text-emerald-600" />
                ) : (
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
              </button>
              {copiedEmail && (
                <div className="text-xs font-mono text-emerald-600 mt-1">이메일 주소가 클립보드에 복사되었습니다!</div>
              )}
            </div>

            <div>
              <button
                onClick={handleCopyPhone}
                className="group inline-flex items-center gap-2 text-base sm:text-xl md:text-2xl font-mono font-bold tracking-wider text-neutral-900 hover:text-[#ea3822] transition-colors cursor-pointer"
              >
                <span>{PROFILE.phone}</span>
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
              </button>
              {copiedPhone && (
                <div className="text-xs font-mono text-emerald-600 mt-1">연락처가 클립보드에 복사되었습니다!</div>
              )}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="mt-20 mb-8 border-black/10" />

        {/* Bottom Bar: Social Icons & (BACK TO TOP) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-5 text-neutral-800">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#ea3822] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#ea3822] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com/@sirealco" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#ea3822] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top Link (Directly from reference: (BACK TO TOP)) */}
          <button
            onClick={scrollToTop}
            className="text-xs font-mono font-bold tracking-widest text-neutral-700 hover:text-[#ea3822] transition-colors uppercase cursor-pointer"
          >
            (BACK TO TOP)
          </button>
        </div>

        {/* Copyright & Document Origin Credits */}
        <div className="mt-6 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} Chi-Hoon Lee. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>포트폴리오 프레임워크:</span>
            <a 
              href="https://www.sireal.co/?utm_source=chatgpt.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-700 hover:text-[#ea3822] transition-colors underline flex items-center gap-0.5"
            >
              <span>전시진 협업툴 컨설턴트 (Sireal)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
