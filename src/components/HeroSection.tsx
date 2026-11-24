import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

interface HeroSectionProps {
  onNavClick: (sectionId: string) => void;
}

export default function HeroSection({ onNavClick }: HeroSectionProps) {
  // Navigation items
  const navItems = [
    { label: "About", target: "about" },
    { label: "Selected Work", target: "features" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <section
      className="relative w-full h-screen p-4 md:p-6 bg-black flex flex-col justify-between"
      id="hero-section"
    >
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-950 flex flex-col justify-between">
        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          id="hero-bg-video"
        />

        {/* Noise overlay */}
        <div
          className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none"
          id="hero-noise"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none"
          id="hero-gradient"
        />

        {/* Decorative subtle header line for top frame symmetry */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-white/5 pointer-events-none" />

        {/* Navbar */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-50 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 shadow-2xl border-x border-b border-white/5"
          id="navbar"
        >
          <ul
            className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14"
            id="nav-links"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => onNavClick(item.target)}
                  className="font-medium tracking-wide uppercase transition-colors duration-300 cursor-pointer select-none text-[10px] sm:text-xs md:text-sm"
                  style={{
                    color: "rgba(225, 224, 204, 0.8)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#E1E0CC";
                    e.currentTarget.style.textShadow = "0 0 8px rgba(225, 224, 204, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)";
                    e.currentTarget.style.textShadow = "none";
                  }}
                  id={`nav-item-${index}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Empty flex spacer for top alignment */}
        <div className="h-20" aria-hidden="true" />

        {/* Hero Content (bottom-aligned) */}
        <div
          className="relative z-20 w-full p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-end"
          id="hero-content"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end w-full">
            {/* Left 8 columns: Giant Heading */}
            <div className="lg:col-span-8 flex flex-col items-start" id="hero-heading-col">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/80 tracking-[0.2em] text-[10px] sm:text-xs uppercase font-medium mb-3 sm:mb-4 select-none"
                id="hero-name-eyebrow"
              >
                Faiz Khan
              </motion.span>
              <h1 className="sr-only">Faiz Khan — Software Engineer &amp; Builder.</h1>
              <WordsPullUp
                text="Software Engineer & Builder."
                showAsterisk={true}
                align="left"
                className="font-medium leading-[0.95] tracking-[-0.05em] select-none text-[10.5vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[5.8vw] xl:text-[5.5vw] 2xl:text-[5.2vw]"
                style={{ color: "#E1E0CC" }}
              />
            </div>

            {/* Right 4 columns: Text Description and CTA Button */}
            <div className="lg:col-span-4 flex flex-col items-start gap-6 sm:gap-8 xl:pl-4" id="hero-cta-col">
              {/* Description Paragraph */}
              <motion.p
                className="text-primary/70 text-xs sm:text-sm xl:text-base leading-[1.35] text-left pr-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5,
                }}
                id="hero-description"
              >
                I turn business problems into practical software, AI-powered workflows, and products people can use.
              </motion.p>

              {/* CTA Button "Let's work together" */}
              <motion.button
                onClick={() => onNavClick("contact")}
                className="group flex items-center justify-between gap-2.5 pl-5 pr-1.5 py-1.5 bg-primary hover:bg-[#fffdf0] text-black font-medium text-xs sm:text-sm rounded-full transition-all duration-500 cursor-pointer shadow-lg shadow-black/30 hover:shadow-primary/10 hover:gap-3.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.7,
                }}
                id="cta-join-lab"
              >
                <span>Let's work together</span>
                <span className="flex items-center justify-center bg-black hover:bg-neutral-900 rounded-full w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-500 transform group-hover:scale-110">
                  <ArrowRight
                    className="w-4 h-4 text-[#DEDBC8] transition-transform duration-500"
                    strokeWidth={2}
                    id="cta-arrow"
                  />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
