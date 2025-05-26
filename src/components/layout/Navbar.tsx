import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'News', path: '/news' },
  { name: 'Projects', path: '/projects' },
  { name: 'Get Involved', path: '/get-involved' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center mr-3">
            <span className="text-white font-bold text-xl">GH</span>
          </div>
          <div>
            <span className={`font-heading font-bold text-xl ${isScrolled ? 'text-primary-500' : 'text-white'}`}>
              Gorilla Highland
            </span>
            <span className={`block text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
              Sports Club
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 ${
                  isScrolled
                    ? isActive
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                    : isActive
                    ? 'text-primary-300'
                    : 'text-white hover:text-primary-300'
                }`
              }
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/shop" 
            className={`btn ${isScrolled ? 'bg-accent-500 hover:bg-accent-600' : 'bg-white hover:bg-gray-100'} 
              flex items-center transition-colors duration-200 ${isScrolled ? 'text-white' : 'text-primary-500'}`}
          >
            <ShoppingBag className="h-5 w-5 mr-2" />
            Shop Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">GH</span>
              </div>
              <span className="font-heading font-bold text-lg text-primary-500">Gorilla</span>
            </Link>
            <button className="focus:outline-none" onClick={closeMenu}>
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `py-2 font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                  }`
                }
                onClick={closeMenu}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/shop"
              className="btn bg-accent-500 hover:bg-accent-600 text-white flex items-center justify-center mt-4"
              onClick={closeMenu}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;