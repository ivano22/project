import React from 'react';
import { Product } from '../../api/types';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card group hover:translate-y-[-5px]">
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.salePrice && (
          <div className="absolute top-2 left-2 bg-accent-500 text-white px-2 py-1 rounded-sm text-xs font-medium">
            SALE
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-sm text-xs font-medium">
            OUT OF STOCK
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <div>
            {product.salePrice ? (
              <div className="flex items-center">
                <span className="text-accent-500 font-bold mr-2">
                  UGX {product.salePrice.toLocaleString()}
                </span>
                <span className="text-gray-400 text-sm line-through">
                  UGX {product.price.toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="text-gray-800 font-bold">
                UGX {product.price.toLocaleString()}
              </span>
            )}
          </div>
          <button
            className={`btn p-2 ${
              product.inStock 
                ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                : 'bg-gray-300 cursor-not-allowed text-gray-600'
            }`}
            disabled={!product.inStock}
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;