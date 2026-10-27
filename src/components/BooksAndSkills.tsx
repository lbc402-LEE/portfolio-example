import React, { useState } from 'react';
import { BookOpen, Award, GraduationCap, Star, BookMarked, ArrowUpRight } from 'lucide-react';
import { BOOKS_LIST, SKILLS_LIST, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export function BooksAndSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS_LIST
    : SKILLS_LIST.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-black/5 bg-[#f5f1e8]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        {/* Sub-section 1: Curated Books (Section 5) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea3822] mb-2">
                Guiding Philosophies & Essential Readings
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight text-neutral-900">
                Lectures & Books
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
              부와 투자의 심리, 현금흐름의 본질, 가치 평가와 안전마진을 가르쳐준 3권의 필독서입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BOOKS_LIST.map((book, index) => (
              <div
                key={book.id}
                className="bg-white rounded-3xl p-8 border border-black/5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span className="font-bold text-[#ea3822]">BOOK 0{index + 1}</span>
                    <span>{book.author.split('(')[0].trim()}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif text-neutral-900 tracking-tight">
                    {book.title}
                  </h3>

                  {/* Book Quote */}
                  <blockquote className="bg-neutral-50 rounded-2xl p-4 border border-black/5 text-xs text-neutral-700 italic leading-relaxed">
                    “{book.quote}”
                  </blockquote>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {book.description}
                  </p>

                  {/* Key Learnings */}
                  <div className="space-y-2 pt-2 border-t border-black/5">
                    <span className="text-[11px] font-mono font-bold text-neutral-800 uppercase tracking-wider block">
                      핵심 통찰 (Key Learnings)
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {book.keyLearnings.map((learning, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#ea3822] font-bold">›</span>
                          <span className="leading-snug">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 2: Skills Matrix (Section 4) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea3822] mb-2">
                Core Competencies & Proficiency
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-tight text-neutral-900">
                Skills & Disciplines
              </h2>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-full border border-black/10 select-none">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                전체 보기
              </button>
              <button
                onClick={() => setSelectedCategory('재무·투자')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  selectedCategory === '재무·투자'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                재무·투자
              </button>
              <button
                onClick={() => setSelectedCategory('전략·분석')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  selectedCategory === '전략·분석'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                전략·분석
              </button>
              <button
                onClick={() => setSelectedCategory('실행·관리')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                  selectedCategory === '실행·관리'
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                실행·관리
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-black/5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-neutral-500 font-semibold">{skill.category}</span>
                    <div className="flex items-center text-amber-500 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < skill.rating ? 'text-amber-500' : 'text-neutral-200'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <h4 className="text-base font-bold font-sans text-neutral-900 mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 text-[10px] font-mono text-neutral-600">
                  숙련도 레벨: {skill.rating} / 5
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 3: Certifications & Education (Section 6 & 7) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-neutral-900 font-serif font-bold text-xl">
              <Award className="w-5 h-5 text-[#ea3822]" />
              <span>Certifications & Goals</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className="p-4 rounded-2xl bg-neutral-50 border border-black/5 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-sm text-neutral-900">{cert.name}</h5>
                    <div className="text-xs text-neutral-500 mt-0.5">발급 기관: {cert.issuer}</div>
                  </div>
                  <span className="text-xs font-mono font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Continuous Growth */}
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-neutral-900 font-serif font-bold text-xl">
              <GraduationCap className="w-5 h-5 text-neutral-800" />
              <span>Education & Lifelong Learning</span>
            </div>

            <div className="space-y-3 text-sm text-neutral-700">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/5">
                <div className="text-xs font-mono text-neutral-500 font-bold mb-1">자기계발 및 연구 영역</div>
                <p className="text-xs leading-relaxed text-neutral-800">
                  {EDUCATION.selfDevelopment}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/5">
                <div className="text-xs font-mono text-neutral-500 font-bold mb-1">중장기 학습 로드맵</div>
                <p className="text-xs leading-relaxed text-neutral-800">
                  {EDUCATION.futureRoadmap}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
