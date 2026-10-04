import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import FeaturedProjects from "@/components/featuredProjects/FeaturedProjects";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Journey from "@/components/journey/Journey";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About />
      <Skills />
      <Journey />
      <Contact />
      <Footer />
      </main>
  );
}