import { TextReveal } from "../animations/TextReveal";
import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="relative z-10 py-32 px-8 max-w-7xl mx-auto min-h-[80vh] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                <div className="flex flex-col gap-6">
                    <TextReveal
                        text="About Me."
                        className="text-4xl md:text-5xl font-bold tracking-tighter"
                    />

                    <div className="w-20 h-1 bg-accent" />

                    <TextReveal
                        text="I am a passionate software developer obsessed with bridging the gap between elegant design and complex functionality. With a strong foundation in modern web technologies, I love to build products that feel alive and intuitive."
                        type="words"
                        delay={0.2}
                        className="text-lg text-muted leading-relaxed"
                    />

                    <TextReveal
                        text="When I'm not writing code, you can find me exploring new technologies, refining my design skills, or planning my next big project. I believe that the best digital experiences are rooted in simplicity and polished with great attention to detail."
                        type="words"
                        delay={0.4}
                        className="text-lg text-muted leading-relaxed"
                    />
                </div>

                <div className="relative w-full max-w-xs mx-auto lg:ml-auto">
                    {/* Polaroid Container */}
                    <div className="relative group p-4 pb-12 bg-foreground shadow-[0_20px_50px_rgba(51,68,140,0.3)] rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                        <div className="relative aspect-square overflow-hidden bg-accent-soft">
                            {/* Actual Profile Image */}
                            <Image
                                src="/profile.png"
                                alt="Leo Santos"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Subtle Texture Overlay */}
                            <div className="absolute inset-0 bg-black/5 pointer-events-none mix-blend-overlay" />
                        </div>
                        {/* Polaroid Bottom Caption Area */}
                        <div className="absolute bottom-3 left-4 right-4 text-center">
                            <span className="font-serif italic text-sm text-background/60">
                                Leo Santos, 2026
                            </span>
                        </div>
                    </div>
                    {/* Shadow underneath for more depth */}
                    <div className="absolute -inset-2 bg-accent/10 blur-2xl -z-10 rounded-full" />
                </div>
            </div>
        </section>
    );
};
