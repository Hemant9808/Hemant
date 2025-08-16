import React from 'react';
import { Trophy, Award, Target, Code, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner - Route Safety Navigator",
      category: "Competition",
      description: "First place in university hackathon for developing an AI-powered route safety application using real-time crime data and machine learning algorithms.",
      date: "2024",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      impact: "92% accuracy in route safety prediction"
    },
    {
      id: 2,
      title: "10K+ Daily Users Platform",
      category: "Scale Achievement",
      description: "Successfully scaled flight booking platform to handle 10,000+ daily search queries with 99.9% uptime and sub-second response times.",
      date: "2024",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      impact: "Processed 500+ successful bookings"
    },
    {
      id: 3,
      title: "Multi-GDS Integration Expert",
      category: "Technical Excellence",
      description: "Architected and implemented complex integration with 3 major GDS systems (Amadeus, Duffel, KIU) for real-time flight data synchronization.",
      date: "2024",
      icon: Code,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      impact: "Reduced data sync time by 75%"
    },
    {
      id: 4,
      title: "Warehouse Efficiency Optimizer",
      category: "Process Improvement",
      description: "Designed WMS that increased warehouse operational efficiency by 45% through automated inventory tracking and intelligent routing.",
      date: "2023",
      icon: Target,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      impact: "45% efficiency improvement"
    },
    {
      id: 5,
      title: "Full-Stack Mastery Certification",
      category: "Certification",
      description: "Achieved advanced proficiency in modern web technologies including React, Node.js, TypeScript, and cloud architecture patterns.",
      date: "2023",
      icon: Award,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      impact: "15+ technologies mastered"
    },
    {
      id: 6,
      title: "Real-time System Architecture",
      category: "Innovation",
      description: "Built high-performance real-time systems handling concurrent users with WebSocket connections and optimized database queries.",
      date: "2023",
      icon: Zap,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      impact: "<100ms response time"
    }
  ];

  const categories = ["All", "Competition", "Scale Achievement", "Technical Excellence", "Process Improvement", "Certification", "Innovation"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that showcase technical excellence and impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in-up stagger-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground glow-effect'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {filteredAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={achievement.id} 
                  className={`relative fade-in-up stagger-${(index % 3) + 1}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary transform md:-translate-x-1/2 z-10 ${achievement.bgColor} border-2 border-background`}></div>
                  
                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 ${isEven ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}>
                    <Card className="glass-card hover:glow-effect transition-spring group">
                      <CardHeader>
                        <div className={`flex items-start gap-4 ${isEven && 'md:flex-row-reverse'}`}>
                          <div className={`p-3 rounded-lg ${achievement.bgColor} shrink-0 group-hover:scale-110 transition-transform`}>
                            <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                          </div>
                          <div className={isEven ? 'md:text-right' : ''}>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                {achievement.category}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{achievement.date}</span>
                            </div>
                            <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                              {achievement.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className={`text-muted-foreground leading-relaxed mb-4 ${isEven ? 'md:text-right' : ''}`}>
                          {achievement.description}
                        </CardDescription>
                        <div className={`flex items-center gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                          <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white">
                            Impact: {achievement.impact}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;