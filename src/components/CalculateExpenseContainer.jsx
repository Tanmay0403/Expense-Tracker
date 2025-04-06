import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import BudgetCards from '../common/BudgetCards';
import CategoryCards from '../common/CategoryCards';
import budgetimage from "../assets/budget.svg";
import expenseimage from "../assets/expense.svg";
import coinstack from "../assets/coin-stack.svg";
import food from "../assets/food.svg";
import travel from "../assets/travel.svg";
import health from "../assets/health.svg";
import groceries from "../assets/groceries.svg";
import ButtonCards from '../common/ButtonCards';
import AddBudget from './AddBudget';
import AddExpense from './AddExpense';
import ExpenseTable from './ExpenseTable';
import EditExpense from './EditExpense';
import SearchBar from './SearchBar';
import DeletePopup from './DeletePopup';

const CalculateExpenseContainer = () => {
  const [isAddBudgetPopupVisible, setAddBudgetPopupVisible] = useState(false);
  const [isAddExpensePopupVisible, setAddExpensePopupVisible] = useState(false);

  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const [isEditPopupVisible, setEditPopupVisible] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  const [updatedExpense, setUpdatedExpense] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteId, setDeleteId] = useState(null);



  useEffect(() => {
    const storedBudget = localStorage.getItem("Budget") || 0;
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

    setBudget(Number(storedBudget));
    setExpenses(storedExpenses);
  }, []);

  //component lifecycle
  useEffect(() => {
    console.log({ budget })
    localStorage.setItem("Budget", budget);
  }, [budget])

  useEffect(() => {
    if (updatedExpense) {
      const updatedList = expenses.map((exp) =>
        exp.id === updatedExpense.id ? updatedExpense : exp
      );
      setExpenses(updatedList);
      setUpdatedExpense(null); // reset after use
    }
  }, [updatedExpense]);

  const addExpense = (newExpense) => {
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
  };

  useEffect(() => {
    console.log(expenses)
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleBudget = (amount) => {
    setBudget(amount)
  }

  const handleExpenseAdded = () => {
    const updatedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(updatedExpenses);
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map(exp =>
      exp.id === updatedExpense.id ? updatedExpense : exp
    );
    setExpenses(updatedExpenses);
  };
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(stored);
  }, []);

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    const updated = expenses.filter(exp => exp.id !== deleteId);
    localStorage.setItem("expenses", JSON.stringify(updated));
    setExpenses(updated);
    setShowDeletePopup(false);
  };

  const cancelDelete = () => {
    setDeleteId(null);
    setShowDeletePopup(false);
  };

  const totalExpense = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
  const remainingBudget = budget - totalExpense;

  return (
    <>
      <div className="main-container mt-10 ml-10">
        <h1 className="user-greeting text-4xl font-bold">Hello, Tanmay Chachad</h1>

        <div className="budget-container flex flex-row gap-5 px-10">
          <BudgetCards heading={"Your Budget"} amount={budget} icon={budgetimage} />
          <BudgetCards heading={"Total Expense"} amount={totalExpense} icon={expenseimage} />
          <BudgetCards heading={"Remaining Budget"} amount={remainingBudget} icon={coinstack} />
        </div>

        <div className="primary-buttons mt-10 flex flex-row gap-3">
          <SearchBar />
          <CategoryCards icon={food} button_name="Food and Drinks" />
          <CategoryCards icon={groceries} button_name="Groceries" />
          <CategoryCards icon={travel} button_name="Travel" />
          <CategoryCards icon={health} button_name="Health" />
          <ButtonCards
            title="Add Budget"
            handleClick={() => setAddBudgetPopupVisible(true)}
          />
          <ButtonCards
            title="Add Expense"
            handleClick={() => setAddExpensePopupVisible(true)}
          />
        </div>

        <ExpenseTable
          expenses={expenses}
          onEdit={(expense) => {
            setExpenseToEdit(expense);
            setEditPopupVisible(true);
          }}
          onDelete={handleDelete}
        />

      </div>

      {isAddBudgetPopupVisible && (
        <AddBudget
          closePopup={() => setAddBudgetPopupVisible(false)}
          handleBudget={handleBudget}
        />
      )}

      {isAddExpensePopupVisible && (
        <AddExpense
          closePopup={() => setAddExpensePopupVisible(false)}
          addExpense={addExpense}
        />
      )}

      {isEditPopupVisible && (
        <EditExpense
          closePopup={() => setEditPopupVisible(false)}
          expenseToEdit={expenseToEdit}
          setUpdatedExpense={setUpdatedExpense}
        />
      )}

      {showDeletePopup && (
        <DeletePopup
          onDelete={confirmDelete}
          onCancel={cancelDelete}
        />
      )}




    </>
  );
};

export default CalculateExpenseContainer;
