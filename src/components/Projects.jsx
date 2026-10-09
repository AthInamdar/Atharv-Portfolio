import React from 'react';
import Section from './Section';
import { projects } from '../data/portfolio';
import { motion as Motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <Section id="projects">
            <div className="text-center mb-16">
                <h2 className="text-primary font-medium tracking-wide mb-2">PORTFOLIO</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold">
                    Featured Projects
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass-card project-card rounded-2xl overflow-hidden group flex flex-col h-full ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                    >
                        <div className={`relative overflow-hidden ${index === 0 ? 'h-64 md:h-80' : 'h-48'}`}>
                            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10 opacity-60" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-text-muted text-sm mb-4 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-2 py-1 bg-white/5 rounded text-text-muted"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-white transition-colors"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </Motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
