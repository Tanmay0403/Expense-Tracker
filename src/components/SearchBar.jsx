import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-300 w-full max-w-xs">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="outline-none bg-transparent w-full text-base"
      />
    </div>
  );
};

export default SearchBar;
