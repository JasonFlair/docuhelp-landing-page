import React from 'react';

function SubscriptionField () {
  return (
    <div className="w-full relative flex items-center border-docuhelpBlue-100 border-1">
      <input
        type="email"
        placeholder="Email address"
        className="w-full px-4 py-2 bg-docuhelpBg border border-gray-300 rounded-md focus:outline-none text-sm  text-docuhelpBlue-100"
      />
      <button
        type="submit"
        className="absolute top-1 right-1 h-[30px] px-4 bg-docuhelpBlue-100 text-white rounded-md text-sm lg:text-base text-center"
      >
        Subscribe
      </button>
    </div>
  );
}

export default SubscriptionField;