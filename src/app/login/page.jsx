import React from 'react';
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f8f8f8]">
      <div className="w-[547px] h-[560px] px-[40px] py-[50px] flex flex-col gap-[40px] items-center justify-center bg-white rounded-[48px] border border-[#00000033] shadow-sm">
        <p className="text-[24px] font-normal text-black font-markoOne">
          <span className="text-[#EB3238]">L</span>ogo Here.
        </p>
        <form className="w-full flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-medium text-[#292627]">Email ID</label>
            <input
              type="email"
              placeholder="Enter your mail address"
              className="w-full h-[56px] px-[16px] rounded-[12px] bg-[#FFEDED] placeholder:text-[#A0A0A0] focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-medium text-[#292627]">Password</label>
            <input
              type="password"
              placeholder="Enter your mail address"
              className="w-full h-[56px] px-[16px] rounded-[12px] bg-[#FFEDED] placeholder:text-[#A0A0A0] focus:outline-none"
            />
          </div>
          <div className="text-right">
          <Link
  href="/forgot-password"
  className="text-[#EB3238] text-[14px] font-medium cursor-pointer hover:underline"
>
  Forgot Password?
</Link>

  </div>
          <button
            type="submit"
            className="w-full h-[50px] bg-[#EB3238] text-white font-semibold rounded-full hover:bg-[#d11e2b] transition"
          >
            Log In
          </button>
        </form>
        <p className="text-[14px] text-[#292627]">
          Don’t have an account?{' '}
          <Link href="/signup">
            <span className="text-[#EB3238] font-semibold cursor-pointer hover:underline">
              Register
            </span>
        </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
