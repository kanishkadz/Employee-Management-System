import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen'>
            <Header />
            <TaskListNumbers />
        </div>
    </div>
  )
}

export default EmployeeDashboard