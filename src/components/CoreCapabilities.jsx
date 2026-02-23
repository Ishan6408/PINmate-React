import React from 'react';
import { MessageSquare, Zap, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreCapabilities = () => {
    const capabilities = [
        {
            icon: Zap,
            title: 'Smart Matching',
            description: 'Our algorithm connects you with people who complement your skills, not just those nearby.'
        },
        {
            icon: MessageSquare,
            title: 'Real-time Collaboration',
            description: 'Built-in chat and project management tools to keep your team aligned and moving fast.'
        },
        {
            icon: Shield,
            title: 'Verified Skills',
            description: 'Trust who you work with. Peer-reviewed skill endorsements ensure quality connections.'
        },
        {
            icon: Globe,
            title: 'Global Network',
            description: 'Access a campus-wide network of innovators, creators, and builders.'
        }
    ];

    return (
        <section className="py-24 px-6 bg-gray-50 dark:bg-black" id="capabilities">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                    >
                        Core Capabilities.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl"
                    >
                        Everything you need to build a high-performance team.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex gap-6 p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300 group"
                        >
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                                    <cap.icon size={24} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{cap.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {cap.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreCapabilities;
