import { ScrollReveal } from "../animations/ScrollReveal";
import { TextReveal } from "../animations/TextReveal";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-8"
        >
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-200/20 dark:bg-amber-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-200/20 dark:bg-orange-950/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">

                <div className="flex flex-col items-center">
                    <TextReveal
                        text="Hello, I am"
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-tight"
                    />
                    <TextReveal
                        text="Leo Santos."
                        delay={0.4}
                        className="text-stone-500 italic font-serif text-6xl md:text-8xl lg:text-9xl tracking-normal"
                    />
                </div>

                <div className="mt-12 flex items-center justify-center gap-6">
                    <a
                        href="#about"
                        className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform"
                    >
                        Discover More
                    </a>
                </div>
            </div>
        </section>
    );
};
