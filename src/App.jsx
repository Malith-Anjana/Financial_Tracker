import './App.css'
import Sidebar from './components/Sidebar'
import FloatingButton from './components/FloatingButton'
import Month from './Month'
import AddTransaction from './components/AddIncome'
import Dashboard from './pages/Dashboard'
import AddIncome from './components/AddIncome'
import IncomeLists from './pages/IncomeLists'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ExpensesList from './pages/ExpensesList'
import Loans from './pages/Loans'
import React, { useContext, useState } from 'react'
import Login from './pages/Login'
import { AuthContext } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const {currentUser} = useContext(AuthContext)

  const RequiredAuth = ({children})=>{
    return currentUser ? (children) : <Navigate to='/login'/>
  }
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
      <ToastContainer
position="top-center"
autoClose={2500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <AddIncome isOpen={isModalOpen} onClose={closeModal}/>
    <FloatingButton openModal={openModal}/>
    <Sidebar/>
      </>
    )
  }

  return (

    <BrowserRouter>
    <div className='dark:bg-black min-h-screen'>
    {isBasicLayoutVisible && <RequiredAuth><Layout/></RequiredAuth>}
    <Routes>
        <Route path="/" exact element={<RequiredAuth><Dashboard/></RequiredAuth>} />
        <Route path="/incomes" element={<RequiredAuth><IncomeLists/></RequiredAuth>} />
        <Route path="/expenditures" element={<RequiredAuth><ExpensesList/></RequiredAuth>} />
        <Route path="/loans" element={<RequiredAuth><Loans/></RequiredAuth>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
    </div>
  </BrowserRouter>

  )
}

export default App
