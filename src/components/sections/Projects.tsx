import { ScrollReveal } from "../animations/ScrollReveal";

const PROJECTS = [
    {
        id: "01",
        title: "viZZion",
        description: "A beautiful web application built with next.js and tailwind.",
        tags: ["OpenCV", "Python", ""]
    },
    {
        id: "02",
        title: "Nudge",
        description: "Full-stack financial literacy platform intended for college students that empowers users to make informed decisions about their money.",
        tags: ["MongoDB", "Google Gemini API", "Auth0"]
    },
    {
        id: "03",
        title: "Aggie Agenda",
        description: "Your unified platform for time management at Texas A&M University.",
        tags: ["React", "Django", "Supabase"]
    },
    {
        id: "04",
        title: "Tech Assist",
        description: "iOS Mobile app that digitizes database center workflows enabling technicians to resolve server issues through QR-driven, guided repair playbooks.",
        tags: ["React Native", "Firebase", "Expo"]
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 px-8 relative overflow-hidden border-t border-dashed border-beige dark:border-stone-800">

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24 text-left border-l-2 border-foreground pl-8">
                    <ScrollReveal direction="up">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter font-serif italic">Projects</h2>
                    </ScrollReveal>
                </div>

                <div className="border-t border-l border-dashed border-beige dark:border-stone-800 grid grid-cols-1 md:grid-cols-2">
                    {PROJECTS.map((project, index) => (
                        <ScrollReveal
                            key={index}
                            direction={index % 2 === 0 ? "right" : "left"}
                            delay={index * 0.1}
                            className="w-full"
                        >
                            <div
                                className={`group relative p-12 border-b border-r border-dashed border-beige dark:border-stone-800 min-h-[400px] flex flex-col justify-between hover:bg-beige/20 dark:hover:bg-stone-900/30 transition-colors cursor-pointer`}
                            >
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-sm text-stone-400 group-hover:text-foreground transition-colors">
                                        {project.id}
                                    </span>
                                    <div className="w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-800 group-hover:bg-foreground transition-colors" />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-stone-500 dark:text-stone-400 leading-relaxed max-w-sm">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="pt-8">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="font-mono text-[10px] uppercase tracking-tighter px-2 py-1 border border-stone-200 dark:border-stone-800 text-stone-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                        View Details <span className="text-lg">→</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
