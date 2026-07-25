import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { AmbientBackground } from "@/components/ui/AmbientBackground";

export default function Home() {
  return (
    <main className="w-full relative overflow-hidden">
      <AmbientBackground />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
