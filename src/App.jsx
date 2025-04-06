import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CalculateExpenseContainer from './components/CalculateExpenseContainer'
import AddBudget from './components/AddBudget'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar/>
      <CalculateExpenseContainer/>
    </>
  )
}

export default App
