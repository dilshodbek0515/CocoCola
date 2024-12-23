'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Products = ({ posts }) => {
  const router = useRouter()
  return (
    <section className='w-full h-auto p-5 bg-red-100'>
      <div className='container mx-auto grid grid-cols-4 gap-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
        {posts?.products?.map(pro => (
          <div
            key={pro.id}
            className='h-[500px] bg-[#fff] shadow-2xl rounded-2xl p-5 gap-2 flex flex-col justify-between'
          >
            <img
              onClick={() => router.push(`/product/${pro.id}`)}
              className='w-full object-cover cursor-pointer min-h-[70%] max-md:object-contain max-md:h-[50%]'
              src={pro.thumbnail}
              alt='image'
            />
            <h3 className='text-2xl text-black'>{pro.title}</h3>
            <p
              title={pro.description}
              className='text-lg text-gray-500 line-clamp-2 cursor-pointer'
            >
              {pro.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
