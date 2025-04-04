"use client";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./AnimatedText.module.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, className, highlightText }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split the text into words and characters
    const splitText = new SplitType(textRef.current, { types: "words, chars" });

    if (highlightText) {
      const highlightLower = highlightText.trim().toLowerCase();
      const wordsArray = splitText.words.map((word) => word.textContent.trim());
      const joinedText = wordsArray.join(" ").toLowerCase();

      // Find index of the highlight phrase in the words array
      const startIndex = joinedText.indexOf(highlightLower);
      if (startIndex !== -1) {
        const highlightWords = highlightText.split(" ");
        const wordCount = highlightWords.length;

        splitText.words.forEach((word, index) => {
          const phraseMatch = wordsArray.slice(index, index + wordCount).join(" ");
          if (phraseMatch.toLowerCase() === highlightLower) {
            for (let i = 0; i < wordCount; i++) {
              splitText.words[index + i]?.classList.add(styles.highlightedWord);
            }
          }
        });
      }
    }

    // GSAP animation
    gsap.from(splitText.chars, {
      opacity: 0,
      rotate: 10,
      y: 20,
      stagger: 0.05,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      // Cleanup animations to prevent memory leaks
      gsap.killTweensOf(splitText.chars);
    };
  }, [text]);

  return (
    <span ref={textRef} className={`${styles.animatedText} ${className || ""}`}>
      {text}
    </span>
  );
};

export default AnimatedText;
