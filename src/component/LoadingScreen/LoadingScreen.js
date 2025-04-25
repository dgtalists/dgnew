"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const text = "DGTALISTS";

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".loading-screen", {
          opacity: 0,
          duration: 0.5,
          onComplete: () => onComplete && onComplete(),
        });
      },
    });

    // Progress Count Up
    tl.to(
      { value: 0 },
      {
        value: 100,
        duration: 2.5,
        ease: "power4.out",
        onUpdate: function () {
          const currentValue = Math.round(this.targets()[0].value);
          setProgress(currentValue);
        },
      }
    );

    // Skew animation for each letter
    // 3D rotate and translate animation
    gsap.fromTo(
      ".skew-letter",
      {
        rotateY: 90,
        y: 50,
        opacity: 0,
        transformOrigin: "center",
      },
      {
        rotateY: 0,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.3,
      }
    );
  }, [onComplete]);
  
 
  
  return (
    <div className={`${styles.loadingScreen} loading-screen`}>
      {/* Skew Text Animation */}
      <div
        className={styles.preloader_text}
        style={{ display: "flex", gap: "4px" }}
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className={"skew-letter"}
            style={{
              display: "inline-block",
              color: "white",
              fontSize: "64px",
              fontWeight: "bold",
              transformOrigin: "center left",
              transformStyle: "preserve-3d",
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default LoadingScreen;
