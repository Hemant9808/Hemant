import React from 'react';
import { Github, ExternalLink, Users, Database, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Flight Booking Platform",
      description: "Comprehensive travel aggregator with multi-GDS integration, real-time search, and seamless booking experience. Handles 10K+ daily searches across multiple airlines.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe"],
      liveUrl: "https://vuelitos.com",
      githubUrl: "#",
      stats: {
        users: "10K+",
        transactions: "500+",
        uptime: "99.9%"
      },
      featured: true
    },
    {
      id: 2,
      title: "Warehouse Management System",
      description: "Smart inventory tracking system with barcode scanning, role-based access control, and real-time analytics dashboard for logistics optimization.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      liveUrl: "https://wms-rrltd.vercel.app",
      githubUrl: "#",
      stats: {
        efficiency: "+45%",
        accuracy: "99.8%",
        automation: "85%"
      },
      featured: false
    },
    {
      id: 3,
      title: "Group Management System",
      description: "Academic social platform for university students with smart group creation, event management, and role-based access control.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Tailwind"],
      liveUrl: "https://nilesh-psi.vercel.app",
      githubUrl: "#",
      stats: {
        groups: "200+",
        students: "1.5K+",
        events: "300+"
      },
      featured: false
    },
    {
      id: 4,
      title: "Chat Application",
      description: "Real-time messaging platform with end-to-end encryption, file sharing, and modern UI design for seamless communication.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      liveUrl: "https://chatify-r1dc.vercel.app",
      githubUrl: "#",
      stats: {
        messages: "50K+",
        users: "500+",
        latency: "<100ms"
      },
      featured: false
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description: "Modern electronics marketplace with advanced filtering, secure payments, and responsive design for optimal shopping experience.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redux"],
      liveUrl: "https://electronic-mart-ecommerce.vercel.app",
      githubUrl: "#",
      stats: {
        products: "1K+",
        orders: "200+",
        rating: "4.8/5"
      },
      featured: false
    },
    {
      id: 6,
      title: "Route Safety Navigator",
      description: "Hackathon-winning application for finding the safest routes using real-time crime data and machine learning algorithms.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Leaflet", "Python", "ML", "APIs"],
      liveUrl: "https://sefest-route-on-map-using-react-leaflet.vercel.app",
      githubUrl: "#",
      stats: {
        accuracy: "92%",
        routes: "10K+",
        award: "Winner"
      },
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and technical achievements
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`glass-card hover:glow-effect transition-spring group fade-in-up stagger-${(index % 3) + 1} ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-purple-500/20 h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  {project.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <Database className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">{project.title}</p>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Project Stats */}
                <div className="flex justify-between items-center mb-4 p-3 bg-muted/50 rounded-lg">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-bold text-sm text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 hover:glow-effect transition-smooth"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  {project.githubUrl !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:glow-effect transition-smooth"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16 fade-in-up stagger-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="hover:glow-effect transition-smooth"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;