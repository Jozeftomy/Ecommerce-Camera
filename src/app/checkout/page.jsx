'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import { Plus } from 'lucide-react';

const Page = () => {
  const router = useRouter();
  const [address, setAddress] = useState(null);

  const handleAddAddressClick = () => {
    router.push('/add-address');
  };

  return (
    <div className="w-full flex flex-col items-center bg-white">
      <Navbar />
      <div className="w-full max-w-[1440px] px-4 md:px-[120px] pt-4">
        <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-medium text-[#292627CC] font-manrope">
          <span>Home</span>
          <span>{'>'}</span>
          <span>Product</span>
          <span>{'>'}</span>
          <span>Product Details</span>
          <span>{'>'}</span>
          <span className="text-[#EB3238]">Checkout</span>
        </div>
      </div>
      <div className="w-full max-w-[1200px] px-4 md:px-6 mt-10 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-[#292627]">
                Delivery Address
              </h2>
              <button
                onClick={handleAddAddressClick}
                className="flex items-center gap-1 text-[#EB3238] font-semibold text-base hover:underline"
              >
                Add Address <Plus size={18} />
              </button>
            </div>
            {address ? (
              <div className="border border-gray-300 rounded-xl p-4 w-full">
                <p className="font-semibold">{address.name}</p>
                <p>{address.street}, {address.city}</p>
                <p>{address.state} - {address.zip}</p>
                <p>{address.phone}</p>
              </div>
            ) : (
              <p className="text-gray-500">No address added yet.</p>
            )}
          </div>
          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
            <label className="flex items-center gap-4 border rounded-xl p-4 mb-4 cursor-pointer">
              <input type="radio" name="payment" />
              <div className="flex flex-wrap items-center gap-4">
                <img src="/icons/visa.png" alt="Visa" className="h-6" />
                <img src="/icons/mastercard.png" alt="MasterCard" className="h-6" />
                <img src="/icons/paypal.png" alt="PayPal" className="h-6" />
              </div>
            </label>
            <label className="flex items-center gap-4 border rounded-xl p-4 mb-4 cursor-pointer">
              <input type="radio" name="payment" />
              <div className="flex flex-wrap items-center gap-4">
                <img src="/icons/gpay.png" alt="GPay" className="h-6" />
                <img src="/icons/upi.png" alt="UPI" className="h-6" />
                <img src="/icons/phonepe.png" alt="PhonePe" className="h-6" />
                <img src="/icons/bhim.png" alt="BHIM" className="h-6" />
              </div>
            </label>
            <label className="flex items-center gap-4 border rounded-xl p-4 cursor-pointer">
              <input type="radio" name="payment" />
              <span>Cash on delivery</span>
            </label>
          </div>
        </div>
        <div className="w-full lg:w-[400px] flex flex-col gap-4">
          <div className="w-[567px] h-[343px] p-[26px_24px] flex flex-col gap-[30px] rounded-[20px] bg-white border border-[#00000033]">
            <h3 className="text-xl font-bold">Order Summary</h3>

            <div className="flex justify-between text-[#292627]">
              <span>Item Total :</span>
              <span>₹2,44,999</span>
            </div>

            <div className="flex justify-between text-[#292627]">
              <span>Delivery Charges :</span>
              <span>₹199</span>
            </div>

            <div className="flex justify-between text-[#292627]">
              <span>Total :</span>
              <span>₹2,45,198</span>
            </div>

            <div className="flex justify-between text-green-600">
              <span>Discount :</span>
              <span>-₹4200</span>
            </div>

            <div className="bg-[#FFEDED] p-4 rounded-xl flex justify-between items-center font-semibold text-lg">
              <span>Order Total</span>
              <span>₹1,98,999</span>
            </div>
          </div>
          <button className="w-[200px] ml-auto bg-[#EB3238] text-white text-center font-semibold py-3 rounded-full hover:bg-[#c72c30] transition-all">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
