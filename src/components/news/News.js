import React from 'react'
import Image from 'next/image'
import news1 from '@/assets/images/news1.webp'
import news2 from '@/assets/images/news2.webp'
import new1 from '@/assets/images/new1.webp'
import new2 from '@/assets/images/new2.webp'
import new3 from '@/assets/images/new3.webp'
import new4 from '@/assets/images/new4.webp'
import new5 from '@/assets/images/new5.webp'
import new6 from '@/assets/images/new6.webp'
import new7 from '@/assets/images/new7.webp'
import new8 from '@/assets/images/new8.webp'
const News = () => {
  return (
    <section className='w-full h-auto p-5 bg-red-100'>
      <div className='container mx-auto flex items-center justify-center flex-col gap-20'>
        <div className='grid grid-cols-2 gap-10 w-full h-auto max-lg:grid-cols-1 max-[400px]:gap-10'>
          <div className='h-[700px] flex flex-col justify-between max-sm:h-[500px] max-[400px]:h-96 max-[400px]:gap-5'>
            <Image
              className='w-full h-[80%] object-cover rounded-3xl max-sm:object-contain max-sm:rounded-xl max-[400px]:object-cover'
              src={news1}
              alt='news'
            />
            <h2 className='text-3xl text-black font-semibold max-sm:text-xl'>
              DECORATIONS
            </h2>
            <p className='text-xl text-black opacity-75 max-w-[500px] max-lg:w-full max-sm:text-lg'>
              Deck the halls with Coca-Cola! Shop ornaments perfect for a
              festive tree or as gift-toppers.
            </p>
          </div>
          <div className='h-[700px] flex flex-col justify-between max-sm:h-[500px] max-[400px]:h-96 max-[400px]:gap-5'>
            <Image
              className='w-full h-[80%] object-cover rounded-3xl max-sm:object-contain max-sm:rounded-xl max-[400px]:object-cover'
              src={news2}
              alt='news'
            />
            <h2 className='text-3xl text-black font-semibold max-sm:text-xl'>
              POLAR BEAR COLLECTION
            </h2>
            <p className='text-xl text-black opacity-75 max-w-[500px] max-lg:w-full max-sm:text-lg'>
              Spread holiday cheer to friends and loved ones with gifts
              featuring the iconic Coca-Cola Polar Bear.
            </p>
          </div>
        </div>
        <div className='news w-full h-auto p-10 flex overflow-x-auto gap-10 rounded-xl overflow-hidden max-lg:gap-5 max-lg:p-0'>
          <div className='min-w-96 h-96 rounded-xl bg-white max-lg:min-w-72 max-lg:h-72'>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src={new1}
              alt='new_img'
            />
          </div>
          <div className='min-w-96 h-96 rounded-xl bg-white max-lg:min-w-72 max-lg:h-72'>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src={new2}
              alt='new_img'
            />
          </div>
          <div className='min-w-96 h-96 rounded-xl bg-white max-lg:min-w-72 max-lg:h-72'>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src={new3}
              alt='new_img'
            />
          </div>
          <div className='min-w-96 h-96 rounded-xl bg-white max-lg:min-w-72 max-lg:h-72'>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src={new4}
              alt='new_img'
            />
          </div>
          <div className='min-w-96 h-96 rounded-xl bg-white max-lg:min-w-72 max-lg:h-72'>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src={new5}
              alt='new_img'
            />
          </div>
          <div className='min-w-96 h-96 rounded-xl bg-white max-lg:min-w-72 max-lg:h-72'>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src={new6}
              alt='new_img'
            />
          </div>
          <div className='min-w-96 h-96 rounded-xl bg-white max-lg:min-w-72 max-lg:h-72'>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src={new7}
              alt='new_img'
            />
          </div>
          <div className='min-w-96 h-96 rounded-xl bg-white max-lg:min-w-72 max-lg:h-72'>
            <Image
              className='w-full h-full object-cover rounded-xl'
              src={new8}
              alt='new_img'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
