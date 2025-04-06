import React from 'react';

const DeletePopup = ({ onCancel, onDelete }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl w-11/12 max-w-md text-center">
        {/* Red Exclamation Circle */}
        <div className="flex justify-center mb-4">
          <div className="bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold">
            !
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">Are you sure</h2>
        <p className="text-gray-600 mb-6">You won't be able to revert this!</p>

        <div className="flex justify-around">
          <button
            className="px-6 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
