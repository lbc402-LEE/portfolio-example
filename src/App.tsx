/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedProjects } from './components/SelectedProjects';
import { ExperienceSection } from './components/ExperienceSection';
import { MetricsSection } from './components/MetricsSection';
import { BooksAndSkills } from './components/BooksAndSkills';
import { ContactHero } from './components/ContactHero';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { DesignSystemSummary } from './components/DesignSystemSummary';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-neutral-900 font-sans selection:bg-[#ea3822]/15 selection:text-[#ea3822]">
      {/* Navigation Bar */}
      <Navbar
        onOpenCv={() => setIsResumeOpen(true)}
        onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
      />

      <main>
        {/* Editorial Hero Section */}
        <Hero />

        {/* Selected Projects (3 Core Cases with Interactive Mockups) */}
        <SelectedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Experience & Career Trajectory */}
        <ExperienceSection />

        {/* Interactive Performance Charts & Roadmap */}
        <MetricsSection />

        {/* Curated Readings & Skills Matrix */}
        <BooksAndSkills />

        {/* Conversation & Contact Bottom Hero */}
        <ContactHero />
      </main>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <DesignSystemSummary
        isOpen={isDesignSystemOpen}
        onClose={() => setIsDesignSystemOpen(false)}
      />
    </div>
  );
}
