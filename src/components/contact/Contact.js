import React from 'react'
import { IoCallSharp, IoLogoInstagram } from 'react-icons/io5'
import { GrFacebookOption } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { FiYoutube } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
const Contact = () => {
  return (
    <section className='w-full h-auto bg-red-100 p-5'>
      <div className='container mx-auto flex items-center justify-between gap-10 max-md:flex-col'>
        <form className='w-[50%] h-auto p-10 flex items-center justify-center flex-col gap-10 max-lg:w-full max-md:p-2'>
          <h2 className='text-black text-4xl font-semibold text-center max-lg:text-2xl'>
            For suggestions and requests
          </h2>
          <input
            type='text'
            placeholder='Name'
            className='w-[80%] h-16 rounded-xl border border-rose-500 bg-transparent outline-none py-2 px-5 text-red-500 text-xl max-md:w-full'
          />
          <input
            type='text'
            placeholder='Surname'
            className='w-[80%] h-16 rounded-xl border border-rose-500 bg-transparent outline-none py-2 px-5 text-red-500 text-xl max-md:w-full'
          />
          <input
            type='number'
            placeholder='Phone number'
            className='w-[80%] h-16 rounded-xl border border-rose-500 bg-transparent outline-none py-2 px-5 text-red-500 text-xl max-md:w-full'
          />
          <textarea
            placeholder='For information'
            className='w-[80%] min-h-40 rounded-2xl border border-rose-500 bg-transparent outline-none py-2 px-5 text-red-500 text-xl max-md:w-full'
          ></textarea>
          <button className='w-52 h-12 rounded-full border border-rose-500 bg-red-500 text-white duration-300 text-xl hover:bg-transparent hover:text-red-500'>
            Send
          </button>
        </form>
        <div className='w-[30%] h-auto flex flex-col gap-10 max-md:w-full max-md:items-center'>
          <h3 className='text-black text-4xl font-semibold max-lg:text-2xl'>
            Coco Cola contact
          </h3>
          <a href='tel:+998 78 120 50 90'>
            <div className='flex gap-5 items-center'>
              <div className='w-10 h-10 flex justify-center items-center border border-red-500 rounded-full'>
                <IoCallSharp className='text-red-500 text-2xl' />
              </div>
              <span className='text-red-500 text-2xl whitespace-nowrap max-lg:text-xl'>
                {' '}
                +998 78 120 50 90
              </span>
            </div>
          </a>

          <a href='https://www.instagram.com/cocacola_uzbekistan/'>
            <div className='flex gap-5 items-center'>
              <div className='w-10 h-10 flex justify-center items-center border border-red-500 rounded-full'>
                <IoLogoInstagram className='text-red-500 text-2xl' />
              </div>
              <span className='text-red-500 text-2xl  whitespace-nowrap max-lg:text-xl'>
                Instagram
              </span>
            </div>
          </a>

          <a href='https://www.facebook.com/cocacolauzbs'>
            <div className='flex gap-5 items-center'>
              <div className='w-10 h-10 flex justify-center items-center border border-red-500 rounded-full'>
                <GrFacebookOption className='text-red-500 text-2xl' />
              </div>
              <span className='text-red-500 text-2xl  whitespace-nowrap max-lg:text-xl'>
                Facebook
              </span>
            </div>
          </a>

          <a href='mailto:COCA‑COLA@CCI.COM.UZ'>
            <div className='flex gap-5 items-center'>
              <div className='w-10 h-10 flex justify-center items-center border border-red-500 rounded-full'>
                <HiOutlineMail className='text-red-500 text-2xl' />
              </div>
              <span className='text-red-500 text-2xl  whitespace-nowrap max-lg:text-xl'>
                Email
              </span>
            </div>
          </a>

          <a href='https://www.youtube.com/watch?v=RtbtgYwfItE'>
            <div className='flex gap-5 items-center'>
              <div className='w-10 h-10 flex justify-center items-center border border-red-500 rounded-full'>
                <FiYoutube className='text-red-500 text-2xl' />
              </div>
              <span className='text-red-500 text-2xl  whitespace-nowrap max-lg:text-xl'>
                You Tube
              </span>
            </div>
          </a>
          <a href='https://www.coca-cola.com/country-selector'>
            <div className='flex gap-5 items-center'>
              <div className='w-10 h-10 flex justify-center items-center border border-red-500 rounded-full'>
                <CiLocationOn className='text-red-500 text-2xl' />
              </div>
              <span className='text-red-500 text-2xl  whitespace-nowrap max-lg:text-xl'>
                Loaction
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
