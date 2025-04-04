"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Counter.module.css";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ value, suffix = "" }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      counterRef.current,
      { innerText: 0 },
      {
        innerText: value,
        duration: 2,
        snap: { innerText: 1 }, // Makes it count in whole numbers
        ease: "power3.out",
        onUpdate: function () {
          counterRef.current.innerText = Math.floor(this.targets()[0].innerText) + suffix;
        },
      }
    );
  }, [value, suffix]);

  return <h4 ref={counterRef} className={styles.counter}>{value}{suffix}</h4>;
};

export default Counter;
