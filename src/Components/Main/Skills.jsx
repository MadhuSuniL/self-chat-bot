import React from 'react';
import { FaPython, FaReact } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiBootstrap, SiRedux , SiPytorch, SiAlgorand, SiRsocket, SiPandas, SiNumpy } from 'react-icons/si';
import { TbDatabaseSearch, TbBinaryTree } from "react-icons/tb";
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";


const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'Data structures', icon: <TbBinaryTree /> },
  { name: 'Web Scraping', icon: <TbDatabaseSearch /> },
  { name: 'React JS', icon: <FaReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Rest Framework', icon: <span style={{fontFamily: 'monospace'}} className='text-sm font-bold bg-orange text-white p-2 rounded-tl-2xl rounded-br-2xl'>REST</span> },
  { name: 'Django Channels', icon: <SiRsocket /> },
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'Numpy', icon: <SiNumpy /> },
  { name: 'NLP', icon: <span style={{fontFamily: 'monospace'}} className='text-sm font-bold bg-orange text-white p-2 rounded-tl-2xl rounded-br-2xl'>NLP</span>  },
  { name: 'Machine Learning', icon: <SiAlgorand /> },
  { name: 'Deep Learning', icon: <SiPytorch /> }
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // When at least 10% of the element is visible
});
  const [isTyping, setIsTyping] = React.useState(true)

  return (
    <div id='skills' className="py-10">
      <div ref={ref} className="max-w-[1100px] mx-auto min-h-72 py-10 px-20">
        {
            inView &&
            <ReactTyped
              strings={[`
                  <h4 class="sub-heading">Trending</h4>
                  <h1 class="heading orange">
                    <span class="orange">Skills</span>
                  </h1>
                `]}
              typeSpeed={10}
              showCursor={false}
              onBegin={()=>setIsTyping(true)}
              onComplete={() => setIsTyping(false)}
            />
        }
      </div>
      {
        !isTyping && inView &&
        <div className="max-w-[1100px] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-lg shadow-orange-300 rounded-lg p-4 flex items-center space-x-4 transform transition-transform hover:scale-[1.05]">
              <div className="text-4xl orange">
                {skill.icon}
              </div>
              <div>
                <ReactTyped
                strings={[`
                  <h3 class="text-xl font-semibold text-gray-500">${skill.name}</h3>
                  `]}
                  typeSpeed={10}
                  showCursor={false}
                />
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Skills;
