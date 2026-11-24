import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
  key?: any;
}

function AnimatedLetter({ char, index, totalChars, progress }: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  const start = charProgress - 0.1;
  const end = charProgress + 0.05;

  // Clamp the bounds between 0 and 1
  const clampedStart = Math.max(0, Math.min(1, start));
  const clampedEnd = Math.max(0, Math.min(1, end));

  // Ensure there is a small positive difference between start and end
  const safeStart = clampedStart;
  const safeEnd = clampedEnd > clampedStart ? clampedEnd : clampedStart + 0.005;

  const opacity = useTransform(progress, [safeStart, safeEnd], [0.2, 1]);

  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export default function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const paragraphs = text.split("\n\n").filter(Boolean);
  const totalChars = paragraphs.reduce((sum, p) => sum + p.length, 0);

  let runningIndex = 0;

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-5 text-center"
      id="scroll-reveal-text"
    >
      {paragraphs.map((paragraph, pIndex) => {
        const chars = paragraph.split("");
        const startOffset = runningIndex;
        runningIndex += chars.length;

        return (
          <p
            key={pIndex}
            className={`${className} leading-relaxed tracking-wider text-center`}
          >
            {chars.map((char, cIndex) => (
              <AnimatedLetter
                key={cIndex}
                char={char}
                index={startOffset + cIndex}
                totalChars={totalChars}
                progress={scrollYProgress}
              />
            ))}
          </p>
        );
      })}
    </div>
  );
}
