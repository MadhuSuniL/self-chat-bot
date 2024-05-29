import React from 'react'
import Prompt from './Prompt'
import Answer from './Answer'
import Resume from './Resume'

const Chat = ({
    chat,
    prompt,
    isLoading
}) => {
  return (
    <div className='p-2'>
        {
            chat.map((c, index) => 
                <div key={index}>
                    <Prompt text = {c.prompt} />
                    <Answer text = {c.answer}/>
                </div>
            )
        }
        {
            chat.length === 0 && !isLoading &&
            <Resume/>
        }
        {
            isLoading && 
            <Prompt text = {prompt}/>
        }
        <span id='scroll-ele'></span>
    </div>
  )
}

export default Chat