export interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  keySkills: string[];
  metrics: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
  headline: string;
  shortSummary: string;
  bgColor: string;
  accentColor: string;
  badgeText: string;
  details: {
    background: string;
    purpose: string;
    goals: string[];
    roles: string[];
    keywords: string[];
    problems: string[];
    solutions: string[];
    takeaways: string[];
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  keyDuties: string[];
  achievements: string;
  takeaway: string;
  tag: string;
}

export interface SkillItem {
  name: string;
  category: '재무·투자' | '전략·분석' | '실행·관리';
  rating: number; // 1-5
  description: string;
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  quote: string;
  description: string;
  keyLearnings: string[];
}

export interface Certification {
  name: string;
  status: string;
  issuer: string;
}
