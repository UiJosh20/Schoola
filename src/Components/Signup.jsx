import React from 'react'

const Signup = () => {
  return (
    <>
    <main className='flex justify-center py-5'>
      <section className='shadow-lg p-5 w96 rounded-lg'>
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
      <div>
        <button className='bg-green-500 w-full p-2 text-white rounded font-bold poppins-bold'>Sign up</button>
      </div>
      </section>
    </main>
    </>
  )
}

export default Signup