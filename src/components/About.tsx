import { Award, Globe, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Globe,
    title: 'Global Expertise',
    description: 'Over 15 years of experience crafting unforgettable journeys across 150+ destinations worldwide.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized as the World\'s Leading Travel Agency by industry experts and travelers alike.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every itinerary is carefully tailored to your dreams, preferences, and travel style.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: '24/7 support and comprehensive travel insurance ensure your peace of mind.',
  },
];

const stats = [
  { number: '50K+', label: 'Happy Travelers' },
  { number: '150+', label: 'Destinations' },
  { number: '15+', label: 'Years Experience' },
  { number: '4.9', label: 'Customer Rating' },
];

const About = () => {
  return (
    <section className="liquid-spacing">
      <div className="liquid-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="liquid-glass-soft inline-block px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">About Magic World</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Creating</span>{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Magical Moments
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, Magic World has been transforming travel dreams into extraordinary realities. 
            We believe every journey should be as unique as the traveler themselves.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="liquid-glass-card text-center p-6 rounded-2xl liquid-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="liquid-glass-card p-8 rounded-2xl liquid-ripple group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="liquid-glass w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="liquid-glass-card p-8 md:p-12 rounded-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Our Mission
            </span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            "To inspire and enable people to explore the magic of our world through exceptional travel experiences. 
            We believe that travel has the power to transform lives, build connections, and create memories that last forever."
          </p>
          <Button size="lg" className="btn-liquid-primary">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;