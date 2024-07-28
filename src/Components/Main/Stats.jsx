import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Helper function to format numbers
const formatNumber = (number) => {
    if (number >= 100000) {
        // Format for lakhs (e.g., 1,00,000 => 1l)
        return `${(number / 100000).toFixed(1)}l`;
    } else if (number >= 1000) {
        // Format for thousands (e.g., 1,000 => 1k)
        return `${(number / 1000).toFixed(1)}k`;
    } else {
        return number;
    }
};

const Stats = () => {
    const [hours, setHours] = useState(0);
    const [cups, setCups] = useState(0);
    const projects = 7;

    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.5, // When at least 10% of the element is visible
    });

    useEffect(() => {
        const startDate = new Date('2023-05-01');
        const now = new Date();

        // Calculate the difference in days
        const diffInMs = now - startDate;
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        // Calculate total working hours (assuming 9 hours per day)
        const totalHours = diffInDays * 9;
        setHours(totalHours);

        // Calculate the number of cups of coffee (2 cups per 9 hours)
        const coffeeCups = Math.floor(totalHours / 9) * 2;
        setCups(coffeeCups);
    }, []);

    return (
        <div ref={ref} className="max-w-[1350px] mx-auto">
            <div className="grid lg:grid-cols-3 gap-4">
                <div className="text-center stat-box">
                    <h1 className="purple">
                        {inView ? (
                            <CountUp
                                end={hours}
                                formattingFn={formatNumber}
                                duration={2.5}
                                separator=","
                            />
                        ) : (
                            formatNumber(hours)
                        )}
                    </h1>
                    <h3>Hours</h3>
                </div>
                <div className="text-center stat-box">
                    <h1 className="blue">
                        {inView ? (
                            <CountUp
                                end={projects}
                                formattingFn={formatNumber}
                                duration={2.5}
                                separator=","
                            />
                        ) : (
                            formatNumber(projects)
                        )}
                    </h1>
                    <h3>Projects</h3>
                </div>
                <div className="text-center stat-box">
                    <h1 className="pink">
                        {inView ? (
                            <CountUp
                                end={cups}
                                formattingFn={formatNumber}
                                duration={2.5}
                                separator=","
                            />
                        ) : (
                            formatNumber(cups)
                        )}
                    </h1>
                    <h3>Cups of Coffee</h3>
                </div>
            </div>
        </div>
    );
};

export default Stats;
