import React from 'react'

const Login = () => {
  return (
    <section className='w-full h-screen flex items-center justify-center p-5'>
      <form className='w-[600px] mx-auto flex flex-col items-center justify-center gap-10 p-5 bg-red-400 shadow-2xl rounded-xl'>
        <h3 className='text-5xl text-white'>Coco Cola</h3>
        <input
          className='w-[500px] h-20 border border-red-500 rounded-xl outline-none py-2 px-5 text-xl text-red-500 opacity-75 bg-red-200'
          type='text'
          placeholder='username'
          required
        />
        <input
          className='w-[500px] h-20 border border-red-500 rounded-xl outline-none py-2 px-5 text-xl text-red-500 opacity-75 bg-red-200'
          type='password'
          placeholder='password'
          required
        />
        <input
          className='w-[500px] h-20 border border-red-500 rounded-xl outline-none py-2 px-5 text-xl text-red-500 opacity-75 bg-red-200'
          type='email'
          placeholder='email'
          required
        />
        <button className='w-96 h-20 rounded-2xl bg-red-500 duration-300 text-2xl text-white border-2 border-red-500 hover:opacity-75'>
          Log in
        </button>
      </form>
    </section>
  )
}

export default Login
