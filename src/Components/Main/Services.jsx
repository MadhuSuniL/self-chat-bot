import React from 'react';
import { FaServer, FaRobot, FaCode, FaBrain } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { TbApi } from 'react-icons/tb';
import { ReactTyped } from "react-typed";
import { useInView } from 'react-intersection-observer';

const services = [
    {
        title: 'Backend Development',
        description: 'Build scalable backend systems using Python, Django, and DRF with WebSocket (Django Channels) support.',
        icon: <FaServer size={30} />,
    },
    {
        title: 'Frontend Integration',
        description: 'Create seamless frontend experiences using React, Next.js, Tailwind CSS, and Bootstrap.',
        icon: <FaCode size={35} />,
    },
    {
        title: 'Custom AI Solutions',
        description: 'Design and deploy custom AI models including NLP, deep learning, and machine learning pipelines.',
        icon: <GiArtificialIntelligence />,
    },
    {
        title: 'Generative AI Applications',
        description: 'Build AI Agents, Custom GPTs, and ChatGPT-like interfaces tailored to business needs.',
        icon: <FaRobot />,
    },
    {
        title: 'REST API Development',
        description: 'Craft robust and secure APIs using Django REST Framework with token-based authentication.',
        icon: <TbApi size={40} />,
    },
    {
        title: 'AI-Powered Applications',
        description: 'Integrate AI models into real-world apps like recommendation systems, chat interfaces, or document summarizers.',
        icon: <FaBrain />,
    }
];

const Services = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    const [isTyping, setIsTyping] = React.useState(true);

    return (
        <div id="services" className="py-10">
            <div ref={ref} className="max-w-[1100px] mx-auto min-h-72 py-10 px-6 md:px-20">
                {
                    inView &&
                    <ReactTyped
                        strings={[`
                <h4 class="sub-heading">What I Offer</h4>
                <h1 class="heading text-green-500">
                  <span class="text-green-500">Services</span>
                </h1>
              `]}
                        typeSpeed={10}
                        showCursor={false}
                        onBegin={() => setIsTyping(true)}
                        onComplete={() => setIsTyping(false)}
                    />
                }
            </div>

            {
                !isTyping && inView &&
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg shadow-green-300 rounded-xl p-6 transform transition-transform hover:scale-[1.05]">
                            <div className="text-4xl green mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default Services;
