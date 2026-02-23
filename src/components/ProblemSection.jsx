import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
    const problems = [
        {
            number: '1',
            title: 'Convenience Trap',
            description: 'Teams usually form based on who sits nearby, not who has the right skills for the job.'
        },
        {
            number: '2',
            title: 'Skill Mismatch',
            description: 'Great ideas fail because builders can\'t find designers, and researchers can\'t find coders.'
        },
        {
            number: '3',
            title: 'Social Noise',
            description: 'Other platforms are too noisy. Finding a serious partner shouldn\'t feel like a popularity contest.'
        }
    ];

    return (
        <section className="py-24 px-6 bg-black text-white" id="problem">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-[#0A0A0A] p-10 rounded-3xl border border-gray-900 transition-transform hover:scale-[1.02] duration-300"
                        >
                            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-500 font-mono text-sm mb-6 border border-gray-800">
                                {problem.number}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
