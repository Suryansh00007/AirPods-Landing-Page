import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">AirPods Pro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors duration-300">
                Features
              </a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors duration-300">
                Pricing
              </a>
              <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors duration-300">
                Testimonials
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Login</Button>
            <Button variant="hero" size="default">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-300">
              Features
            </a>
            <a href="#pricing" className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-300">
              Pricing
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-300">
              Testimonials
            </a>
            <a href="#contact" className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors duration-300">
              Contact
            </a>
            <div className="pt-4 pb-3 border-t border-white/10">
              <div className="flex items-center px-3 space-x-3">
                <Button variant="ghost" className="w-full justify-start">Login</Button>
              </div>
              <div className="mt-3 px-3">
                <Button variant="hero" className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;