'use client'
import React, { useState } from 'react';
import { Search, User, Package, MapPin, LogOut, ChevronDown } from "lucide-react";

export const LoginNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("User Logged Out");
  };

  return (
    <div className="w-full max-w-[1440px] h-[130px] px-[20px] md:px-[80px] lg:px-[120px] pb-[20px] flex items-center justify-between mx-auto">
      <div className="w-[159px] h-[52px] flex items-center gap-[10px]">
        <p className="text-[24px] font-normal text-black font-markoOne">
          <span className="text-[#EB3238]">L</span>ogo Here.
        </p>
      </div>
      <div className="w-[285px] h-[50px] gap-[20px] bg-white flex items-center justify-center">
        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full p-[10px] bg-[#FFF3F3]">
          <Search size={20} color="#5F5B5C" />
        </div>
        <div 
          className="relative w-[217px] h-[50px] rounded-[40px] bg-[#FFF3F3] flex items-center justify-between px-4 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full ">
            <User size={20} color="red" />
          </div>
          <ChevronDown size={20} color="#5F5B5C" />
          {isDropdownOpen && (
            <div className="absolute top-[60px] right-0 w-[180px] bg-white rounded-lg shadow-md flex flex-col p-2 gap-2">
              <a href="/profile" className="flex items-center gap-2 px-3 py-2 text-[#292627] hover:bg-[#FFF3F3] rounded-md">
                <User size={18} /> My Profile
              </a>
              <a href="/orders" className="flex items-center gap-2 px-3 py-2 text-[#292627] hover:bg-[#FFF3F3] rounded-md">
                <Package size={18} /> My Orders
              </a>
              <a href="/address" className="flex items-center gap-2 px-3 py-2 text-[#292627] hover:bg-[#FFF3F3] rounded-md">
                <MapPin size={18} /> My Address
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-[#EB3238] hover:bg-[#FFECEC] rounded-md border-t border-[#EB3238] w-full"
              >
                <LogOut size={18} /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
