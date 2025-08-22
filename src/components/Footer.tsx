import { MapPin, Phone, Mail, Globe, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Quality Standards", href: "#quality" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Cut & Sew Manufacturing",
    "Private Labeling",
    "Quality Assurance", 
    "Export Services",
    "Design Development",
    "Sustainable Production"
  ];

  const certifications = [
    "OEKO-TEX Standard",
    "GOTS Certified",
    "EU Compliance",
    "ISO 9001:2015",
    "SEDEX Member",
    "Fair Trade Certified"
  ];

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Trendy <span className="text-gold-vibrant">Incorp</span>
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Leading garment manufacturer in Tirupur, specializing in premium 
              quality exports to European markets. Excellence through innovation 
              and sustainable practices.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-200">
                <MapPin className="h-4 w-4 mr-2 text-gold-vibrant flex-shrink-0" />
                <span>Tirupur, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center text-sm text-gray-200">
                <Phone className="h-4 w-4 mr-2 text-gold-vibrant flex-shrink-0" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center text-sm text-gray-200">
                <Mail className="h-4 w-4 mr-2 text-gold-vibrant flex-shrink-0" />
                <span>info@trendyincorp.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-vibrant">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-200 hover:text-gold-vibrant transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-vibrant">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-200 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-vibrant">Certifications</h4>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <span className="text-gray-200 text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-200 mb-4 md:mb-0">
              <span>&copy; 2024 Trendy Incorp. All rights reserved.</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-200">
              <Globe className="h-4 w-4 mr-2 text-gold-vibrant" />
              <span>Proudly Manufacturing in India</span>
              <Heart className="h-4 w-4 ml-2 text-red-400" />
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-gray-300">
              Designed and Developed with excellence for global markets
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;