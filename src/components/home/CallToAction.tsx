import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShoppingBag, Users } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-primary-500 py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white mb-6">Join Our Community of Supporters</h2>
            <p className="text-primary-100 text-lg mb-8">
              Whether you want to volunteer, partner with us, or support our initiatives, 
              there are many ways to get involved with Gorilla Highland Sports Club.
              Together, we can make a difference in our community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="btn bg-white text-primary-500 hover:bg-gray-100"
              >
                <Users className="h-5 w-5 mr-2" />
                Get Involved
              </Link>
              <Link
                to="/shop"
                className="btn bg-accent-500 text-white hover:bg-accent-600"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Now
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest news, match results, and club initiatives.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  Subscribe <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;