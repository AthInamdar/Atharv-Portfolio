import React from 'react';
import { motion as Motion } from 'framer-motion';

const Section = ({ children, id, className = "", background }) => {
    return (
        <section id={id} className={`py-20 relative ${className}`}>
            {background}
            <Motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
            >
                {children}
            </Motion.div>
        </section>
    );
};

export default Section;
