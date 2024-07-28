import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
import { ReactTyped } from "react-typed";
import Navbar from './Navbar';


const Header = () => {

  const [isTyping, setIsTyping] = useState(true)

  return (
    <div>
      <Navbar/>
      <div className='grid md:grid-cols-2 gap-4 py-32 px-1 bg-transparent'>
        <div className=''></div>
        <div className='text-white min-h-72'>
          <ReactTyped
          strings={[`
            <h4 class='text-7xl text-white font-thin mb-10'>Hi, I am</h4>
            <h1 class='text-6xl font-bold mb-10'>Madhu Bagamma Gari.</h1>
            <h1 class='text-2xl font-thin mb-10'>Python Full Stack Developer & AI Enthusiast</h1>
            `]}
          typeSpeed={10}
          showCursor={false}
          onBegin={()=>setIsTyping(true)}
onComplete={() => setIsTyping(false)}
          />
          {
            !isTyping &&
            <>
              <button onClick={()=> window.location.href = '#chat'} className='text-2xl animate-pulse p-4 px-24 mb-10 font-thin bg-sky-500 rounded-badge'>Let's Chat!</button>
              <div className='flex items-center'>
                {joinItems.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                ))}
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;

const joinItems = [
  {
    link: 'https://github.com/MadhuSuniL',
    icon: <FaGithub className='mx-2 text-gray-300' size={30}/>
  },
  {
    link: 'https://www.linkedin.com/in/madhu-bagamma-gari-833a84239/',
    icon: <FaLinkedin className='mx-2 text-gray-300' size={30} />
  },
  {
    link: 'mailto:bagammagarimadhu@gmail.com',
    icon: <FaGoogle className='mx-2 text-gray-300' size={30} />
  },
  {
    link: 'tel:9948377187',
    icon: <FaPhone className='mx-2 text-gray-300' size={27} />
  },
  {
    link: 'https://wa.me/9948377187',
    icon: <FaWhatsapp className='mx-2 text-gray-300' size={32} />
  }
];
