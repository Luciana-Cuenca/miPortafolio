import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import SeparatorTriangle from "../components/SeparatorTriangle";
import SectionDivider from "../components/SectionDivider";
import Skills from "@/components/Skills";
import Proyects from "@/components/Proyects";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <SeparatorTriangle />

      <About />

      <SectionDivider />

      <Skills />

      <SectionDivider />

      <Proyects />

    </main>
  );
}