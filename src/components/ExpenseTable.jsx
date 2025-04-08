import React from 'react';
// import edit from 'src/assets/edit.svg';

const ExpenseTable = ({ expenses, onEdit, onDelete   }) => {
    
  return (
    <div className="expense-container mt-10 border-2 mr-10 rounded-2xl p-5 mb-10">
      <div className="expense-table">
        <table className="w-full">
          <thead>
            <tr className='text-2xl font-bold'>
              <td>Sr</td>
              <td>Expenses</td>
              <td>Date</td>
              <td>Amount</td>
              <td>Category</td>
              <td>Edit / Delete</td>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? expenses.map((exp, index) => (
              <tr key={exp.id} className='text-xl'>
                <td>{index + 1}</td>
                <td>{exp.name}</td>
                <td>{exp.date}</td>
                <td>{exp.amount}</td>
                <td>{exp.category}</td>
                <td className="flex gap-2 py-2">
                  <button className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-lg" onClick={() => onEdit(exp)}> <img src="src/assets/edit.svg" alt="" /> Edit</button>
                  <button  className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-600 rounded-lg" onClick={() => onDelete(exp.id)}><img src="src/assets/delete.svg" alt="" />Delete</button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-lg">No expenses found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
