import Head from "next/head";
import styles from "@/styles/Casestudy.module.css";
import Header from "@/component/Header/Header";
import Link from "next/link";
import ImageReveal from "@/component/ImageReveal/ImageReveal";
import AnimatedText from "@/component/AnimatedText/AnimatedText";
import { GoGlobe } from "react-icons/go";
import ParallaxBanner from "@/component/ParralaxBanner/ParallaxBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Footer from "@/component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaRegCircleCheck } from "react-icons/fa6";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

export default function CaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [showBackend, setShowBackend] = useState(true);
  const [showFrontend, setShowFrontend] = useState(false);
  const [showThird, setShowThird] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration if needed
  }, []);

  const images = [
    "/images/mobile-1.png",
    "/images/mab-2.png",
    "/images/mob-3.png",
    // Add more paths
  ];
  const webImg = [
    "/images/frontend.png",
    "/images/backend.png",
    "/images/mob-3.png",
    // Add more paths
  ];
  return (
    <>
      <Head>
        <title>Dgtalists</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ParallaxBanner backgroundImage="/images/social-banner.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  <AnimatedText
                    text={"Social Media Listening & Digital Outreach Platform"}
                    highlightText={"Social Media"}
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <section className={styles.introSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className={styles.introContent}>
                <img
                  className={styles.mainImg}
                  src="/images/social.jpg"
                  alt="intro"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.projectDetails}>
                <div className={styles.eachDetails}>
                  <h4>Project Type</h4>
                  <p>Social Media Management Tool</p>
                </div>
                <div className={styles.eachDetails}>
                  <h4>Category</h4>
                  <p>Social Networking & Communication </p>
                </div>
                {/* <div className={styles.eachDetails}>
                  <h4>Duration</h4>
                  <p>4 month</p>
                </div> */}
              </div>
              <div className={styles.projectDetails}>
                <div className={styles.eachDetails}>
                  <h4>Technology Stack</h4>
                  <ul>
                    <li>
                      <img src="/images/sentiment-analysis.png" />
                    </li>

                    <li>
                      <img src="/images/node.png" />
                    </li>
                    <li>
                      <img src="/images/python.png" />
                    </li>
                    <li>
                      <img src="/images/react.png" />
                    </li>
                    <li>
                      <img src="/images/api.png" />
                    </li>
                    <li>
                      <img src="/images/cloud-server.png" />
                    </li>
                  </ul>
                </div>
              </div>
             
            </div>
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText
                text={"Project Overview"}
                highlightText={"Project"}
              />
            </h4>
            <p>
              As digital conversations shape public opinion, government
              institutions must tap into real-time social data to respond
              quickly, effectively, and transparently. DGTALISTS with his
              partner designed and developed a social media listening and
              digital outreach platform to transform how authorities gather
              insights, engage citizens, and act on emerging trends.
            </p>
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <div className="row">
              <div className="col-lg-7">
                <h4 className={styles.title}>
                  <AnimatedText
                    text={"Objective"}
                    highlightText={"Objective"}
                  />
                </h4>
                <ul>
                  <li>
                    “To create a robust and reliable system of listening,
                    reporting, and analysis to achieve actionable decisions,
                    communication, and activation, through data-driven
                    intelligence.”
                  </li>
                  <li>The primary aim was to:</li>
                  <li>
                    <FaRegCircleCheck />
                    Monitor real-time public sentiment across social and digital
                    media.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Automate reporting and trend analysis.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Enable strategic digital outreach and community engagement.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Improve governance with data-backed decisions.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Provide actionable insights for fleet utilization and order
                    analytics.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Support regulatory compliance and safety monitoring.
                  </li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className={styles.introImage}>
                  <ImageReveal
                    className={styles.keyImg}
                    src={"/images/challenges.png"}
                    alt="case-study-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.introText} data-aos="fade-up">
            <div className="row">
              <div className="col-lg-5">
                <div className={styles.introImage}>
                  <ImageReveal
                    className={styles.keyImg}
                    src={"/images/challenge.jpg"}
                    alt="case-study-1"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <h4 className={styles.title}>
                  <AnimatedText
                    text={"Challenges Faced"}
                    highlightText={"Challenges"}
                  />
                </h4>
                <ul>
                  <li>
                    <FaRegCircleCheck />
                    Lack of centralized listening across social and news
                    platforms.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Manual, inconsistent reporting of public issues and
                    sentiment.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Delays in response to critical incidents or viral content.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Absence of data-driven insights for public communication
                    strategy
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText text={"Our Solution"} highlightText={"Solution"} />
            </h4>
            <p>
              DGTALISTS implemented a comprehensive digital governance platform
              built around three core pillars: Social Media Listening, Real-Time
              Analysis, and Targeted Outreach.
            </p>
            <div className={styles.dropdownSection}>
              <h5
                onClick={() => setShowBackend(!showBackend)}
                className={styles.dropdownHeader}
              >
                1. Social Media & News Listening
                {showBackend ? (
                  <HiOutlineChevronUp className={styles.arrowIcon} />
                ) : (
                  <HiOutlineChevronDown className={styles.arrowIcon} />
                )}
              </h5>
              {showBackend && (
                <ul className={styles.solutionList}>
                  <li>
                    <ul>
                      <li>
                        Automated listening of content from Facebook, Twitter,
                        Instagram, YouTube, and online news portals
                      </li>
                      <li>
                        Real-time keyword and hashtag tracking for topics of
                        public interest.
                      </li>
                      <li>
                        Sentiment classification (positive/neutral/negative)
                        using AI and NLP.
                      </li>
                      <li>
                        Monitoring of influential handles, media houses, and
                        trending topics.{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </div>
            <div className={styles.dropdownSection}>
              <h5
                onClick={() => setShowFrontend(!showFrontend)}
                className={styles.dropdownHeader}
              >
                2. Smart Dashboards & Insights
                {showFrontend ? (
                  <HiOutlineChevronUp className={styles.arrowIcon} />
                ) : (
                  <HiOutlineChevronDown className={styles.arrowIcon} />
                )}
              </h5>
              {showFrontend && (
                <ul className={styles.solutionList}>
                  <li>
                    Custom dashboards for ministry departments, field offices,
                    and communication teams.{" "}
                  </li>
                  <li>
                    Visualization of public engagement, trending conversations,
                    and influencer activities.
                  </li>
                  <li>
                    Crisis detection and alerts for issues gaining traction.
                  </li>
                  <li>
                    Sentiment shifts and regional breakdown of conversations.
                  </li>
                </ul>
              )}
            </div>
            <div className={styles.dropdownSection}>
              <h5
                onClick={() => setShowThird(!showThird)}
                className={styles.dropdownHeader}
              >
                3. Digital Outreach Engine
                {showThird ? (
                  <HiOutlineChevronUp className={styles.arrowIcon} />
                ) : (
                  <HiOutlineChevronDown className={styles.arrowIcon} />
                )}
              </h5>
              {showThird && (
                <ul className={styles.solutionList}>
                  <li>
                    Planning and distribution of verified, responsive messages
                    to counter misinformation .{" "}
                  </li>
                  <li>Content calendar for proactive citizen engagement.</li>
                  <li>
                    Community-specific messaging with support for local
                    languages.
                  </li>
                  <li>
                    Feedback loop through social engagement tracking and surveys
                  </li>
                </ul>
              )}
            </div>

            <div className={styles.caseImage}>
              <div className="row">
                <div className="col-lg-4">
                  <ImageReveal
                    className={styles.caseStudyImage}
                    src={"/images/frontend.png"}
                    alt="case-study-2"
                  />
                </div>
                <div className="col-lg-4">
                  <ImageReveal
                    className={styles.caseStudyImage}
                    src={"/images/backend.png"}
                    alt="case-study-2"
                  />
                </div>
                <div className="col-lg-4">
                  <ImageReveal
                    className={styles.caseStudyImage}
                    src={"/images/backend.png"}
                    alt="case-study-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText
                text={"Key Results & Outcomes"}
                highlightText={"Key"}
              />
            </h4>

            <ul className={styles.solutionList}>
              <li>
                Achieves <strong>over 90% accuracy</strong> in public sentiment
                detection, ensuring reliable insights.
              </li>
              <li>
                Improves <strong>reporting efficiency by more than 65%</strong>,
                accelerating decision-making.
              </li>
              <li>
                Reduces <strong>critical incident response time by 50%</strong>,
                enabling faster action during emergencies.
              </li>
              <li>
                Increases <strong>community engagement reach by 300%</strong>,
                strengthening public connections.
              </li>
              <li>
                Enables <strong>seamless multi-agency collaboration</strong>{" "}
                through <strong>role-based dashboards</strong> for enhanced
                coordination.
              </li>
            </ul>
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText
                text={"Why Dgtalists?"}
                highlightText={" Dgtalists?"}
              />
            </h4>
            <p>
              DGTALISTS enables government institutions to become proactive,
              transparent, and citizen-focused by transforming data into
              insights and insights into action.
            </p>
            <p>
              With our expertise in digital intelligence, AI, and platform
              development, we empower public sector organizations to:
            </p>
            <p>Stay ahead of the curve.</p>
            <p>Respond with clarity and speed .</p>
            <p>Build public trust in a connected world </p>
          </div>
        </div>
      </section>
      <section className={styles.workTogether}>
        <div className="container">
          <div className={styles.togetherBox}>
            <div className={styles.headerSection}>
              <span className={styles.subtitle}>
                Looking to build a citizen-centric governance platform?
              </span>
              <h4 className={styles.title}>
                <AnimatedText
                  text={"Let DGTALISTS power your digital transformation"}
                  highlightText={"DGTALISTS"}
                />
              </h4>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className={styles.eachContactItem}>
                  <div className={styles.contactIcon}>
                    <BiSolidPhoneCall />
                  </div>
                  <div className={styles.contactContent}>
                    <h5>Contact Us</h5>
                    <Link href={"tel:+91 89104 35874"}>+91 89104 35874</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.eachContactItem}>
                  <div className={styles.contactIcon}>
                    <GoGlobe />
                  </div>
                  <div className={styles.contactContent}>
                    <h5>Our Website</h5>
                    <Link href={"https://dgtalists.com"}>dgtalists.com</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.eachContactItem}>
                  <div className={styles.contactIcon}>
                    <RxEnvelopeClosed />
                  </div>
                  <div className={styles.contactContent}>
                    <h5>e-mail address</h5>
                    <Link href={"mailto:contact@dgtalists.com"}>
                      contact@dgtalists.com{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
