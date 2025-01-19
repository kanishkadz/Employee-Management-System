import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }



  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e) => {submitHandler(e)}} className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-2 px-6 text-lg' type="email" placeholder='Enter your email' />
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} required className='outline-none bg-transparent placeholder:text-gray-400 border-2 mt-3 border-emerald-600 rounded-full py-2 px-6 text-lg' type="password" placeholder='Enter password' />
                <button className='text-white outline-none mt-7 placeholder:text-white bg-emerald-600 rounded-full hover:bg-emerald-700 py-2 px-8 text-lg w-full'>Log In</button>
            </form>
        </div>

    </div>
  )
}

export default Login