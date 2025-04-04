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

    gsap.to(slider, {
      x: `-${totalWidth}`,
      duration: 30, // slower = smoother
      ease: "none", // must be 'none' for seamless scroll
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
          "/images/tcg.png",
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
