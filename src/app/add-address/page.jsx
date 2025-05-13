'use client';
import React from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft } from 'lucide-react';

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <Navbar />
      <div className="w-full px-[5%] pt-4">
        <div className="flex items-center gap-2 text-[16px] sm:text-[18px] font-medium text-[#292627CC] font-manrope flex-wrap">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Products</span>
          <span>{'>'}</span>
          <span>Product Details</span>
          <span>{'>'}</span>
          <span>Checkout</span>
          <span>{'>'}</span>
          <span className="text-[#EB3238]">Change Address</span>
        </div>
      </div>
      <div className="w-[90%] max-w-[928px] mt-[5%] mb-[10%] px-[5%] py-[5%] border border-[#00000033] rounded-[5%] bg-white shadow-sm">
        <h2 className="text-[6vw] sm:text-[3vw] md:text-[2vw] font-bold text-[#292627] font-manrope mb-[5%]">
          Delivery Address
        </h2>
        <div className="flex flex-col gap-[5%]">
          <div className="flex flex-col gap-[2%] w-full">
            <label className="text-[1rem] font-semibold text-[#292627] font-manrope">
              Mobile No.
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="bg-[#FFEDED] rounded-full px-[5%] py-[4%] placeholder:text-[#999999] w-full outline-none"
            />
          </div>

          {/* Pincode */}
          <div className="flex flex-col gap-[2%] w-full">
            <label className="text-[1rem] font-semibold text-[#292627] font-manrope">
              Pincode
            </label>
            <input
              type="text"
              placeholder="Enter your pincode"
              className="bg-[#FFEDED] rounded-full px-[5%] py-[4%] placeholder:text-[#999999] w-full outline-none"
            />
          </div>
          <div className="flex flex-col gap-[2%] w-full">
            <label className="text-[1rem] font-semibold text-[#292627] font-manrope">
              Address
            </label>
            <input
              type="text"
              placeholder="Flat, House no., Building, Company, Apartment"
              className="bg-[#FFEDED] rounded-full px-[5%] py-[4%] placeholder:text-[#999999] w-full outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-[8%]">
          <button className="flex items-center gap-1 px-[6%] py-[3%] border border-[#EB3238] text-[#EB3238] rounded-full font-semibold hover:bg-[#ffecec] transition-all">
            <ChevronLeft size={20} /> Back
          </button>
          <button className="px-[6%] py-[3%] bg-[#EB3238] text-white rounded-full font-semibold hover:bg-[#c72c30] transition-all">
            Save Address
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
