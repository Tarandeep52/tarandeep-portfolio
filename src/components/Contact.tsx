import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "singhtaran2079@gmail.com",
      href: "mailto:singhtaran2079@gmail.com",
      color: "text-primary",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/tarandeep-singh-535579288",
      href: "https://linkedin.com/in/tarandeep-singh-535579288",
      color: "text-blue-600",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/tarandeep-singh",
      href: "https://github.com/tarandeep-singh",
      color: "text-gray-700",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Punjab, India",
      href: "#",
      color: "text-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-left">
              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Get In Touch</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're looking for an intern, have a project idea, or just want to connect, 
                    I'd love to hear from you. Feel free to reach out through any of the channels below.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="flex items-center gap-4 group">
                        <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-smooth">
                          <info.icon className={`w-6 h-6 ${info.color} group-hover:text-primary transition-smooth`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                            {info.title}
                          </h4>
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-smooth font-medium"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                    <h4 className="font-semibold mb-2 text-foreground">Currently Seeking</h4>
                    <p className="text-muted-foreground text-sm">
                      <strong>Internship Opportunities</strong> - Looking for summer internships in software development, 
                      web development, or mobile app development to gain hands-on experience and contribute to real projects.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <Card className="shadow-card border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Send a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Drop me a line and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="border-muted focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                          className="border-muted focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className="border-muted focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                        rows={6}
                        className="border-muted focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;