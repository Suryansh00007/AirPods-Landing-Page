import { Volume2, Shield, Battery, Smartphone, Headphones, Mic } from "lucide-react";

const features = [
  {
    icon: Volume2,
    title: "Adaptive Transparency",
    description: "Let the right sounds in while filtering out unwanted noise for the perfect balance of awareness and immersion."
  },
  {
    icon: Shield,
    title: "Active Noise Cancellation",
    description: "Up to 2x more noise cancellation than previous generation, creating your own private listening space anywhere."
  },
  {
    icon: Battery,
    title: "All-Day Battery",
    description: "Up to 6 hours of listening time with ANC enabled, plus 24 additional hours with the MagSafe charging case."
  },
  {
    icon: Smartphone,
    title: "Seamless Setup",
    description: "One-tap setup instantly connects your AirPods to all your Apple devices with automatic device switching."
  },
  {
    icon: Headphones,
    title: "Personalized Spatial Audio",
    description: "Dynamic head tracking creates an immersive, theater-like experience that follows your head movements."
  },
  {
    icon: Mic,
    title: "Crystal Clear Calls",
    description: "Advanced beamforming microphones focus on your voice while reducing background noise for clearer calls."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-primary font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineered for{" "}
            <span className="gradient-text">perfection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced features that deliver an unparalleled audio experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 card-3d group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="mt-24 glass rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                The most{" "}
                <span className="gradient-text">advanced</span> AirPods ever
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Featuring the Apple H2 chip, computational audio, and precision-engineered drivers 
                for an exceptional listening experience that adapts to you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-success rounded-full flex-shrink-0" />
                  <span className="text-foreground">Apple H2 Chip</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-success rounded-full flex-shrink-0" />
                  <span className="text-foreground">Precision-Tuned Drivers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-success rounded-full flex-shrink-0" />
                  <span className="text-foreground">IPX4 Water Resistance</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-glow rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 float">
                    <Volume2 className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Audio Experience Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;