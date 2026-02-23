import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ActionCard from '../components/ActionCard';
import Footer from '../components/Footer';
import { Search, Plus } from 'lucide-react';

import ProblemSection from '../components/ProblemSection';
import HowItWorks from '../components/HowItWorks';
import CoreCapabilities from '../components/CoreCapabilities';

const Home = () => {
    return (
        <div className="min-h-screen bg-grid-pattern flex flex-col">
            <Navbar />
            <Hero />

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 mb-32 flex-grow">
                <ActionCard
                    to="/join"
                    icon={Search}
                    title="Join a Team"
                    description="Browse opportunities by project type and role."
                    dark={false}
                />
                <ActionCard
                    to="/create"
                    icon={Plus}
                    title="Create a Team"
                    description="Post a need. Find talent. Build fast."
                    dark={true}
                />
            </div>

            <ProblemSection />
            <HowItWorks />
            <CoreCapabilities />

            <Footer />
        </div>
    );
};

export default Home;
