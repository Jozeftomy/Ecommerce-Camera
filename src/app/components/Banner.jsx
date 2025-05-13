import React from 'react';

export const Banner = () => {
  return (
    <div className="w-full bg-[#FFF3F3] px-4 py-10 md:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#292627] font-phagsPa leading-tight">
            Capture Life in Every Frame
          </h1>
          <p className="text-base md:text-lg text-[#292627] font-medium">
            Discover the latest cameras — from everyday moments to epic adventures, we've got your perfect shot covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-[#EB3238] text-white font-semibold rounded-full hover:opacity-90 transition">
              Shop Now
            </button>
            <button className="px-6 py-3 border-2 border-[#EB3238] text-[#EB3238] bg-white font-semibold rounded-full hover:bg-[#ffeaea] transition">
              Find Your Camera
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/banner-image.png"
            alt="Camera Banner"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
