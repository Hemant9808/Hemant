import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Internships from '@/components/Internships';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <Internships />
          <Projects />
          <Achievements />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
