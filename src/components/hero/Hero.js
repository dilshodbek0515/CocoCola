'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'
import cola1 from '@/assets/images/hero1.webp'
import cola2 from '@/assets/images/hero2.webp'
import cola3 from '@/assets/images/hero3.webp'
import cola4 from '@/assets/images/hero4.webp'
import cola5 from '@/assets/images/hero5.webp'
const Hero = () => {
  return (
    <main className='w-full h-auto p-5 bg-red-100'>
      <div className='container mx-auto'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          // pagination={{
          //   clickable: true
          // }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className='w-full h-[700px] rounded-xl max-2xl:h-auto'
        >
          <SwiperSlide className='w-full h-auto'>
            <Image
              className='w-full h-auto rounded-xl bg-cover'
              src={cola1}
              alt='image'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-auto'>
            <Image
              className='w-full h-auto rounded-xl bg-cover'
              src={cola2}
              alt='image'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-auto'>
            <Image
              className='w-full h-auto rounded-xl bg-cover'
              src={cola3}
              alt='image'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-auto'>
            <Image
              className='w-full h-auto rounded-xl bg-cover'
              src={cola4}
              alt='image'
            />
          </SwiperSlide>
          <SwiperSlide className='w-full h-auto'>
            <Image
              className='w-full h-auto rounded-xl bg-cover'
              src={cola5}
              alt='image'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  )
}

export default Hero
