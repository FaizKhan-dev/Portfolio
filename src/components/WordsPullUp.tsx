import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  showAsterisk?: boolean;
  className?: string;
  delayOffset?: number;
  style?: any;
}

export default function WordsPullUp({
  text,
  showAsterisk = false,
  className = "",
  delayOffset = 0,
  style = {},
}: WordsPullUpProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap justify-center ${className}`}
      style={style}
      id="words-pull-up-container"
    >
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;

        return (
          <span
            key={index}
            className="inline-block overflow-hidden mr-[0.2em] last:mr-0 relative"
            style={{ verticalAlign: "bottom" }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : { y: "100%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: delayOffset + index * 0.08,
              }}
              style={{ position: "relative" }}
            >
              {word}
              {isLastWord && showAsterisk && (
                <span
                  className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]"
                  style={{
                    fontFamily: "sans-serif",
                    lineHeight: 1,
                  }}
                  id="prisma-asterisk"
                >
                  *
                </span>
              )}
            </motion.span>
            {/* Reserve extra visual space for the superscript asterisk so it doesn't get clipped */}
            {isLastWord && showAsterisk && (
              <span className="inline-block w-[0.25em]" aria-hidden="true" />
            )}
          </span>
        );
      })}
    </div>
  );
}
