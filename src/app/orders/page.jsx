import React from 'react'
import { LoginNavbar } from  '../components/LoginNavbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <LoginNavbar />
      
      {/* Content Wrapper - Pushes Footer to Bottom */}
      <div className="flex-grow flex flex-col items-center mb-[80px]"> {/* Added margin-bottom */}
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
          {/* Inner Div for Image */}
          <div className="w-[350px] h-[350px] bg-white flex items-center justify-center overflow-hidden">
            <img 
              src="/images/cart.png" 
              alt="Image Description" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Div */}
          <div className="w-[387px] h-[33px] text-[#292627] text-[24px] font-medium font-manrope capitalize leading-[100%] flex items-center justify-center">
            You haven’t placed any orders yet.
          </div>
        </div>

        <button className="w-[200px] h-[50px] mt-8 rounded-[40px] bg-[#EB3238] text-white font-semibold flex items-center justify-center hover:bg-[#c72c30] transition-all">
          Click Me
        </button>
      </div>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
};

export default page;
