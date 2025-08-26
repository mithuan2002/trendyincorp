import { Globe, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <a href="#about">
                <Button size="lg" className="w-full sm:w-auto shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto shadow-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Us
                </Button>
              </a>
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