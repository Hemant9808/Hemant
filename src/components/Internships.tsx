import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Internships = () => {
  const internships = [
    {
      id: 1,
      company: "Softnear",
      role: "Full Stack Developer Intern",
      duration: "Feb 2025 - May 2025",
      location: "Remote", 
      description: "Developed Travel Carib website integrating Duffel, Amadeus, and Kiu APIs with optimized search algorithms and payment processing. Built flight search, booking, and payment APIs with multi-provider data aggregation and booking management systems. Created price calendar, fare rules integration, and booking interfaces for seamless user experience.",
      technologies: ["React.js", "TypeScript", "Next.js", "React-Redux", "Tailwind CSS", "MUI", "Node.js", "Express.js", "MongoDB"],
      logo: "/api/placeholder/60/60",
      website: "https://vuelitos.com"
    },
    {
      id: 2,
      company: "ITraction",
      role: "Full Stack Developer Intern",
      duration: "Sep 2024 - Mar 2025",
      location: "Remote",
      description: "Developed and maintained the backend for an e-commerce pharmacy platform, handling secure payment processing and improving transaction efficiency by 30%. Built a scalable admin panel to manage orders, inventory, and user accounts, reducing operational overhead by 40%.",
      technologies: ["React.js", "TypeScript", "Next.js", "React-Redux", "Tailwind CSS", "MUI", "Node.js", "Express.js", "MongoDB"],
      logo: "/api/placeholder/60/60",
      website: "https://www.itraction.in/"
    },
    
    {
      id: 3,
      company: "Adiray Global",
      role: "React Developer Intern",
      duration: "Apr 2024 - Aug 2024",
      location: "Remote",
      description: "Created reusable React components to enhance modularity and maintainability for CRM web application. Utilized state management with React hooks and React-Redux to handle application state. Ensured seamless integration with backend APIs for customer operations and user management.",
      technologies: ["React.js", "TypeScript", "Next.js", "React-Redux", "Tailwind CSS", "MUI", "Node.js", "WebSocket", "Express.js", "MongoDB"],
      logo: "/api/placeholder/60/60",
      website: "https://adirayglobal.com"
    }
  ];

  return (
    <section id="internships" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and scaling systems across different domains
          </p>
        </div>

        {/* Internships Grid */}
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <Card 
              key={internship.id} 
              className={`glass-card hover:glow-effect transition-spring group fade-in-up stagger-${index + 1}`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-[2rem] h-[2rem] bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {internship.company.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                        {internship.role}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground mt-1">
                        {internship.company}
                      </CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {internship.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  {internship.website !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="shrink-0 hover:glow-effect transition-smooth"
                      onClick={() => window.open(internship.website, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {internship.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;