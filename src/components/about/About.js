import Image from 'next/image'
import React from 'react'
import about from '@/assets/images/about.webp'
import Link from 'next/link'
const About = () => {
  return (
    <section className='w-full h-auto p-5 bg-red-100 pt-32 pb-32'>
      <div className='container mx-auto flex items-center justify-between gap-20 max-lg:flex-col'>
        <Image
          className='w-[50%] h-[500px] rounded-2xl max-lg:w-full max-sm:h-96'
          src={about}
          alt='img'
        />
        <div className='flex flex-col gap-10 items-center justify-center'>
          <h2 className='text-4xl text-black font-semibold max-xl:text-xl'>
            ABOUT THE COMPANY
          </h2>
          <p className='text-center text-gray-500 leading-8 max-w-[700px] text-xl max-xl:text-lg max-xl:w-full'>
            The Coca-Cola Company has been operating in Uzbekistan since 1993.
            Currently, the company has four production plants in the country,
            located in Tashkent, Namangan, Urgench, and Samarkand. Coca-Cola in
            Uzbekistan is not only engaged in beverage production but also
            actively supports various social projects. For example, in 2022, the
            company was a sponsor of the Nobel Festival, which was attended by
            1,800 people and 10,000 students. During the festival, students and
            young scientists had the opportunity to engage in online discussions
            with Nobel laureates and renowned scholars.
          </p>
          <Link href={"/about"} className='w-[50%] h-20 flex items-center justify-center rounded-full border-2 bg-red-500 text-2xl text-white duration-300 hover:bg-transparent hover:border-red-500 hover:text-red-500 max-xl:text-xl max-xl:w-full max-lg:w-[70%]'>
            More details
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
