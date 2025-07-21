import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Music Producer, Nashville",
    content: "The sound quality is absolutely incredible. The Active Noise Cancellation lets me focus completely on my mixes, and the Spatial Audio brings a whole new dimension to music.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer, San Francisco",
    content: "Perfect for my daily commute and video calls. The seamless switching between my iPhone, iPad, and Mac is exactly what I needed. Battery life is outstanding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Fitness Instructor, Miami",
    content: "These stay put during my most intense workouts. The Adaptive Transparency is perfect for outdoor runs - I can hear my music clearly while staying aware of traffic.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "Travel Blogger, New York",
    content: "Essential for long flights. The noise cancellation is so good I can actually sleep on planes now. The quick charge feature has saved me countless times.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-primary font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by{" "}
            <span className="gradient-text">millions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what AirPods Pro users are saying about their audio experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass rounded-2xl p-8 card-3d hover:bg-white/10 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Available at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-2xl font-bold">Apple Store</div>
            <div className="text-2xl font-bold">Best Buy</div>
            <div className="text-2xl font-bold">Amazon</div>
            <div className="text-2xl font-bold">Target</div>
            <div className="text-2xl font-bold">Costco</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;