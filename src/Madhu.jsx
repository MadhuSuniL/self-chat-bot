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
  const [chat, setChat] = useState([welcome]);

  const scroll = () => {
    let ele = document.getElementById('scroll-ele')
    if (ele) {
      ele.scrollIntoView({ behavior:'smooth' });
    }
  }


  const get_answer = (promptX = null) => {
    setIsLoading(true);
    setPromptA(prompt)
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
    <div className="bg-gradient h-screen flex justify-center items-center">
      <div className=" bg-transparent text-black w-full max-w-[700px] h-full flex flex-col rounded">
        <div className='flex-0'>
          <ChatHeader isLoading = {isLoading} setPrompt = {setPrompt} setPromptA = {setPromptA} get_answer = {get_answer} />
        </div>
        <div className="flex-1 overflow-auto">
          <Chat 
            chat={chat} 
            prompt={promptA} 
            isLoading = {isLoading} 
          />
        </div>
        <div className='flex-0'>
          <ChatFooter
            prompt={prompt}
            setPrompt={setPrompt}
            get_answer={get_answer}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}



const welcomeText = `I am a Python Full Stack Developer with over 1 year of experience. I have a strong background in developing web applications using Python and its frameworks, along with frontend technologies like ReactJS. I am passionate about coding, AI applications, and continuously learning new skills.`


const welcome = {
  prompt : null,
  answer : welcomeText
}