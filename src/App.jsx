import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import FinancePieChart from './components/FinancePieChart'
import LastTransactions from './components/LastTransactions'
import TransactionChart from './components/TransactionChart'
import FinanceLineChart from './components/LineChart'
import FloatingButton from './components/FloatingButton'
import Month from './Month'
import AddTransaction from './components/AddIncome'
import Dashboard from './pages/Dashboard'
import AddIncome from './components/AddIncome'
import IncomeLists from './pages/IncomeLists'

function App() {
  return (
    <div className='dark:bg-black h-[100vh]'>
    <FloatingButton/>
    <AddIncome/>

      <Sidebar/>
{/* <Dashboard/> */}
<IncomeLists/>
    </div>
  )
}

export default App
