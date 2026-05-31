import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check, ArrowRight, Mail, MapPin, Globe, Linkedin, Github, Code, Layout, BrainCircuit, Database } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Styled segments for top header
  const headerSegmentsLines = [
    { text: "Selected engineering products & visual assets.", className: "text-[#E1E0CC] block mb-2" },
    { text: "Bound by elegant component architecture. Driven by clean code.", className: "text-gray-500 block" },
  ];

  const card1VideoUrl =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

  // Real projects checklist mappings
  const asasaChecklist = [
    "Sole developer on official asasatech.com agency web application",
    "Translating complex Figma layouts into high-performance React",
    "Architecting smooth cross-browser responsive layouts",
    "Fully custom-designed transitions using Tailwind animations",
  ];

  const retregoChecklist = [
    "Shipped interactive e-commerce layouts directly to active users",
    "Seamless integration of secure RESTful backend API endpoints",
    "Collaborative Agile development, peer code reviews, and Git flow",
  ];

  const smartChecklist = [
    "Dukan Manager: Supabase automated stock track & PDF data report",
    "YouTube Summarizer: Python backend with transcript extraction & NLP",
    "Intuitive inventory layouts for non-technical shop owners",
  ];

  // Grouped Technical Skills
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-4 h-4 text-primary" />,
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5/CSS3"]
    },
    {
      title: "Frontend Core",
      icon: <Layout className="w-4 h-4 text-primary" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Vite"]
    },
    {
      title: "Backend & Storage",
      icon: <Database className="w-4 h-4 text-primary" />,
      skills: ["FastAPI", "MySQL", "MongoDB", "Supabase", "Node.js (basic)"]
    },
    {
      title: "AI & Tooling",
      icon: <BrainCircuit className="w-4 h-4 text-primary" />,
      skills: ["LangChain", "OpenAI APIs", "YouTube Data API", "Git/GitHub", "Figma"]
    }
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      className="relative min-h-screen bg-black w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-8 xl:px-12 flex flex-col justify-between overflow-hidden"
      id="features"
    >
      {/* Background Subtle Noise Overlay (15% capacity) */}
      <div
        className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0"
        id="features-noise-bg"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24" id="features-content">
        
        {/* Header Text area */}
        <div className="w-full flex flex-col items-center justify-center text-center px-4" id="features-header">
          <WordsPullUpMultiStyle
            segments={headerSegmentsLines}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug max-w-3xl"
          />
        </div>

        {/* 4-Column Card Grid with real user achievements */}
        <motion.div
          ref={containerRef}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-2 w-full"
          id="features-grid"
        >
          
          {/* Card 1: Studio Theme video looping */}
          <motion.div
            variants={cardVariants}
            className="relative lg:h-[480px] h-[360px] md:h-[400px] overflow-hidden rounded-2xl border border-white/5 bg-[#212121] flex flex-col justify-end p-6 group cursor-pointer shadow-lg shadow-black/40"
            id="feature-card-1"
          >
            <video
              src={card1VideoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              id="feature-card-video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none" />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Subtle top indicator for visual uniformity */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
              <span className="text-[10px] font-mono font-medium uppercase tracking-[0.15em] text-[#DEDBC8]/50">
                Core Ethos
              </span>
              <span className="font-mono text-xs text-[#DEDBC8]/40">Active</span>
            </div>

            <div className="relative z-10 select-none pb-2" id="card-1-label">
              <h4 className="text-lg sm:text-xl font-medium tracking-tight text-[#E1E0CC] group-hover:text-white transition-colors duration-300">
                Shaping interfaces with total pixel fidelity.
              </h4>
            </div>
          </motion.div>

          {/* Card 2: Asasa Tech Agency Website */}
          <motion.div
            variants={cardVariants}
            className="lg:h-[480px] bg-[#212121] border border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#DEDBC8]/25 hover:shadow-xl hover:shadow-black/65 transition-all duration-500 shadow-md shadow-black/30"
            id="feature-card-2"
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                  alt="Asasa Tech icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                  id="card-2-icon"
                />
                <span className="font-mono text-xs text-gray-500 group-hover:text-primary/70 transition-colors duration-300">
                  01 · Corporate
                </span>
              </div>

              <div>
                <h4 className="text-lg font-medium tracking-tight text-[#E1E0CC] mb-4 group-hover:text-white transition-colors duration-300">
                  Asasa Tech Website
                </h4>
                <ul className="space-y-3" id="card-2-list">
                  {asasaChecklist.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="https://asasatech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-medium text-primary cursor-pointer select-none no-underline"
              id="card-2-learn"
            >
              <span className="group-hover:text-white transition-colors duration-300">Visit Live site</span>
              <div className="w-7 h-7 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:text-black transition-transform duration-500" />
              </div>
            </a>
          </motion.div>

          {/* Card 3: Retrego E-Commerce Platform */}
          <motion.div
            variants={cardVariants}
            className="lg:h-[480px] bg-[#212121] border border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#DEDBC8]/25 hover:shadow-xl hover:shadow-black/65 transition-all duration-500 shadow-md shadow-black/30"
            id="feature-card-3"
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                  alt="Retrego icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                  id="card-3-icon"
                />
                <span className="font-mono text-xs text-gray-500 group-hover:text-primary/70 transition-colors duration-300">
                  02 · Platform
                </span>
              </div>

              <div>
                <h4 className="text-lg font-medium tracking-tight text-[#E1E0CC] mb-4 group-hover:text-white transition-colors duration-300">
                  Retrego Platform
                </h4>
                <ul className="space-y-3" id="card-3-list">
                  {retregoChecklist.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="https://retrego.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-medium text-primary cursor-pointer select-none no-underline"
              id="card-3-learn"
            >
              <span className="group-hover:text-white transition-colors duration-300">Explore platform</span>
              <div className="w-7 h-7 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:text-black transition-transform duration-500" />
              </div>
            </a>
          </motion.div>

          {/* Card 4: Smart Systems & Tools */}
          <motion.div
            variants={cardVariants}
            className="lg:h-[480px] bg-[#212121] border border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#DEDBC8]/25 hover:shadow-xl hover:shadow-black/65 transition-all duration-500 shadow-md shadow-black/30"
            id="feature-card-4"
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                  alt="Dukan Manager icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                  id="card-4-icon"
                />
                <span className="font-mono text-xs text-gray-500 group-hover:text-primary/70 transition-colors duration-300">
                  03 · Intelligence
                </span>
              </div>

              <div>
                <h4 className="text-lg font-medium tracking-tight text-[#E1E0CC] mb-4 group-hover:text-white transition-colors duration-300">
                  Smart Systems
                </h4>
                <ul className="space-y-3" id="card-4-list">
                  {smartChecklist.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="https://github.com/Faizkhan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-medium text-primary cursor-pointer select-none no-underline"
              id="card-4-learn"
            >
              <span className="group-hover:text-white transition-colors duration-300">View source repos</span>
              <div className="w-7 h-7 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:text-black transition-transform duration-500" />
              </div>
            </a>
          </motion.div>

        </motion.div>

        {/* Technical Stack Workbench (Badges and groupings) */}
        <div className="w-full border-t border-white/5 pt-16 flex flex-col gap-8 relative z-10" id="tech-profile-workbench">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#DEDBC8]/50 block">
              Core Capabilities
            </span>
            <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#E1E0CC]">
              Technical Stack & Workbench
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="skills-grid-layout">
            {skillCategories.map((cat, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-[#101010]/80 border border-white/5 hover:border-primary/20 transition-all duration-500 group"
                id={`skill-cat-${sIdx}`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 text-xs">
                    {cat.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#E1E0CC] group-hover:text-white transition-colors duration-300">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5" id={`tags-container-${sIdx}`}>
                  {cat.skills.map((skill, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono select-none px-2.5 py-1 rounded bg-[#212121]/50 border border-white/5 text-gray-400 hover:text-white hover:border-primary/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Inquiry Section (Footer block) so that Nav links scroll down smoothly */}
        <div
          className="border-t border-white/5 pt-16 mt-8 flex flex-col md:flex-row justify-between gap-12 text-gray-500"
          id="inquiries"
        >
          <div className="flex flex-col gap-4">
            <h5 className="font-serif italic text-[#E1E0CC] text-2xl" id="inquiries-head text">
              Initiate connection. Let's build.
            </h5>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-sans" id="inquiries-text font">
              Open to standard roles, creative agency partnerships, and remote collaborative production teams worldwide. Let's turn design maps into seamless interactive reality.
            </p>
            <div className="flex flex-col gap-2 mt-4 text-xs font-mono text-[#E1E0CC]/80" id="inquiries-address line">
              <a
                href="mailto:imfzkhn@gmail.com"
                className="flex items-center gap-2 hover:text-[#DEDBC8] transition-colors duration-300 no-underline"
                id="email-trigger"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>imfzkhn@gmail.com</span>
              </a>
              <a
                href="tel:+923072921182"
                className="flex items-center gap-2 hover:text-[#DEDBC8] transition-colors duration-300 no-underline"
                id="phone-trigger"
              >
                <Globe className="w-3.5 h-3.5 text-primary" />
                <span>+92 307 292 1182</span>
              </a>
              <div className="flex items-center gap-2" id="address-block">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Karachi, Pakistan · Remote Worldwide</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between font-mono text-xs text-gray-600 gap-6" id="footer-logo text">
            <div className="flex gap-6 uppercase tracking-widest text-[10px]" id="socials">
              <a
                href="https://linkedin.com/in/faiz-khan-4632b3365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors duration-300 no-underline text-gray-500"
                id="social-linkedin"
              >
                <Linkedin className="w-3 h-3" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Faizkhan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors duration-300 no-underline text-gray-500"
                id="social-github"
              >
                <Github className="w-3 h-3" />
                <span>GitHub</span>
              </a>
            </div>
            <p className="md:text-right" id="copyright-text">
              © {new Date().getFullYear()} FAIZ KHAN. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
