import React from 'react'
import './loading.css'
const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div class='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
