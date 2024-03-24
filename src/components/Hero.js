import React from 'react';

function Hero () {
  return (
    <div className="hero-section relative bg-docuhelpBg h-[80vh] lg:h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/4 lg:h-1/3 flex flex-col gap-6 items-center justify-center z-10">
        <h1 className="px-4 w-[100%] lg:w-2/3 text-[40px] lg:text-[64px] mt-[450px] lg:mt-[450px] font-extrabold text-center">DOCUHELP <span className="text-docuhelpBlue-100 mb-6">WRITES</span> BUSINESS DOCUMENTS.</h1>
        <p className='px-4 w-[100%] lg:w-[55%] text-center text-[18px] lg:text-[20px] font-normal'>We are a software company that help businesses build fast business documents that can help the business reach it goals.</p>
        <div className='flex flex-col lg:flex-row gap-6'>
          <button className="bg-docuhelpBlue-100 text-white button w-[186px] h-[62px]">
            Get started
          </button>
          <button className="hidden lg:block button text-docuhelpBlue-100 bg-docuhelpBorder-200 border border-docuhelpBlue-100 w-[186px] h-[62px]">
            Sign in
          </button>
        </div>
      </div>
      <div className="hero-lower-section absolute bottom-0 left-0 w-full h-3/4 lg:h-2/3 flex flex-col gap-6 items-center justify-center z-0">
      </div>
    </div>
  );
}

export default Hero;
