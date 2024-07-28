import React from 'react'
import ProjectsSlider from './ProjectsSlider'
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";


const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // When at least 10% of the element is visible
});
  const [isTyping, setIsTyping] = React.useState(true)

  return (
    <div id='projects' className='-mt-16 bg-[rgb(255,255,255)] max-w-[1100px] mx-auto shadow-2xl shadow-gray-400 pt-28'>
        
        <div className={'px-20 min-h-72 mt-10'} ref={ref}>
          {
            inView &&
            <ReactTyped
              strings={[`
                  <h4 class="sub-heading">Exclusively</h4>
                  <h1 class="heading purple"><span class="text-purple-700">Projects</span> with <br/>Startups and founders</h1>  
                `]}
              typeSpeed={5}
              showCursor={false}
              onBegin={()=>setIsTyping(true)}
              onComplete={() => setIsTyping(false)}
            />
          }
        </div>
        {
          !isTyping &&
          <ProjectsSlider/>      
        }
    </div>
  )
}

export default Projects