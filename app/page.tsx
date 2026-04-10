import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-slate-900 to-black text-white">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-24 md:space-y-32 pb-24 md:pb-32">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}