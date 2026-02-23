import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TeamCard from '../components/TeamCard';
import TeamDetailsModal from '../components/TeamDetailsModal';

import { useTeam } from '../context/TeamContext';

const JoinTeam = () => {
    const navigate = useNavigate();
    const { teams } = useTeam();
    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleJoinClick = (team) => {
        setSelectedTeam(team);
    };

    const handleCloseModal = () => {
        setSelectedTeam(null);
    };

    const handleConfirmJoin = (team) => {
        setSelectedTeam(null);
        navigate('/chat');
    };

    return (
        <div className="min-h-screen bg-grid-pattern pb-12">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 mt-8">
                <h1 className="text-4xl font-bold mb-2 dark:text-white">Join a Team</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-10">Find the perfect team for your next big project.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teams.map((team) => (
                        <TeamCard
                            key={team.id}
                            leaderName={team.leaderName}
                            memberCount={team.memberCount}
                            spotsAvailable={team.spotsAvailable}
                            category={team.category}
                            onJoin={() => handleJoinClick(team)}
                        />
                    ))}
                </div>
            </div>

            <TeamDetailsModal
                team={selectedTeam}
                onClose={handleCloseModal}
                onConfirm={handleConfirmJoin}
            />
        </div>
    );
};

export default JoinTeam;
