import CircularGradient from "@/components/elements/CircularGradient";
import About from "@/components/sessions-page/About";
import Contacts from "@/components/sessions-page/Contacts";
import Footer from "@/components/sessions-page/Footer";
import Hero from "@/components/sessions-page/Hero";
import Projects from "@/components/sessions-page/Projects";
import Skills from "@/components/sessions-page/Skills";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full relative justify-center flex flex-col scroll-smooth">

        <div className="lg:px-16">

          <Hero/>

          <CircularGradient/>

          <About/>

          <Skills/>

          <Projects/>

          <Contacts/>

        </div>

        <Footer/>

    </div>
  );
}
