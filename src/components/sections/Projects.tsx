import { ScrollReveal } from "../animations/ScrollReveal";
import BorderGlow from "../ui/BorderGlow";

const PROJECTS = [
    {
        title: "viZZion",
        description: "AI-powered assistive navigation system that turns real-time computer vision into haptic feedback, helping visually impaired users navigate safely — built at HackAI 2026 and awarded the Texas Instruments track.",
        tags: ["PyTorch", "OpenCV", "Raspberry Pi"],
        link: "https://github.com/leosantosss/HACKAI2026"
    },
    {
        title: "Chycho's Inventory",
        description: "Full-stack inventory management system for Chycho's Mexican Food, with AI-powered invoice scanning that reads delivery receipts and reconciles them against the item catalog automatically.",
        tags: ["Next.js", "MongoDB", "Anthropic API"],
        link: "https://github.com/leosantosss/inventory-app"
    },
    {
        title: "Aggie Agenda",
        description: "Aggregates Canvas, syllabi, and campus events into one calendar — reads syllabi to auto-extract deadlines and exports everything straight to Google Calendar for Texas A&M students.",
        tags: ["React", "Django", "Supabase"],
        link: "https://www.aggieagenda.com/"
    },
    {
        title: "Tech Assist",
        description: "iOS app built with SwiftUI that helps technicians triage work orders by priority, track active jobs with a built-in timer, and hit daily completion targets.",
        tags: ["SwiftUI", "Swift", "iOS"],
        link: "https://github.com/anirvinKotaru/TechAssist"
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="relative py-32 px-8">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-l-2 border-accent pl-8">
                    <ScrollReveal direction="up">
                        <h2 className="mt-2 text-5xl md:text-7xl font-bold tracking-tighter font-serif italic">
                            Projects
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.1}>
                        <p className="text-muted max-w-sm md:text-right">
                            A collection of things I&apos;ve built, from full-stack platforms to mobile apps.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project, index) => (
                        <ScrollReveal
                            key={index}
                            direction={index % 2 === 0 ? "right" : "left"}
                            delay={index * 0.1}
                            className="w-full"
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full"
                            >
                            <BorderGlow
                                className="group h-full hover:-translate-y-1 transition-transform duration-500"
                                backgroundColor="var(--background)"
                                borderRadius={24}
                                glowColor="40 80 80"
                                colors={["#c084fc", "#f472b6", "#38bdf8"]}
                            >
                            <div className="h-full p-10 min-h-[360px] flex flex-col justify-between">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold tracking-tight duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted leading-relaxed max-w-sm">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="pt-8 flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="font-mono text-[10px] uppercase tracking-tighter px-3 py-1.5 rounded-full bg-accent-soft text-accent"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </BorderGlow>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
