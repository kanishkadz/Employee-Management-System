import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600'>
            <form className='flex flex-col items-center justify-center'>
                <input className='text-black outline-none bg-transparent placeholder:text-white border-2 border-emerald-600 rounded-full py-3 px-5 text-xl' type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Enter password' />
                <button>Log In</button>
            </form>
        </div>

    </div>
  )
}

export default Login