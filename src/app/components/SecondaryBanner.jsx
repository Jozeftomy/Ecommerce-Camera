import React from 'react';

const SecondaryBanner = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-white rounded-[30px] flex flex-col items-center justify-center">
      <img
        src="/images/secondary.png"
        alt="Banner Image"
        className="w-full h-auto object-cover rounded-[20px]"
      />
    </div>
  );
};

export default SecondaryBanner;
