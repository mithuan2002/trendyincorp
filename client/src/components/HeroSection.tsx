import { Globe, Award, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";
import manufacturingVideo from "@assets/262479_tiny_1756005668046.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-soft overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Innovative Manufacturing Since 2010</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              <span className="block text-transparent bg-clip-text bg-gradient-primary">
                Garment Export
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Leading-edge garment manufacturing in Tirupur, delivering premium quality 
              to European markets through innovation and sustainability.
            </p>

            {/* Real-time Manufacturing Video */}
            <div className="mb-12 max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-48 object-cover"
                  src={manufacturingVideo}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                  LIVE
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">Real-time garment manufacturing process</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-2xl font-bold text-blue-600">15+</span>
                </div>
                <p className="text-xs text-gray-600">Years Innovation</p>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-2xl font-bold text-purple-600">25+</span>
                </div>
                <p className="text-xs text-gray-600">Countries Served</p>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="text-2xl font-bold text-blue-600">500+</span>
                </div>
                <p className="text-xs text-gray-600">Expert Team</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <img 
                  src={heroImage} 
                  alt="Modern garment manufacturing facility" 
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Smart Manufacturing</h3>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <div className="font-semibold text-blue-700">50,000+</div>
                      <div className="text-blue-600">Units/Month</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                      <div className="font-semibold text-purple-700">EU Standards</div>
                      <div className="text-purple-600">Certified</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <div className="font-semibold text-green-700">15-20 Days</div>
                      <div className="text-green-600">Delivery</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                      <div className="font-semibold text-orange-700">24/7</div>
                      <div className="text-orange-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;