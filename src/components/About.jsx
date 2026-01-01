import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/portfolio';
import { Code, Brain, Rocket } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: Code,
            title: "Full-Stack Dev",
            description: "Building scalable web applications with modern technologies like React, Node.js, and Tailwind."
        },
        {
            icon: Brain,
            title: "AI Enthusiast",
            description: "Exploring the potential of Artificial Intelligence and Machine Learning to solve real-world problems."
        },
        {
            icon: Rocket,
            title: "Problem Solver",
            description: "Passionate about tackling complex challenges and delivering efficient, user-centric solutions."
        }
    ];

    return (
        <Section id="about" className="bg-surface/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-primary font-medium tracking-wide mb-2">ABOUT ME</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                        Crafting Digital Experiences with Passion
                    </h3>
                    <p className="text-text-muted text-lg mb-6 leading-relaxed">
                        I am a Computer Engineering student with a deep passion for technology and innovation.
                        My journey involves constantly learning new tools and frameworks to build better software.
                    </p>
                    <p className="text-text-muted text-lg mb-8 leading-relaxed">
                        {personalInfo.intro}
                    </p>

                    <div className="flex gap-4">
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-white">5+</span>
                            <span className="text-sm text-text-muted">Projects Completed</span>
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div className="text-center">
                            <span className="block text-3xl font-bold text-white">1+</span>
                            <span className="text-sm text-text-muted">Years Experience</span>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="glass-card p-6 rounded-xl flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <card.icon size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                                <p className="text-text-muted">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
