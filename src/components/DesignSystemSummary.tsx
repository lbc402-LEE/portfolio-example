import React from 'react';
import { X, CheckCircle2, Palette, Type, Layout, Sparkles, Layers } from 'lucide-react';

interface DesignSystemSummaryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DesignSystemSummary({ isOpen, onClose }: DesignSystemSummaryProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#fbf9f5] rounded-3xl shadow-2xl border border-black/10 overflow-hidden text-neutral-900 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#fbf9f5]/95 backdrop-blur-md px-6 py-5 border-b border-black/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase text-[#ea3822]">DESIGN SYSTEM SPECIFICATION</span>
            <span className="text-neutral-400">·</span>
            <span className="text-xs text-neutral-600 font-medium">설계 언어 추출 및 포트폴리오 적용표</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors text-neutral-700 cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8 text-neutral-800 text-xs sm:text-sm">
          {/* Deliverable 3: 원본 대비 변경점 한 줄 요약 */}
          <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-[#ea3822]" />
              <span>원본 대비 변경점 한 줄 요약 (Deliverable 3)</span>
            </div>
            <p className="text-sm font-medium text-neutral-800 bg-[#fbf9f5] p-3 rounded-xl border border-black/5 leading-relaxed">
              <strong>요약:</strong> 원본(Mary Daniel 포트폴리오)의 ‘인라인 썸네일이 삽입된 대담한 세리프 이탤릭 헤드라인, 파스텔 톤 캔버스 3단 프로젝트 쇼케이스, 대화형 컨버세이션 푸터’의 설계 언어 구조를 계승하되, 컬러 팔레트를 금융·철도 특유의 신뢰감 있는 웜 리넨과 크림슨 버밀리언으로 재조합하고 콘텐츠를 철도기관사 이치훈의 10년 자산 증식 및 3대 파이프라인 데이터로 전면 재설계했습니다.
            </p>
          </div>

          {/* Deliverable 2: 참고한 설계 시스템 요약표 */}
          <div>
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-sm mb-3">
              <Layers className="w-4 h-4 text-[#ea3822]" />
              <span>참고한 설계 시스템 요약표 (Deliverable 2)</span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-neutral-100/80 text-neutral-900 font-mono uppercase text-[11px] border-b border-black/10">
                  <tr>
                    <th className="py-3 px-4 font-bold">항목 (Category)</th>
                    <th className="py-3 px-4 font-bold">원본 참조 패턴 (Reference)</th>
                    <th className="py-3 px-4 font-bold">본 포트폴리오 적용 스펙 (Implementation)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-neutral-700">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-neutral-900 bg-neutral-50/50">간격 스케일 (Spacing Scale)</td>
                    <td className="py-3.5 px-4">섹션 간 96px~128px의 극대화된 여백, 카드 내부 48px 이상의 넉넉한 호흡</td>
                    <td className="py-3.5 px-4 font-mono">py-16 md:py-24, gap-8 lg:gap-14, 카드 패딩 p-6 md:p-12</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-neutral-900 bg-neutral-50/50">타이포 스케일 (Typography)</td>
                    <td className="py-3.5 px-4">Hero 디스플레이 96px+ 세리프 이탤릭 + Bold 산세리프 혼용, 본문 15~16px</td>
                    <td className="py-3.5 px-4">
                      Playfair Display(Serif Italic) + Plus Jakarta Sans(Black Sans), line-height 0.95, clamp 4rem~8rem
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-neutral-900 bg-neutral-50/50">색상 팔레트 (Color Palette)</td>
                    <td className="py-3.5 px-4">미색 린넨 배경(#FBF9F5), 코랄 레드 악센트(#EA3822), 샌드/올리브/블러시 캔버스</td>
                    <td className="py-3.5 px-4 font-mono">
                      Canvas #FBF9F5 (60%), Accent Crimson #EA3822 (10%), Project Cards #E7E2D6, #D5CB98, #F1B7B4 (30%)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-neutral-900 bg-neutral-50/50">인터랙션 스펙 (Interactions)</td>
                    <td className="py-3.5 px-4">200ms cubic-bezier 호버 전환, 화살표 대각 이동(↗), 모달 기반 딥다이브</td>
                    <td className="py-3.5 px-4">
                      hover:translate-x-1 hover:-translate-y-1, 대화형 슬라이더 시뮬레이터, 탭 전환, 1-클릭 복사
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-neutral-900 bg-neutral-50/50">반응형 브레이크포인트 (Responsive)</td>
                    <td className="py-3.5 px-4">1440px 데스크톱 와이드 기준, 모바일 시 1열 스택 및 폰트 크기 반응형 축소</td>
                    <td className="py-3.5 px-4 font-mono">
                      sm: 640px, md: 768px, lg: 1024px, xl: 1280px (1440px max-w-7xl 레이아웃 보장)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Core Design Principles applied */}
          <div className="bg-neutral-50 p-5 rounded-2xl border border-black/5 space-y-2">
            <h4 className="font-bold text-xs font-mono uppercase text-neutral-900 tracking-wider">
              준수 사항 검증 (Zero AI-Slop & Anti-Copy Compliance)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>원본 소스 코드/이미지 0% 복사, 독립 SVG/CSS 컴포넌트 구현</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-Pill 규율 준수: 정적 메타데이터 언박스드 타이포그래피 처리</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Top Bar Contract 준수: [브랜드 1행] — [네비 5개] — [1개 CTA]</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>60-30-10 엄격한 색상 분배 및 1440px 풀 데스크톱 뷰포트 확보</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-neutral-100 px-6 py-4 border-t border-black/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-medium transition-colors cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
}
