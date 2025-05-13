'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import { Plus } from 'lucide-react';
import Footer from '../components/Footer';
import Image from 'next/image';

const Page = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleAddAddressClick = () => {
    router.push('/add-address');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 flex flex-col items-center w-full">
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
        <div className="w-full max-w-[1440px] px-4 md:px-[120px] mt-8 flex justify-between items-center">
          <h2 className="text-[30px] font-bold text-[#292627] font-manrope">Delivery Address</h2>
          <button
            onClick={handleAddAddressClick}
            className="flex items-center gap-1 text-[#EB3238] font-semibold text-base hover:underline"
          >
            Add Address <Plus size={18} />
          </button>
        </div>
        <div className="w-full max-w-[1440px] px-4 md:px-[120px] mt-8 mb-16 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[60%] p-[30px] border border-[#00000033] bg-white rounded-[20px] flex flex-col gap-[20px]">
            <h3 className="text-[30px] font-bold text-[#292627] font-manrope">Payment Method</h3>
            <label className="flex items-center gap-4 border border-[#0000001A] p-4 rounded-[12px] cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
              />
              <div className="flex gap-4 items-center flex-wrap">
                <span className="text-lg font-semibold">Credit or debit card</span>
                <Image src="/images/visa.png" alt="VISA" width={40} height={30} />
                <Image src="/images/mastercard.png" alt="MasterCard" width={40} height={30} />
                <Image src="/images/paypal.png" alt="PayPal" width={40} height={30} />
              </div>
            </label>
            <label className="flex items-center gap-4 border border-[#0000001A] p-4 rounded-[12px] cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
              />
              <div className="flex gap-4 items-center flex-wrap">
                <span className="text-lg font-semibold">UPI Payments</span>
                <Image src="/images/gpay.png" alt="GPay" width={40} height={30} />
                <Image src="/images/upi.png" alt="UPI" width={40} height={30} />
                <Image src="/images/phonepe.png" alt="PhonePe" width={40} height={30} />
                <Image src="/images/bhmiupi.png" alt="BHIM UPI" width={40} height={30} />
              </div>
            </label>
            <label className="flex items-center gap-4 border border-[#0000001A] p-4 rounded-[12px] cursor-pointer">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              <span className="text-lg font-semibold">Cash on delivery</span>
            </label>
          </div>
          <div className="w-full lg:w-[40%] p-[26px] border border-[#00000033] bg-white rounded-[20px] flex flex-col gap-[20px]">
            <h3 className="text-[30px] font-bold text-[#292627] font-manrope">Order Summary</h3>
            <div className="text-lg font-medium space-y-2">
              <div className="flex justify-between">
                <span>Item Total :</span>
                <span>₹2,44,999</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges :</span>
                <span>₹199</span>
              </div>
              <div className="flex justify-between">
                <span>Total :</span>
                <span>₹2,45,198</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount :</span>
                <span>-₹4200</span>
              </div>
            </div>
            <div className="bg-[#fff1f1] p-4 rounded-xl flex justify-between items-center text-[20px] font-bold text-[#292627]">
              <span>Order Total</span>
              <span>₹1,98,999</span>
            </div>

            <button className="w-full h-[50px] mt-4 rounded-[40px] bg-[#EB3238] text-white font-semibold flex items-center justify-center hover:bg-[#c72c30] transition-all">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
