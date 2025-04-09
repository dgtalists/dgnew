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
      <ParallaxBanner backgroundImage="/images/smart-logistic.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  <AnimatedText
                    text={
                      "Case Study: Social Media Listening & Digital Outreach Platform"
                    }
                    highlightText={"AI-Enabled"}
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
                <img src="/images/intro.jpg" alt="intro" />
                <div className={styles.introText} data-aos="fade-up">
                  <h4 className={styles.title}>
                    <AnimatedText
                      text={"Project Overview"}
                      highlightText={"Project"}
                    />
                  </h4>
                  <p>
                  In today's fast-evolving global governance landscape, the need for intelligent automation and real-time decision-making is more pressing than ever. Governmental and development institutions face increasing complexity—ranging from fragmented workflows to massive data silos and pressure for transparency.
                  </p>

                  <p>DGTALISTS partnered with a leading global public organization to co-develop a next-generation Agentic AI Platform, designed to:
                  </p>
                   <p>Streamline project execution and reporting.</p>
                   <p>Power intelligent decision-making across departments.</p>
                   <p>Automate approvals, procurement, and knowledge access.</p>
                   <p>Ensure regulatory compliance, auditability, and security.</p>

                   <p>The system serves as an internal digital assistant, a workflow accelerator, and a governance watchdog—transforming traditional operations into autonomous, insight-driven processes.
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
                         <li>Accelerate Project Execution: Minimize bottlenecks in global development projects by automating repeatable processes and approvals
                         </li>
                         <li>
                          <FaRegCircleCheck />Boost Transparency: Deliver real-time visibility into operations across finance, procurement, and project teams
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Enhance Decision-Making: Leverage generative AI and deep learning to provide accurate, context-aware insights for faster, informed choices

                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Ensure Responsible AI Governance: Build a platform that is explainable, bias-mitigated, and compliant with regulatory standards (CCPA, GDPR, WB Governance)

                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Multilingual Accessibility: Enable officers worldwide to interact with AI agents in local languages for inclusive adoption
                        </li>       
                      </ul>
                    </div>
                    <div className="col-lg-5">
                      <div className={styles.introImage}>
                        <ImageReveal
                          src={"/images/challenges.png"}
                          alt="case-study-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>


                <div className={styles.introText} data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-7">
                      <h4 className={styles.title}>
                        <AnimatedText
                          text={"Key Challenges"}
                          highlightText={"Key Challenges"}
                        />
                      </h4>
                      <ul>
                       
                         <li>
                          <FaRegCircleCheck /> Disjointed Data Sources: Information was spread across legacy platforms, emails, PDFs, and reports.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Manual Processing Delays: Procurement, budgeting, and review workflows often relied on human approvals, leading to inefficiencies.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Limited Knowledge Access: Policy officers struggled to find updated guidelines and reference material without help from internal experts.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Security & Privacy Constraints: Any AI implementation needed to meet strict global data security and ethical use guidelines.
                        </li>
                       
                      </ul>
                    </div>
                    <div className="col-lg-5">
                      <div className={styles.introImage}>
                        <ImageReveal
                          src={"/images/challenges.png"}
                          alt="case-study-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

             
                <div className={styles.introText} data-aos="fade-up">
                  <h4 className={styles.title}>
                    <AnimatedText
                      text={"Our Solution"}
                      highlightText={"Solution"}
                    />
                  </h4>
                  <p>
                  DGTALISTS implemented a comprehensive digital governance platform built around three core pillars: Social Media Listening, Real-Time Analysis, and Targeted Outreach.
                 </p>
                  <div className={styles.dropdownSection}>
                    <h5
                      onClick={() => setShowBackend(!showBackend)}
                      className={styles.dropdownHeader}
                    >
                      1. Core Platform Modules:
                      {showBackend ? (
                        <HiOutlineChevronUp className={styles.arrowIcon} />
                      ) : (
                        <HiOutlineChevronDown className={styles.arrowIcon} />
                      )}
                    </h5>
                    {showBackend && (
                      <ul className={styles.solutionList}>
                          <li>
                         <strong>Social Media & News Listening:</strong>
                          <ul>
                            <li>Automated listening of content from Facebook, Twitter, Instagram, YouTube, and online news portals</li>
                            <li>Real-time keyword and hashtag tracking for topics of public interest.</li>
                          <li>Sentiment classification (positive/neutral/negative) using AI and NLP.</li>
                          <li>Monitoring of influential handles, media houses, and trending topics. </li>
                          </ul>
                          </li>

                          <li>
                         <strong> Smart Dashboards & Insights :</strong>
                          <ul>
                            <li>Custom dashboards for ministry departments, field offices, and communication teams. </li>
                            <li>Visualization of public engagement, trending conversations, and influencer activities.</li>
                            <li>Crisis detection and alerts for issues gaining traction.</li>
                            <li>Sentiment shifts and regional breakdown of conversations.</li>
                          </ul>
                          </li>
                          
                          <li>
                         <strong>Digital Outreach Engine:</strong>
                          <ul>
                            <li>Planning and distribution of verified, responsive messages to counter misinformation  . </li>
                            <li>Content calendar for proactive citizen engagement.</li>
                            <li>Community-specific messaging with support for local languages.</li>
                            <li>Feedback loop through social engagement tracking and surveys</li>
                          </ul>
                          </li>
                       
                      </ul>
                    )}
                  </div>

                
                  <div className={styles.caseImage}>
                    <div className="row">
                      <div className="col-lg-6">
                        <ImageReveal
                          src={"/images/frontend.png"}
                          alt="case-study-2"
                        />
                      </div>
                      <div className="col-lg-6">
                        <ImageReveal
                          src={"/images/backend.png"}
                          alt="case-study-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.projectDetails}>
                <div className={styles.eachDetails}>
                  <h4>Project Type</h4>
                  <p>AI-Enabled Smart Logistics & Moving Management</p>
                </div>
                <div className={styles.eachDetails}>
                  <h4>Category</h4>
                  <p>AI / ML</p>
                </div>
                <div className={styles.eachDetails}>
                  <h4>Duration</h4>
                  <p>4 month</p>
                </div>
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
                      <img src="/images/cloud-server.png"/>
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className={styles.projectDetails}>
                <div className={styles.eachDetails}>
                  <h4>Mobile App</h4>
                  <Swiper
                    modules={[Navigation]}
                    // navigation
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={true}
                    className="mySwiper"
                  >
                    {images.map((src, index) => (
                      <SwiperSlide key={index}>
                        <img
                          className={styles.sliderImg}
                          src={src}
                          alt={`Slide ${index}`}
                          style={{ width: "100%", borderRadius: "10px" }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
             
            </div>
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText text={"Real-World Impact"} highlightText={"Impact"} />
            </h4>

            <ul className={styles.solutionList}>
                        <li>
                         <strong>Operational Improvements:</strong>
                          <ul>
                            <li>30% reduction in planning time using the drag-and-drop board.</li>
                           <li>40% increase in trailer & tractor utilization.</li>
                            <li>25% reduction in delays via predictive planning.</li>
                            <li>50% better SLA adherence through real-time monitoring and alerts.</li>
                          </ul>
                          </li>

                          <li>
                         <strong>Cost & Resource Savings:</strong>
                          <ul>
                            <li>Reduced fuel costs via optimized route suggestions  .</li>
                           <li>Lowered idle driver hours and unutilized trailer instances.</li>
                            <li>Significant cut in paper-based processes and documentation time.</li>
                          </ul>
                          </li>

                          <li>
                         <strong> Customer Experience:</strong>
                          <ul>
                            <li>Improved order transparency through live updates .</li>
                           <li>Reduced disputes due to digital logs and proof of delivery.</li>
                            <li>Enhanced driver safety and tracking reassured clients.</li>
                          </ul>
                          </li>


                 </ul>
            
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText text={"Why Dgtalists?"} highlightText={"Why Dgtalists?"} />
            </h4>
            <p>
            At DGTALISTS, we blend deep domain expertise in digital transformation, AI innovation, and secure infrastructure development to help institutions modernize operations with purpose and impact.
            </p>
            <p>We bring:
            </p>
            <p>AI solutions tailored for real-world enterprise needs  </p>
            <p>Compliance-first engineering for regulated sectors .</p>
            <p>Continuous collaboration and co-development approach.</p>
            <p>Transparent, ethical, and inclusive AI systems. </p>

          </div>
        </div>
      </section>
      <section className={styles.workTogether}>
        <div className="container">
          <div className={styles.togetherBox}>
            <div className={styles.headerSection}>
              <span className={styles.subtitle}>Ready to automate with intelligence and scale responsibly?
              ?</span>
              <h4 className={styles.title}>
                <AnimatedText
                  text={" Let DGTALISTS power your enterprise AI transformation."}
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
                    <Link href={"tel:+1 234 567 890"}>+1 234 567 890</Link>
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
                    <Link href={"https://dgtalists.vercel.app/"}>
                      dgtalists.com
                    </Link>
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
