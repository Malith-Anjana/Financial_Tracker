import './App.css'
import Sidebar from './components/Sidebar'
import FloatingButton from './components/FloatingButton'
import Month from './Month'
import AddTransaction from './components/AddIncome'
import Dashboard from './pages/Dashboard'
import AddIncome from './components/AddIncome'
import IncomeLists from './pages/IncomeLists'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpensesList from './pages/ExpensesList'
import Loans from './pages/Loans'
import React, { useState } from 'react'
import Login from './pages/Login'

function App() {
  const [isModalOpen, setModalOpen] = useState(false);


  // You can add more conditions based on your routes
  const isBasicLayoutVisible = !location.pathname.startsWith('/login');

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const Layout =()=> {
    return(
      <>
    <AddIncome isOpen={isModalOpen} onClose={closeModal}/>
    <FloatingButton openModal={openModal}/>
    <Sidebar/>
      </>
    )
  }

  return (

    <BrowserRouter>
    <div className='dark:bg-black h-auto'>
    {isBasicLayoutVisible && <Layout/>}
    <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/incomes" element={<IncomeLists/>} />
        <Route path="/expenditures" element={<ExpensesList/>} />
        <Route path="/loans" element={<Loans/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
    </div>
  </BrowserRouter>

  )
}

export default App
