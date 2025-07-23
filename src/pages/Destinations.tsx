import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Clock, Users, Search, Filter } from 'lucide-react';
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
    category: 'Europe',
    type: 'Luxury',
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
    category: 'Americas',
    type: 'Adventure',
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
    category: 'Asia',
    type: 'Cultural',
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
    category: 'Europe',
    type: 'Adventure',
  },
  // Duplicate for demonstration
  {
    id: 5,
    name: 'Santorini Premium',
    image: santoriniImage,
    description: 'Luxury experience with private villas and exclusive access',
    duration: '5 Days',
    groupSize: '6 People',
    price: '$4,299',
    rating: 5.0,
    category: 'Europe',
    type: 'Luxury',
  },
  {
    id: 6,
    name: 'Tokyo Cultural Deep Dive',
    image: tokyoImage,
    description: 'Immersive cultural experience with local guides and authentic experiences',
    duration: '12 Days',
    groupSize: '8 People',
    price: '$3,599',
    rating: 4.8,
    category: 'Asia',
    type: 'Cultural',
  },
];

const DestinationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'];
  const types = ['All', 'Luxury', 'Adventure', 'Cultural', 'Beach', 'Wildlife'];

  const filteredDestinations = destinations.filter(destination => {
    const matchesCategory = selectedCategory === 'All' || destination.category === selectedCategory;
    const matchesType = selectedType === 'All' || destination.type === selectedType;
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="liquid-container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="liquid-glass-soft inline-block px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Explore Destinations</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                World of Wonder
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover extraordinary destinations across the globe. From tropical paradises to cultural capitals, 
              find your perfect adventure with our curated travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="liquid-spacing bg-muted/30">
        <div className="liquid-container">
          <div className="liquid-glass-card p-6 rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 liquid-glass-soft rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'btn-liquid-primary'
                        : 'liquid-glass-soft hover:liquid-glass'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex flex-wrap gap-2">
                <Filter className="w-4 h-4 text-muted-foreground mt-2.5" />
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedType === type
                        ? 'btn-liquid-primary'
                        : 'liquid-glass-soft hover:liquid-glass'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="liquid-spacing">
        <div className="liquid-container">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className="liquid-glass-card rounded-2xl overflow-hidden liquid-ripple group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 liquid-glass px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-foreground">{destination.category}</span>
                  </div>
                  <div className="absolute top-4 right-4 liquid-glass px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-foreground">★ {destination.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 liquid-glass px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-primary">{destination.type}</span>
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
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
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
                    <Button size="sm" className="btn-liquid group-hover:btn-liquid-primary">
                      <MapPin className="w-3 h-3 mr-1" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16">
              <div className="liquid-glass-card p-8 rounded-2xl max-w-md mx-auto">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">No destinations found</h3>
                <p className="text-muted-foreground text-sm">
                  Try adjusting your search criteria or browse all destinations.
                </p>
                <Button 
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedType('All');
                    setSearchTerm('');
                  }}
                  className="btn-liquid-primary mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationsPage;