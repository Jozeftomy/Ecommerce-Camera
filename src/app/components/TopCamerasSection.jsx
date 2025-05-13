import React from 'react';
import ProductCard from './ProductCard';

const cameraData = [
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

const TopCamerasSection = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col gap-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-left -ml-6 sm:-ml-10 md:-ml-14">
          Top Cameras This Week
      </h2>
      <div className="flex flex-wrap gap-6 justify-center md:justify-between">
        {cameraData.map((item, index) => (
          <div key={index} className="w-[90%] sm:w-[48%] md:w-[30%]">
            <ProductCard
              name={item.name}
              price={item.price}
              image={item.image}
              rating={item.rating}
              tag={item.tag}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCamerasSection;
