import React from 'react'

const CategoryCards = ({ icon, button_name, onClick, isActive }) => {
  return (
    <button
      onClick={() => onClick(button_name)}
      className={`rounded-[40px] px-5 py-2.5 border-none outline-none flex justify-center items-center gap-2 text-[16px] font-normal leading-[18.4px]
        transition-all duration-300 ease-in-out
        ${isActive ? 'bg-indigo-200 shadow-lg scale-105 font-semibold' : 'bg-gray-100 hover:bg-indigo-100 hover:shadow-md hover:scale-105'}
      `}
    >
      <img src={icon} alt="" />
      {button_name}
    </button>
  );
};


export default CategoryCards;
