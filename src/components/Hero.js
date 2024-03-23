import React from 'react';

function Hero () {
  return (
    <div className="hero-section relative bg-docuhelpHeroBg h-[70vh] lg:h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/4 lg:h-1/3 flex flex-col gap-6 items-center justify-center z-10"> {/* Updated z-index here */}
        <h1 className="w-[75%] lg:w-2/3 text-[40px] lg:text-[64px] mt-[180px] lg:mt-[170px] font-extrabold text-center">DOCUHELP <span className="text-docuhelpBlue-100 mb-6">WRITES</span> BUSINESS DOCUMENTS</h1>
        <p className='text-center text-[18px] lg:text-[20px]'>We are a software company that help businesses build fast business documents that can help the business reach it goals.</p>
        <button className="bg-docuhelpBlue-100 text-white button w-[186px] h-[62px]">
          Get started
        </button>
      </div>
      <div className="hero-lower-section absolute bottom-0 left-0 w-full h-3/4 lgh-2/3 flex flex-col gap-6 items-center justify-center z-0"> {/* Updated z-index here */}
      </div>
    </div>
  );
}

export default Hero;
