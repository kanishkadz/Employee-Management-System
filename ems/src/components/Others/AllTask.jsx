import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const authData = useContext(AuthContext)


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48 overflow-auto'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 bg-red-600'>Employee Name</h2>
        <h3 className='w-1/5 bg-red-600'>New Task</h3>
        <h5 className='w-1/5 bg-red-600'>Active Task</h5>
        <h5 className='w-1/5 bg-red-600'>Completed</h5>
        <h5 className='w-1/5 bg-red-600'>Failed</h5>
      </div>

      <div className='h-[80%]'>
      {authData.employees.map(function(elem){
        return <div className='bg-green-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 bg-red-600'>{elem.firstName}</h2>
        <h3 className='w-1/5 bg-red-600'>Task</h3>
        <h5 className='w-1/5 bg-red-600'>Status</h5>
        <h5 className='w-1/5 bg-red-600'>Status</h5>
        <h5 className='w-1/5 bg-red-600'>Failed</h5>
      </div>
      })}
      </div>
      
    </div>
  )
}

export default AllTask