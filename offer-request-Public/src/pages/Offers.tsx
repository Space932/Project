
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Offers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Special Offers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take advantage of our limited-time promotions and special packages designed to provide maximum value.
          </p>
        </div>
      </section>
      
      {/* Featured Offer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <Badge className="bg-white text-purple-600 mb-4">FEATURED OFFER</Badge>
                <h3 className="text-3xl font-bold mb-2">New Client Special</h3>
                <p className="text-lg mb-4">Get 20% off on your first service request</p>
                <ul className="list-disc list-inside mb-6">
                  <li>Valid for all new clients</li>
                  <li>Applies to any service</li>
                  <li>Professional consultation included</li>
                  <li>Priority support</li>
                </ul>
                <Button size="lg" asChild className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link to="/request">Request Now</Link>
                </Button>
              </div>
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="bg-white/20 backdrop-blur-lg p-8 rounded-lg text-center">
                  <div className="text-6xl font-bold mb-2">20%</div>
                  <div className="text-2xl">DISCOUNT</div>
                  <div className="text-lg mt-2">Use code: WELCOME</div>
                  <div className="text-sm mt-4">Valid until: Dec 31, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Offers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-500 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bundle Package</h3>
                <p className="text-gray-600 mb-4">
                  Save 15% when you bundle any three services together.
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-4">15% Off</div>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Choose any 3 services
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Save 15% on total price
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Priority scheduling
                  </li>
                </ul>
                <div className="text-sm text-gray-500 mb-4">
                  Use code: BUNDLE15
                </div>
                <Button asChild className="w-full">
                  <Link to="/request">Request Now</Link>
                </Button>
              </div>
            </div>
            
            {/* Offer 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-500 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Loyal Customer Discount</h3>
                <p className="text-gray-600 mb-4">
                  Existing customers receive special pricing on additional services.
                </p>
                <div className="text-3xl font-bold text-purple-600 mb-4">10% Off</div>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    For existing clients only
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Applies to any service
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    No expiration date
                  </li>
                </ul>
                <div className="text-sm text-gray-500 mb-4">
                  Use code: LOYAL10
                </div>
                <Button asChild className="w-full">
                  <Link to="/request">Request Now</Link>
                </Button>
              </div>
            </div>
            
            {/* Offer 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-pink-500 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Annual Subscription</h3>
                <p className="text-gray-600 mb-4">
                  Save big with our annual service subscription plan.
                </p>
                <div className="text-3xl font-bold text-pink-600 mb-4">25% Off</div>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    12-month commitment
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Monthly billing available
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    VIP support included
                  </li>
                </ul>
                <div className="text-sm text-gray-500 mb-4">
                  Contact us for details
                </div>
                <Button asChild className="w-full">
                  <Link to="/request">Request Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terms */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Terms and Conditions</h2>
          <div className="prose max-w-none">
            <ul className="space-y-2 text-gray-600">
              <li>All offers are subject to availability and may be withdrawn at any time.</li>
              <li>Offers cannot be combined with other promotions unless specifically stated.</li>
              <li>Discount codes must be mentioned at the time of service request.</li>
              <li>New client discounts are valid for customers who have not previously used our services.</li>
              <li>We reserve the right to modify or cancel promotions at our discretion.</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Offers;
