import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/about', label: 'About Us' },
    { path: '/reviews', label: 'Reviews' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="liquid-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 liquid-ripple">
            <div className="w-8 h-8 liquid-glass rounded-lg flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Magic World
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`liquid-ripple px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-primary font-medium liquid-glass-soft'
                    : 'text-foreground/80 hover:text-primary hover:liquid-glass-soft'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-liquid-primary">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden liquid-glass p-2 rounded-lg"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden liquid-glass-card rounded-xl mt-4 p-6 mb-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`liquid-ripple px-3 py-2 rounded-lg transition-all duration-300 text-center ${
                    isActive(link.path)
                      ? 'text-primary font-medium liquid-glass-soft'
                      : 'text-foreground/80 hover:text-primary hover:liquid-glass-soft'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="btn-liquid-primary w-full mt-4">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;