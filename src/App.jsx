import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import CodeQuiz from "./components/CodeQuiz";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Background Particle — di belakang semua konten */}
      <ParticleBackground />

      {/* Konten utama — z-10 biar di atas particle */}
      <div className="relative z-10">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <CodeQuiz />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;