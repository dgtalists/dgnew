import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrollProgress);

      setIsVisible(scrollTop > 100); // Show after scrolling 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${styles.backToTop} ${isVisible ? styles.show : ""}`} onClick={scrollToTop}>
      <svg className={styles.progressCircle} width="50" height="50">
        <circle cx="25" cy="25" r="22" strokeWidth="1"  fill="none" />
        <circle
          cx="25"
          cy="25"
          r="22"
          strokeWidth="1"
          stroke="#0096cf"
          fill="none"
          strokeDasharray="138"
          strokeDashoffset={`${138 - (138 * scrollPercent) / 100}`}
          strokeLinecap="round"
        />
      </svg>
      <FaArrowUp className={styles.icon} />
    </div>
  );
};

export default BackToTop;
