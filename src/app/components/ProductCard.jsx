import React from 'react';

const ProductCard = () => {
  return (
    <div className="w-[384px] h-[495.69px] p-[18px] bg-white border border-[#D1D1D1] rounded-[12px] flex flex-col gap-[13px] hover:cursor-pointer">
      <div className="w-[348px] h-[267.69px] bg-gray-100 rounded-[12px] flex items-center justify-center">
        <span className="text-gray-400">Image Here</span>
      </div>
      <div className="w-[348px] h-[179px] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-black">Canon EOS R5 Mark II</div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-[18px]">★</span>
            ))}
            {[...Array(2)].map((_, i) => (
              <span key={i} className="text-gray-300 text-[18px]">★</span>
            ))}
          </div>
          <span className="text-[#6B6B6B] text-[14px] font-medium">Best Seller</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[20px] font-semibold text-black">₹ 1,74,999</span>
          <button className="px-6 py-2 border border-[#EB3238] text-[#EB3238] font-semibold rounded-full hover:bg-[#EB3238] hover:text-white transition hover:cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
