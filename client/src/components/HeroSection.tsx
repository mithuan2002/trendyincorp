import { Globe, Award, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";
import manufacturingVideo from "@assets/262479_tiny_1756005668046.mp4";

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
        <div className="max-w-6xl mx-auto text-center">
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

            {/* High Resolution Manufacturing Video */}
            <div className="w-full max-w-full mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-80 lg:h-96 object-cover"
                  src={manufacturingVideo}
                >
                  Your browser does not support the video tag.
                </video>
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