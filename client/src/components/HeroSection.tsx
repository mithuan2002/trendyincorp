import { Globe, Award, Users } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-manufacturing.jpg";
import factoryImage1 from "@/assets/factory-image1.jpg";
import factoryImage2 from "@/assets/factory-image2.jpg";
import factoryImage3 from "@/assets/factory-image3.jpeg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [factoryImage1, factoryImage2, factoryImage3];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1200); // Change image every 1.2 seconds (3.6 seconds total for 3 images)
    
    return () => clearInterval(interval);
  }, [images.length]);

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

            {/* Automatic Image Slideshow */}
            <div className="w-full max-w-full mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`Factory operations ${index + 1}`}
                    className={`w-full h-80 lg:h-96 object-cover absolute inset-0 transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZhY3RvcnkgSW1hZ2UgJHtpbmRleCArIDF9PC90ZXh0Pgo8L3N2Zz4=';
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
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