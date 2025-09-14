
import React from 'react';

const timelineData = [
    { 
        year: 'July 2025', 
        title: 'Team Formation', 
        description: 'A group of us, driven by a shared passion, decided to unite our skills. In the summer of 2025, we officially formed our team to start a new collaborative journey.' 
    },
    { 
        year: 'Aug - Oct 2025', 
        title: 'Building Our Foundation', 
        description: 'Our first challenge was to create our own digital space. We focused our efforts on building this website to serve as our home base and a showcase of our capabilities.' 
    },
    {
        year: 'Now',
        title: 'Client Hunting',
        description: "With our foundation set, we are now actively searching for our first clients. We are eager to partner with businesses and put our expertise to work on real-world projects."
    },
    { 
        year: 'Our Mission', 
        title: 'Commitment to Quality', 
        description: 'Our core objective is to deliver high-quality work and provide excellent service. We are ready and excited to create impactful solutions for our future partners.' 
    },
];

const OurStory: React.FC = () => {
    return (
        <section id="our-journey" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Journey</h2>
                    <p className="mt-4 text-lg text-slate-300">
                       Every story has a beginning. This is ours—an honest look at our formation, our current mission, and our commitment to the future.
                    </p>
                </div>
                <div className="relative max-w-2xl mx-auto py-4">
                    <div className="absolute left-0 top-4 h-[calc(100%-2rem)] w-0.5 bg-slate-700"></div>
                    {timelineData.map((item, index) => (
                        <div key={index} className="relative pl-8 sm:pl-12 py-6 timeline-item animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                           <div className="mb-1">
                                <span className="text-2xl font-bold text-violet-400">{item.year}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStory;