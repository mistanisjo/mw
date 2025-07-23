import { ArrowRight, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import santoriniImage from '@/assets/santorini.jpg';
import machuPicchuImage from '@/assets/machu-picchu.jpg';
import tokyoImage from '@/assets/tokyo.jpg';
import icelandImage from '@/assets/iceland.jpg';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: santoriniImage,
    description: 'Iconic white buildings and stunning sunsets over the Aegean Sea',
    duration: '7 Days',
    groupSize: '12 People',
    price: '$2,299',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Machu Picchu, Peru',
    image: machuPicchuImage,
    description: 'Ancient Incan citadel high in the Andes Mountains',
    duration: '10 Days',
    groupSize: '8 People',
    price: '$3,199',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: tokyoImage,
    description: 'Modern metropolis blending traditional culture with cutting-edge technology',
    duration: '8 Days',
    groupSize: '15 People',
    price: '$2,799',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Iceland Aurora',
    image: icelandImage,
    description: 'Witness the magical Northern Lights in pristine wilderness',
    duration: '6 Days',
    groupSize: '10 People',
    price: '$2,899',
    rating: 4.7,
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="liquid-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="liquid-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="liquid-glass-soft inline-block px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Featured Destinations</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Extraordinary
            </span>{' '}
            <span className="text-foreground">Adventures</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated experiences that showcase the world's most magnificent destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="liquid-glass-card rounded-2xl overflow-hidden liquid-ripple group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 liquid-glass px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-foreground">★ {destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* Details */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{destination.groupSize}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{destination.price}</span>
                    <span className="text-sm text-muted-foreground">/person</span>
                  </div>
                  <Button size="sm" variant="outline" className="liquid-glass-soft group-hover:btn-liquid-primary">
                    <MapPin className="w-3 h-3 mr-1" />
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button size="lg" className="btn-liquid group">
            View All Destinations
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;