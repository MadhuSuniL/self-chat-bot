import React from 'react';
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { WiStars } from "react-icons/wi";

const ChatFooter = ({ prompt, setPrompt, setPromptA, get_answer, isLoading }) => {
  return (
    <form className="flex items-center justify-between p-2" onSubmit={(e)=>{
      e.preventDefault()
      get_answer()
    }}>
      <button type='button' className="text-white">
          <WiStars size={35} className='text-purple-600' />
      </button>
        <input
          type="text"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value)
            setPromptA(e.target.value)
          }}
          placeholder="Ask me..."
          className="flex-1 mx-2 p-2 px-4 border-[3px] rounded-full bg-white border-gray-300 focus:outline-none focus:ring-none focus:border-purple-600"
        />
        <button
          type='submit'
          disabled={isLoading || !prompt}
          className={`ml-2 p-3 rounded-full ${isLoading || !prompt ? 'bg-gray-300' : 'bg-purple-600'} text-white`}
        >
          <BsFillSendArrowUpFill size={17} />
        </button>
    </form>
  );
};

export default ChatFooter;
