
import React from 'react';

const philosophyPoints = [
    {
        title: 'Partnership & Precision',
        description: "The best digital solutions are born from a deep understanding of our clients' vision and an unwavering commitment to technical excellence."
    },
    {
        title: 'Agile Mindset',
        description: 'We embrace change and adapt to challenges with creativity and speed. Every line of code is written with purpose, and every design is crafted for impact.'
    },
    {
        title: 'Client Success',
        description: 'Our success is measured by the success of our clients. This principle guides every decision we make, from initial blueprint to final launch and beyond.'
    }
];

const OurPhilosophy: React.FC = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Core Philosophy</h2>
                    <p className="mt-4 text-lg text-slate-300">
                        The fundamental beliefs that shape our process and define our purpose.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-12">
                    {philosophyPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-6 animate-fade-in-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                            <div className="flex-shrink-0 text-3xl font-black text-violet-700">
                                0{index + 1}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">{point.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPhilosophy;