"use client";

import { useEffect, useState } from "react";

interface TextTypeProps {
    text: string;
    className?: string;
    typingSpeed?: number;
    startDelay?: number;
    showCursor?: boolean;
}

export const TextType = ({
    text,
    className = "",
    typingSpeed = 55,
    startDelay = 0,
    showCursor = true,
}: TextTypeProps) => {
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        setDisplayed("");
        setTyping(true);
        let i = 0;
        let interval: ReturnType<typeof setInterval>;

        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                i += 1;
                setDisplayed(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(interval);
                    setTyping(false);
                }
            }, typingSpeed);
        }, startDelay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, typingSpeed, startDelay]);

    return (
        <span className={className}>
            {displayed}
            {showCursor && (
                <span
                    className={`inline-block w-[0.06em] ml-1 -mb-1 h-[0.85em] bg-current align-middle ${
                        typing ? "opacity-100" : "animate-blink"
                    }`}
                />
            )}
        </span>
    );
};
