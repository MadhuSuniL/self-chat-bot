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
    let ele = document.getElementById('chats')
    if (ele) {
      ele.scrollTop = ele.scrollHeight;
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
    if (chat.length) {
      scroll();
    }
  }, [chat, isLoading]);

  return (
    <div id='chat2' className="bg-gradient h-full flex justify-center items-center">
      dsfsdf
    </div>
  );
}



const welcomeText = `I am a Python Full Stack Developer with over 1 year of experience. I have a strong background in developing web applications using Python and its frameworks, along with frontend technologies like ReactJS. I am passionate about coding, AI applications, and continuously learning new skills.`


const welcome = {
  prompt: null,
  answer: welcomeText
}