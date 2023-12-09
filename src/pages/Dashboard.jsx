import React from 'react'
import Card from '../components/Card'
import FinancePieChart from '../components/FinancePieChart'
import TransactionChart from '../components/TransactionChart'
import FinanceLineChart from '../components/LineChart'
import LastTransactions from '../components/LastTransactions'

const Dashboard = () => {
  return (

    <div className="p-4 sm:ml-64">
       <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
         
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-6 mb-4">
             
                <Card/>
       
          </div>
    
    
    
    
          
          <div className="gap-4 flex flex-col lg:flex-row">
            <div className="flex items-center lg:w-1/3 justify-center h-96 lg:w-100 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <FinancePieChart/>
          </div>
    
    
    
          <div className="flex items-center justify-center lg:w-2/3 h-96 mb-4 rounded bg-gray-50 dark:bg-gray-950">
          <TransactionChart/>
          </div>
          </div>
    
    
    
    
          <div className="gap-4 flex flex-col lg:flex-row">
    
    
          <div className="flex items-center justify-center lg:w-2/3 h-96 rounded bg-gray-50 dark:bg-gray-950">
          <FinanceLineChart/>
          </div>
          
            <div className="flex items-center lg:w-1/3 justify-center h-96 lg:w-100 rounded bg-gray-50 dark:bg-gray-950 p-4">
            <LastTransactions/>
          </div>
    
        
    
    
          </div>
    
         
    
        </div>
        </div>

  )
}

export default Dashboard