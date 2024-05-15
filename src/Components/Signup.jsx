import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <main className='flex justify-center py-5'>
      <form  className='shadow-lg p-5 w96 rounded-lg border-t-2 border-green-500 bg-white'>
        <h1 className='text-2xl font-bold poppins-bold'>Sign up</h1>
      <div className='w-full'>
        <input type="text" placeholder='First Name' className='w-full outline-none p-4 poppins-regular'/>
      </div>
      <div className='w-full'>
        <input type="text" placeholder='Last Name' className='w-full outline-none p-4 poppins-regular'/>
      </div>
      <div className='w-full'>
        <input type="email" placeholder='Email address' className='w-full outline-none p-4 poppins-regular'/>
      </div>
      <div className='w-full'>
        <input type="passwird" placeholder='Password' className='w-full outline-none p-4 poppins-regular'/>
      </div>
      <div className='my-5'>
        <button type='submit' className='bg-green-500 w-full p-2 text-white rounded font-bold poppins-bold'>Sign up</button>
      </div>
      <div>
        <p className='poppins-regular moreinfo'>Already have an account? <Link to="/login">Login</Link></p>
      </div>
      </form>
    </main>
    </>
  )
}

export default Signup