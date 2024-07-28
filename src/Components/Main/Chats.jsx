import React from 'react'
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";
import Madhu from '../../Madhu';


const Chats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // When at least 10% of the element is visible
});
  const [isTyping, setIsTyping] = React.useState(true)
  const scrollToChat = () => {
    let ele = document.getElementById('come')
    if (ele){
      setTimeout(()=>{
        ele.scrollIntoView({ behavior: "smooth"});
      },1200)
    }
  }


  return (
    <div id='chat' className='bg-[rgb(255,255,255)] max-w-[1100px] mx-auto shadow-2xl shadow-gray-400 pt-28'>
        
        <div id ='ele2' className={'px-20 min-h-72'} ref={ref}>
          {
            inView &&
            <ReactTyped
              strings={[`
                  <h4 class="sub-heading">Let's</h4>
                  <h1 class="heading purple"><span class="text-purple-700"> Chat</span></h1>  
                `]}
              typeSpeed={6}
              showCursor={false}
              onBegin={()=>setIsTyping(true)}
              onComplete={() => {
                setIsTyping(false)
                scrollToChat()
              }}
            />
          }
        </div>
        <div id='come'>
          {
            !isTyping &&
            <Madhu/>      
          }
        </div>
    </div>
  )
}

export default Chats