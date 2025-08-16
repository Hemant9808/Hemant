import React from 'react';
import { Github, ExternalLink, Users, Database, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TravelCarib Flight Booking Platform",
      description: "Comprehensive flight booking platform integrating Duffel, Amadeus, and Kiu APIs with real-time search, secure payments, and seamless booking experience. Features RBAC, admin panel with analytics, and multi-provider data aggregation.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "React-Redux", "Tailwind CSS", "MUI"],
      liveUrl: "https://vuelitos.com",
      githubUrl: "#",
      stats: {
        apis: "3 GDS",
        bookings: "Real-time",
        payments: "Secure"
      },
      featured: true
    },
    {
      id: 2,
      title: "AI Agent Platform",
      description: "Multi-tool conversational assistant using Next.js 15, Claude 3.5 Sonnet, and Anthropic with real-time token streaming, dynamic tool integration via IBM wxflows, and intelligent context management.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js 15", "LangChain", "Claude 3.5 Sonnet", "Anthropic", "LangGraph", "IBM wxflows"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        tools: "Dynamic",
        ai: "Claude 3.5",
        memory: "Stateful"
      },
      featured: true
    },
    {
      id: 3,
      title: "Campus Connect",
      description: "University-governed platform enabling students to join interest-based groups and host events. Features role-based access control, real-time chat, LangChain-powered chatbot, and live event calendar.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "LangChain", "Socket.io", "Shadcn"],
      liveUrl: "https://nilesh-psi.vercel.app",
      githubUrl: "#",
      stats: {
        groups: "Interest-based",
        chat: "Real-time",
        events: "Live Calendar"
      },
      featured: true
    },
    {
      id: 4,
      title: "Interview Practice Platform",
      description: "Boost interview skills with customized questions tailored to role and experience level. Interactive recording, detailed feedback, and performance ratings to build confidence.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "WebRTC", "AI Analysis", "Recording"],
      liveUrl: "https://praxis-zeta.vercel.app/",
      githubUrl: "#",
      stats: {
        questions: "Tailored",
        recording: "Interactive",
        feedback: "Detailed"
      },
      featured: false
    },
    {
      id: 5,
      title: "Warehouse Management System",
      description: "Smart inventory tracking with barcode scanning, role-based access control, and real-time analytics dashboard for logistics optimization.",
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
      id: 6,
      title: "Electronic E-Shop",
      description: "Modern electronics marketplace with advanced filtering, secure payments, and responsive design for optimal shopping experience.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redux"],
      liveUrl: "https://electronic-mart-ecommerce.vercel.app",
      githubUrl: "#",
      stats: {
        products: "1K+",
        orders: "Secure",
        rating: "4.8/5"
      },
      featured: false
    },
    {
      id: 7,
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
    },
    {
      id: 8,
      title: "Imagify - AI Image Generator",
      description: "AI-powered image generation website with advanced algorithms for creating stunning visuals from text prompts.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "AI APIs", "Node.js", "Image Processing"],
      liveUrl: "https://imagify-frontend-nbxs.onrender.com/",
      githubUrl: "#",
      stats: {
        images: "AI Generated",
        quality: "HD",
        speed: "Fast"
      },
      featured: false
    },
    {
      id: 9,
      title: "ITraction - IT Services",
      description: "Professional IT services company website showcasing digital solutions, web development, and technology consulting services.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Next.js", "Tailwind CSS", "CMS"],
      liveUrl: "https://www.itraction.in/",
      githubUrl: "#",
      stats: {
        services: "IT Solutions",
        clients: "Global",
        experience: "Professional"
      },
      featured: false
    },
    {
      id: 10,
      title: "Wellvas Healthcare",
      description: "Comprehensive healthcare platform with patient management, appointment scheduling, and medical record management systems.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Healthcare APIs", "Admin Panel"],
      liveUrl: "https://wellvas.com",
      githubUrl: "#",
      stats: {
        patients: "Managed",
        appointments: "Scheduled",
        records: "Secure"
      },
      featured: false
    },
    {
      id: 11,
      title: "Real Estate Platform",
      description: "Modern real estate website for property listings, virtual tours, and property management with advanced search capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Real Estate APIs", "Maps Integration", "CMS"],
      liveUrl: "https://realtorsproperty.com/property/the-omaxe-state/",
      githubUrl: "#",
      stats: {
        properties: "Listed",
        tours: "Virtual",
        search: "Advanced"
      },
      featured: false
    },
    {
      id: 12,
      title: "Kicks & Co - Shoe Store",
      description: "E-commerce platform for premium footwear with product catalog, shopping cart, and secure payment integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "E-commerce", "Payment Gateway", "Inventory"],
      liveUrl: "https://www.kicksandco.in/collections/men",
      githubUrl: "#",
      stats: {
        products: "Premium",
        cart: "Smart",
        checkout: "Secure"
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
                project.featured ? 'lg:col-span-1 lg:row-span-1' : ''
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