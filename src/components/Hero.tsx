import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import profileImage from "@/assets/user-profile.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-32 w-16 h-16 bg-secondary/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-32 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative w-48 h-48 mx-auto">
              <img
                src={profileImage}
                alt="Tarandeep Singh"
                className="w-full h-full rounded-full object-cover shadow-glow border-4 border-white/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Tarandeep Singh
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Aspiring Web Developer & CSE Student
              </span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent font-medium">
                Turning passion into code. Building the future one line at a time.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant px-8 py-6 text-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="mailto:tarandeep@example.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary hover:border-primary transition-smooth hover-lift"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/tarandeep-singh"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary hover:border-primary transition-smooth hover-lift"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/tarandeep-singh"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary hover:border-primary transition-smooth hover-lift"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={scrollToAbout}
              className="inline-flex flex-col items-center text-white/70 hover:text-white transition-smooth group"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown size={24} className="animate-bounce group-hover:translate-y-1 transition-smooth" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;