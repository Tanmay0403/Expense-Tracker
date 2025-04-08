import React from 'react';

const ButtonCards = ({ title, handleClick }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-indigo-500 rounded-[10px] w-45 text-white font-bold px-4 py-2
        hover:bg-indigo-600 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
      >
        {title}
      </button>
    </>
  );
};

export default ButtonCards;
