
import React from 'react';

const OurVision: React.FC = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight animate-fade-in-up text-center">
                        Our Vision
                    </h2>
                    <p 
                        className="mt-8 text-xl md:text-2xl text-slate-300 animate-fade-in-up leading-relaxed text-left" 
                        style={{ animationDelay: '0.1s' }}
                    >
                        To define the next era of digital excellence by transforming ambitious ideas into tangible, future-proof realities. We build revolutionary products through deep collaboration and cutting-edge technology, setting new industry benchmarks and creating lasting global value.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurVision;