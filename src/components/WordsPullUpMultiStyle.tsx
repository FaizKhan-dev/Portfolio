import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface StyledSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: StyledSegment[];
  className?: string;
  delayOffset?: number;
}

export default function WordsPullUpMultiStyle({
  segments,
  className = "",
  delayOffset = 0,
}: WordsPullUpMultiStyleProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  // Flatten segments into individual words with their respective styles
  const allWords: { word: string; className: string }[] = [];

  segments.forEach((segment) => {
    const rawWords = segment.text.split(" ");
    rawWords.forEach((word) => {
      // Keep word even if empty/space to avoid spacing collapse, or skip empty words but preserve gap
      if (word.trim() !== "") {
        allWords.push({
          word,
          className: segment.className || "",
        });
      }
    });
  });

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap justify-center ${className}`}
      id="words-pull-up-multi-style"
    >
      {allWords.map(({ word, className: wordClass }, index) => {
        return (
          <span
            key={index}
            className="inline-block overflow-hidden mr-[0.22em] last:mr-0"
            style={{ verticalAlign: "bottom" }}
          >
            <motion.span
              className={`inline-block ${wordClass}`}
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delayOffset + index * 0.08,
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
