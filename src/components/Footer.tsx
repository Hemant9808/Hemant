import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/hemantkumar',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/hemantkumar',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hemant27134@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Internships', href: '#internships' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Hemant Kumar
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Full Stack Developer passionate about building scalable web applications 
              and innovative solutions that make a difference.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hemant27134@gmail.com" className="hover:text-primary transition-smooth">
                  hemant27134@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Let's Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-muted-foreground ${social.color} transition-smooth group`}
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{social.name}</span>
                  </a>
                );
              })}
            </div>
            
            {/* Theme Toggle */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">Theme Preference</p>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="transition-smooth hover:glow-effect"
              >
                {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hemant Kumar. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;