import React from 'react';

const Category = () => {
  const categories = ["DSLR Cameras", "Mirrorless", "Action Cams", "Lenses", "Tripods"];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-black font-manrope text-left -ml-6 sm:-ml-10 md:-ml-14">
          Shop by Category
      </h2>
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {categories.map((name, index) => (
          <div
            key={index}
            className="w-[45%] sm:w-[30%] md:w-[18%] aspect-square rounded-2xl border border-[#D1D1D1] bg-white flex flex-col items-center justify-center p-4 hover:cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
          >
            <img
              src={`/images/category-${index + 1}.png`}
              alt={name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="mt-3 text-center text-base font-bold text-black font-manrope">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
