import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/mockData';
import { Product } from '../api/types';
import PageHero from '../components/shared/PageHero';
import SectionTitle from '../components/shared/SectionTitle';
import ProductCard from '../components/shop/ProductCard';
import { Filter, ShoppingBag, Shirt as TShirt, Ticket } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category.toLowerCase()))];

  const filteredProducts = products
    .filter(product => filter === 'all' || product.category.toLowerCase() === filter.toLowerCase())
    .filter(product => 
      search === '' || 
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
      <PageHero 
        title="Club Shop" 
        subtitle="Show your support with official Gorilla Highland SC merchandise"
        backgroundImage="https://images.pexels.com/photos/4148932/pexels-photo-4148932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <div className="section">
        <div className="container">
          <SectionTitle 
            title="Official Merchandise" 
            subtitle="Wear your club colors with pride and support our mission"
          />
          
          <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    filter === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input pl-10 w-full md:w-64"
              />
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="animate-pulse h-80 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-200 mb-4">
                <Filter className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="section bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/6740748/pexels-photo-6740748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team jerseys" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6">Support Our Club</h2>
              <p className="text-gray-700 mb-4">
                Every purchase from our shop directly supports Gorilla Highland Sports Club's 
                programs and initiatives. When you buy our merchandise, you're not just getting 
                quality products—you're investing in our community.
              </p>
              <p className="text-gray-700 mb-6">
                Your support helps us provide equipment for our youth academy, maintain our 
                facilities, and run community outreach programs that make a real difference.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-500 mr-4 flex-shrink-0">
                    <TShirt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Official Team Wear</h4>
                    <p className="text-gray-600">
                      Authentic jerseys, training gear, and casual wear with the official club logo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-500 mr-4 flex-shrink-0">
                    <Ticket className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Match Tickets</h4>
                    <p className="text-gray-600">
                      Purchase tickets for upcoming matches at our stadium.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-500 mr-4 flex-shrink-0">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Exclusive Merchandise</h4>
                    <p className="text-gray-600">
                      Limited edition items and collectibles you won't find anywhere else.
                    </p>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary">
                Visit Our Physical Store
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-primary-500 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-6">Bulk Orders & Customization</h2>
            <p className="text-primary-100 mb-8">
              Looking to place a bulk order for your organization, school, or fan club? 
              Want custom jerseys with your name and number? We offer special rates and 
              customization options for group orders.
            </p>
            <a 
              href="/contact"
              className="btn bg-white text-primary-500 hover:bg-gray-100"
            >
              Contact Us for Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;