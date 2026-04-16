import React from 'react';

interface HalftoneIllustrationProps {
    type: 'gear' | 'leaf' | 'skull' | 'constellation' | 'butterfly' | 'compass' | 'telescope';
    className?: string;
    opacity?: number;
}

/**
 * A component that renders SVG-based "halftone/stippled" style illustrations
 * for background decoration, inspired by vintage field journals.
 */
export const HalftoneIllustration: React.FC<HalftoneIllustrationProps> = ({
    type,
    className = "",
    opacity = 0.25
}) => {
    const renderings = {
        gear: (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} style={{ opacity }}>
                <circle cx="50" cy="50" r="12" strokeWidth="2" />
                <path d="M50 10 L54 25 L46 25 Z M50 90 L54 75 L46 75 Z M90 50 L75 54 L75 46 Z M10 50 L25 54 L25 46 Z" fill="currentColor" />
                <path d="M78 22 L68 32 L62 26 Z M22 78 L32 68 L26 62 Z M78 78 L68 68 L62 74 Z M22 22 L32 32 L26 38 Z" fill="currentColor" />
                <circle cx="50" cy="50" r="32" strokeWidth="1.5" strokeDasharray="2 4" />
            </svg>
        ),
        leaf: (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} style={{ opacity }}>
                <path d="M50 10 C 20 40, 20 80, 50 95 C 80 80, 80 40, 50 10" strokeWidth="2" />
                <path d="M50 10 L 50 95" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M50 30 L 30 45 M 50 45 L 70 60 M 50 60 L 30 75 M 50 20 L 75 35" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
        ),
        skull: (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} style={{ opacity }}>
                <path d="M30 40 Q 50 5 70 40 Q 80 85 50 95 Q 20 85 30 40" strokeWidth="2" />
                <circle cx="42" cy="45" r="6" fill="currentColor" fillOpacity="0.3" />
                <circle cx="58" cy="45" r="6" fill="currentColor" fillOpacity="0.3" />
                <path d="M45 70 L 55 70 L 55 80 L 45 80 Z" strokeWidth="1.5" />
                <path d="M48 70 L 48 80 M 52 70 L 52 80" strokeWidth="1" />
            </svg>
        ),
        constellation: (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} style={{ opacity }}>
                <circle cx="20" cy="30" r="2.5" fill="currentColor" />
                <circle cx="45" cy="20" r="1.5" fill="currentColor" />
                <circle cx="70" cy="35" r="2" fill="currentColor" />
                <circle cx="60" cy="65" r="3" fill="currentColor" />
                <circle cx="30" cy="80" r="2" fill="currentColor" />
                <path d="M20 30 L 45 20 L 70 35 L 60 65 L 30 80 L 20 30" strokeWidth="1" strokeDasharray="4 6" />
            </svg>
        ),
        butterfly: (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} style={{ opacity }}>
                <path d="M50 40 C 30 20, 10 30, 10 55 C 10 75, 40 75, 50 55 C 60 75, 90 75, 90 55 C 90 30, 70 20, 50 40" strokeWidth="2" />
                <path d="M50 40 L 50 70" strokeWidth="2" />
                <path d="M35 45 Q 25 35, 15 45 M 65 45 Q 75 35, 85 45" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
        ),
        compass: (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} style={{ opacity }}>
                <circle cx="50" cy="50" r="40" strokeWidth="2" />
                <circle cx="50" cy="50" r="35" strokeWidth="0.5" strokeDasharray="1 3" />
                <path d="M50 15 L 55 50 L 50 85 L 45 50 Z" strokeWidth="1.5" fill="currentColor" fillOpacity="0.2" />
                <path d="M15 50 L 50 45 L 85 50 L 50 55 Z" strokeWidth="1.5" />
                <text x="47" y="10" fontSize="8" fill="currentColor" style={{ fontFamily: 'monospace' }}>N</text>
            </svg>
        ),
        telescope: (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={className} style={{ opacity }}>
                <path d="M20 70 L 50 20 L 80 50 L 30 90 Z" strokeWidth="2" />
                <path d="M45 28 L 55 38" strokeWidth="3" />
                <path d="M25 78 L 35 88" strokeWidth="3" />
                <path d="M50 20 L 40 10 M 80 50 L 90 60" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
        )
    };

    return renderings[type] || null;
};
