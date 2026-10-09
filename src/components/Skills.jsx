import React from 'react';
import Section from './Section';
import { skills } from '../data/portfolio';
import { motion as Motion } from 'framer-motion';

const Skills = () => {
    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-primary font-medium tracking-wide mb-2">MY SKILLS</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold">
                    Technologies I Work With
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                    <Motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="glass-card p-8 rounded-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <skillGroup.icon size={100} />
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                <skillGroup.icon size={24} />
                            </div>
                            <h4 className="text-xl font-bold">{skillGroup.category}</h4>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-text-muted hover:text-white hover:border-primary/50 transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
