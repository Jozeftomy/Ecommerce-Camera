'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; 
import { LogOut, Pencil, User, Phone, Mail } from 'lucide-react';
import Footer from '../components/Footer'; 

const ProfilePage = () => {
  const router = useRouter(); 

  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-[#EB3238] mb-2">Logo Here.</h1>
        <div className="text-sm text-gray-500 flex items-center space-x-2">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Profile</span>
          <span>{'>'}</span>
          <span className="text-[#EB3238]">My Profile</span>
        </div>
      </div>
      <div className="mt-10 w-full max-w-xl border border-[#00000033] rounded-2xl p-6 shadow-sm mb-[80px]"> 
        <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

        <div className="flex flex-col gap-4">

          <div className="flex items-center gap-3 border border-[#00000033] rounded-lg px-4 py-3">
            <User className="text-[#EB3238]" size={20} />
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent text-gray-800 outline-none w-full"
            />
          </div>
          <div className="flex items-center gap-3 border border-[#00000033] rounded-lg px-4 py-3">
            <Phone className="text-[#EB3238]" size={20} />
            <input
              type="text"
              placeholder="Enter your phone number"
              className="bg-transparent text-gray-800 outline-none w-full"
            />
          </div>
          <div className="flex items-center gap-3 border border-[#00000033] rounded-lg px-4 py-3">
            <Mail className="text-[#EB3238]" size={20} />
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-transparent text-gray-800 outline-none w-full"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button className="flex items-center gap-2 bg-[#EB3238] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#c72c30] transition">
            <LogOut size={16} />
            Logout
          </button>

          <button 
            onClick={() => router.push('/edit-profile')} // Navigate on click
            className="flex items-center gap-2 border border-[#EB3238] text-[#EB3238] px-5 py-2 rounded-full font-semibold hover:bg-[#fff1f1] transition"
          >
            Edit Profile
            <Pencil size={16} />
          </button>
        </div>
      </div>

      {/* Footer - Added spacing to ensure clean layout */}
      <Footer />
    </div>
  );
};

export default ProfilePage;
