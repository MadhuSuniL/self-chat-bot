import React from 'react'
import MadhuImg from '../myimg.png'

const Answer = ({text}) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full border-purple-600 border p-[2px]">
          <img alt="Madhu" src={MadhuImg} className='rounded-full' />
        </div>
      </div>
      <div className="chat-header text-black font-semibold">
        Madhu
      </div>
      <div className="chat-bubble bg-gray-100  text-gray-700">{text}</div>
    </div>
  )
}

export default Answer