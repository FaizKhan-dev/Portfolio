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
  const containerRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const totalChars = chars.length;

  return (
    <p
      ref={containerRef}
      className={`${className} leading-relaxed tracking-wider text-center`}
      id="scroll-reveal-text"
    >
      {chars.map((char, index) => (
        <AnimatedLetter
          key={index}
          char={char}
          index={index}
          totalChars={totalChars}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
