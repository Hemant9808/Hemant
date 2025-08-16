import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('internships');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Content */}
        <div className="fade-in-up">
          <p className="text-primary font-medium text-lg mb-4 tracking-wide">
            Hi there, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-purple-400 bg-clip-text text-transparent">
            Hemant Kumar
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-8">
            Full Stack Developer
          </h2>
        </div>

        <div className="fade-in-up stagger-2">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer with expertise gained at ITraction and AdirayGlobal, specializing in React and modern frameworks. 
            Proficient in building scalable, high-performance web applications and delivering innovative, optimized solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="fade-in-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="hero"
            size="lg" 
            className="px-8 py-3 text-lg rounded-full"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-3 text-lg rounded-full"
            onClick={scrollToNext}
          >
            View My Work
          </Button>
        </div>

        {/* Social Links */}
        <div className="fade-in-up stagger-4 flex justify-center space-x-6 mb-16">
          <Button 
            variant="ghost" 
            size="sm" 
            className="transition-smooth hover:glow-effect hover:text-primary"
            onClick={() => window.open('https://github.com/Hemant9808', '_blank')}
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="transition-smooth hover:glow-effect hover:text-primary"
            onClick={() => window.open('https://linkedin.com/in/hemant-kumar-78893a207', '_blank')}
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="transition-smooth hover:glow-effect hover:text-primary"
            onClick={() => window.open('mailto:hemant12734@gmail.com', '_blank')}
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="fade-in-up stagger-5 absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="animate-bounce text-muted-foreground hover:text-primary transition-smooth"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;