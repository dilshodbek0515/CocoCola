import React from 'react'
import Image from 'next/image'
import footerLogo from '@/assets/images/logof.png'
import Link from 'next/link'
import { GrFacebookOption } from 'react-icons/gr'
import { LuInstagram } from 'react-icons/lu'
import { AiFillYoutube } from 'react-icons/ai'
import { IoLocationSharp } from 'react-icons/io5'
const Footer = () => {
  return (
    <footer className='w-full h-auto p-5 bg-slate-800'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <Image className='w-40 max-md:w-32' src={footerLogo} alt='logo' />
        </Link>
        <div className='flex items-center gap-20 max-lg:hidden'>
          <Link
            className='text-2xl text-white duration-300 hover:text-red-700'
            href={'/'}
          >
            Home
          </Link>
          <Link
            className='text-2xl text-white duration-300 hover:text-red-700'
            href={'/about'}
          >
            About us
          </Link>
          <Link
            className='text-2xl text-white duration-300 hover:text-red-700'
            href={'/service'}
          >
            Service
          </Link>
        </div>
        <div className='flex items-center gap-10 max-md:gap-5 max-[400px]:gap-2'>
          <span className='w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-xl duration-300 hover:border-red-500 hover:text-red-500 max-md:text-sm max-md:w-8 max-md:h-8 max-[400px]:w-6 max-[400px]:h-6 max-[400px]:text-[12px]'>
            <GrFacebookOption />
          </span>
          <span className='w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-xl duration-300 hover:border-red-500 hover:text-red-500 max-md:text-sm max-md:w-8 max-md:h-8 max-[400px]:w-6 max-[400px]:h-6 max-[400px]:text-[12px]'>
            <LuInstagram />
          </span>
          <span className='w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-xl duration-300 hover:border-red-500 hover:text-red-500 max-md:text-sm max-md:w-8 max-md:h-8 max-[400px]:w-6 max-[400px]:h-6 max-[400px]:text-[12px]'>
            <AiFillYoutube />
          </span>
          <span className='w-10 h-10 rounded-full border border-white flex items-center justify-center text-white text-xl duration-300 hover:border-red-500 hover:text-red-500 max-md:text-sm max-md:w-8 max-md:h-8 max-[400px]:w-6 max-[400px]:h-6 max-[400px]:text-[12px]'>
            <IoLocationSharp />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
