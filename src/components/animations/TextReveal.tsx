"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
    text: string;
    type?: "chars" | "words";
    delay?: number;
    className?: string;
    stagger?: number;
}

export const TextReveal = ({
    text,
    type = "chars",
    delay = 0,
    className = "",
    stagger = 0.03,
}: TextRevealProps) => {
    const items = type === "chars" ? text.split("") : text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            filter: "blur(12px)",
            y: 10,
        },
    } as any;

    return (
        <motion.div
            style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {items.map((item, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    style={{ marginRight: type === "words" ? "0.25em" : "0" }}
                >
                    {item === " " ? "\u00A0" : item}
                </motion.span>
            ))}
        </motion.div>
    );
};
