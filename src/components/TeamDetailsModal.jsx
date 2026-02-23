import { X, Check } from 'lucide-react';

const TeamDetailsModal = ({ team, onClose, onConfirm }) => {
    if (!team) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="bg-black dark:bg-white text-white dark:text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                            {team.category}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {team.leaderName}'s Team
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                        <X size={24} className="text-gray-500 dark:text-gray-400" />
                    </button>
                </div>

                <div className="space-y-4 mb-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-1">
                            Description
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {team.description}
                        </p>
                    </div>

                    <div className="flex justify-between items-center py-3 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-gray-500 dark:text-gray-400">Members</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{team.memberCount} / {team.memberCount + team.spotsAvailable}</span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 px-4 rounded-xl border border-gray-200 dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onConfirm(team)}
                        className="flex-1 py-3 px-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                    >
                        Confirm Join <Check size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeamDetailsModal;
