import React from 'react'
import { LoginNavbar } from  '../components/LoginNavbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <LoginNavbar />
      
  
      <div className="flex-grow flex flex-col items-center mb-[80px]"> 
        <div className="w-full px-[5%] pt-4">
          <div className="flex items-center gap-2 text-[16px] sm:text-[18px] font-medium text-[#292627CC] font-manrope flex-wrap">
            <span>Home</span>
            <span>{'>'}</span>
            <span>Profile</span>
            <span>{'>'}</span>
            <span className="text-[#EB3238]">My Orders</span>
          </div>
        </div>

        <div className="w-[387px] h-[464px] bg-white flex flex-col items-center justify-center">
          <div className="w-[350px] h-[350px] bg-white flex items-center justify-center overflow-hidden">
            <img 
              src="/images/cart.png" 
              alt="Image Description" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-[387px] h-[33px] text-[#292627] text-[24px] font-medium font-manrope capitalize leading-[100%] flex items-center justify-center">
            You haven’t placed any orders yet.
          </div>
        </div>

        <button className="w-[200px] h-[50px] mt-8 rounded-[40px] bg-[#EB3238] text-white font-semibold flex items-center justify-center hover:bg-[#c72c30] transition-all hover:cursor-pointer">
         Shop now
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default page;
