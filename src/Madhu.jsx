import { generate_answer } from './Groq';
import './App.css';
import { useEffect, useState } from 'react';
import ChatHeader from './Components/ChatHeader';
import Chat from './Components/Chat';
import ChatFooter from './Components/ChatFooter';

export default function Madhu() {
  const [prompt, setPrompt] = useState('')
  const [promptA, setPromptA] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState([]);

  const scroll = () => {
    let ele = document.getElementById('scroll-ele')
    if (ele) {
      ele.scrollIntoView({ behavior:'smooth' });
    }
  }


  const get_answer = (promptX = null) => {
    setIsLoading(true);
    setPrompt('');
    let final_prompt = promptX || prompt
    generate_answer(final_prompt).then(answer => {
      setIsLoading(false);
      let newChat = { prompt, answer }
      setChat(prev => ([...prev, newChat]));
    })
  };

  useEffect(() => {
    if (chat.length){
      scroll();
    }
  }, [chat, isLoading]);

  return (
    <div className="bg-gradient-to-b from-purple-500 via-purple-300 to-gray-200 h-screen flex justify-center items-center">
      <div className=" bg-transparent text-black w-full max-w-[700px] h-full flex flex-col rounded">
        <ChatHeader isLoading = {isLoading} setPrompt = {setPrompt} setPromptA = {setPromptA} get_answer = {get_answer} />
        <div className="flex-grow overflow-auto">
          <Chat 
            chat={chat} 
            prompt={promptA} 
            isLoading = {isLoading} 
          />
        </div>
        <ChatFooter
          prompt={prompt}
          setPrompt={setPrompt}
          setPromptA={setPromptA}
          get_answer={get_answer}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
