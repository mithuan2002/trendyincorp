import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  MessageSquare,
  Building,
  FileText,
  Globe
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 rounded-full px-4 py-2 mb-4">
            <MessageSquare className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with us for all your textile manufacturing needs
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100/30 rounded-full blur-xl translate-y-12 -translate-x-12"></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Company Information */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <Building className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Company Details</h3>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <p className="text-xl font-bold text-blue-700">TRENDY INCORP</p>
                      <p className="text-lg">Attn:- Mr. Ravi Shankar</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p>S.F.No. 7A/3B, KANAKKAMPALAYAM PIRIVU,</p>
                      <p>BEHIND LPG GAS BUNK,</p>
                      <p>P.N ROAD</p>
                      <p className="font-semibold">TIRUPUR - 641666</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Phone className="h-6 w-6 text-purple-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p className="text-lg font-semibold">+91 9952800900</p>
                      <p>099528 00900</p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <FileText className="h-6 w-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Registration</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-semibold">GSTIN:</span> 33AWBPR8818G1ZD</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <MapPin className="h-6 w-6 text-red-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Location</h3>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <a 
                        href="https://maps.app.goo.gl/YspsMq8jp784s7Mg7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <Globe className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Connect Online</h3>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <a 
                        href="https://linkedin.com/company/trendy-incorp" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        <Globe className="h-4 w-4 mr-2" />
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                    <h4 className="text-lg font-bold mb-3">Quick Contact</h4>
                    <div className="space-y-2">
                      <p className="font-semibold">TRENDY INCORP</p>
                      <p className="text-blue-100">📞 099528 00900</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;