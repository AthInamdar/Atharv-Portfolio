import React, { useState } from 'react';
import Section from './Section';
import { personalInfo } from '../data/portfolio';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/atharvinamdar595@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    return (
        <Section
            id="contact"
            background={
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/Contact_Background.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
                </div>
            }
        >
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-medium tracking-wide mb-2">GET IN TOUCH</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold">
                        Let's Work Together
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                        <p className="text-text-muted mb-8 leading-relaxed">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Email Me</p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-primary transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-secondary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Location</p>
                                    <p className="text-white">Mumbai, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                    placeholder="ABC XYZ"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                    placeholder="abcxyz@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-text-muted">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {status === 'submitting' ? (
                                <>Sending...</>
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} />
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-400 text-sm text-center font-medium">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-sm text-center font-medium">Something went wrong. Please try again.</p>
                        )}
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
