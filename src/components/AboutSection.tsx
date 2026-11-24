import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import ScrollRevealText from "./ScrollRevealText";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

export default function AboutSection() {
  // Configured segments for Faiz Khan's introduction
  const headingSegments = [
    { text: "I am Faiz Khan, ", className: "font-normal text-[#E1E0CC]" },
    { text: "a software engineer and builder ", className: "font-serif italic text-primary" },
    {
      text: "who enjoys understanding problems before building solutions.",
      className: "font-normal text-[#E1E0CC]",
    },
  ];

  const aboutBodyText =
    "At Innosphere Studio, I work directly with clients to understand their requirements, coordinate development, and deliver practical software products.\n\n" +
    "My experience spans frontend and full-stack engineering, API integrations, backend systems, and AI-powered features.\n\n" +
    "I enjoy taking ideas from initial conversations to working products. I also teach English, which has strengthened my ability to communicate clearly and explain complex ideas.";

  const flagshipRole = {
    role: "Software Engineer",
    company: "Innosphere Studio",
    period: "2026–Present",
    location: "Remote",
    details: [
      "Work directly with clients to understand business problems, gather requirements, and translate them into development tasks.",
      "Coordinated a team of 5–6 people across two client builds: Lucify, a salon booking product for web and mobile, and an e-commerce platform. Both were delivered.",
      "Integrated client systems through APIs and automated CRM workflows used by client teams in their daily operations.",
      "Coordinate delivery, track progress in Jira, communicate risks, and support products after launch.",
      "Build full-stack applications using React, Next.js, TypeScript, Python, and FastAPI as required.",
      "Designed and developed the Innosphere Studio website.",
    ],
  };

  const asasaRoles = [
    {
      role: "Frontend Developer",
      period: "December 2025 – June 2026",
      location: "Remote",
      details: [
        "Designed and built the frontend of the company's live website.",
        "Developed responsive interfaces and reusable components using React and Next.js.",
        "Focused on usability, performance, and consistent frontend architecture.",
      ],
    },
    {
      role: "Software Engineering Intern",
      period: "September 2025 – November 2025",
      location: "Remote",
      details: [
        "Contributed frontend features to Retrego, a live retreat booking platform.",
        "Integrated REST APIs and handled responsive UI states.",
        "Worked with Git, code reviews, QA feedback, and Agile development workflows.",
      ],
    },
  ];

  const teachingRole = {
    role: "Senior English Language Teacher",
    company: "European Institute",
    period: "Ongoing",
    details: [
      "Teach English regularly, developing communication, explanation, and presentation skills.",
    ],
  };

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
          A Little About Me
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

        {/* Scroll link character reveal paragraphs */}
        <div className="max-w-3xl text-center mb-16 md:mb-24" id="about-body-wrapper">
          <ScrollRevealText
            text={aboutBodyText}
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
                Experience
              </h3>
            </div>

            <div className="flex flex-col gap-8 pl-1 border-l border-white/10" id="timeline-body">
              {/* Role 1 (Strongest Emphasis): Software Engineer — Innosphere Studio */}
              <div className="relative pl-6 group" id="timeline-item-0">
                <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/15" />

                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-primary/20 hover:border-primary/35 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3 pb-3 border-b border-white/5">
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-[#E1E0CC] group-hover:text-white transition-colors duration-300">
                        {flagshipRole.role}{" "}
                        <span className="font-serif italic text-primary">@ {flagshipRole.company}</span>
                      </h4>
                    </div>
                    <span className="font-mono text-xs text-primary/90 font-medium whitespace-nowrap">
                      {flagshipRole.period} | {flagshipRole.location}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mt-3" id="timeline-details-0">
                    {flagshipRole.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-gray-300 text-xs sm:text-sm pl-4 relative leading-relaxed">
                        <span className="absolute left-0 text-primary/70 font-mono">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Role Group 2: Asasa Tech (Grouped progression from Intern to Developer) */}
              <div className="relative pl-6 group" id="timeline-item-1">
                <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary/20 border border-primary group-hover:bg-primary transition-colors duration-500" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                  <h4 className="text-base sm:text-lg font-medium text-[#E1E0CC] group-hover:text-white transition-colors duration-300">
                    <span className="font-serif italic text-primary">Asasa Tech</span>
                  </h4>
                  <span className="font-mono text-xs text-gray-500 font-medium whitespace-nowrap">
                    September 2025 – June 2026 | Remote
                  </span>
                </div>

                {/* Separate positions visually grouped under Asasa Tech */}
                <div className="flex flex-col gap-6 pl-4 sm:pl-5 border-l border-white/10">
                  {asasaRoles.map((roleItem, rIdx) => (
                    <div key={rIdx} className="relative" id={`asasa-role-${rIdx}`}>
                      <div className="absolute -left-[21px] sm:-left-[25px] top-1.5 w-2 h-2 rounded-full bg-[#101010] border border-primary/50" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                        <h5 className="text-sm sm:text-base font-medium text-[#E1E0CC]">
                          {roleItem.role}
                        </h5>
                        <span className="font-mono text-[11px] sm:text-xs text-gray-500 whitespace-nowrap">
                          {roleItem.period} | {roleItem.location}
                        </span>
                      </div>

                      <ul className="space-y-2 mt-2" id={`asasa-details-${rIdx}`}>
                        {roleItem.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-gray-400 text-xs sm:text-sm pl-4 relative leading-relaxed">
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

              {/* Role 3 (Lower Visual Emphasis): Senior English Language Teacher — European Institute */}
              <div className="relative pl-6 group opacity-80 hover:opacity-100 transition-opacity duration-300" id="timeline-item-2">
                <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/10 border border-white/25 group-hover:border-primary/60 transition-colors duration-500" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h4 className="text-sm sm:text-base font-medium text-[#E1E0CC]/90">
                    {teachingRole.role}{" "}
                    <span className="font-serif italic text-primary/80">@ {teachingRole.company}</span>
                  </h4>
                  <span className="font-mono text-xs text-gray-500 font-medium whitespace-nowrap">
                    {teachingRole.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mt-1.5" id="timeline-details-2">
                  {teachingRole.details.map((detail, dIdx) => (
                    <li key={dIdx} className="text-gray-400 text-xs sm:text-sm pl-4 relative leading-relaxed">
                      <span className="absolute left-0 text-primary/40 font-mono">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Education & Certifications */}
          <div className="lg:col-span-4 flex flex-col gap-8 md:gap-12" id="education-column">
            
            {/* Education subsection */}
            <div className="flex flex-col gap-6" id="education-sub">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-[#E1E0CC]">
                  Education
                </h3>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/25 transition-all duration-500">
                <span className="font-mono text-[10px] text-gray-500 block mb-1">
                  Expected Graduation: June 2027
                </span>
                <h4 className="text-sm font-semibold text-[#E1E0CC] mb-1">
                  BS Software Engineering
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
                  Certification
                </h3>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/25 transition-all duration-500 flex gap-4 items-start">
                <div className="bg-primary/10 p-2.5 rounded-lg border border-primary/20 text-primary shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-gray-500 block">
                    AWS Certification
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
