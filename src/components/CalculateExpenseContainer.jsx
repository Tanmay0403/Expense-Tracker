import React, { useState } from 'react';
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

const CalculateExpenseContainer = () => {
  const [isAddBudgetPopupVisible, setAddBudgetPopupVisible] = useState(false);
  const [isAddExpensePopupVisible, setAddExpensePopupVisible] = useState(false);

  var budget = localStorage.getItem("Budget")


  return (
    <>
      <div className="main-container mt-10 ml-10">
        <h1 className="user-greeting text-4xl font-bold">Hello, Tanmay Chachad</h1>
        
        <div className="budget-container flex flex-row gap-5 px-10">
          <BudgetCards heading={"Your Budget"} amount={budget} icon={budgetimage} />
          <BudgetCards heading={"Total Expense"} amount={1000} icon={expenseimage} />
          <BudgetCards heading={"Total Budget"} amount={1000} icon={coinstack} />
        </div>

        <div className="primary-buttons mt-10 flex flex-row gap-3">
          <CategoryCards icon={food} button_name="Food and Drinks" />
          <CategoryCards icon={groceries} button_name="Groceries" />
          <CategoryCards icon={travel} button_name="Travel" />
          <CategoryCards icon={health} button_name="Health" />
          <ButtonCards 
            title="Add Budget" 
            handleClick={() => {
              setAddBudgetPopupVisible(true);
            }} 
          />

          <ButtonCards title="Add Expense" handleClick={()=>{
            setAddExpensePopupVisible(true);
          }}/>
        </div>
      </div>

      
      {isAddBudgetPopupVisible && (
        <AddBudget closePopup={() => {
          setAddBudgetPopupVisible(false);
        }} />
      )}
      {isAddExpensePopupVisible && (
        <AddExpense closePopup={() => {
          setAddExpensePopupVisible(false);
        }} />
      )}
    </>
  );
};

export default CalculateExpenseContainer;
