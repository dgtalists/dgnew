import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./CardComponent.module.css";

const CardComponent = ({industry}) => {
  return (
    <>
      <div className={styles.industryCard}>
        <img
          src={industry.image}
          alt={industry.title}
          className={styles.image}
        />
        <h3>{industry.title}</h3>
        <p>{industry.subtitle}</p>
      </div>
    </>
  );
};
export default CardComponent;
