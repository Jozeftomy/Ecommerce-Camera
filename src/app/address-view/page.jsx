'use client';
import React from 'react';
import { Pencil } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const ViewAddress = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mobile = searchParams.get('mobile') || 'N/A';
  const pincode = searchParams.get('pincode') || 'N/A';
  const address = searchParams.get('address') || 'N/A';
  const state = searchParams.get('state') || 'N/A';
  const district = searchParams.get('district') || 'N/A';

  const handleAddAddress = () => {
    router.push('/address');
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white">
      <Navbar />

      <div className="w-full px-[5%] pt-6">
        <div className="flex items-center gap-2 text-[16px] sm:text-[18px] font-medium text-[#292627CC] font-manrope flex-wrap mb-6">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Profile</span>
          <span>{'>'}</span>
          <span className="text-[#EB3238]">My Address</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-start gap-6 px-[5%] mt-6 mb-28">
        <div className="w-full max-w-[1200px] border border-[#00000033] rounded-[30px] p-10 flex flex-col sm:flex-row justify-between sm:items-center gap-6 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-[#292627] mb-3 font-manrope">My Address</h2>
            <p className="text-[#292627] leading-[1.5rem] whitespace-pre-line">
              Mobile: {mobile}
              <br />
              {address}
              <br />
              District: {district}
              <br />
              State: {state}
              <br />
              Pincode: {pincode}
              <br />
              India
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-[#EB3238] font-medium text-sm hover:underline">
              Edit Address <Pencil size={14} />
            </button>
          </div>
        </div>

        <button
          onClick={handleAddAddress}
          className="w-[180px] h-[50px] rounded-[40px] border border-[#EB3238A8] bg-white flex items-center justify-center gap-[10px] px-[24px] py-[12px] text-[#EB3238] font-semibold hover:bg-[#ffecec] transition-all"
        >
          Add Address +
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ViewAddress;
