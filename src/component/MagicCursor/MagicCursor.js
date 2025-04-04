"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const MagicCursor = () => {
  const cursorRef = useRef(null);
  const cursorCircleRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleHover = (e) => {
      if (e.target.classList.contains("cursor-text")) {
        gsap.to(cursorRef.current, { scale: 1.5, backgroundColor: "rgba(255, 255, 255, 0.3)" });
        gsap.to(e.target, { textDecoration: "underline", duration: 0.2 });
      } else if (e.target.classList.contains("cursor-button")) {
        gsap.to(cursorRef.current, { scale: 2, backgroundColor: "#ff6b6b" });
      }
    };

    const handleLeave = (e) => {
      gsap.to(cursorRef.current, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.7)" });
      gsap.to(e.target, { textDecoration: "none", duration: 0.2 });
    };

    const handleClick = () => {
      gsap.to(cursorCircleRef.current, { scale: 3, opacity: 0, duration: 0.4, ease: "power3.out", onComplete: () => {
        gsap.set(cursorCircleRef.current, { scale: 1, opacity: 1 });
      }});
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll(".cursor-text, .cursor-button").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
      document.querySelectorAll(".cursor-text, .cursor-button").forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="magic-cursor"></div>
      <div ref={cursorCircleRef} className="magic-cursor-circle"></div>
    </>
  );
};

export default MagicCursor;
