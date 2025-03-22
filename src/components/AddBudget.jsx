import React, { useState } from 'react';
import { toast } from "react-toastify";

const AddBudget = ({ closePopup }) => {
  const [amount, setAmount] = useState('')

  const saveBudget = () => {
    console.log(amount)
    localStorage.setItem("Budget",amount)
    toast.success("Budget Added Successfully")
    closePopup()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white flex flex-col gap-4 p-6 rounded-xl w-10/12 md:w-1/3 lg:w-1/4 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl">Add Budget</h1>
          <div 
            className="text-3xl cursor-pointer ml-auto" 
            onClick={() => {
              closePopup();
            }}
          >
            ×
          </div>
        </div>
        <hr />

        <div className="flex flex-col gap-4">
          <label htmlFor="amount" className="text-2xl">Amount</label>
          <input 
            type="number" 
            name="amount" 
            id="amount" 
            placeholder="Amount" 
            value = {amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="text-xl h-10 p-2 rounded-md border border-black"
          />
          <button className="bg-indigo-500 rounded-md w-full h-10 text-white font-bold text-xl"
           onClick={saveBudget}>
            Submit Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBudget;
