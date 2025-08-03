import { Heart, Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Tarandeep Singh
              </h3>
              <p className="text-muted mb-4">
                Aspiring Web Developer & CSE Student passionate about creating innovative solutions through code.
              </p>
              <div className="flex gap-4">
                <a href="mailto:tarandeep@example.com" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-smooth">
                  <Mail size={20} />
                </a>
                <a href="https://linkedin.com/in/tarandeep-singh" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-smooth">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/tarandeep-singh" className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-smooth">
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map(item => <li key={item}>
                    <button onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({
                  behavior: "smooth"
                })} className="text-muted hover:text-primary transition-smooth">
                      {item}
                    </button>
                  </li>)}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <p className="text-muted mb-2">Open for internship opportunities</p>
              <p className="text-muted mb-2">Punjab, India</p>
              <p className="text-muted">singhtaran2079@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-muted flex items-center justify-center gap-2">
              © {currentYear} Tarandeep Singh. Made with 
              <Heart size={16} className="text-red-500 animate-pulse" /> 
              and lots of code.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;