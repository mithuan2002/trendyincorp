import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Target, 
  Award, 
  Users, 
  Factory, 
  Zap,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Leaf,
  Clock,
  Shield
} from "lucide-react";
import qualityGarmentsImage from "@/assets/quality-garments.jpg";
import tirupurIndustrialImage from "@/assets/tirupur-industrial.jpg";
import cottonSelectionImage from "@/assets/cotton-selection.jpeg";
import spinningProcessImage from "@/assets/spinning-process.jpeg";
import knittingProcessImage from "@/assets/knitting-process.jpeg";
import dyeingProcessImage from "@/assets/dyeing-process.jpeg";
import printingProcessImage from "@/assets/printing-process.jpeg";
import qualityControlImage from "@assets/qc_1756013275256.jpg";
import manufacturingImage from "@assets/man_1756013281356.jpeg";

const AboutSection = () => {
  const achievements = [
    { icon: Factory, label: "Smart Facilities", value: "3", color: "text-blue-600" },
    { icon: Users, label: "Expert Team", value: "500+", color: "text-purple-600" },
    { icon: Award, label: "Certifications", value: "15+", color: "text-green-600" },
    { icon: Zap, label: "Monthly Capacity", value: "50K", color: "text-orange-600" },
  ];

  const values = [
    {
      icon: Shield,
      title: "European Quality Standards",
      description: "All products meet and exceed European quality benchmarks and compliance requirements."
    },
    {
      icon: Leaf,
      title: "Sustainable Eco Friendly Products",
      description: "Committed to eco-friendly processes and sustainable textile production methods."
    },
    {
      icon: Clock,
      title: "Enhancing Fabrics",
      description: "Advanced fabric enhancement techniques for superior quality and durability."
    },
    {
      icon: Lightbulb,
      title: "Fabric Formation",
      description: "Expert fabric formation processes using cutting-edge technology and techniques."
    },
    {
      icon: Factory,
      title: "Final Product Creation",
      description: "Complete end-to-end manufacturing for premium finished textile products."
    },
    {
      icon: Users,
      title: "About Us & Contact Us",
      description: "Learn more about our company and get in touch for business inquiries."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 text-blue-700 rounded-full px-4 py-2 mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">About Trendy Incorp</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tirupur's Innovation Leader
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in India's textile capital, we're pioneering the future of 
            garment manufacturing with cutting-edge technology and sustainable practices.
          </p>
        </div>

        {/* Excellence Section */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trendy Incorp: pioneering textile excellence
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our dynamic textile manufacturing expertise and commitment to quality
            </p>
          </div>

          {/* Statistics with Map */}
          <div className="relative max-w-5xl mx-auto mb-12">
            {/* Central Map Area */}
            <div className="flex justify-center items-center min-h-[400px] relative">
              {/* India Map Placeholder */}
              <div className="w-80 h-60 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center relative">
                <div className="text-6xl text-blue-300">🇮🇳</div>
                {/* Location dots */}
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>

              {/* Statistics positioned around the map */}
              {/* Top Left */}
              <div className="absolute top-0 left-0 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">25 Years</div>
                <div className="text-gray-600">in the Market</div>
              </div>

              {/* Top Right */}
              <div className="absolute top-0 right-0 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-0 left-0 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Visited Conference</div>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-0 right-0 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-gray-600">High qualified Employees</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trendy Incorp's clientele consists of forward-thinking business executives who are dedicated to advancing 
              their brands with cutting-edge technologies
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button variant="hero" size="lg" className="group shadow-lg bg-green-500 hover:bg-green-600 text-white">
              BECOME OUR PARTNER
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 rounded-full px-4 py-2 mb-4">
              <Factory className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Our Process</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">From Cotton to Garment</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Our streamlined manufacturing process ensures quality at every step
            </p>
            <p className="text-sm text-gray-500 italic">Swipe through each card to explore our manufacturing journey</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cotton Selection */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-200 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Cotton Selection</h4>
                      <p className="text-gray-600 mb-4">Premium quality cotton sourcing from certified organic farms</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-full h-32 bg-blue-200 rounded-xl mb-4 overflow-hidden">
                          <img 
                            src={cottonSelectionImage} 
                            alt="Cotton selection process" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-blue-700 bg-blue-50 p-3 rounded-lg">
                          We carefully select the finest cotton fibers, ensuring each batch meets our stringent quality standards for softness, durability, and eco-friendliness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spinning */}
              <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-200 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Spinning</h4>
                      <p className="text-gray-600 mb-4">High-tech yarn production with precision engineering</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-full h-32 bg-purple-200 rounded-xl mb-4 overflow-hidden">
                          <img 
                            src={spinningProcessImage} 
                            alt="Spinning process machinery" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-purple-700 bg-purple-50 p-3 rounded-lg">
                          Advanced spinning technology transforms cotton into uniform, strong yarns with consistent thickness and superior tensile strength.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Knitting */}
              <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-200 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Factory className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Knitting</h4>
                      <p className="text-gray-600 mb-4">Advanced fabric construction with computerized precision</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-full h-32 bg-green-200 rounded-xl mb-4 overflow-hidden">
                          <img 
                            src={knittingProcessImage} 
                            alt="Knitting process machinery" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-green-700 bg-green-50 p-3 rounded-lg">
                          State-of-the-art knitting machines create seamless, breathable fabrics with perfect stitch consistency and optimal stretch properties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dyeing & Finishing */}
              <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-200 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Dyeing & Finishing</h4>
                      <p className="text-gray-600 mb-4">Color perfection & treatment with eco-friendly processes</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-full h-32 bg-orange-200 rounded-xl mb-4 overflow-hidden">
                          <img 
                            src={dyeingProcessImage} 
                            alt="Fabric dyeing and finishing process" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-orange-700 bg-orange-50 p-3 rounded-lg">
                          Revolutionary dyeing techniques ensure vibrant, long-lasting colors while maintaining fabric integrity and environmental compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* All over Printing */}
              <div className="group relative bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-pink-200 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">All over Printing</h4>
                      <p className="text-gray-600 mb-4">Creative design application with digital precision</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-full h-32 bg-pink-200 rounded-xl mb-4 overflow-hidden">
                          <img 
                            src={printingProcessImage} 
                            alt="All over printing process" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-pink-700 bg-pink-50 p-3 rounded-lg">
                          Cutting-edge printing technology brings intricate designs to life with exceptional detail and color accuracy across the entire garment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Control */}
              <div className="group relative bg-gradient-to-br from-red-50 to-red-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-red-200 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Quality Control</h4>
                      <p className="text-gray-600 mb-4">Rigorous inspection standards at every checkpoint</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-full h-32 bg-red-200 rounded-xl mb-4 overflow-hidden">
                          <img 
                            src={qualityControlImage} 
                            alt="Quality control testing" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-red-700 bg-red-50 p-3 rounded-lg">
                          Multi-stage quality assessments ensure every garment meets international standards for durability, fit, and finish before approval.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Garment Manufacturing */}
              <div className="group relative bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-indigo-200 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Garment Manufacturing</h4>
                      <p className="text-gray-600 mb-4">Final assembly & packaging with meticulous attention</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-full h-32 bg-indigo-200 rounded-xl mb-4 overflow-hidden">
                          <img 
                            src={manufacturingImage} 
                            alt="Garment manufacturing floor" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-indigo-700 bg-indigo-50 p-3 rounded-lg">
                          Expert craftsmen combine traditional techniques with modern efficiency to create premium garments ready for global markets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Products */}
        <div className="bg-gradient-soft rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <Factory className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h3>
            <p className="text-xl text-gray-600">
              Comprehensive textile solutions for diverse market needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              "Cotton Yarn & fabrics",
              "Custom OEM Clothing", 
              "Promotional / Event / School Clothing",
              "Sweater & Jacquard",
              "Socks",
              "Home textiles",
              "Ready Stock"
            ].map((product, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  <h4 className="text-lg font-semibold text-gray-900">{product}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="group shadow-lg">
              Get Catalogue
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;