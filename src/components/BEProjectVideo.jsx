import React, { useState } from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const BEProjectVideo = () => {
    const [expanded, setExpanded] = useState(false);

    const description = `Niyatkalpa is a medicine-donation platform designed to reduce medical waste and help people who cannot afford essential medicines. It allows donors to upload unused or near-expiry medicines using OCR-based scanning, which automatically reads labels and extracts important information. The platform ensures all uploaded medicines are safe, verified, and visible to receivers who genuinely need them. By connecting donors and receivers with a simple, transparent process, Niyatkalpa promotes social good and minimizes wastage in the healthcare ecosystem.`;

    return (
        <Section id="be-project-video">
            <div className="text-center mb-16">
                <h2 className="text-primary font-medium tracking-wide mb-2">PROJECT SHOWCASE</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold">
                    Niyatkalpa Project Overview
                </h3>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden p-2"
            >
                {/* Video Section */}
                {/* Video Section - YouTube Embed */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black/50">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/5tJfwMqH_Tw?si=LGuMiI-XeMQ_Q48Z"
                        title="Niyatkalpa Project Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Description Section */}
                <div className="p-6">
                    <h3 className="text-text-muted text-center mb-3">
                        BE project, Niyatkalpa - A Timely Solution for Medicines.
                    </h3>

                    <div className="relative">
                        <div
                            className={`text-center text-gray-300 overflow-hidden transition-all duration-300 ${expanded ? "max-h-[1000px]" : "max-h-20"
                                }`}
                        >
                            {description}

                            {/* Report Link INSIDE Expand Section */}
                            {expanded && (
                                <div className="flex justify-center mt-6">
                                    <a
                                        href="https://docs.google.com/presentation/d/1k6wMhelHGOxjNJNDPMD_W-Q6dAutgcudrHCLLWnz1Ks/edit?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition cursor-pointer"
                                    >
                                        View Full Project Presentation
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* Gradient Fade (only when collapsed) */}
                        {!expanded && (
                            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent"></div>
                        )}
                    </div>

                    {/* Toggle Button */}
                    <div className="flex justify-center mt-3">
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-blue-400 hover:underline text-sm font-medium"
                        >
                            {expanded ? "Read Less ▲" : "Read More ▼"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

export default BEProjectVideo;
