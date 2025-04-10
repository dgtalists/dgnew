import { useState, useEffect } from "react"; // ✅ Add this line
import LoadingScreen from "@/component/LoadingScreen/LoadingScreen";
import MagicCursor from "@/component/MagicCursor/MagicCursor";
import "@/styles/globals.css";
import BackToTop from "@/component/BackToTop/BackToTop";
import GSAPParticles from "@/component/GSAPParticle/GSAPParticles";

export default function App({ Component, pageProps }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000); // Simulate loading
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <MagicCursor />
          {/* <GSAPParticles/> */}
          <Component {...pageProps} />
          <BackToTop />
        </>
      )}
    </>
  );
}
