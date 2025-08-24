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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Redefining Export Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Trendy Incorp, we blend traditional craftsmanship with modern innovation. 
                Our smart manufacturing facilities in Tirupur represent the future of textile 
                production, delivering premium quality garments to discerning European markets.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in next-generation knitted and woven garments, serving progressive 
                fashion brands across Germany, France, Italy, and the Netherlands with our 
                commitment to quality, sustainability, and ethical manufacturing.
              </p>

              {/* Simple Bullet Points */}
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  Sustainable Eco Friendly products
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  Enhancing fabrics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  Fabric formation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  Final product creation
                </li>
              </ul>

              {/* Buttons below bullet points */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button variant="light" size="lg" className="group shadow-lg">
                  About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="minimal" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <img 
                src={qualityGarmentsImage} 
                alt="Premium quality garments for European markets" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
                <h4 className="text-lg font-semibold">European Standards</h4>
              </div>
            </div>
            <div className="relative group">
              <img 
                src={tirupurIndustrialImage} 
                alt="Tirupur textile industrial landscape" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Strategic Location</span>
                </div>
                <h4 className="text-lg font-semibold">Tirupur Hub</h4>
              </div>
            </div>
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

        {/* Company Overview Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-16 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/30 rounded-full blur-2xl translate-y-32 -translate-x-32"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Trendy Incorp: pioneering textile excellence
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our dynamic textile manufacturing expertise and commitment to quality
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Years in Market */}
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                <div className="text-5xl font-bold text-blue-600 mb-2">25</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Years</div>
                <div className="text-sm text-gray-600">in the market</div>
              </div>

              {/* Satisfied Clients */}
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                <div className="text-5xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Satisfied</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>

              {/* Visited Conferences */}
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                <div className="text-5xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Visited</div>
                <div className="text-sm text-gray-600">Conference</div>
              </div>

              {/* High Qualified Employees */}
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                <div className="text-5xl font-bold text-orange-600 mb-2">200+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">High qualified</div>
                <div className="text-sm text-gray-600">Employees</div>
              </div>
            </div>

            {/* Central India Map Representation */}
            <div className="mt-16 flex justify-center">
              <div className="relative">
                {/* Simplified India shape using CSS */}
                <div className="w-64 h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 opacity-30 rounded-3xl transform rotate-12"></div>
                  <div className="absolute top-8 left-8 w-48 h-64 bg-gradient-to-br from-blue-300 to-blue-400 opacity-40 rounded-2xl transform -rotate-6"></div>
                  <div className="absolute top-12 left-12 w-40 h-56 bg-gradient-to-br from-blue-400 to-blue-500 opacity-50 rounded-xl"></div>
                  
                  {/* Location markers */}
                  <div className="absolute top-24 left-20 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-32 left-28 w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-40 left-24 w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>

            {/* Partnership Call to Action */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Trendy Incorp's clientele consists of forward-thinking business executives who are dedicated to advancing 
                their brands with cutting-edge technologies
              </p>
              <Button variant="light" size="lg" className="group shadow-lg bg-green-500 hover:bg-green-600 text-white border-0">
                BECOME OUR PARTNER
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;