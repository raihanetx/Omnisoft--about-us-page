
import React from 'react';

const values = [
    {
        number: '01',
        title: 'Pioneer',
        description: 'We are relentless innovators, pushing the boundaries of technology to craft solutions that are not just current, but future-proof.',
        delay: '0.1s'
    },
    {
        number: '02',
        title: 'Collaborate',
        description: 'Our greatest strength is our synergy. We partner with our clients, embedding ourselves in their mission to forge shared success.',
        delay: '0.2s'
    },
    {
        number: '03',
        title: 'Excel',
        description: 'We are committed to the highest standards of quality and integrity, ensuring every project is a benchmark of excellence.',
        delay: '0.3s'
    }
];

const OurValues: React.FC = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Guiding Principles</h2>
                    <p className="mt-4 text-lg text-slate-300">
                       The unwavering beliefs that anchor our work, fuel our culture, and define our partnership with you.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map(item => (
                        <div 
                            key={item.title} 
                            className="group relative p-8 rounded-xl border border-slate-800 transition-all duration-300 animate-fade-in-up transform hover:-translate-y-2 hover:shadow-2xl hover:border-violet-500" 
                            style={{ animationDelay: item.delay }}
                        >
                            <span className="absolute top-8 right-8 text-7xl font-black text-slate-800/50 transition-colors duration-300 group-hover:text-violet-500/20">
                                {item.number}
                            </span>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;