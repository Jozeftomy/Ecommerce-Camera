'use client';
import React, { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleReset = () => {
    if (password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    alert('Password reset successfully!');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white border border-gray-200 rounded-[24px] shadow-md p-6 sm:p-8 text-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-6 text-black">
          Set new Password
        </h2>

        <div className="mb-4 relative text-left">
          <label className="block text-sm font-medium text-black mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="w-full px-4 py-3 text-sm sm:text-base rounded-full bg-red-50 text-black focus:outline-none"
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Lock size={18} />}
            </span>
          </div>
        </div>

        <div className="mb-6 relative text-left">
          <label className="block text-sm font-medium text-black mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 text-sm sm:text-base rounded-full bg-red-50 text-black focus:outline-none"
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <EyeOff size={18} /> : <Lock size={18} />}
            </span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="w-full sm:w-[200px] h-[48px] sm:h-[50px] bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-200"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
