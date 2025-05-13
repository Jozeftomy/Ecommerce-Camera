import React from 'react';
import  Lock  from 'lucide-react';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 bg-[#f8f8f8]">
      <div className="w-full max-w-[547px] px-6 py-10 md:px-[40px] md:py-[50px] bg-white rounded-[32px] border border-[#00000033] flex flex-col items-center gap-[40px]">
        <p className="text-[24px] font-normal text-black font-markoOne">
          <span className="text-[#EB3238]">L</span>ogo Here.
        </p>
        <form className="w-full flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-medium text-[#292627]">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-[56px] px-[16px] rounded-[28px] bg-[#FFEDED] placeholder:text-[#A0A0A0] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-medium text-[#292627]">Email ID</label>
            <input
              type="email"
              placeholder="Enter your mail address"
              className="w-full h-[56px] px-[16px] rounded-[28px] bg-[#FFEDED] placeholder:text-[#A0A0A0] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-medium text-[#292627]">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="At least 6 characters"
                className="w-full h-[56px] px-[16px] pr-[40px] rounded-[28px] bg-[#FFEDED] placeholder:text-[#A0A0A0] focus:outline-none"
              />
              <Lock size={18} className="absolute right-[16px] top-[50%] translate-y-[-50%] text-[#A0A0A0]" />
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-medium text-[#292627]">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full h-[56px] px-[16px] pr-[40px] rounded-[28px] bg-[#FFEDED] placeholder:text-[#A0A0A0] focus:outline-none"
              />
              <Lock size={18} className="absolute right-[16px] top-[50%] translate-y-[-50%] text-[#A0A0A0]" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full h-[50px] mt-[10px] bg-[#EB3238] text-white font-semibold rounded-full hover:bg-[#d11e2b] transition"
          >
            Create Account
          </button>
        </form>
        <p className="text-[14px] text-[#292627]">
          Already have an account?{' '}
          <Link href="/login">
            <span className="text-[#EB3238] font-semibold cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
