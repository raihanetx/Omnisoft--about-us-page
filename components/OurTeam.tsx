
import React from 'react';

const foundingMembersData = [
    { 
        name: "Alamin Khan", 
        role: "CEO, Co-Founder", 
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop" 
    },
    { 
        name: "Tahcin Ul Karim", 
        role: "CTO, Co-Founder", 
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop"
    },
    { 
        name: "Ahmmed Imtiaz", 
        role: "Lead Backend Architect, Founding Member", 
        img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop" 
    },
    { 
        name: "Mehedi Hasan", 
        role: "Lead Frontend Architect, Founding Member", 
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=387&auto=format&fit=crop"
    }
];

const OurTeam: React.FC = () => {
    return (
        <section className="py-20 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Meet Our Founders</h2>
                    <p className="mt-4 text-lg text-slate-300">The driving force behind our innovation and success.</p>
                </div>
                
                <div className="flex justify-center items-center flex-wrap gap-8 [perspective:1200px]">
                    {foundingMembersData.map((member, index) => (
                        <div 
                            key={index} 
                            className="group flex-shrink-0 w-[260px] h-[340px] bg-slate-800 rounded-2xl overflow-hidden relative [transform-style:preserve-3d] transition-transform duration-500 ease-out hover:[transform:rotateY(15deg)_scale(1.05)] shadow-lg dark:shadow-black/20"
                        >
                            <img
                                src={member.img}
                                alt={`Portrait of ${member.name}`}
                                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent [transform:translateZ(50px)]">
                                <h3 className="text-xl font-bold text-white tracking-tight">{member.name}</h3>
                                <p className="text-base text-slate-300">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;