import React, { useState, useRef, useEffect } from 'react';
import MadhuImg from '../myimg.png';
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { IoVideocam } from 'react-icons/io5';
import { CiMenuKebab } from 'react-icons/ci';

const ChatHeader = ({
  isLoading,
  setPrompt,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle clicks outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between text-white p-4 px-2 py-2 rounded-b-3xl relative">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 border-purple-600 border p-[2px] rounded-full flex items-center justify-center">
            <img src={MadhuImg} alt="Madhu" className='rounded-full' />
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
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center shadow-md p-2 rounded'>
          <button 
            onClick={() => {
              setPrompt('I want to make a phone call you ?');
            }} 
            className="text-white mx-2" 
            title="Voice Call"
          >
            <FaPhone size={15} className='active:animate-ping hover:scale-105' />
          </button>
          <button 
            onClick={() => {
              setPrompt('Share your email address for google meet');
            }} 
            className="text-white mx-2" 
            title="Video Call"
          >
            <IoVideocam size={20} className='active:animate-ping hover:scale-105' />
          </button>
        </div>
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white mx-2" 
            title="Menu"
          >
            <CiMenuKebab size={20} className='mx-2 mt-2 hover:scale-105' />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-purple-400 text-black shadow-lg rounded-md z-50 p-2">
              <ul className="py-1">
                <li className="flex items-center hover:bg-purple-500 rounded-lg">
                  <FaFileDownload size={17} className="mx-2 text-white" />
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    // download 
                    className="block px-2 py-2 text-sm w-full font-[600] text-white"
                  >
                    Open Resume
                  </a>
                </li>
                <li className="flex items-center hover:bg-purple-500 rounded-lg">
                  <FaGithub size={17} className="mx-2 text-white" />
                  <a 
                    href="https://github.com/MadhuSuniL" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-2 py-2 text-sm w-full font-[600] text-white"
                  >
                    Open GitHub
                  </a>
                </li>
                <li className="flex items-center hover:bg-purple-500 rounded-lg">
                  <FaLinkedin size={17} className="mx-2 text-white" />
                  <a 
                    href="https://www.linkedin.com/in/madhu-bagamma-gari-833a84239" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block px-2 py-2 text-sm w-full font-[600] text-white "
                  >
                    Open LinkedIn
                  </a>
                </li>
                <li className="flex items-center hover:bg-purple-500 rounded-lg">
                  <FaEnvelope size={17} className="mx-2 text-white" />
                  <a 
                    href="mailto:bagammagarimadhu@gmail.com" 
                    className="block px-2 py-2 text-sm w-full font-[600] text-white"
                  >
                    Send Email
                  </a>
                </li>
                <li className="flex items-center hover:bg-purple-500 rounded-lg">
                  <FaPhone size={17} className="mx-2 text-white" />
                  <a 
                    href="tel:+919948377187" 
                    className="block px-2 py-2 text-sm w-full font-[600] text-white"
                  >
                    Call Phone
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;



