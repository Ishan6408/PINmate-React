import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Sparkles, Users, AlignLeft, ArrowRight } from 'lucide-react';

import { useTeam } from '../context/TeamContext';

const CreateTeam = () => {
    const navigate = useNavigate();
    const { addTeam } = useTeam();
    const [formData, setFormData] = useState({
        category: 'Hackathon',
        description: '',
        spots: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addTeam({
                category: formData.category,
                description: formData.description,
                spots: formData.spots
            });

            alert("Team created successfully! Redirecting to home...");
            navigate('/');
        } catch (error) {
            console.error("Failed to create team:", error);
            alert("Failed to create team. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-grid-pattern pb-12">
            <Navbar />

            <div className="max-w-2xl mx-auto px-6 mt-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-3 dark:text-white">Create a Team</h1>
                    <p className="text-gray-500 dark:text-gray-400">Share your idea and find the right people to build it.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Category Selection */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Sparkles size={16} /> Category
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {['Hackathon', 'Ideathon', 'Project', 'Research', 'Open Source', 'Other'].map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, category: cat }))}
                                        className={`
                      py-2 px-4 rounded-xl text-sm font-medium transition-all border
                      ${formData.category === cat
                                                ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700'}
                    `}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <AlignLeft size={16} /> Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Describe your project, goals, and who you're looking for..."
                                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 resize-none placeholder:text-gray-400 dark:text-white"
                            ></textarea>
                        </div>

                        {/* Spots Available */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Users size={16} /> Spots Available
                            </label>
                            <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-700 p-2 rounded-xl w-fit">
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, spots: Math.max(1, prev.spots - 1) }))}
                                    className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-600 rounded-lg shadow-sm font-bold text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500"
                                >
                                    -
                                </button>
                                <span className="font-bold w-4 text-center dark:text-white">{formData.spots}</span>
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, spots: Math.min(10, prev.spots + 1) }))}
                                    className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-600 rounded-lg shadow-sm font-bold text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                            >
                                Post Team <ArrowRight size={20} />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTeam;
