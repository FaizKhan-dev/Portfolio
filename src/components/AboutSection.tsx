import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import ScrollRevealText from "./ScrollRevealText";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

export default function AboutSection() {
  // Configured segments for Faiz Khan's creative introduction
  const headingSegments = [
    { text: "I am Faiz Khan, ", className: "font-normal text-[#E1E0CC]" },
    { text: "a creative frontend engineer. ", className: "font-serif italic text-primary" },
    {
      text: "I build responsive performance-driven user interfaces and interactive web platforms.",
      className: "font-normal text-[#E1E0CC]",
    },
  ];

  const experienceList = [
    {
      role: "Frontend Developer",
      company: "Asasa Tech",
      period: "Feb 2026 – Apr 2026",
      badge: "Remote · Sole Web Developer",
      details: [
        "Independently designed and built full frontend of company's live agency web application (asasatech.com)",
        "Constructed clean reusable component structures and optimized cross-browser compatibility end-to-end",
        "Pioneered modern performance layers to drive fluid, high-conversion visual pipelines"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Asasa Tech",
      period: "Sep 2025 – Jan 2026",
      badge: "Remote · E-Commerce Team",
      details: [
        "Contributed production frontend code deployed to thousands of real shopping users at retrego.com",
        "Integrated robust RESTful API endpoints and designed responsive layout states",
        "Participated daily in active Agile sprints, structured QA feedback loops, and Git reviews"
      ]
    }
  ];

  return (
    <section
      className="w-full bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center relative z-10"
      id="about"
    >
      <div
        className="w-full max-w-6xl bg-[#101010] rounded-2xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 border border-white/5 shadow-2xl shadow-black/80 flex flex-col items-center relative overflow-hidden"
        id="about-container-card"
      >
        {/* Subtle decorative background light accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Small header label */}
        <span
          className="text-primary tracking-[0.2em] text-[10px] sm:text-xs uppercase font-medium mb-6 sm:mb-8 block"
          id="about-label"
        >
          Visual Profiling
        </span>

        {/* Main large heading with multi-style words pull-up */}
        <div className="max-w-4xl mb-12 sm:mb-16 md:mb-20 text-center" id="about-heading-wrapper">
          <WordsPullUpMultiStyle
            segments={headingSegments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] sm:leading-[1.0] lg:leading-[0.95]"
          />
        </div>

        {/* Separator Accent */}
        <div className="w-12 h-[1px] bg-primary/20 mb-12" aria-hidden="true" />

        {/* Scroll link character reveal paragraph */}
        <div className="max-w-3xl text-center mb-16 md:mb-24" id="about-body-wrapper">
          <ScrollRevealText
            text="Over the last few years, I have engineered and shipped production code for established platforms, working in highly collaborative structures. From standalone agency deployments to live high-traffic retail carts, visual precision and responsive performance guide every keystroke."
            className="text-primary text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose"
          />
        </div>

        {/* Professional Experience, Education and Certifications Matrix */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 text-left pt-12 border-t border-white/5 relative z-10" id="experience-matrix">
          
          {/* Left Column (8 cols): Experience chronological timeline */}
          <div className="lg:col-span-8 flex flex-col gap-8" id="experience-column">
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-lg md:text-xl font-medium tracking-tight text-[#E1E0CC]">
                Professional Milestones
              </h3>
            </div>

            <div className="flex flex-col gap-8 pl-1 border-l border-white/5" id="timeline-body">
              {experienceList.map((job, idx) => (
                <div key={idx} className="relative pl-6 group" id={`timeline-item-${idx}`}>
                  {/* Glowing vertical node dot */}
                  <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/20 border border-primary group-hover:bg-primary transition-colors duration-500" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base sm:text-lg font-medium text-[#E1E0CC] group-hover:text-white transition-colors duration-300">
                      {job.role} <span className="font-serif italic text-primary">@ {job.company}</span>
                    </h4>
                    <span className="font-mono text-xs text-gray-500 font-medium whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <span className="inline-block text-[10px] md:text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-primary/80 mb-3 uppercase tracking-wider font-semibold">
                    {job.badge}
                  </span>

                  <ul className="space-y-2 mt-2" id={`timeline-details-${idx}`}>
                    {job.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-gray-400 text-xs sm:text-sm pl-4 relative">
                        <span className="absolute left-0 text-primary/50 font-mono">•</span>
                        <span className="group-hover:text-gray-300 transition-colors duration-500">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Education & Certifications */}
          <div className="lg:col-span-4 flex flex-col gap-8 md:gap-12" id="education-column">
            
            {/* Education subsection */}
            <div className="flex flex-col gap-6" id="education-sub">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-[#E1E0CC]">
                  Academic Foundation
                </h3>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/25 transition-all duration-500">
                <span className="font-mono text-[10px] text-gray-500 block mb-1">
                  Expected Graduation: 2027
                </span>
                <h4 className="text-sm font-semibold text-[#E1E0CC] mb-1">
                  BS in Software Engineering
                </h4>
                <p className="text-xs text-primary/80 mb-2">
                  Sindh Madressatul Islam University
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary/60" />
                    Karachi, Pakistan
                  </span>
                  <span className="text-[#E1E0CC]">CGPA 3.3 / 4.0</span>
                </div>
              </div>
            </div>

            {/* Certifications subsection */}
            <div className="flex flex-col gap-6" id="certifications-sub">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-[#E1E0CC]">
                  Credentials
                </h3>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/25 transition-all duration-500 flex gap-4 items-start">
                <div className="bg-primary/10 p-2.5 rounded-lg border border-primary/20 text-primary shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-500 block">
                    AWS Cloud Certification
                  </span>
                  <h4 className="text-sm font-semibold text-[#E1E0CC] mt-0.5">
                    AI Essentials
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Amazon Web Services (AWS) · June 2025
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
