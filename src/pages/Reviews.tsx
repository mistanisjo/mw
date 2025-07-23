import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    destination: 'Santorini, Greece',
    rating: 5,
    date: 'March 2024',
    review: 'Magic World created the most incredible honeymoon experience for us in Santorini. Every detail was perfect - from the luxury villa with stunning sunset views to the private wine tasting tour. The team went above and beyond to make our trip unforgettable.',
    avatar: 'SM',
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'San Francisco, USA',
    destination: 'Tokyo, Japan',
    rating: 5,
    date: 'February 2024',
    review: 'As a first-time visitor to Japan, I was overwhelmed by the planning process. Magic World took care of everything - from cultural experiences to local guides who spoke perfect English. The itinerary was perfectly balanced between modern Tokyo and traditional culture.',
    avatar: 'DC',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'London, UK',
    destination: 'Machu Picchu, Peru',
    rating: 5,
    date: 'January 2024',
    review: 'The trek to Machu Picchu was a dream come true! The guides were knowledgeable, the accommodations were better than expected, and the sunrise over the ancient ruins was absolutely magical. Magic World made this bucket list experience perfect.',
    avatar: 'ER',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    location: 'Toronto, Canada',
    destination: 'Iceland Aurora',
    rating: 5,
    date: 'December 2023',
    review: 'Witnessing the Northern Lights in Iceland was the experience of a lifetime. The team at Magic World timed everything perfectly - we had clear skies for three nights and saw the most spectacular aurora displays. The cozy accommodations and local cuisine were outstanding.',
    avatar: 'MT',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    location: 'Sydney, Australia',
    destination: 'Santorini, Greece',
    rating: 5,
    date: 'November 2023',
    review: 'Magic World exceeded all my expectations for my solo trip to Santorini. They connected me with other solo travelers, arranged private photography sessions, and ensured I felt safe and cared for throughout the entire journey. Absolutely phenomenal service!',
    avatar: 'LW',
  },
  {
    id: 6,
    name: 'James Anderson',
    location: 'Melbourne, Australia',
    destination: 'Multiple Destinations',
    rating: 5,
    date: 'October 2023',
    review: 'We used Magic World for our month-long European adventure, visiting 8 countries. The seamless coordination between cities, the quality of accommodations, and the personalized recommendations made this trip absolutely perfect. Worth every penny!',
    avatar: 'JA',
  },
];

const stats = [
  { number: '4.9', label: 'Average Rating', sublabel: 'Based on 2,500+ reviews' },
  { number: '98%', label: 'Customer Satisfaction', sublabel: 'Would recommend to friends' },
  { number: '50K+', label: 'Happy Travelers', sublabel: 'Since 2008' },
  { number: '24/7', label: 'Support Available', sublabel: 'Whenever you need us' },
];

const ReviewsPage = () => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="liquid-container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="liquid-glass-soft inline-block px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Customer Reviews</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Traveler Stories
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover what makes Magic World special through the eyes of our travelers. 
              Real experiences from real people who've trusted us with their dream journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="liquid-spacing bg-muted/30">
        <div className="liquid-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="liquid-glass-card text-center p-6 rounded-2xl liquid-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="liquid-spacing">
        <div className="liquid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">What Our</span>{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Travelers Say
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Authentic reviews from travelers who've experienced the magic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="liquid-glass-card p-6 rounded-2xl liquid-ripple"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 liquid-glass rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{review.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{review.name}</h3>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(review.rating)}
                  <span className="text-sm text-muted-foreground ml-2">{review.rating}.0</span>
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{review.review}"
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{review.destination}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Rating Summary */}
          <div className="mt-16">
            <div className="liquid-glass-card p-8 rounded-3xl text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="text-5xl font-bold text-primary mb-2">4.9</div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-muted-foreground">Based on 2,500+ verified reviews</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">98%</div>
                  <p className="text-sm text-muted-foreground">Would recommend to friends</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">99%</div>
                  <p className="text-sm text-muted-foreground">Trip exceeded expectations</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <p className="text-sm text-muted-foreground">Would travel with us again</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReviewsPage;