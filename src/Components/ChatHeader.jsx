import React from 'react';
import MadhuImg from '../myimg.png'
import { FaPhone } from 'react-icons/fa';
import { IoVideocam } from "react-icons/io5";

const ChatHeader = ({
  isLoading,
  setPrompt,
  setPromptA
}) => {
  return (
    <div className="flex items-center justify-between bg-pu0rple-600 text-white p-4 px-2 py-2 rounded-b-3xl">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 border-purple-600 border p-[2px] rounded-full flex items-center justify-center">
            <img src = {MadhuImg} className='rounded-full'/>
          </div>
          <div className='flex flex-col'>
            <span className="font-semibold">Madhu Bagamma Gari</span>
            <span className="text-sm font-semibold">
              {isLoading ? (
                <span className="typing">
                  <span>t</span>
                  <span>y</span>
                  <span>p</span>
                  <span>i</span>
                  <span>n</span>
                  <span>g</span>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              ) : (
                'live'
              )}
            </span>
            {/* <span className="text-sm font-semibold">{isLoading ? 'typing...' : 'live'}</span> */}
          </div>
        </div>
      </div>
      <div className='flex items-center shadow-md p-2 rounded'>
        <button onClick={()=> {
          setPrompt('I want to make a phone call you ?')
          setPromptA('I want to make a phone call you ?')
        }} className="text-white mx-2">
          <FaPhone size={15} className='active:animate-ping hover:scale-105' />
        </button>
        <button onClick={()=> {
          setPrompt('how i can connect with you on google meet?')
          setPromptA('how i can connect with you on google meet?')
        }} className="text-white mx-2">
          <IoVideocam size={20} className='active:animate-ping hover:scale-105' />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
