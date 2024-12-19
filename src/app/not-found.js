import Image from 'next/image'
import React from 'react'
import not from '@/assets/images/notfound.png'
const NotFound = () => {
  return (
    <div className='text-center pt-36 flex gap-10 flex-col items-center justify-center'>
      <Image className='w-[600px] h-[400px] rounded-3xl' src={not} alt='not found' />
      <p className='text-2xl text-red-500'>
        Sorry, we can’t find what you’re looking for.
      </p>
    </div>
  )
}

export default NotFound
