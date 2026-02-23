import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Code, FileText, Globe, ArrowRight, Plus, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ProfileSetup = () => {
    const navigate = useNavigate();
    const { user, updateProfile } = useAuth();

    const [formData, setFormData] = useState({
        bio: user?.bio || '',
        skills: user?.skills || [],
        collaborations: user?.collaborations ? user.collaborations.join(', ') : ''
    });

    const [skillInput, setSkillInput] = useState('');

    const handleAddSkill = (e) => {
        e.preventDefault();
        if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
            setFormData(prev => ({
                ...prev,
                skills: [...prev.skills, skillInput.trim()]
            }));
            setSkillInput('');
        }
    };

    const removeSkill = (skillToRemove) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill !== skillToRemove)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfile({
                bio: formData.bio,
                skills: formData.skills,
                collaborations: formData.collaborations.split(',').map(s => s.trim()).filter(Boolean)
            });
            navigate('/');
        } catch (error) {
            console.error("Profile update failed:", error);
            alert("Failed to update profile. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-grid-pattern pb-12">
            <Navbar />

            <div className="max-w-2xl mx-auto px-6 mt-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-3 dark:text-white">{user?.bio ? 'Update Your Profile' : 'Complete Your Profile'}</h1>
                    <p className="text-gray-500 dark:text-gray-400">Tell us about your skills and experience.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Skills Section */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Code size={16} /> Skills
                            </label>
                            <div className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAddSkill(e)}
                                    className="flex-1 p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 dark:text-white placeholder:text-gray-400"
                                    placeholder="Add a skill (e.g. React, UX Design)"
                                />
                                <button
                                    type="button"
                                    onClick={handleAddSkill}
                                    className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.skills.map(skill => (
                                    <span key={skill} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                        {skill}
                                        <button type="button" onClick={() => removeSkill(skill)} className="hover:text-red-500 dark:hover:text-red-400">
                                            <X size={14} />
                                        </button>
                                    </span>
                                ))}
                                {formData.skills.length === 0 && (
                                    <span className="text-sm text-gray-400 italic">No skills added yet.</span>
                                )}
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <FileText size={16} /> Bio
                            </label>
                            <textarea
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                required
                                rows="3"
                                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 resize-none dark:text-white placeholder:text-gray-400"
                                placeholder="A short introduction about yourself..."
                            ></textarea>
                        </div>

                        {/* Previous Collaborations */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Globe size={16} /> Previous Collaborations
                            </label>
                            <textarea
                                value={formData.collaborations}
                                onChange={(e) => setFormData({ ...formData, collaborations: e.target.value })}
                                rows="2"
                                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 resize-none dark:text-white placeholder:text-gray-400"
                                placeholder="List any past projects or hackathons (comma separated)..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                        >
                            {user?.bio ? 'Update Profile' : 'Complete Profile'} <ArrowRight size={20} />
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetup;
