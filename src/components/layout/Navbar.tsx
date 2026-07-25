"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 w-full bg-background/80 backdrop-blur-md border-b border-dashed border-accent-soft text-foreground"
        >
            <a href="#hero" className="font-serif italic font-bold text-2xl tracking-tighter hover:text-accent transition-colors">
                Leo Santos.
            </a>
            <nav className="flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
                <a href="#about" className="hover:text-accent transition-colors">About</a>
                <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
                <a href="/Leonardo_Santos_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Resume</a>
            </nav>
        </motion.header>
    );
};
