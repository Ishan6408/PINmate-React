import { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const TeamContext = createContext();

export const useTeam = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/teams');
            const data = await res.json();
            if (res.ok) {
                // Formatting data to match UI expectations if needed, though backend returns robust objects
                // Backend returns: { _id, leader: {name, ...}, ... }
                // Frontend expects: { id, leaderName, ... }
                const formattedTeams = data.map(team => ({
                    ...team,
                    id: team._id,
                    leaderName: team.leader?.name || 'Unknown',
                    memberCount: team.members.length,
                    spotsAvailable: team.spotsAvailable // Assuming backend uses this name
                }));
                setTeams(formattedTeams);
            } else {
                throw new Error(data.message || 'Failed to fetch teams');
            }
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addTeam = async (newTeamData) => {
        // newTeamData: { category, description, spots }
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Not authenticated');

        try {
            const res = await fetch('/api/teams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    category: newTeamData.category,
                    description: newTeamData.description,
                    spotsAvailable: newTeamData.spots
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Failed to create team');
            }

            // Refresh teams list
            await fetchTeams();
            return data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    return (
        <TeamContext.Provider value={{ teams, addTeam, loading, error, refreshTeams: fetchTeams }}>
            {children}
        </TeamContext.Provider>
    );
};
