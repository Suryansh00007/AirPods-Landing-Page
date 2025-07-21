import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/airpods-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
              <span className="text-sm text-primary font-medium">✨ Now Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              AirPods Pro{" "}
              <span className="gradient-text">3rd Generation</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Experience magical audio with Adaptive Transparency, Personalized Spatial Audio, 
              and up to 2x more Active Noise Cancellation than the previous generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Buy Now - $249
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Overview
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">2x</div>
                <div className="text-sm text-muted-foreground">Noise Cancellation</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">6hrs</div>
                <div className="text-sm text-muted-foreground">Listening Time</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold gradient-text">30hrs</div>
                <div className="text-sm text-muted-foreground">With Case</div>
              </div>
            </div>
          </div>

          {/* Hero Image/3D Element */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 scale-110 animate-pulse" />
              <img
                src={heroImage}
                alt="AirPods Pro 3rd Generation"
                className="relative w-full max-w-lg rounded-3xl shadow-elegant float hover-glow transition-all duration-500"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl float delay-300" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl float delay-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;