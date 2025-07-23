import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Destinations',
      links: [
        { label: 'Europe', href: '/destinations/europe' },
        { label: 'Asia', href: '/destinations/asia' },
        { label: 'Americas', href: '/destinations/americas' },
        { label: 'Africa', href: '/destinations/africa' },
        { label: 'Oceania', href: '/destinations/oceania' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Custom Tours', href: '/services/custom' },
        { label: 'Group Travel', href: '/services/group' },
        { label: 'Luxury Escapes', href: '/services/luxury' },
        { label: 'Adventure Tours', href: '/services/adventure' },
        { label: 'Cultural Immersion', href: '/services/cultural' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/support' },
        { label: 'Travel Insurance', href: '/insurance' },
        { label: 'Booking Terms', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cancellation', href: '/cancellation' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="liquid-glass-soft border-t border-border/50">
      <div className="liquid-container">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 liquid-glass rounded-lg flex items-center justify-center">
                  <Plane className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Magic World
                </span>
              </Link>
              
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Transforming travel dreams into extraordinary realities for over 15 years. 
                Discover the magic of our world with personalized journeys crafted just for you.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">hello@magicworld.travel</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">New York, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm liquid-ripple"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="liquid-glass-card p-8 rounded-2xl mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-2">Stay in the Loop</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest travel deals, destination guides, and exclusive offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 liquid-glass rounded-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50"
                />
                <button className="btn-liquid-primary px-6 py-2 rounded-lg whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Magic World Travel. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="liquid-glass w-10 h-10 rounded-lg flex items-center justify-center hover:liquid-glass-card transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;