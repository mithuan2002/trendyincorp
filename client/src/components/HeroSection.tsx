import { Globe, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import floatingTextileImage from "@/assets/hero-manufacturing.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-soft overflow-hidden pt-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <p className="text-sm text-gray-500 mb-4 text-left">Full cycle production</p>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 text-left">
              World-class textile production
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl text-left">
              Explore <span className="text-black font-bold" style={{color: '#000000'}}>Trendy</span> <span className="text-blue-600 font-bold">incorp</span>, India's premier textile manufacturer. Merging expert craftsmanship with 
              innovative technology, we deliver high-quality, sustainable textiles to businesses worldwide.
            </p>

            {/* Floating Textile Image */}
            <div className="relative mt-8">
              <div className="w-96 h-64 relative animate-float">
                <img 
                  src={floatingTextileImage}
                  alt="Premium textile manufacturing"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full animate-bounce shadow-lg"></div>
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