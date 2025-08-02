import { ExternalLink, Github, Smartphone, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import personalityQuizApp from "@/assets/personality-quiz-app.jpg";

const Projects = () => {
  const projects = [
    {
      title: "iOS Personality Quiz App",
      description: "A simple and engaging quiz app built in Swift that analyzes user choices to determine their personality type. Features multiple question types, animated transitions, and detailed result explanations.",
      image: personalityQuizApp,
      technologies: ["Swift", "iOS", "Xcode", "UI Kit"],
      features: [
        "Interactive multiple-choice questions",
        "Animated UI transitions",
        "Detailed personality analysis",
        "Clean, modern interface",
      ],
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
    },
  ];

  const futureProjects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing my work and skills.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      status: "In Progress",
    },
    {
      title: "Web Application Project",
      description: "Planning to build a full-stack web application to demonstrate my web development skills.",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Planned",
    },
    {
      title: "Mobile App with Backend",
      description: "Advanced mobile application with cloud backend integration.",
      technologies: ["Swift", "Firebase", "REST API"],
      status: "Planned",
    },
  ];

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing my development journey through practical applications and innovative solutions
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 text-center">Featured Project</h3>
            {projects.map((project) => (
              <Card key={project.title} className="shadow-elegant hover-lift overflow-hidden border-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Smartphone className="w-6 h-6 text-primary" />
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                              <ArrowRight className="w-4 h-4 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </Button>
                        <Button
                          className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Future Projects */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {futureProjects.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="shadow-card hover-lift"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'In Progress' 
                          ? 'bg-yellow-100 text-yellow-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;