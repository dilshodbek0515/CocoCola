'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import logo from '@/assets/images/cola.png'
import { IoMenu } from 'react-icons/io5'
const LINKS = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Brend',
    path: '/brend'
  },
  {
    name: 'About us',
    path: '/about'
  },
  {
    name: 'Contact us',
    path: '/contact'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'Login',
    path: '/login'
  }
]

const Header = () => {
  const pathname = usePathname()

  const activeClass = path => {
    return pathname === path ? 'text-red-500 font-bold ' : ''
  }

  return (
    <header className='w-full h-auto p-5 bg-slate-950 '>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <Image className='w-40 max-md:w-32' src={logo} alt='logo' />
        </Link>
        <nav className='flex gap-16 max-lg:gap-5 max-md:hidden'>
          {LINKS?.map(({ name, path }, inx) => (
            <Link
              className={`${activeClass(path)} text-white text-xl `}
              key={inx}
              href={path}
            >
              {name}
            </Link>
          ))}
        </nav>
        <IoMenu className='text-4xl text-red-700 hidden max-md:block' />
      </div>
    </header>
  )
}

export default Header
