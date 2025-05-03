import React, { useState } from 'react';
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import { useInView } from 'react-intersection-observer';

const educationData = [
    {
        title: 'B.Sc Computer Science',
        institution: 'Rayalaseema University, Velgode',
        board: 'Rayalaseema University',
        location: 'Nandyal District, Andhra Pradesh',
        icon: <FaUniversity />,
    },
    {
        title: 'Intermediate - MPC Group',
        institution: 'Intermediate Board, Velgode',
        board: 'Andhra Pradesh State Board',
        location: 'Nandyal District, Andhra Pradesh',
        icon: <FaGraduationCap />,
    },
    {
        title: 'Secondary School (10th Grade)',
        institution: 'ZPHS School, Velgode',
        board: 'Andhra Pradesh State Board',
        location: 'Nandyal District, Andhra Pradesh',
        icon: <FaSchool />,
    },
];

const Education = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [isTyping, setIsTyping] = useState(true);

    return (
        <div id="education" className="py-10">
            <div ref={ref} className="max-w-[1100px] mx-auto px-4">
                {inView && (
                    <ReactTyped
                        strings={[`
              <h4 class="sub-heading">Academic</h4>
              <h1 class="heading black">Education</h1>
            `]}
                        typeSpeed={10}
                        showCursor={false}
                        onBegin={() => setIsTyping(true)}
                        onComplete={() => setIsTyping(false)}
                    />
                )}
                {
                    !isTyping && inView && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                            {educationData.map((edu, index) => (
                                <div key={index} className="bg-white shadow-lg shadow-gray-500 rounded-xl p-5 hover:scale-105 duration-200">
                                    <div className="text-4xl black mb-4">{edu.icon}</div>
                                    <h3 className="text-lg font-semibold text-gray-700">{edu.title}</h3>
                                    <p className="text-gray-600">{edu.institution}</p>
                                    <p className="text-sm text-gray-500">{edu.location}</p>
                                    <p className="text-sm text-gray-500">{edu.board}</p>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Education;
