import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-surface border-t border-white/10">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stay connected with{" "}
            <span className="gradient-text">Apple</span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest news about AirPods, exclusive offers, and tips to get the most out of your Apple products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            />
            <Button variant="hero" className="group">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Apple */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Apple</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Newsroom</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Apple Leadership</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Career Opportunities</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Investors</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">AirPods Pro</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">AirPods</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">AirPods Max</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Compare</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">AirPods Support</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Service Programs</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Manuals</a>
            </div>
          </div>

          {/* Apple Store */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Apple Store</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Find a Store</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Today at Apple</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Apple Trade In</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Financing</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-2xl font-bold gradient-text">AirPods Pro</span>
            <span className="text-muted-foreground">© 2024 Apple Inc. All rights reserved</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover-glow">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-glow">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-glow">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-glow">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;