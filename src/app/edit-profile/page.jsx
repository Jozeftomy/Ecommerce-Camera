import React from 'react'
import { LoginNavbar } from '@/app/components/LoginNavbar'
import Footer from '@/app/components/Footer'

const page = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <LoginNavbar/>
      
      <div className="w-full px-[5%] pt-4">
        <div className="flex items-center gap-2 text-[16px] sm:text-[18px] font-medium text-[#292627CC] font-manrope flex-wrap">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Profile</span>
          <span>{'>'}</span>
          <span>My Profile</span>
          <span>{'>'}</span>
          <span className="text-[#EB3238]">Edit Profile</span>
        </div>
      </div>

      {/* Smaller Main Section */}
      <div className="w-[80%] max-w-[800px] mt-[4%] mb-[8%] px-[4%] py-[4%] border border-[#00000033] rounded-[5%] bg-white shadow-sm">
        <h2 className="text-[6vw] sm:text-[3vw] md:text-[2vw] font-bold text-[#292627] font-manrope mb-[5%]">
          Edit Profile
        </h2>

        <div className="flex flex-col gap-[5%]">
          <div className="flex flex-col gap-[2%] w-full">
            <label className="text-[1rem] font-semibold text-[#292627] font-manrope">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-[#FFEDED] rounded-full px-[4%] w-full h-[55px] placeholder:text-[#999999] outline-none"
            />
          </div>

          <div className="flex flex-col gap-[2%] w-full">
            <label className="text-[1rem] font-semibold text-[#292627] font-manrope">
              Email ID
            </label>
            <input
              type="text"
              placeholder="Enter your mail address"
              className="bg-[#FFEDED] rounded-full px-[4%] w-full h-[55px] placeholder:text-[#999999] outline-none"
            />
          </div>

          <div className="flex flex-col gap-[2%] w-full">
            <label className="text-[1rem] font-semibold text-[#292627] font-manrope">
              Phone No.
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="bg-[#FFEDED] rounded-full px-[4%] w-full h-[55px] placeholder:text-[#999999] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-[6%]">
          <button className="w-[140px] h-[45px] rounded-[40px] border border-[#EB3238A8] bg-white text-[#EB3238] font-semibold flex items-center justify-center hover:bg-[#ffecec] transition-all">
            Cancel
          </button>

          <button className="w-[180px] h-[45px] rounded-[40px] bg-[#EB3238] text-white font-semibold hover:bg-[#c72c30] transition-all">
            Update Profile
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page
