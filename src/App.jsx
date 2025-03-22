import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CalculateExpenseContainer from './components/CalculateExpenseContainer'
import AddBudget from './components/AddBudget'

function App() {
  

  return (
    <>
      <Navbar/>
      <CalculateExpenseContainer/>
      {/* <AddBudget/> */}
    </>
  )
}

export default App
