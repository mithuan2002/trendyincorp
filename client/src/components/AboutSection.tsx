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
      title: "Sustainable Manufacturing",
      description: "Committed to eco-friendly processes and sustainable textile production methods."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable supply chain management ensuring on-time delivery for global markets."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Continuous investment in modern technology and innovative manufacturing processes."
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
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in next-generation knitted and woven garments, serving progressive 
                fashion brands across Germany, France, Italy, and the Netherlands with our 
                commitment to quality, sustainability, and ethical manufacturing.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-25 rounded-xl border border-gray-100 hover:shadow-md transition-smooth">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="modern" size="lg" className="group shadow-lg">
                View Certifications
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="minimal" size="lg">
                Download Profile
              </Button>
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

        {/* Achievements */}
        <div className="bg-gradient-soft rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <Target className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-xl text-gray-600">
              Measurable results that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="bg-white/70 backdrop-blur-sm border-gray-200 text-center shadow-md hover:shadow-lg transition-shadow group">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${achievement.color} mb-2`}>{achievement.value}</div>
                    <p className="text-sm text-gray-600 font-medium">{achievement.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;