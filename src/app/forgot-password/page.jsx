'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ResetPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Sending OTP to:", email);

    router.push("/otp-verify");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-[547px] h-[432px] bg-white border border-[#00000033] rounded-[48px] px-[40px] py-[40px] shadow-sm text-center flex flex-col gap-[40px] justify-center">
        <h2 className="text-[20px] font-semibold text-black">
          Reset your Password
        </h2>

        <form className="flex flex-col gap-[40px]" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start gap-2 text-left w-full">
            <label className="text-[14px] font-medium text-black">Email ID</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to reset your password"
              className="w-full h-[48px] px-4 rounded-full bg-[#FFEDED] placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              className="w-[200px] h-[50px] pt-[14px] pr-[32px] pb-[14px] pl-[32px] bg-[#EB3238] text-white text-sm font-semibold rounded-[40px] hover:bg-[#d11e2b] transition"
            >
              Send OTP
            </button>

            <p className="text-xs text-gray-500 text-center">
              If an account is associated, an OTP will be sent
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
