"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./ContionuousSlider.module.css";

const ContinuousScrollingSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = Array.from(slider.children);

    // Clone all slides once for seamless looping
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      slider.appendChild(clone);
    });

    const totalWidth = slider.scrollWidth / 2;
    console.log(totalWidth, "total width");

    // Check if it's mobile
    const isMobile = window.innerWidth <= 768; // You can adjust the breakpoint if needed

    gsap.to(slider, {
      x: `-${totalWidth}`,
      duration: isMobile ? 15 : 30, // faster on mobile
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={styles.sliderWrap}>
        {[
          "/images/safco.png",
          "/images/flipcart.png",
          "/images/1mg.png",
          "/images/shineroad.png",
          "/images/teramotors.png",
          "/images/logo-tcg.png",
          "/images/spincabs.png",
          "/images/sgone.png",
          "/images/waynik.png",
        ].map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt="client" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousScrollingSlider;
