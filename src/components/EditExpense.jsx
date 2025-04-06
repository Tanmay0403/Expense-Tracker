import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const EditExpense = ({ closePopup, expenseToEdit, setUpdatedExpense }) => {
    const [expense, setExpense] = useState({ ...expenseToEdit });

    const handleChange = (e) => {
        setExpense({ ...expense, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        if (!expense.name || !expense.date || !expense.category || !expense.amount || expense.amount <= 0) {
            toast.error("Please fill in all fields with valid values.");
            return;
        }

        setUpdatedExpense({ ...expense, amount: Number(expense.amount) });
        toast.success("Expense updated successfully!");
        closePopup();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white flex flex-col gap-4 p-6 rounded-xl w-10/12 md:w-1/3 lg:w-1/4 shadow-lg">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-3xl">Edit Expense</h1>
                    <div className="text-3xl cursor-pointer ml-auto" onClick={closePopup}>×</div>
                </div>
                <hr />

                <div className="flex flex-col gap-4 text-2xl">
                    <label htmlFor="name">Expense Name</label>
                    <input
                        type="text"
                        name="name"
                        value={expense.name}
                        onChange={handleChange}
                        className="text-xl h-10 p-2 rounded-md border border-black"
                    />

                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={expense.date}
                        onChange={handleChange}
                        className="text-xl h-10 p-2 rounded-md border border-black"
                    />

                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        value={expense.category}
                        onChange={handleChange}
                        className="text-xl h-10 p-2 rounded-md border border-black"
                    >
                        <option value="">Choose Category</option>
                        <option value="Food and Drinks">Food and Drinks</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Travel">Travel</option>
                        <option value="Health">Health</option>
                    </select>

                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={expense.amount}
                        onChange={handleChange}
                        className="text-xl h-10 p-2 rounded-md border border-black"
                    />

                    <button onClick={handleUpdate} className="bg-indigo-500 rounded-md w-full h-10 text-white font-bold text-xl">
                        Update Expense
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditExpense;
