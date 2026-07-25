import { TextType } from "../animations/TextType";
import { TechMarquee } from "../ui/TechMarquee";

export const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center px-8"
        >
            <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">

                <div className="flex flex-col items-center">
                    <TextType
                        text="Welcome, I am"
                        showCursor={false}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-tight"
                    />
                    <TextType
                        text="Leo Santos."
                        startDelay={850}
                        className="text-accent italic font-serif text-6xl md:text-8xl lg:text-9xl tracking-normal"
                    />
                </div>

                <div className="mt-12 flex items-center justify-center gap-6">
                    <a
                        href="#about"
                        className="px-8 py-4 bg-accent text-white rounded-full font-medium hover:scale-105 hover:brightness-110 transition-all"
                    >
                        Discover More
                    </a>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
                <TechMarquee />
            </div>
        </section>
    );
};
