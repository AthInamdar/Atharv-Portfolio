import React, { Suspense, lazy } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Workstation = lazy(() => import('./Workstation'));

export default function Hero() {
    const reduceMotion = useReducedMotion();
    return <section id="home" className="hero-section relative flex min-h-screen items-center overflow-hidden pt-24 pb-14">
        <video autoPlay loop muted playsInline className="hero-video" aria-hidden="true"><source src="/Home_Background.mp4" type="video/mp4" /></video>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="hero-wrap relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
            <Motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-copy">
                <div className="eyebrow"><span className="status-dot" /> COMPUTER ENGINEERING · FULL-STACK DEVELOPMENT</div>
                <h1 className="hero-title">Building ideas<br />into <span>real things.</span></h1>
                <h2 className="hero-name">{personalInfo.name}</h2>
                <p className="hero-role">{personalInfo.title}</p>
                <p className="hero-intro">{personalInfo.intro}</p>
                <div className="hero-actions">
                    <a href="#projects" className="button-primary">View Projects <ArrowRight size={17} /></a>
                    <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="button-quiet">View Resume <Download size={16} /></a>
                    <a href="#contact" className="button-quiet contact-quick"><Mail size={16} /><span>Contact</span></a>
                </div>
                <div className="hero-footnote"><Sparkles size={14} /> Curious by nature. Practical by design.</div>
            </Motion.div>
            <Motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }} className="hero-scene-wrap">
                <div className="scene-label scene-label-top"><span className="scene-live" /> WORKSPACE / 01 <span>INTERACTIVE SCENE</span></div>
                <Suspense fallback={<div className="scene-fallback"><div className="fallback-monitor"><div /><i /><i /><i /></div></div>}><Workstation /></Suspense>
                <div className="scene-terminal"><div className="terminal-head"><span>~/atharv/workspace</span><span className="terminal-dots">● ● ●</span></div><div><b>const</b> idea = <em>"make it useful"</em>;</div><div>build(idea)<span className="cursor-blink">_</span></div></div>
                <div className="scene-label scene-label-bottom">DESIGN <span>+</span> ENGINEERING <span>+</span> CURIOSITY</div>
            </Motion.div>
        </div>
        <a href="#about" className="hero-scroll" aria-label="Scroll to About">SCROLL TO EXPLORE <span /></a>
    </section>;
}
