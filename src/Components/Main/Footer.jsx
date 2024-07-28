import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import { useInView } from 'react-intersection-observer';

const Footer = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // When at least 10% of the element is visible
});

  return (
    <div>
        <footer>
        <div ref={ref} className='min-h-72'>
          <div className="grid justify-center footer">
            <div className="flex justify-center items-center">
              {
                inView &&
                <ReactTyped
                  strings={[`
                      <h2 class='text-4xl font-semibold text-gray-400'>Madhu <br/><span class='text-gray-300'>Bagamma Gari</span></h2>
                    `]}
                  showCursor = {false}    
                  typeSpeed={10}          
                />
              }
            </div>
          </div>
          <div className="grid md:grid-cols-1 sub-footer">
            <div className="flex justify-around items-center flex-wrap">
              {
                inView &&
                <ReactTyped
                  strings={[`
                      <p>Designed by <a href="/" target="_blank">@Madhu</a></p>
                    `]}
                  showCursor = {false}    
                  typeSpeed={10}          
                />
              }
                <div className="flex flex-col items-center sm:items-end mt-6 sm:mt-0">
                    <div className="flex space-x-6">
                        <a href="https://github.com/MadhuSuniL" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} className="hover:text-gray-500 text-gray-200" />
                        </a>
                        <a href="https://www.linkedin.com/in/madhu-bagamma-gari-833a84239/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} className="hover:text-gray-500 text-gray-200" />
                        </a>
                        <a href="https://wa.me/9948377187" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={30} className="hover:text-gray-500 text-gray-200" />
                        </a>
                        <a href="mailto:bagammagarimadhu@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={30} className="hover:text-gray-500 text-gray-200" />
                        </a>
                        <a href="tel:9948377187" target="_blank" rel="noopener noreferrer">
                            <FaPhone size={30} className="hover:text-gray-500 text-gray-200" />
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer