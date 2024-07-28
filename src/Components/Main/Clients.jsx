import React from 'react'
import Logos from '../../assets/clients/Logos'
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";

const Clients = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.5, // When at least 10% of the element is visible
    });
    const [isTyping, setIsTyping] = React.useState(true)

  return (
    <div id='clients' className='py-10'>
        <div ref={ref} className="max-w-[1100px] mx-auto min-h-72 py-10 px-20">
        {
            inView &&
            <ReactTyped
              strings={[`
                    <h4 class="sub-heading">Happy</h4>
                    <h1 class="heading pink"><span class="pink">Client's</span></h1>
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
            <div className='max-w-[800px] mx-auto grid grid-cols-2 lg:grid-cols-4 justify-center p-3'>
                {
                    clients.map((client, index) => (
                        <div className='flex items-center justify-between' key={index}>
                            <a href={client.link} target='_blank' rel='noreferrer'>
                                <img src={client.logo} alt={client.name} className='h-36 hover:scale-110 transition duration-500 ease-in-out transform' />
                            </a>
                        </div>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default Clients

const clients = [
    {
        name: "Ux9",
        logo: Logos.UX9,
        link : 'https://www.ux-9.com/'
    },
    {
        name: "SIE Detailers",
        logo: Logos.SIE,
        link : 'https://www.sie-detailers.com/'
    },
    {
        name: "Franchise Brigade",
        logo: Logos.FB,
        link : 'https://www.franchisebrigade.com/'
    },
    {
        name: "Simmi Foundation",
        logo: Logos.Simmi,
        link : 'http://simmifrontendtest.netlify.app/'
    }
]