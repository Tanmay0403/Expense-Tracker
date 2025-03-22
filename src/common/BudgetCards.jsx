import React from 'react'

const BudgetCards = ({ heading, amount, icon }) => {
  return (
    <div className="budget-component flex justify-between items-center p-5 shadow-lg rounded-4xl flex-grow h-40 ">
      <div className="budget-component-details flex flex-col">
        <h2 className="text-xl font-normal text-gray-400">{heading}</h2>
        <p className="text-5xl font-bold text-gray-900">
          Rs {Number(amount).toLocaleString()}
        </p>
      </div>
      <div>
        <img src={icon} className=" budget-component-image w-25 h-25 mt-5" />
      </div>
    </div>
  )
}

export default BudgetCards