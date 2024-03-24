import React, { useEffect, useState } from 'react';

const examples = [
  'Write Letters', 'Code Snippets', 'Blog Posts', 'Product Description'
]

function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === examples.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="main-section text-white flex flex-col gap-6 bg-docuhelpBlue-100">
      <p className='font-bold text-[20px] lg:text-[24px]'>Help your team get better</p>
      <h1 className='font-extrabold text-[32px] lg:text-[64px]'>What document would you like to write?</h1>
      <p className='font-bold text-[16px] lg:text-[24px]mb-2 lg:mb-4'>Just enter your text in the prompt and start in seconds...</p>
      <div className='bg-[#5D4EF8] border-2 border-white lg:w-1/3 flex gap-2 items-center justify-center p-4 rounded-full'>
        <img alt='icon' src='../images/lolipop.svg' />
        <p>{examples[currentIndex]}</p>
      </div>
      <div className='opacity-20 bg-[#5D4EF8] border-2 border-white lg:w-1/3 flex gap-2 items-center justify-center p-4 rounded-full'>
        <img alt='icon' src='../images/lolipop.svg' />
        <p>{examples[currentIndex + 1] ? examples[currentIndex + 1] : examples[0]}</p>
      </div>
    </div>
  );
}

export default HowItWorks;
