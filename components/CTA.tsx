
import React from 'react';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-20 md:py-32 text-center" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1), transparent 70%)'
        }}>
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight animate-fade-in-up">
                    Let's Build Together
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Have a project in mind or just want to learn more? We'd love to hear from you. Let's collaborate to create something extraordinary.
                </p>
                <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <a 
                        href="mailto:contact@omnisoft.digital"
                        className="bg-violet-600 text-white font-bold py-4 px-10 rounded-full hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 inline-block text-lg shadow-lg shadow-violet-500/20"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
