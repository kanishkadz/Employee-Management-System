import React from 'react'
import Header from '../Others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />

        <div>
            <form>
                <h3>Task Title</h3>
                <input type='text' placeholder='Make a UI Design' />
                <h3>Description</h3>
                <textarea name="" id=""></textarea>
                <h3>Date</h3>
                <input type="date"/>
                <h3>Assign To</h3>
                <input type="text" placeholder='Employee Name' />
                <h3>Category</h3>
                <input type="text" placeholder='Design, Development, etc' />
                <button>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default AdminDashboard