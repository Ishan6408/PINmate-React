import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
            navigate('/');
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div className="min-h-screen bg-grid-pattern pb-12">
            <Navbar />

            <div className="max-w-md mx-auto px-6 mt-16">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2 dark:text-white">Welcome Back</h1>
                        <p className="text-gray-500 dark:text-gray-400">Sign in to continue your journey.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Mail size={16} /> Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 dark:text-white placeholder:text-gray-400"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <Lock size={16} /> Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700 border-none focus:ring-2 focus:ring-black/5 dark:focus:ring-white/10 dark:text-white placeholder:text-gray-400"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                        >
                            Sign In <ArrowRight size={20} />
                        </button>
                    </form>

                    <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
                        Don't have an account? {' '}
                        <Link to="/signup" className="text-black dark:text-white font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
