import { Code2, Smartphone, Database, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "C++", level: 85, color: "bg-blue-500" },
        { name: "Java", level: 80, color: "bg-orange-500" },
        { name: "Swift", level: 75, color: "bg-red-500" },
        { name: "Python", level: 70, color: "bg-green-500" },
      ],
      gradient: "from-primary to-primary/70",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "iOS Development", level: 80, color: "bg-purple-500" },
        { name: "UI/UX Design", level: 70, color: "bg-pink-500" },
        { name: "App Store", level: 65, color: "bg-indigo-500" },
        { name: "Xcode", level: 75, color: "bg-blue-600" },
      ],
      gradient: "from-secondary to-secondary/70",
    },
    {
      title: "Future Skills",
      icon: Brain,
      skills: [
        { name: "HTML/CSS", level: 60, color: "bg-emerald-500" },
        { name: "JavaScript", level: 55, color: "bg-yellow-500" },
        { name: "React", level: 50, color: "bg-cyan-500" },
        { name: "Node.js", level: 45, color: "bg-lime-500" },
      ],
      gradient: "from-accent to-accent/70",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My technical toolkit and areas of expertise, with a focus on continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`shadow-card hover-lift animate-fade-in-up border-0 bg-gradient-to-br ${category.gradient} p-1`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm mb-4">
                      <category.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="inline-block shadow-card bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Always Learning:</strong> Currently expanding my skills in web development technologies and exploring new frameworks to become a well-rounded full-stack developer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;