import React from 'react'

const AddExpense = ({ closePopup }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white flex flex-col gap-4 p-6 rounded-xl w-10/12 md:w-1/3 lg:w-1/4 shadow-lg">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-3xl">Add Expense</h1>
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

                <div className="flex flex-col gap-4 text-2xl" >
                    <label htmlFor="name">Expense Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Expense Name"
                        className="text-xl h-10 p-2 rounded-md border border-black"
                    />
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" className="text-xl h-10 p-2 rounded-md border border-black" />
                    <label htmlFor="category">Category</label>
                    <input type="text" name="Category" className="text-xl h-10 p-2 rounded-md border border-black"/>
                    <label htmlFor="amount">Amount</label>
                    <input type="text" className="text-xl h-10 p-2 rounded-md border border-black"/>
                    <button className="bg-indigo-500 rounded-md w-full h-10 text-white font-bold text-xl">
                        Add Expense
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddExpense