import React from 'react'
import { FaRegStar } from 'react-icons/fa'
const Detail = async ({ params }) => {
  const data = await fetch(`https://dummyjson.com/products/${params.id}`)
  const posts = await data.json()
  console.log(posts)

  return (
    <section className='w-full h-auto p-5 bg-red-100'>
      <div className='container mx-auto flex justify-between p-20 items-center bg-red-200 rounded-2xl'>
        <div className='flex flex-col gap-5 w-[40$]'>
          <img className='w-72 h-72 border-2 border-red-500 p-2 rounded-2xl' src={posts?.images[0]} alt='img' />
          <img className='w-72 h-72 border-2 border-red-500 p-2 rounded-2xl' src={posts?.images[1]} alt='img' />
          <img className='w-72 h-72 border-2 border-red-500 p-2 rounded-2xl' src={posts?.images[2]} alt='img' />
        </div>
        <div className='flex flex-col gap-10 items-end'>
          <h3 className='text-6xl font-bold text-black'>{posts?.title}</h3>
          <p className='text-3xl font-bold text-red-400'>{posts?.brand}</p>
          <p className='text-xl font-normal text-gray-500 text-right max-w-[800px]'>
            {posts?.description}
          </p>
          <div className='flex gap-10 items-center'>
            <p className='text-xl font-bold text-blue-900'>
              Price: {posts?.price}
            </p>
            <p className='text-xl font-bold text-blue-900'>
              Stock: {posts?.stock}
            </p>
            <p className='text-xl font-bold text-blue-900'>
              Rating: {posts?.rating}
            </p>
          </div>
          <div className='flex gap-10 items-center'>
            <p className='text-xl font-bold text-blue-950'>
              Discount: {posts?.discountPercentage} %
            </p>
            <p className='text-xl font-bold text-blue-950'>
              Data: {posts?.meta.createdAt}
            </p>
            <p className='text-xl font-bold text-blue-950 flex items-center gap-5'>
              Qr Code:{' '}
              <img className='w-20 h-20' src={posts?.meta.qrCode} alt='qr' />
            </p>
          </div>
          <div className='grid grid-cols-3 gap-5 items-center justify-center w-[1000px] h-[200px] mt-24'>
            <div className='h-full bg-[#fff] shadow-xl rounded-xl p-5 flex flex-col justify-between'>
              <h2 className='text-2xl text-black'>
                {posts?.reviews[0].comment}
              </h2>
              <div className='w-full flex gap-5 text-yellow-500 text-2xl'>
                <FaRegStar  />
                <FaRegStar  />
                <FaRegStar  />
                <FaRegStar />
                <FaRegStar  />
              </div>
              <p className='text-lg font-semibold text-black'>
                {posts?.reviews[0].reviewerName}
              </p>
              <p className='text-gray-600 text-sm'>{posts?.reviews[0].reviewerEmail}</p>
            </div>
            <div className='h-full bg-[#fff] shadow-xl rounded-xl p-5 flex flex-col justify-between'>
              <h2 className='text-2xl text-black'>
                {posts?.reviews[1].comment}
              </h2>
              <div className='w-full flex gap-5 text-yellow-500 text-2xl'>
                <FaRegStar  />
                <FaRegStar  />
                <FaRegStar  />
                <FaRegStar />
                <FaRegStar  />
              </div>
              <p className='text-lg font-semibold text-black'>
                {posts?.reviews[0].reviewerName}
              </p>
              <p className='text-gray-600 text-sm'>{posts?.reviews[0].reviewerEmail}</p>
            </div>
            <div className='h-full bg-[#fff] shadow-xl rounded-xl p-5 flex flex-col justify-between'>
              <h2 className='text-2xl text-black'>
                {posts?.reviews[2].comment}
              </h2>
              <div className='w-full flex gap-5 text-yellow-500 text-2xl'>
                <FaRegStar  />
                <FaRegStar  />
                <FaRegStar  />
                <FaRegStar />
                <FaRegStar  />
              </div>
              <p className='text-lg font-semibold text-black'>
                {posts?.reviews[0].reviewerName}
              </p>
              <p className='text-gray-600 text-sm'>{posts?.reviews[0].reviewerEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Detail
