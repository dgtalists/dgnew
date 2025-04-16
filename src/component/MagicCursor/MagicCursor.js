"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./MagicCursor.module.css";

const MagicCursor = () => {
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleHover = (e) => {
      const target = e.target;
    
      // Add 'inView' class when hovering over an element with 'cursorButton' class
      if (target.classList.contains("cursorButton")) {
        target.classList.add("inView"); // Add 'inView' class
    
        gsap.to(cursorRef.current, {
          scale: 4.5,
          backgroundColor: "#fff",
        });
    
        gsap.to(cursorLabelRef.current, {
          opacity: 1,
          scale: 0.3,
          duration: 0.2,
        });
      }
    };
    

    const handleLeave = (e) => {
      const target = e.target;
    
      if (target.classList.contains("cursorButton")) {
        target.classList.remove("inView"); // Remove 'inView' class on leave
    
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "rgba(0, 150, 207, 0.7)",
        });
    
        gsap.to(cursorLabelRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
        });
      }
    };
    

    const handleClick = () => {
      gsap.to(cursorRef.current, {
        scale: 1.2,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);
    const hoverElements = document.querySelectorAll(".cursorButton");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.magicCursor}>
        <div ref={cursorLabelRef} className={styles.magicCursorLabel}>
          Click Me
        </div>
      </div>
    </>
  );
};

export default MagicCursor;
