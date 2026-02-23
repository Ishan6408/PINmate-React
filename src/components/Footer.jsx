import { ArrowDown } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-20">
                    <div className="mb-10 md:mb-0">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                            <span className="text-2xl font-bold tracking-tight">PINmate</span>
                        </div>
                        <p className="text-gray-400 max-w-xs leading-relaxed">
                            A campus-first initiative.<br />
                            Connecting intellects, one node at a time.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Manifesto</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">GitHub</a>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-gray-500">
                    <p>© 2024 PINmate Platform. All rights reserved.</p>
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>System Status: Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
