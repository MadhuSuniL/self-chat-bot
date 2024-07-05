import React from 'react';
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { WiStars } from "react-icons/wi";

const ChatFooter = ({ prompt, setPrompt, get_answer, isLoading }) => {


  const genarateRandomQuestion = () => {
    const randomQuestion = getRandomQuestion(hrQuestions);
    setPrompt(randomQuestion);
  }

  return (
    <form className="flex items-center justify-between p-2" onSubmit={(e)=>{
      e.preventDefault()
      get_answer()
    }}>
      <button type='button' onClick={genarateRandomQuestion} className="text-white">
          <WiStars size={35} className='text-purple-600' />
      </button>
        <input
          type="text"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value)
          }}
          placeholder="Type a message"
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


const hrQuestions = [
  "Describe your Python Full Stack experience.",
  "What Python frameworks do you use?",
  "How do you handle front-end development?",
  "Give examples of your full-stack projects.",
  "What’s your educational background?",
  "How do you stay updated on tech trends?",
  "Describe your database integration experience.",
  "How do you optimize app performance?",
  "How do you manage code versioning?",
  "What are your key soft skills?",
  "How do you debug your applications?",
  "What’s your experience with APIs?",
  "How do you prioritize tasks?",
  "What development methodologies do you know?",
  "Describe a challenging problem you solved.",
  "How do you maintain code quality?",
  "What’s your experience with cloud services?",
  "How do you handle app security?",
  "Any contributions to open-source?",
  "How do you take feedback?"
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}
