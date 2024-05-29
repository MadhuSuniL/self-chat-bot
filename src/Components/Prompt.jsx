import React from 'react'
import { IoCheckmarkDone } from "react-icons/io5";

const Prompt = ({text, status}) => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-8 rounded-full">
          <img alt="You" src={"https://tse4.mm.bing.net/th?id=OIP.16mKSaqxjNor68qMZti0kgHaHT&pid=Api&P=0&h=180"} className='rounded-full' />
        </div>
      </div>
      <div className="chat-header text-black font-semibold">
        You
      </div>
      <div className="chat-bubble bg-purple-600 text-white">{text}</div>
      <div className="chat-footer opacity-80 text-black flex items-center">
        <IoCheckmarkDone className='text-purple-600 me-1'/> Seen
      </div>
    </div>
)
}

export default Prompt