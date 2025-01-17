import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        setEmail("")
        setPassword("")
    }



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e) => {submitHandler(e)}} className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl' type="email" placeholder='Enter your email' />
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} required className='outline-none bg-transparent placeholder:text-gray-400 border-2 mt-3 border-emerald-600 rounded-full py-3 px-5 text-xl' type="password" placeholder='Enter password' />
                <button className='text-white outline-none mt-7 placeholder:text-white bg-emerald-600 rounded-full py-3 px-5 text-xl'>Log In</button>
            </form>
        </div>

    </div>
  )
}

export default Login