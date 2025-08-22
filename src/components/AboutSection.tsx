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
  ArrowRight
} from "lucide-react";
import qualityGarmentsImage from "@/assets/quality-garments.jpg";
import tirupurIndustrialImage from "@/assets/tirupur-industrial.jpg";

const AboutSection = () => {
  const achievements = [
    { icon: Factory, label: "Manufacturing Units", value: "3" },
    { icon: Users, label: "Skilled Workforce", value: "500+" },
    { icon: Award, label: "Certifications", value: "15+" },
    { icon: Zap, label: "Production Capacity", value: "50K/month" },
  ];

  const values = [
    {
      title: "European Quality Standards",
      description: "All our products meet and exceed European quality benchmarks and compliance requirements."
    },
    {
      title: "Sustainable Manufacturing",
      description: "Committed to eco-friendly processes and sustainable textile production methods."
    },
    {
      title: "Timely Delivery",
      description: "Reliable supply chain management ensuring on-time delivery for global markets."
    },
    {
      title: "Innovation Focus",
      description: "Continuous investment in modern technology and innovative manufacturing processes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-navy-deep/10 text-navy-deep rounded-full px-4 py-2 mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">About Trendy Incorp</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
            Tirupur's Leading Garment Exporter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in the textile capital of India, we've been delivering 
            premium quality garments to European markets for over 15 years.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-navy-deep mb-4">
                Excellence in Export Manufacturing
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the heart of Tirupur, India's textile hub, Trendy Incorp has established 
                itself as a trusted partner for European fashion brands. Our state-of-the-art 
                manufacturing facilities combine traditional craftsmanship with modern technology 
                to deliver exceptional quality garments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in knitted and woven garments, serving fashion brands across 
                Germany, France, Italy, and the Netherlands. Our commitment to quality, 
                sustainability, and ethical manufacturing practices has made us a preferred 
                partner in the global textile industry.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-gold-vibrant mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-deep mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="professional" size="lg" className="group">
                View Our Certifications
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Download Company Profile
              </Button>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={qualityGarmentsImage} 
                alt="Premium quality garments for European markets" 
                className="w-full h-64 object-cover rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-semibold mb-1">Premium Quality</h4>
                <p className="text-sm text-gray-200">European Standard Garments</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={tirupurIndustrialImage} 
                alt="Tirupur textile industrial landscape" 
                className="w-full h-48 object-cover rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <h4 className="text-lg font-semibold mb-1">Tirupur Base</h4>
                <p className="text-sm text-gray-200">India's Textile Capital</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <Target className="h-12 w-12 text-gold-vibrant mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
            <p className="text-xl text-gray-200">
              Numbers that reflect our commitment to excellence and growth
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                  <CardContent className="pt-6">
                    <IconComponent className="h-10 w-10 text-gold-vibrant mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gold-vibrant mb-2">{achievement.value}</div>
                    <p className="text-sm text-gray-200">{achievement.label}</p>
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