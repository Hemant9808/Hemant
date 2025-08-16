import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Internships = () => {
  const internships = [
    {
      id: 1,
      company: "Vuelitos Travel",
      role: "Senior Full Stack Developer",
      duration: "Jan 2024 - Present",
      location: "Remote",
      description: "Led development of comprehensive flight booking platform handling 10K+ daily searches. Built multi-GDS integration with Amadeus, Duffel, and KIU for real-time flight data.",
      technologies: ["React", "Node.js", "TypeScript", "Redux", "Express", "Prisma", "Firebase"],
      logo: "/api/placeholder/60/60",
      website: "https://vuelitos.com"
    },
    {
      id: 2,
      company: "Travel-Carib Systems",
      role: "Backend System Architect",
      duration: "Sep 2023 - Dec 2023",
      location: "Remote",
      description: "Designed and implemented scalable backend architecture for travel management system. Created multi-GDS integration layer and real-time booking management system.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS"],
      logo: "/api/placeholder/60/60",
      website: "#"
    },
    {
      id: 3,
      company: "R&R Logistics Tech",
      role: "Full Stack Developer",
      duration: "Mar 2023 - Aug 2023",
      location: "Hybrid",
      description: "Built comprehensive warehouse management system with inventory tracking, role-based access control, and real-time reporting dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      logo: "/api/placeholder/60/60",
      website: "https://wms-rrltd.vercel.app"
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
                    <div className="w-15 h-15 bg-gradient-to-br from-primary to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
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