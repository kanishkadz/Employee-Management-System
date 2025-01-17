import React from 'react'

const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    }



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e) => {submitHandler(e)}} className='flex flex-col items-center justify-center'>
                <input required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl' type="email" placeholder='Enter your email' />
                <input required className='outline-none bg-transparent placeholder:text-gray-400 border-2 mt-3 border-emerald-600 rounded-full py-3 px-5 text-xl' type="password" placeholder='Enter password' />
                <button className='text-white outline-none mt-5 placeholder:text-white bg-emerald-600 rounded-full py-3 px-5 text-xl'>Log In</button>
            </form>
        </div>

    </div>
  )
}

export default Login