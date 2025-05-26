import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">GH</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white">
                  Gorilla Highland
                </span>
                <span className="block text-xs text-gray-400">
                  Sports Club
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Elevating Talent from the Highlands since 2012. Building champions on and off the field.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors">
                  Support Our Cause
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors">
                  Partnership Opportunities
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors">
                  Sponsor a Player
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">
                  Gorilla Highland Stadium, Kisoro District, Uganda
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <a href="tel:+256777123456" className="text-gray-400 hover:text-white transition-colors">
                  +256 777 123 456
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@gorillahighlandsc.com" className="text-gray-400 hover:text-white transition-colors">
                  info@gorillahighlandsc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Gorilla Highland Sports Club. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;