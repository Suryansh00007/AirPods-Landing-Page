import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "AirPods Pro",
    price: "$249",
    period: "",
    description: "The ultimate wireless audio experience",
    features: [
      "Active Noise Cancellation",
      "Adaptive Transparency",
      "Personalized Spatial Audio",
      "Up to 6 hours listening time",
      "Up to 30 hours with case",
      "MagSafe charging case",
      "Lightning to USB-C cable"
    ],
    popular: true
  },
  {
    name: "AirPods (3rd gen)",
    price: "$179",
    period: "",
    description: "Great sound and all-day comfort",
    features: [
      "Personalized Spatial Audio",
      "Adaptive EQ",
      "Up to 6 hours listening time",
      "Up to 30 hours with case",
      "MagSafe charging case",
      "Sweat and water resistant"
    ],
    popular: false
  },
  {
    name: "AirPods Max",
    price: "$549",
    period: "",
    description: "Premium over-ear headphones",
    features: [
      "Active Noise Cancellation",
      "Spatial Audio",
      "Premium materials",
      "Up to 20 hours battery",
      "Digital Crown",
      "Breathable knit mesh canopy",
      "Memory foam ear cushions"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-primary font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose your{" "}
            <span className="gradient-text">AirPods</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three amazing ways to experience wireless audio from Apple
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass rounded-3xl p-8 card-3d ${
                plan.popular ? 'ring-2 ring-primary/50 shadow-glow' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-6 py-2 rounded-full flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary-foreground" />
                    <span className="text-sm font-medium text-primary-foreground">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-success-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg" 
                className="w-full"
              >
                {plan.popular ? "Buy Now" : "Learn More"}
              </Button>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need help choosing?</h3>
            <p className="text-muted-foreground mb-6">
              Visit an Apple Store near you to try all AirPods models and find the perfect fit for your lifestyle.
            </p>
            <Button variant="outline" size="lg">Find a Store</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;