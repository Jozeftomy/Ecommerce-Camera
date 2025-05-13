import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFF3F3] px-6 md:px-[80px] lg:px-[120px] pt-[40px] pb-[60px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-[40px]">
        <p className="text-[24px] font-normal text-black font-markoOne">
          <span className="text-[#EB3238]">L</span>ogo Here.
        </p>
        <div className="w-full max-w-[230px] flex flex-col gap-[20px] items-center md:items-start text-center md:text-left">
          <h3 className="text-[18px] font-bold capitalize text-[#292627] font-manrope">
            Account
          </h3>
          <ul className="flex flex-col gap-[12px] text-[16px] text-[#292627] font-manrope">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <ArrowUpRight size={16} className="text-[#EB3238]" /> My Orders
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <ArrowUpRight size={16} className="text-[#EB3238]" /> Wishlists
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <ArrowUpRight size={16} className="text-[#EB3238]" /> Privacy Policy
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <ArrowUpRight size={16} className="text-[#EB3238]" /> Terms & Conditions
            </li>
          </ul>
        </div>

        <div className="w-full max-w-[230px] flex flex-col gap-[20px] items-center md:items-start text-center md:text-left">
          <h3 className="text-[18px] font-bold capitalize text-[#292627] font-manrope">
            Shop
          </h3>
          <ul className="flex flex-col gap-[12px] text-[16px] text-[#292627] font-manrope">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <ArrowUpRight size={16} className="text-[#EB3238]" /> Cameras
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <ArrowUpRight size={16} className="text-[#EB3238]" /> Lenses
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <ArrowUpRight size={16} className="text-[#EB3238]" /> Accessories
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
