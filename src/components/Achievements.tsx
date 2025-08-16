import React from 'react';
import { Trophy, Award, Target, Code, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "GSSOC Contributor",
      category: "Open Source",
      description: "Successfully contributed to open-source projects during GirlScript Summer of Code program, making impactful contributions to the open-source community.",
      date: "2024",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      impact: "Open Source Impact"
    },
    {
      id: 2,
      title: "Hacktoberfest 2024 - Level 2 Contributor",
      category: "Open Source",
      description: "Successfully completed Level 2 in Hacktoberfest 2024 by making impactful open-source contributions and maintaining high-quality code standards.",
      date: "Oct 2024",
      icon: Trophy,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      impact: "Level 2 Achievement"
    },
    {
      id: 3,
      title: "Hackathon Finalist",
      category: "Competition",
      description: "Participated in a competitive hackathon, successfully presenting an innovative idea that advanced to the final round through technical excellence and creativity.",
      date: "2024",
      icon: Award,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      impact: "Final Round Qualifier"
    },
    {
      id: 4,
      title: "Route Safety Navigator - Winner",
      category: "Innovation",
      description: "Developed award-winning application for finding the safest routes using real-time crime data and machine learning algorithms with 92% accuracy.",
      date: "2024",
      icon: Target,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      impact: "92% accuracy rate"
    },
    {
      id: 5,
      title: "B.Tech Computer Science Engineering",
      category: "Education",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering at Sharda University, Greater Noida with focus on full-stack development and modern technologies.",
      date: "2022 - 2026",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      impact: "Academic Excellence"
    },
    {
      id: 6,
      title: "CBSE Class XII - 91% Aggregate",
      category: "Academic",
      description: "Achieved 91% aggregate in CBSE Class XII examination from GRSS Vidya Mandir, demonstrating strong academic foundation and commitment to excellence.",
      date: "2019-2021",
      icon: Zap,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      impact: "91% Achievement"
    }
  ];

  const categories = ["All", "Open Source", "Competition", "Innovation", "Education", "Academic"];
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