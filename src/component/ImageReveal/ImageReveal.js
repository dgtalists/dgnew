"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./ImageReveal.module.css"; // Your CSS file

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = ({ src, alt, className }) => {
  const imgContainerRef = useRef(null);
  const imgRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgContainerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  
    // Animate overlay width from 100% to 0%
    tl.fromTo(
      overlayRef.current,
      { width: "100%" },
      { width: "0%", duration: 1.5, ease: "power3.out" }
    ).fromTo(
      imgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power3.out" },
      "-=1.2"
    );
  }, []);
  

  return (
    <div className={`${styles.imageContainer} ${className}`} ref={imgContainerRef}>
      <div className={styles.imageOverlay} ref={overlayRef}></div>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${styles.image} ${className}`}
      />
    </div>
  );
};

export default ImageReveal;
