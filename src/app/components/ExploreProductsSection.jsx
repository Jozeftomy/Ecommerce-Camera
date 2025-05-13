import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Canon EOS R5 Mark II',
    price: '1,72,999',
    image: '/images/camera-2.jpg',
    rating: 3,
    tag: 'Best Seller',
  },
  {
    name: 'Canon EOS R5 Mark II',
    price: '1,89,999',
    image: '/images/camera-3.jpg',
    rating: 3,
    tag: 'Best Seller',
  },
  {
    name: 'Canon EOS R5 Mark II',
    price: '1,74,999',
    image: '/images/camera-1.jpg',
    rating: 3,
    tag: 'Best Seller',
  },
  {
    name: 'Canon EOS R5 Mark II',
    price: '1,74,999',
    image: '/images/camera-1.jpg',
    rating: 3,
    tag: 'Best Seller',
  },
  {
    name: 'Canon EOS R5 Mark II',
    price: '1,72,999',
    image: '/images/camera-2.jpg',
    rating: 4,
    tag: 'Best Seller',
  },
  {
    name: 'Canon EOS R5 Mark II',
    price: '1,89,999',
    image: '/images/camera-3.jpg',
    rating: 3,
    tag: 'Best Seller',
  },
];

const ExploreProductsSection = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6">
        Explore Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            tag={product.tag}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border border-[#EB3238] text-white bg-[#EB3238] font-semibold rounded-full hover:bg-white hover:text-[#EB3238] transition hover:cursor-pointer">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ExploreProductsSection;
