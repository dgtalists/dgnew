"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./ParallaxBanner.module.css";

gsap.registerPlugin(ScrollTrigger);

const ParallaxBanner = ({ backgroundImage, children }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    gsap.to(bannerRef.current, {
      backgroundPositionY: "50%", // Adjust for effect
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2, // Smooth effect
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      className={styles.parallaxBanner}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Optional
        backgroundPosition: "center",
      }}
    >
      {children}
    </section>
  );
};

export default ParallaxBanner;
