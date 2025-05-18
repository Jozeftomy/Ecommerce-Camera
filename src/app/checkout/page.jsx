'use client';
import React, { useEffect, useState } from 'react';
import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const ViewAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('addresses');
    if (stored) {
      setAddresses(JSON.parse(stored));
    }
  }, []);

  const handleAddAddress = () => {
    router.push('/add-address');
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-white">
      <Navbar />

      <div className="w-full px-[5%] pt-6">
        <div className="flex items-center gap-2 text-[16px] sm:text-[18px] font-medium text-[#292627CC] font-manrope mb-6">
          <span>Home</span><span>{'>'}</span><span>Profile</span><span>{'>'}</span><span className="text-[#EB3238]">My Address</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-start gap-6 px-[5%] mt-6 mb-28">
        {addresses.length === 0 ? (
          <p className="text-[#666] text-sm">No address added yet.</p>
        ) : (
          addresses.map((addr, index) => (
            <div
              key={index}
              className="w-full max-w-[1200px] border border-[#00000033] rounded-[30px] p-10 flex flex-col sm:flex-row justify-between sm:items-center gap-6 shadow-sm"
            >
              <div>
                <h2 className="text-xl font-bold text-[#292627] mb-3 font-manrope">Address {index + 1}</h2>
                <p className="text-[#292627] leading-[1.5rem] whitespace-pre-line">
                  Mobile: {addr.mobile}
                  <br />
                  {addr.address}
                  <br />
                  District: {addr.district}
                  <br />
                  State: {addr.state}
                  <br />
                  Pincode: {addr.pincode}
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
          ))
        )}

        <button
          onClick={handleAddAddress}
          className="w-[180px] h-[50px] rounded-[40px] border border-[#EB3238A8] bg-white flex items-center justify-center gap-[10px] text-[#EB3238] font-semibold hover:bg-[#ffecec]"
        >
          Add Address +
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ViewAddress;
