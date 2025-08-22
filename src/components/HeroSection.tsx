import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern garment manufacturing facility" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Globe className="h-4 w-4 mr-2 text-gold-vibrant" />
              <span className="text-sm font-medium">Exporting Excellence Since 2010</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium 
              <span className="text-gold-vibrant"> Garment</span>
              <br />Manufacturing
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Leading export-oriented garment manufacturer in Tirupur, specializing in 
              high-quality apparel for European markets. Delivering excellence through 
              innovative technology and sustainable practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="group">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                View Quality Standards
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-gold-vibrant mr-2" />
                  <span className="text-3xl font-bold text-gold-vibrant">15+</span>
                </div>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-6 w-6 text-gold-vibrant mr-2" />
                  <span className="text-3xl font-bold text-gold-vibrant">25+</span>
                </div>
                <p className="text-sm text-gray-300">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-gold-vibrant mr-2" />
                  <span className="text-3xl font-bold text-gold-vibrant">500+</span>
                </div>
                <p className="text-sm text-gray-300">Skilled Workers</p>
              </div>
            </div>
          </div>

          {/* Hero Image - Additional Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent opacity-20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Production Capacity</h3>
                    <div className="w-3 h-3 bg-gold-vibrant rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monthly Output</span>
                      <span className="text-gold-vibrant font-semibold">50,000+ Units</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Quality Standard</span>
                      <span className="text-gold-vibrant font-semibold">EU Certified</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Delivery Time</span>
                      <span className="text-gold-vibrant font-semibold">15-20 Days</span>
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
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;