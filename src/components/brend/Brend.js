import Image from 'next/image'
import React from 'react'
import brend1 from '@/assets/images/cola.png'
import brend2 from '@/assets/images/brend.svg'
import brend3 from '@/assets/images/brend1.svg'
import brend4 from '@/assets/images/brend2.webp'
import brend5 from '@/assets/images/brend3.webp'
import brend6 from '@/assets/images/brend4.webp'
import brend7 from '@/assets/images/brend5.webp'
import brend8 from '@/assets/images/brend6.webp'
import Link from 'next/link'
const Brend = () => {
  return (
    <section className='w-full h-auto bg-red-100 px-5 pt-20 pb-10'>
      <div className='container px-52 mx-auto flex items-center justify-center flex-col gap-20 max-2xl:px-0'>
        <h2 className='text-5xl text-black max-sm:text-2xl'>Meet our brands</h2>
        <div className='grid grid-cols-3 gap-5 max-sm:grid-cols-1'>
          <div className='h-96 bg-white rounded-2xl shadow-2xl flex items-center justify-center max-xl:h-64'>
            <Image
              className='w-[70%] h-[70%] object-contain duration-300 hover:scale-110 cursor-pointer'
              src={brend1}
              alt='img'
            />
          </div>
          <div className='h-96 bg-white rounded-2xl shadow-2xl flex items-center justify-center max-xl:h-64'>
            <Image
              className='w-[70%] h-[70%] object-contain duration-300 hover:scale-110 cursor-pointer'
              src={brend2}
              alt='img'
            />
          </div>
          <div className='h-96 bg-white rounded-2xl shadow-2xl flex items-center justify-center max-xl:h-64'>
            <Image
              className='w-[70%] h-[70%] object-contain duration-300 hover:scale-110 cursor-pointer'
              src={brend3}
              alt='img'
            />
          </div>
          <div className='h-96 bg-white rounded-2xl shadow-2xl flex items-center justify-center max-xl:h-64'>
            <Image
              className='w-[70%] h-[70%] object-contain duration-300 hover:scale-110 cursor-pointer'
              src={brend4}
              alt='img'
            />
          </div>
          <div className='h-96 bg-white rounded-2xl shadow-2xl flex items-center justify-center max-xl:h-64'>
            <Image
              className='w-[70%] h-[70%] object-contain duration-300 hover:scale-110 cursor-pointer'
              src={brend5}
              alt='img'
            />
          </div>
          <div className='h-96 bg-white rounded-2xl shadow-2xl flex items-center justify-center max-xl:h-64'>
            <Image
              className='w-[70%] h-[70%] object-contain duration-300 hover:scale-110 cursor-pointer'
              src={brend6}
              alt='img'
            />
          </div>
          <div className='h-96 bg-white rounded-2xl shadow-2xl flex items-center justify-center max-xl:h-64'>
            <Image
              className='w-[70%] h-[70%] object-contain duration-300 hover:scale-110 cursor-pointer'
              src={brend7}
              alt='img'
            />
          </div>
          <div className='h-96 bg-white rounded-2xl shadow-2xl flex items-center justify-center max-xl:h-64'>
            <Image
              className='w-[70%] h-[70%] object-contain duration-300 hover:scale-110 cursor-pointer'
              src={brend8}
              alt='img'
            />
          </div>
          <div className='h-96 bg-white rounded-2xl shadow-2xl flex items-center justify-center max-xl:h-64'>
            <Image
              className='w-[70%] h-[70%] object-contain duration-300 hover:scale-110 cursor-pointer'
              src={brend1}
              alt='img'
            />
          </div>
        </div>
        <Link
          href={'/brend'}
          className='w-[40%] h-20 flex items-center justify-center border-2 font-semibold border-red-500 bg-red-500 duration-300 text-white rounded-full text-2xl hover:text-red-500 hover:bg-transparent max-sm:w-full'
        >
          View all
        </Link>
      </div>
    </section>
  )
}

export default Brend
