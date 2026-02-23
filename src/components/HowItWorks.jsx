import React from 'react';
import { UserPlus, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            icon: UserPlus,
            title: 'Create Profile',
            description: 'Showcase your skills, bio, and past projects to stand out.'
        },
        {
            icon: Users,
            title: 'Find Your Squad',
            description: 'Browse teams looking for your skills or start your own.'
        },
        {
            icon: Rocket,
            title: 'Build & Ship',
            description: 'Collaborate in real-time and turn ideas into reality.'
        }
    ];

    return (
        <section className="py-24 px-6 bg-white dark:bg-gray-950" id="how-it-works">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                    >
                        How PinMate Works.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        From idea to execution in three simple steps.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-200 dark:bg-gray-800 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-4 border-gray-100 dark:border-gray-800 flex items-center justify-center mb-8 shadow-sm">
                                <step.icon size={32} className="text-black dark:text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
