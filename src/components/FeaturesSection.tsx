import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check, ArrowRight, Mail, MapPin, Globe, Linkedin, Github, Code, Layout, BrainCircuit, Database } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Styled segments for top header
  const headerSegmentsLines = [
    { text: "Selected Work & Featured Projects.", className: "text-[#E1E0CC] block mb-2" },
    { text: "Building full-stack web products, responsive interfaces, and practical software.", className: "text-gray-500 block" },
  ];

  // Real projects checklist mappings
  const retregoChecklist = [
    "Contributed production frontend features to live e-commerce platform",
    "Integrated REST APIs and handled responsive UI states across application",
    "Built reusable components focused on performance and usability",
    "Worked in Agile team with Git workflows and code reviews",
  ];

  const innosphereChecklist = [
    "Built modern software and technology business website",
    "Developed clean, responsive frontend layouts with modern web standards",
    "Focused on product engineering, performance, and user interaction",
  ];

  const betproChecklist = [
    "Developed interactive web application interfaces and dynamic data flows",
    "Implemented responsive UI components and state management",
    "Focused on clean frontend architecture and API integration",
  ];

  const githubChecklist = [
    "More experiments, projects, and open-source work available on GitHub",
    "Full-stack applications, API integrations, and database projects",
    "AI-powered tools, automation scripts, and utility repositories",
  ];

  // Grouped Technical Skills
  const skillCategories = [
    {
      title: "Core & Frontend",
      icon: <Layout className="w-4 h-4 text-primary" />,
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
    },
    {
      title: "Backend & APIs",
      icon: <Database className="w-4 h-4 text-primary" />,
      skills: ["Python", "FastAPI", "REST APIs", "Node.js", "Databases", "Supabase", "Appwrite"]
    },
    {
      title: "AI Capabilities",
      icon: <BrainCircuit className="w-4 h-4 text-primary" />,
      skills: ["Generative AI", "LangChain", "CrewAI", "Gemini API", "Groq", "Ollama", "AI APIs"]
    },
    {
      title: "Engineering Tools",
      icon: <Code className="w-4 h-4 text-primary" />,
      skills: ["Git & GitHub", "Agile Workflow", "Figma to Code", "Vite", "RESTful Architecture"]
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

        {/* 4-Column Card Grid featuring priority projects */}
        <motion.div
          ref={containerRef}
          variants={gridVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-2 w-full"
          id="features-grid"
        >
          
          {/* Card 1: Priority 1 - Retrego */}
          <motion.div
            variants={cardVariants}
            className="lg:h-[480px] bg-[#212121] border border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#DEDBC8]/25 hover:shadow-xl hover:shadow-black/65 transition-all duration-500 shadow-md shadow-black/30"
            id="feature-card-1"
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                  alt="Retrego logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                  id="card-1-icon"
                />
                <span className="font-mono text-xs text-gray-500 group-hover:text-primary/70 transition-colors duration-300">
                  01 · E-Commerce Platform
                </span>
              </div>

              <div>
                <h4 className="text-lg font-medium tracking-tight text-[#E1E0CC] mb-4 group-hover:text-white transition-colors duration-300">
                  Retrego
                </h4>
                <ul className="space-y-3" id="card-1-list">
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
              href="https://www.retrego.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-medium text-primary cursor-pointer select-none no-underline"
              id="card-1-learn"
            >
              <span className="group-hover:text-white transition-colors duration-300">Visit retrego.com</span>
              <div className="w-7 h-7 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:text-black transition-transform duration-500" />
              </div>
            </a>
          </motion.div>

          {/* Card 2: Priority 2 - Innosphere */}
          <motion.div
            variants={cardVariants}
            className="lg:h-[480px] bg-[#212121] border border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#DEDBC8]/25 hover:shadow-xl hover:shadow-black/65 transition-all duration-500 shadow-md shadow-black/30"
            id="feature-card-2"
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                  alt="Innosphere logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                  id="card-2-icon"
                />
                <span className="font-mono text-xs text-gray-500 group-hover:text-primary/70 transition-colors duration-300">
                  02 · Web Studio
                </span>
              </div>

              <div>
                <h4 className="text-lg font-medium tracking-tight text-[#E1E0CC] mb-4 group-hover:text-white transition-colors duration-300">
                  Innosphere
                </h4>
                <ul className="space-y-3" id="card-2-list">
                  {innosphereChecklist.map((item, idx) => (
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
              href="https://www.innosphere.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-medium text-primary cursor-pointer select-none no-underline"
              id="card-2-learn"
            >
              <span className="group-hover:text-white transition-colors duration-300">Visit innosphere.studio</span>
              <div className="w-7 h-7 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:text-black transition-transform duration-500" />
              </div>
            </a>
          </motion.div>

          {/* Card 3: Priority 3 - BetProExchange */}
          <motion.div
            variants={cardVariants}
            className="lg:h-[480px] bg-[#212121] border border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#DEDBC8]/25 hover:shadow-xl hover:shadow-black/65 transition-all duration-500 shadow-md shadow-black/30"
            id="feature-card-3"
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                  alt="BetProExchange logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                  id="card-3-icon"
                />
                <span className="font-mono text-xs text-gray-500 group-hover:text-primary/70 transition-colors duration-300">
                  03 · Web Application
                </span>
              </div>

              <div>
                <h4 className="text-lg font-medium tracking-tight text-[#E1E0CC] mb-4 group-hover:text-white transition-colors duration-300">
                  BetProExchange
                </h4>
                <ul className="space-y-3" id="card-3-list">
                  {betproChecklist.map((item, idx) => (
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
              href="https://www.betproexchange.site"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-medium text-primary cursor-pointer select-none no-underline"
              id="card-3-learn"
            >
              <span className="group-hover:text-white transition-colors duration-300">Visit betproexchange.site</span>
              <div className="w-7 h-7 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 group-hover:text-black transition-transform duration-500" />
              </div>
            </a>
          </motion.div>

          {/* Card 4: GitHub Repositories & Open Source */}
          <motion.div
            variants={cardVariants}
            className="lg:h-[480px] bg-[#212121] border border-white/5 rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#DEDBC8]/25 hover:shadow-xl hover:shadow-black/65 transition-all duration-500 shadow-md shadow-black/30"
            id="feature-card-4"
          >
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-mono text-xs text-gray-500 group-hover:text-primary/70 transition-colors duration-300">
                  04 · Open Source & Labs
                </span>
              </div>

              <div>
                <h4 className="text-lg font-medium tracking-tight text-[#E1E0CC] mb-4 group-hover:text-white transition-colors duration-300">
                  GitHub Repositories
                </h4>
                <ul className="space-y-3" id="card-4-list">
                  {githubChecklist.map((item, idx) => (
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
              <span className="group-hover:text-white transition-colors duration-300">Explore GitHub Repos</span>
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
              Capabilities
            </span>
            <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#E1E0CC]">
              Technical Stack
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

        {/* Contact & Inquiries Section */}
        <div
          className="border-t border-white/5 pt-16 mt-8 flex flex-col md:flex-row justify-between gap-12 text-gray-500"
          id="contact"
        >
          <div className="flex flex-col gap-4">
            <h5 className="font-serif italic text-[#E1E0CC] text-2xl" id="inquiries-head text">
              Let's work together.
            </h5>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-sans" id="inquiries-text font">
              Open to software engineering roles, full-stack and frontend positions, and remote development opportunities worldwide. Feel free to reach out.
            </p>
            <div className="flex flex-col gap-2 mt-4 text-xs font-mono text-[#E1E0CC]/80" id="inquiries-address line">
              <a
                href="mailto:work.faizkhan.se@gmail.com"
                className="flex items-center gap-2 hover:text-[#DEDBC8] transition-colors duration-300 no-underline"
                id="email-trigger"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>work.faizkhan.se@gmail.com</span>
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
