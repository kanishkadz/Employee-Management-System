import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>Hello <br/> <span className='text-3xl'>Kanishka</span> 👋</h1>
        <button>Log Out</button>
    </div>
  )
}

export default Header