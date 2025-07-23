import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
              <span>Magic Travel App</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Created to make
              </h1>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                life much Easier
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Magic World is helping the users to achieve 
              the best and comfortable atmosphere for their 
              home.
            </p>

            {/* Email Input and CTA */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                />
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium whitespace-nowrap">
                Try Now
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-32 left-1/4 w-3 h-3 bg-red-500 rounded-full opacity-60"></div>
            <div className="absolute top-64 left-1/3 w-2 h-2 bg-blue-500 rounded-full opacity-40"></div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative">
            {/* Main Phone Mockup Container */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone Frame */}
              <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 rounded-3xl p-6 shadow-2xl">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-white text-xs mb-6">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                    <div className="w-6 h-2 bg-white rounded-sm opacity-80"></div>
                    <div className="w-6 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* App Header */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button className="text-white/60">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <div>
                        <p className="text-white font-medium text-sm">My Device</p>
                        <p className="text-white/60 text-xs">Living Room</p>
                      </div>
                    </div>
                    <button className="text-white/60">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Chart Card */}
                <div className="bg-white rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 text-sm">Usage</span>
                    <span className="text-gray-400 text-xs">Today</span>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="relative h-24 mb-3">
                    <svg className="w-full h-full" viewBox="0 0 200 60">
                      <path
                        d="M0,50 Q50,30 100,35 T200,25"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                        className="opacity-80"
                      />
                      <path
                        d="M0,50 Q50,30 100,35 T200,25 L200,60 L0,60 Z"
                        fill="url(#gradient)"
                        className="opacity-20"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Data Point */}
                    <div className="absolute top-4 right-12 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      24%
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">1-9 pm</span>
                    <span className="font-semibold text-gray-900">120 kw</span>
                  </div>
                </div>

                {/* Device Controls */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-900 rounded-xl p-3 text-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-900 rounded"></div>
                    </div>
                    <p className="text-white text-xs">Lamp</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg mx-auto mb-2"></div>
                    <p className="text-white/60 text-xs">AC</p>
                  </div>
                </div>

                {/* Bottom Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="absolute top-1/3 -left-6 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Decorative dots */}
              <div className="absolute bottom-12 -right-8 w-3 h-3 bg-red-500 rounded-full opacity-60"></div>
              <div className="absolute top-16 left-8 w-2 h-2 bg-purple-500 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;