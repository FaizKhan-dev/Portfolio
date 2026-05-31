import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";

export default function App() {
  const handleNavClick = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="bg-black min-h-screen w-full text-[#E1E0CC] selection:bg-primary selection:text-black overflow-x-hidden relative">
      {/* Absolute top subtle grain texture to run globally */}
      <div className="bg-noise absolute inset-0 opacity-[0.02] pointer-events-none z-50 h-full w-full" />
      
      {/* Primary Landing Page Layout containing 3 core sections */}
      <HeroSection onNavClick={handleNavClick} />
      <AboutSection />
      <FeaturesSection />
    </main>
  );
}
