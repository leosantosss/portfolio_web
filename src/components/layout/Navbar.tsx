"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 w-full bg-background/80 backdrop-blur-md border-b border-dashed border-beige dark:border-stone-800 text-foreground"
        >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                <a href="#hero" className="font-serif italic font-bold text-2xl tracking-tighter hover:opacity-70 transition-opacity">
                    Leo Santos.
                </a>
                <nav className="flex gap-8 font-mono text-xs uppercase tracking-widest">
                    <a href="#about" className="hover:text-stone-500 transition-colors">About</a>
                    <a href="#projects" className="hover:text-stone-500 transition-colors">Projects</a>
                    <a href="/Leonardo_Santos_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-stone-500 transition-colors">Resume</a>
                </nav>
            </div>
        </motion.header>
    );
};
