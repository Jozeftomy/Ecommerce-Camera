import React from 'react';
import { Search } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full max-w-[1440px] h-[130px] px-[20px] md:px-[80px] lg:px-[120px] pb-[20px] flex items-center justify-between mx-auto">
      <div className="w-[159px] h-[52px] flex items-center gap-[10px]">
        <p className="text-[24px] font-normal text-black font-markoOne">
          <span className="text-[#EB3238]">L</span>ogo Here.
        </p>
      </div>

      <div className="hidden md:flex w-auto max-w-[620px] h-[40px] gap-[4px]">
        <Link href="/">
          <div className="px-[12px] py-[8px] flex items-center justify-center text-[14px] md:text-[16px] font-manrope font-semibold capitalize text-[#5F5B5C] hover:text-[#EB3238] cursor-pointer">
            Home
          </div>
        </Link>
        <div className="px-[12px] py-[8px] flex items-center justify-center text-[14px] md:text-[16px] font-manrope font-semibold capitalize text-[#5F5B5C] hover:text-[#EB3238] cursor-pointer">
          Categories
        </div>
        <Link href="/products">
          <div className="px-[12px] py-[8px] flex items-center justify-center text-[14px] md:text-[16px] font-manrope font-semibold capitalize text-[#5F5B5C] hover:text-[#EB3238] cursor-pointer">
            Products
          </div>
        </Link>
        <Link href="/orders">
        <div className="px-[12px] py-[8px] flex items-center justify-center text-[14px] md:text-[16px] font-manrope font-semibold capitalize text-[#5F5B5C] hover:text-[#EB3238] cursor-pointer">
          My Orders
        </div>
        </Link>
      </div>

      <div className="flex items-center gap-[15px]">
        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] p-[10px] bg-[#FFF3F3]">
          <Search size={20} color="#5F5B5C" />
        </div>

        <Link href="/login">
          <button className="w-[160px] md:w-[200px] h-[45px] md:h-[50px] px-[20px] md:px-[32px] py-[12px] md:py-[14px] flex items-center justify-center rounded-[40px] bg-[#EB3238] text-white font-semibold hover:cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};
