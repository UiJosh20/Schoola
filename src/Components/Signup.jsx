import React from 'react'

const Signup = () => {
  return (
    <>
    <main className='flex justify-center py-5'>
      <section className='shadow-lg p-5 w96'>
      <div className='w-full'>
        <input type="text" placeholder='First Name' className='w-full outline-none p-4'/>
      </div>
      <div className='w-full'>
        <input type="text" placeholder='Last Name' className='w-full outline-none p-4'/>
      </div>
      <div className='w-full'>
        <input type="email" placeholder='Email address' className='w-full outline-none p-4'/>
      </div>
      <div className='w-full'>
        <input type="passwird" placeholder='Password' className='w-full outline-none p-4'/>
      </div>
      </section>
    </main>
    </>
  )
}

export default Signup