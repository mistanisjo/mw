import { ArrowRight, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-10 liquid-glass w-16 h-16 rounded-full liquid-float opacity-30" />
      <div className="absolute top-40 right-20 liquid-glass w-12 h-12 rounded-full liquid-float-delay opacity-20" />
      <div className="absolute bottom-40 left-20 liquid-glass w-20 h-20 rounded-full liquid-float opacity-25" />

      {/* Main Content */}
      <div className="relative z-10 liquid-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Stats Cards */}
          <div className="flex justify-center mb-8">
            <div className="liquid-glass-card px-6 py-3 rounded-full flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="text-sm font-medium">4.9 Rating</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">150+ Destinations</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 liquid-float">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Discover Your
            </span>
            <br />
            <span className="text-foreground">Magic World</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Embark on extraordinary journeys to the world's most breathtaking destinations. 
            Experience luxury, adventure, and memories that last a lifetime.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-liquid-primary group px-8 py-3 text-lg">
              Explore Destinations
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="liquid-glass-card px-8 py-3 text-lg">
              Watch Our Story
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex justify-center">
            <div className="liquid-glass-soft px-8 py-4 rounded-2xl">
              <p className="text-sm text-muted-foreground mb-2">Trusted by 50,000+ travelers</p>
              <div className="flex items-center justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
                <span className="ml-2 text-sm font-medium">Excellent Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;