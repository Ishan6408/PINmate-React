import { User, Users, Briefcase } from 'lucide-react';

const TeamCard = ({ leaderName, memberCount, spotsAvailable, category, onJoin }) => {
    return (
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full text-left">
            <div className="flex justify-between items-start mb-4">
                <span className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {category}
                </span>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium">
                    <span className={spotsAvailable > 0 ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"}>
                        {spotsAvailable} spots left
                    </span>
                </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                <User size={18} className="text-gray-400" />
                {leaderName}
            </h3>

            <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700 flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{memberCount} members</span>
                </div>
                <button
                    onClick={onJoin}
                    className="text-black dark:text-white font-semibold hover:underline"
                >
                    Join Team &rarr;
                </button>
            </div>
        </div>
    );
};

export default TeamCard;
