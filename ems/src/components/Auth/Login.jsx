import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20'>
            <form className='flex flex-col items-center justify-center'>
                <input className='text-black outline-none bg-transparent placeholder:text-white border-2 border-emerald-600 rounded-full py-3 px-5 text-xl' type="email" placeholder='Enter your email' />
                <input className='text-black outline-none bg-transparent placeholder:text-white border-2 mt-3 border-emerald-600 rounded-full py-3 px-5 text-xl' type="password" placeholder='Enter password' />
                <button className='text-white outline-none placeholder:text-white bg-emerald-600 rounded-full py-3 px-5 text-xl'>Log In</button>
            </form>
        </div>

    </div>
  )
}

export default Login