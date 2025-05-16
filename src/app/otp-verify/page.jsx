'use client'
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const inputsRef = useRef([]);
  const router = useRouter();

  useEffect(() => {
    if (timer === 0) return;
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (!value) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5 && value) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    router.push("/reset-password"); 
  };

  const handleResend = () => {
    setTimer(60);
    setOtp(Array(6).fill(""));
    inputsRef.current[0]?.focus();
    // Add actual resend OTP logic here (API call)
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-[547px] h-[432px] bg-white border border-[#00000033] rounded-[48px] px-[40px] py-[40px] shadow-sm text-center flex flex-col gap-[40px] justify-center">
        <h2 className="text-[20px] font-semibold text-black">Verify OTP</h2>
        <p className="text-sm text-black">Enter The 6-Digit Code Sent To Your Email</p>

        <div className="flex justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              className="w-[48px] h-[48px] rounded-md text-center text-xl font-semibold bg-[#FFEDED] focus:outline-none"
            />
          ))}
        </div>

        {timer > 0 ? (
          <div className="text-sm text-gray-500">
            Resend OTP in <span className="text-red-500 font-medium">{timer}s</span>
          </div>
        ) : (
          <button
            onClick={handleResend}
            className="text-sm text-red-500 font-medium underline"
          >
            Resend OTP
          </button>
        )}

        <button
          onClick={handleVerify}
          className="w-[200px] h-[50px] pt-[14px] pr-[32px] pb-[14px] pl-[32px] bg-[#EB3238] text-white text-sm font-semibold rounded-[40px] hover:bg-[#d11e2b] transition mx-auto"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
