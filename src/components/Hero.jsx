import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/Home_Background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
            </div>

            {/* Background Glows */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] z-0" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-primary font-medium tracking-wide mb-4">HELLO, I'M</h2>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                            {personalInfo.name}
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-text-muted mb-6">
                            <span className="text-gradient font-bold">{personalInfo.title}</span>
                        </h3>
                        <p className="text-text-muted text-lg mb-8 max-w-lg leading-relaxed">
                            {personalInfo.intro}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-primary/10 text-primary border border-primary/50 rounded-full font-medium hover:bg-primary/20 transition-all duration-300 flex items-center gap-2 group"
                            >
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={personalInfo.resumeUrl}
                                className="px-8 py-3 bg-surface border border-white/10 text-white rounded-full font-medium hover:border-white/30 transition-all duration-300 flex items-center gap-2"
                            >
                                Download Resume
                                <Download size={18} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-96 h-96 mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
                            <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-surface/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                                {personalInfo.profileImage ? (
                                    <img
                                        src={personalInfo.profileImage}
                                        alt={personalInfo.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-text-muted text-center p-8">
                                        <p className="text-sm uppercase tracking-widest mb-2">Photo Placeholder</p>
                                        <p className="text-xs opacity-50">Add your photo here</p>
                                    </div>
                                )}
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl border border-white/10 text-sm font-medium text-primary"
                            >
                                Full-Stack Dev
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-8 -left-8 glass px-4 py-2 rounded-xl border border-white/10 text-sm font-medium text-secondary"
                            >
                                AI Enthusiast
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
