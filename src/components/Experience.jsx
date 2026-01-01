import React from 'react';
import Section from './Section';
import { experience, education } from '../data/portfolio';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="experience" className="bg-surface/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Experience Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-3xl font-display font-bold">Experience</h3>
                    </div>

                    <div className="space-y-8">
                        {experience.map((job) => (
                            <div key={job.id} className="relative pl-8 border-l border-white/10">
                                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,242,255,0.5)]" />

                                <div className="glass-card p-6 rounded-xl">
                                    <span className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                                        <Calendar size={12} />
                                        {job.period}
                                    </span>
                                    <h4 className="text-xl font-bold mb-1">{job.role}</h4>
                                    <h5 className="text-text-muted mb-4">{job.company}</h5>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {job.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="text-3xl font-display font-bold">Education</h3>
                    </div>

                    <div className="space-y-8">
                        {education.map((edu) => (
                            <div key={edu.id} className="relative pl-8 border-l border-white/10">
                                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(112,0,255,0.5)]" />

                                <div className="glass-card p-6 rounded-xl">
                                    <span className="inline-flex items-center gap-2 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-4">
                                        <Calendar size={12} />
                                        {edu.period}
                                    </span>
                                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                                    <h5 className="text-text-muted mb-4">{edu.institution}</h5>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
