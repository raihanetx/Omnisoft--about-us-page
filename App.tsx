import React from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import OurPhilosophy from './components/OurPhilosophy';
import OurVision from './components/OurVision';
import OurValues from './components/OurValues';
import OurTeam from './components/OurTeam';
import CTA from './components/CTA';

const App: React.FC = () => {
    // Header, Footer, and Contact components and their related logic have been removed.
    // The application now presents a more focused, continuous content flow.
    return (
        <div className="overflow-x-hidden">
            <main>
                <Hero />
                <OurStory />
                <OurVision />
                <OurPhilosophy />
                <OurValues />
                <OurTeam />
                <CTA />
            </main>
        </div>
    );
}

export default App;