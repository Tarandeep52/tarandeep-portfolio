import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate coder from Punjab, turning ideas into reality through code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div className="animate-fade-in-left">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am <strong className="text-foreground">Tarandeep Singh</strong>, 20 years old from Punjab. 
                  My passion is coding — I enjoy working with <strong className="text-primary">Python</strong>, 
                  <strong className="text-primary"> C++</strong>, and <strong className="text-primary">Java</strong>. 
                  I'm currently pursuing Computer Science Engineering at Chitkara University and aspire to become 
                  a full-time web developer.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I've also built iOS apps in <strong className="text-primary">Swift</strong>, combining my love 
                  for mobile development with my technical skills. I'm always eager to learn new technologies 
                  and take on challenging projects that push my boundaries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently seeking <strong className="text-secondary">internship opportunities</strong> to 
                  apply my skills in real-world projects and contribute to innovative solutions.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-8 text-center">Educational Journey</h3>
              <div className="space-y-6">
                {/* Current Education */}
                <Card className="shadow-card hover-lift border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">B.Tech Computer Science Engineering</h4>
                        <p className="text-muted-foreground mb-2">Chitkara University</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>2023 - 2027</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>Punjab, India</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            Currently Pursuing
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Previous Education */}
                <Card className="shadow-card hover-lift border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">High School</h4>
                        <p className="text-muted-foreground mb-2">Mount Carmel School</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>Graduated 2023</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>Chandigarh, India</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                            Completed
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;