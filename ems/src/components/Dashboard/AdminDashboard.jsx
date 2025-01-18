import React from 'react'
import Header from '../Others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />

        <div>
            <form>
                <div>
                    <h3>Task Title</h3>
                    <input type='text' placeholder='Make a UI Design' />
                </div>
                <div>
                    <h3>Description</h3>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <h3>Date</h3>
                    <input type="date"/>
                </div>
                <div>
                    <h3>Assign To</h3>
                    <input type="text" placeholder='Employee Name' />
                </div>
                <div>
                    <h3>Category</h3>
                    <input type="text" placeholder='Design, Development, etc' />
                </div>
                <button>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default AdminDashboard