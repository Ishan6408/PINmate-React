import { Moon, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();

    return (
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
            <Link to="/" className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
                PINMATE
            </Link>
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? (
                        <Moon size={20} className="text-gray-600 dark:text-gray-300" />
                    ) : (
                        <Sun size={20} className="text-gray-600 dark:text-gray-300" />
                    )}
                </button>

                {user ? (
                    <div className="flex items-center gap-4">
                        <Link to="/profile-setup" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                            Edit Profile
                        </Link>
                        <span className="font-semibold text-sm hidden sm:block dark:text-white">Hi, {user.name}</span>
                        <button
                            onClick={logout}
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                        >
                            Sign Out
                        </button>
                        <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs uppercase">
                            {user.name.charAt(0)}
                        </div>
                    </div>
                ) : (
                    <Link to="/signin" className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                        Sign In <ArrowRight size={18} />
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
