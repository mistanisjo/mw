import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Heart, Target, Compass } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'With 20+ years in luxury travel, Sarah founded Magic World to create transformative journeys.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      bio: 'Michael ensures every detail of your journey is perfectly orchestrated and memorable.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Travel Experience Director',
      bio: 'Emma crafts unique itineraries that blend adventure, culture, and unforgettable moments.',
    },
    {
      name: 'David Thompson',
      role: 'Customer Success Manager',
      bio: 'David is dedicated to making sure every traveler feels supported throughout their journey.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'We live and breathe travel, bringing genuine enthusiasm to every journey we create.',
    },
    {
      icon: Target,
      title: 'Excellence First',
      description: 'We never compromise on quality and strive for perfection in every detail.',
    },
    {
      icon: Globe,
      title: 'Cultural Respect',
      description: 'We promote responsible travel that respects local communities and environments.',
    },
    {
      icon: Compass,
      title: 'Innovation',
      description: 'We continuously evolve to offer cutting-edge travel experiences and technology.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="liquid-container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="liquid-glass-soft inline-block px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">About Magic World</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2008 with a simple mission: to make travel dreams come true. Today, we're proud to be 
              the world's leading travel agency, creating magical moments for travelers across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="liquid-spacing">
        <div className="liquid-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="liquid-glass-card p-8 rounded-3xl">
              <div className="w-12 h-12 liquid-glass rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To inspire and enable people to explore the magic of our world through exceptional travel experiences. 
                We believe that travel has the power to transform lives, build connections, and create lasting memories.
              </p>
            </div>
            <div className="liquid-glass-card p-8 rounded-3xl">
              <div className="w-12 h-12 liquid-glass rounded-xl flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted travel partner, known for creating personalized journeys that exceed 
                expectations and contribute positively to the destinations and communities we visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="liquid-spacing bg-muted/30">
        <div className="liquid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Our</span>{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="liquid-glass-card p-6 rounded-2xl text-center liquid-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 liquid-glass rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="liquid-spacing">
        <div className="liquid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Meet Our</span>{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate experts behind your extraordinary travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="liquid-glass-card rounded-2xl overflow-hidden liquid-ripple text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 mx-auto mt-6 mb-4 liquid-glass rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="p-6 pt-0">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="liquid-spacing bg-muted/30">
        <div className="liquid-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="liquid-glass-card p-8 rounded-2xl text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">World's Leading Travel Agency</h3>
              <p className="text-sm text-muted-foreground">Travel Awards 2023</p>
            </div>
            <div className="liquid-glass-card p-8 rounded-2xl text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Best Customer Service</h3>
              <p className="text-sm text-muted-foreground">Tourism Excellence 2023</p>
            </div>
            <div className="liquid-glass-card p-8 rounded-2xl text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Sustainable Travel Leader</h3>
              <p className="text-sm text-muted-foreground">Green Travel Awards 2023</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;