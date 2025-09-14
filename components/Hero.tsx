
import React from 'react';

const Hero: React.FC = () => {
    const headline = "Transforming Ideas into Digital Realities.";
    const headlineWords = headline.split(' ');

    return (
        <section
            className="relative pt-40 md:pt-48 pb-20 md:pb-32 text-white overflow-hidden"
        >
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1627404434613-597576f7c3c2?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-shadow-lg">
                        {headlineWords.map((word, index) => (
                            <span key={index} className="word-wrapper">
                                <span
                                    className="animate-word-reveal"
                                    style={{ animationDelay: `${index * 0.08}s` }}
                                >
                                    {word}&nbsp;
                                </span>
                            </span>
                        ))}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 text-shadow">
                       At Omnisoft, we merge creative vision with technical expertise to build powerful, scalable, and user-centric digital solutions that define the future.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a href="#our-journey" className="bg-violet-600 text-white font-bold py-3 px-8 rounded-full hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 inline-block text-lg">
                            Our Journey
                        </a>
                        <a href="#contact" className="border-2 border-violet-500 text-white font-bold py-3 px-8 rounded-full hover:bg-violet-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-block text-lg">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;