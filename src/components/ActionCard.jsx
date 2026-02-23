import { Link } from 'react-router-dom';

const ActionCard = ({ to, icon: Icon, title, description, dark }) => {
    return (
        <Link
            to={to}
            className={`
        flex flex-col items-center justify-center p-12 rounded-[2.5rem] 
        transition-transform hover:scale-105 duration-300 w-full md:w-[400px] h-[350px]
        ${dark
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-white text-black border border-gray-100 shadow-sm dark:bg-gray-900 dark:text-white dark:border-gray-800'}
      `}
        >
            <div className={`p-4 rounded-3xl mb-6 ${dark ? 'bg-white/10 dark:bg-black/5' : 'bg-gray-50 dark:bg-gray-800'}`}>
                <Icon size={32} className={dark ? 'text-white dark:text-black' : 'text-black dark:text-white'} />
            </div>
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            <p className={`text-center max-w-[250px] ${dark ? 'text-gray-400 dark:text-gray-600' : 'text-gray-500 dark:text-gray-400'}`}>
                {description}
            </p>
        </Link>
    );
};

export default ActionCard;
