import React from 'react';
import BackendDev from '../../assets/backend_dev2.png'
import FullStack from '../../assets/full_stack.png'
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";

const experiences = [
  {
    img: FullStack,
    title: 'Python Full Stack Developer',
    company: 'TechFnatic Information Technology & Services',
    duration: 'May 2023 - Present',
    location: 'Bangalore',
    responsibilities: [
      'Developed and maintained responsive web apps using Python, Django, React.js, Tailwind CSS, and Bootstrap for improved user experience.',
      'Collaborated on cross-functional teams to design and implement databases, API endpoints, and UIs with Django Rest Framework and Django Channels.',
      'Optimized website performance via code reviews, debugging, and software development best practices.',
      'Integrated machine learning and deep learning models to enhance web app functionality.'
    ]
  },
  {
    img: BackendDev,
    title: 'Backend Developer',
    company: 'Simmi Foundation Organization',
    duration: 'October 2022 - January 2023',
    location: 'Remote',
    responsibilities: [
      'Developed and maintained web apps with Django and Django Rest Framework, enhancing user experience and functionality.',
      'Collaborated with cross-functional teams to design and implement database schemas and API endpoints for multiple projects.',
      'Integrated Razorpay for seamless payment processing within web apps.',
      'Automated certificate generation for donations to enhance user satisfaction and operational efficiency.',
      'Optimized website performance through code reviews, debugging, and software development best practices.'
    ]
  }
];

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // When at least 10% of the element is visible
});
  const [isTyping, setIsTyping] = React.useState(true)
  return (
    <div id='experience' className="py-10">
      <div ref={ref} className="max-w-[1100px] mx-auto min-h-72 py-10 px-20">
        {
            inView &&
            <ReactTyped
              strings={[`
                  <h4 class="sub-heading">Professional</h4>
                  <h1 class="heading blue">
                    <span class="blue">Experience</span>
                  </h1>                  
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
        <div className="max-w-[1100px] mx-auto py-10 space-y-8 p-3">
          {experiences.map((experience, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-3 items-center bg-gradient-to-t from-sky-500 hover:via-transparent to-transparent shadow-lg shadow-sky-500 rounded-lg p-8 transition-transform transform hover:scale-[1.01]">
              <img src={experience.img} alt={experience.title} className="h-full w-full object-cover rounded-lg md:col-span-1" />
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-sky-500 underline underline-offset-8 mb-4" style={{fontFamily:'monospace'}}>{experience.title}</h2>
                <h3 className="text-xl font-medium text-gray-700">{experience.company}</h3>
                <p className="text-gray-600 mb-4">{experience.duration}, {experience.location}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="pl-2 text-sm">{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Experience;
