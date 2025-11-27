import CircularGradient from "@/components/elements/CircularGradient";
import About from "@/components/sessions-page/About";
import Hero from "@/components/sessions-page/Hero";
import Skills from "@/components/sessions-page/Skills";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full relative justify-center flex flex-col">

        <Hero/>

        <CircularGradient/>

        <About/>

        <Skills/>

    </div>
  );
}
