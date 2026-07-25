import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiDjango,
    SiMongodb,
    SiFirebase,
    SiSupabase,
    SiOpencv,
} from "react-icons/si";
import type { IconType } from "react-icons";

const STACK: { label: string; Icon: IconType; color: string }[] = [
    { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { label: "React", Icon: SiReact, color: "#61DAFB" },
    { label: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
    { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { label: "Python", Icon: SiPython, color: "#3776AB" },
    { label: "Django", Icon: SiDjango, color: "#44B78B" },
    { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { label: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { label: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
    { label: "React Native", Icon: SiReact, color: "#61DAFB" },
    { label: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
];

export const TechMarquee = () => {
    const items = [...STACK, ...STACK];

    return (
        <div className="relative z-10 w-full overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-12">
                {items.map(({ label, Icon, color }, i) => (
                    <span
                        key={i}
                        className="flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted"
                    >
                        <Icon className="w-5 h-5" style={{ color }} />
                        {label}
                    </span>
                ))}
            </div>
        </div>
    );
};
