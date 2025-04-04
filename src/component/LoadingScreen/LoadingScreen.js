"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out whole loading screen
        gsap.to(".loading-screen", {
          opacity: 0,
          duration: 0.5,
          onComplete: () => onComplete && onComplete(),
        });
      },
    });
  
    // Progress Count Up
    tl.to({ value: 0 }, {
      value: 100,
      duration: 2.5,
      ease: "power4.out",
      onUpdate: function () {
        const currentValue = Math.round(this.targets()[0].value);
        setProgress(currentValue);
      },
    });
  
    // SVG Stroke Animation
    gsap.fromTo(
      "#svgText",
      { strokeDasharray: 1000, strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 2, ease: "power3.out", delay: 0.5 }
    );
  
    // After stroke complete, add fill
    gsap.to("#svgText", {
      fill: "white",
      duration: 1,
      delay: 2.5, // After progress animation
      ease: "power2.inOut",
    });
  }, [onComplete]);
  

  return (
    <div className={`${styles.loadingScreen} loading-screen`}>
      {/* Preloader Text Animation */}
      <div className={styles.preloader_text}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 600"
          className={styles.preloader_text_svg}
        >
          <text
            id="svgText"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ fontSize: "160px", fontWeight: 800 }} // ✅ Bigger text
          >
            DGTALISTS
          </text>
        </svg>
      </div>
      {/* Progress Bar */}
      <h1 style={{ color: "white" }}>{progress}%</h1>{" "}
      {/* Ensuring progress text is also visible */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default LoadingScreen;
