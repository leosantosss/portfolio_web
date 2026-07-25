import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full py-12 px-8 flex flex-col md:flex-row items-center justify-between text-foreground/50 text-sm max-w-7xl mx-auto border-t border-foreground/10 mt-24">
            <p>© {new Date().getFullYear()} Leo Santos. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 font-medium tracking-wide">
                <Link href="https://github.com/leosantosss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Github className="w-4 h-4" /> GITHUB
                </Link>
                <Link href="https://www.linkedin.com/in/leonardo-sssantos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Linkedin className="w-4 h-4" /> LINKEDIN
                </Link>
                <Link href="mailto:lsantos021149@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Mail className="w-4 h-4" /> EMAIL
                </Link>
            </div>
        </footer>
    );
};