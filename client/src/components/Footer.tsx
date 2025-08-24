import { MapPin, Phone, Mail, Globe, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Innovation Story", href: "#about" },
    { name: "Smart Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  const services = [
    "Smart Manufacturing",
    "Creative Development", 
    "Quality Excellence",
    "Global Logistics",
    "Brand Partnership",
    "Sustainable Future"
  ];

  const certifications = [
    "OEKO-TEX Standard 100",
    "GOTS Certified",
    "EU Compliance Ready",
    "ISO 9001:2015",
    "SEDEX Member",
    "Carbon Neutral Partner"
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                <span className="text-white font-bold">Trendy</span> <span className="text-blue-600 font-bold">Incorp</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Pioneering the future of garment manufacturing in Tirupur through 
              innovation, sustainability, and excellence in European market exports.
            </p>
            <div className="space-y-3">
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>S.F.No. 7A/3B, KANAKKAMPALAYAM PIRIVU,</div>
                  <div>BEHIND LPG GAS BUNK,</div>
                  <div>P.N ROAD</div>
                  <div>TIRUPUR - 641666</div>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
                <span>+91 9952800900 (WhatsApp)</span>
              </div>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400 flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Sitemap
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 transform transition-transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400 flex items-center">
              <Sparkles className="h-4 w-4 mr-2" />
              Innovation Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
              <div className="w-4 h-4 mr-2 bg-green-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              </div>
              Certifications
            </h4>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-400 mb-4 md:mb-0">
              <span>&copy; 2024 Trendy Incorp. Crafting the future.</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-400">
              <Globe className="h-4 w-4 mr-2 text-blue-400" />
              <span>Proudly Innovating in India</span>
              <Heart className="h-4 w-4 ml-2 text-red-400 animate-pulse" />
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              Designed for the future • Built with innovation • Powered by sustainability
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;