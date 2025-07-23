import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dotted path lines */}
        <svg className="absolute top-20 right-1/4 w-64 h-64 opacity-30" viewBox="0 0 200 200">
          <path
            d="M20,100 Q100,20 180,100 Q100,180 20,100"
            fill="none"
            stroke="#e879f9"
            strokeWidth="2"
            strokeDasharray="4,4"
          />
        </svg>
        
        {/* Floating elements */}
        <div className="absolute top-16 right-1/3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
          <Play className="w-4 h-4 text-white fill-current" />
        </div>
        
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>

      <div className="liquid-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
              <span>Explore the world</span>
              <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                From
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Southeast Asia
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                to the World.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Stay updated with travel tips, recommendations, and latest 
              promos!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 flex items-center space-x-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Demo</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Image Collage */}
          <div className="relative">
            {/* Main container for images */}
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Top left - Tropical beach */}
              <div className="absolute top-0 left-0 w-48 h-32 rounded-2xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Tropical beach"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top right - Mountain sunset */}
              <div className="absolute top-8 right-0 w-44 h-36 rounded-2xl overflow-hidden shadow-lg transform rotate-6 hover:rotate-3 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Mountain sunset"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle left - Temple */}
              <div className="absolute top-32 left-12 w-52 h-40 rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Temple"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom right - Mosque */}
              <div className="absolute bottom-0 right-8 w-48 h-36 rounded-2xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Mosque"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative dotted path */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <path
                  d="M50,50 Q200,100 350,150 Q250,250 150,350"
                  fill="none"
                  stroke="#e879f9"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-gray-500 font-medium text-sm">traveloka</div>
            <div className="text-gray-500 font-medium text-sm">tiket.com</div>
            <div className="text-gray-500 font-medium text-sm">Booking.com</div>
            <div className="text-gray-500 font-medium text-sm">tripadvisor</div>
            <div className="text-gray-500 font-medium text-sm">airbnb</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;