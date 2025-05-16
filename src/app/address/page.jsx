'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft } from 'lucide-react';

const Page = () => {
  const router = useRouter();

  const handleSave = () => {
    const mobile = document.querySelector('#mobile')?.value;
    const pincode = document.querySelector('#pincode')?.value;
    const address = document.querySelector('#address')?.value;
    const state = document.querySelector('#state')?.value;
    const district = document.querySelector('#district')?.value;

    const params = new URLSearchParams({
      mobile,
      pincode,
      address,
      state,
      district,
    });

    router.push(`/address-view?${params.toString()}`);
  };

  return (
    <div className="w-full flex flex-col items-center bg-white">
      <Navbar />

      <div className="w-full px-[5%] pt-4">
        <div className="flex items-center gap-2 text-[16px] sm:text-[18px] font-medium text-[#292627CC] font-manrope flex-wrap">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Profile</span>
          <span>{'>'}</span>
          <span className="text-[#EB3238]">My Address</span>
        </div>
      </div>

      <div className="w-[75%] max-w-[750px] mt-[4%] mb-[8%] px-[3%] py-[3%] border border-[#00000033] rounded-[5%] bg-white shadow-sm">
        <h2 className="text-[6vw] sm:text-[3vw] md:text-[2vw] font-bold text-[#292627] font-manrope mb-[5%]">
          Edit Address
        </h2>

        <div className="flex flex-col gap-[4%]">
          <div className="flex flex-col gap-[2%] w-full">
            <label className="text-[1rem] font-semibold text-[#292627] font-manrope">Mobile No.</label>
            <input id="mobile" type="text" placeholder="Enter your mobile number" className="bg-[#FFEDED] rounded-full px-[3%] w-full h-[50px] placeholder:text-[#999999] outline-none" />
          </div>

          <div className="flex flex-col gap-[2%] w-full">
            <label className="text-[1rem] font-semibold text-[#292627] font-manrope">Pincode</label>
            <input id="pincode" type="text" placeholder="Enter your pincode" className="bg-[#FFEDED] rounded-full px-[3%] w-full h-[50px] placeholder:text-[#999999] outline-none" />
          </div>

          <div className="flex flex-col gap-[2%] w-full">
            <label className="text-[1rem] font-semibold text-[#292627] font-manrope">Address</label>
            <input id="address" type="text" placeholder="Flat, House no., Building, Company, Apartment" className="bg-[#FFEDED] rounded-full px-[3%] w-full h-[50px] placeholder:text-[#999999] outline-none" />
          </div>

          <div className="flex flex-col sm:flex-row gap-[4%] mt-[4%] w-full">
            <div className="flex flex-col gap-[2%] w-full sm:w-1/2">
              <label className="text-[1rem] font-semibold text-[#292627] font-manrope">State</label>
              <input id="state" type="text" placeholder="Enter your state" className="bg-[#FFEDED] rounded-full px-[3%] w-full h-[50px] placeholder:text-[#999999] outline-none" />
            </div>
            <div className="flex flex-col gap-[2%] w-full sm:w-1/2">
              <label className="text-[1rem] font-semibold text-[#292627] font-manrope">District</label>
              <input id="district" type="text" placeholder="Enter your district" className="bg-[#FFEDED] rounded-full px-[3%] w-full h-[50px] placeholder:text-[#999999] outline-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-[6%]">
          <button className="w-[140px] h-[45px] rounded-[40px] border border-[#EB3238A8] bg-white text-[#EB3238] font-semibold flex items-center justify-center text-center hover:bg-[#ffecec] transition-all">
            <ChevronLeft size={20} /> Back
          </button>

          <button
            onClick={handleSave}
            className="w-[180px] h-[45px] rounded-[40px] bg-[#EB3238] text-white font-semibold hover:bg-[#c72c30] transition-all"
          >
            Save Address
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
