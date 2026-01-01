import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-text-muted text-sm">
                            © {new Date().getFullYear()} Atharv Inamdar. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="text-text-muted hover:text-primary transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>

                    <div className="flex items-center text-sm text-text-muted">
                        <span>Made with</span>
                        <Heart size={16} className="mx-1 text-accent fill-accent" />
                        <span>using React & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
