import React from 'react';

const ExpenseTable = ({ expenses, onEdit, onDelete   }) => {
    
  return (
    <div className="expense-container mt-10 border-2 mr-10 rounded-2xl p-5">
      <div className="expense-table">
        <table className="w-full">
          <thead>
            <tr className='text-xl font-bold'>
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
              <tr key={exp.id}>
                <td>{index + 1}</td>
                <td>{exp.name}</td>
                <td>{exp.date}</td>
                <td>{exp.amount}</td>
                <td>{exp.category}</td>
                <td>
                  <button className="text-blue-600" onClick={() => onEdit(exp)}>Edit</button>
                  <button className="text-red-600 ml-2" onClick={() => onDelete(exp.id)}>Delete</button>
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
