"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./GSAPParticles.module.css";

const PARTICLE_COUNT = 100;

const GSAPParticles = () => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const particles = particlesRef.current;

    particles.forEach((particle) => {
      // Random start position across the screen
      const posX = gsap.utils.random(0, window.innerWidth);
      const posY = gsap.utils.random(0, window.innerHeight);
      const size = gsap.utils.random(4, 10);
      const floatX = gsap.utils.random(-30, 30);
      const floatY = gsap.utils.random(-30, 30);

      // Set initial position and size
      gsap.set(particle, {
        x: posX,
        y: posY,
        width: size,
        height: size,
      });

      // Floating animation
      gsap.to(particle, {
        x: `+=${floatX}`,
        y: `+=${floatY}`,
        duration: gsap.utils.random(2, 4),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    // Mouse movement effect
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) / 150;
      const offsetY = (e.clientY - centerY) / 150;

      particles.forEach((particle, i) => {
        gsap.to(particle, {
          x: `+=${offsetX * ((i % 5) + 1)}`,
          y: `+=${offsetY * ((i % 5) + 1)}`,
          duration: 0.5,
          ease: "power1.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {Array.from({ length: PARTICLE_COUNT }).map((_, index) => (
        <div
          key={index}
          className={`${styles.particle} particle`}
          ref={(el) => (particlesRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default GSAPParticles;
