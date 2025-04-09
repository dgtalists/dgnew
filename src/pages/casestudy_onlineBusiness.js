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
                      "Online Business Directory with Influencer Collaboration Platform "
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
                  In the evolving digital landscape, businesses increasingly seek innovative ways to boost visibility and connect with the right audiences. Our client, a prominent digital platform in the Middle East, envisioned a unique solution that combines a business directory with an influencer collaboration network—bridging brands and creators in one seamless ecosystem.
                  </p>
                  <p>Dgtalists was brought in to design, develop, and deploy a scalable, user-friendly web platform that supports thousands of listings and enables strategic influencer partnerships.
                  </p>
                </div>
                <div className={styles.introText} data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-7">
                      <h4 className={styles.title}>
                        <AnimatedText
                          text={"Client & Requirements"}
                          highlightText={"Client"}
                        />
                      </h4>
                      <ul>
                         <li>The client aimed to build a centralized platform that would:
                         </li>
                        <li>
                          <FaRegCircleCheck />Allow businesses to register and list services in a professional directory.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Include powerful search and filtering options across categories, locations, and audience reach.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Provide personalized dashboards for both business users and influencers.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Offer admin-level control for managing users, listings, and collaboration requests.
                        </li>
                        <li>
                          <FaRegCircleCheck />Support scalable infrastructure for future enhancements and high user volumes.
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
                  Dgtalists delivered a custom web-based solution built on the MERN stack (MongoDB, Express.js, React.js, Node.js), offering performance, flexibility, and a modern user experience.
                 </p>
                  <div className={styles.dropdownSection}>
                    <h5
                      onClick={() => setShowBackend(!showBackend)}
                      className={styles.dropdownHeader}
                    >
                      1. Key modules included:
                      {showBackend ? (
                        <HiOutlineChevronUp className={styles.arrowIcon} />
                      ) : (
                        <HiOutlineChevronDown className={styles.arrowIcon} />
                      )}
                    </h5>
                    {showBackend && (
                      <ul className={styles.solutionList}>
                          <li>
                          <strong>Business Listing Directory:</strong>Verified businesses can list their offerings, update profiles, and showcase their work.
                          </li>

                        <li>
                          <strong>Influencer Profiles :</strong>Creators can register, highlight their reach, link social platforms, and browse businesses.
                        </li>
                        <li>
                          <strong>Collaboration Workflow:</strong>Businesses and influencers can send, receive, and manage collaboration proposals.
                        </li>
                        <li>
                          <strong>Dynamic Search & Filters:</strong> Users can discover businesses or influencers by category, region, follower count, engagement metrics, and more.
                        </li>
                        <li>
                          <strong>Personalized Dashboards:</strong>  Each user has access to a tailored dashboard for managing proposals, connections, and analytics.
                        </li>
                        <li>
                          <strong>Admin Panel:</strong> A powerful backend for managing users, content, reports, and moderation.

                        </li>
                        <li>
                          <strong> Secure Login & Notifications:</strong> Authentication via email and real-time alerts to ensure smooth interactions.
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
                      <img src="/images/react.png" />
                    </li>
                    <li>
                      <img src="/images/node.png" />
                    </li>
                    <li>
                      <img src="/images/express-js.png" />
                    </li>
                    <li>
                      <img src="/images/mongo.png" />
                    </li>
                    <li>
                      <img src="/images/json.png" />
                    </li>
                    <li>
                      <img src="/images/scalable.png"/>
                    </li>
                    <li>
                      <img src="/images/google-map.png" />
                    </li>
                    <li>
                      <img src="/images/emailnoti.png" />
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
              <AnimatedText text={"Results & Impact"} highlightText={"Results"} />
            </h4>

            <ul className={styles.solutionList}>
              <li>
              Over 5,000 business listings and 1,200 influencer collaborations in the first 90 days.
              </li>
              <li>
              Streamlined the brand-influencer partnership process with zero manual coordination.
              </li>
              <li>
              Increased visibility for local and regional businesses through influencer-driven reach.
              </li>
              <li>
              Opened monetization channels for influencers and improved customer engagement for brands.
              </li>
            </ul>
            
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText text={"Why Dgtalists?"} highlightText={"Why Dgtalists?"} />
            </h4>
            <p>
            Dgtalists combined deep technical expertise with a clear understanding of business goals to bring this innovative platform to life. By focusing on user experience, scalability, and seamless collaboration workflows, we delivered a solution that drives real value for both businesses and influencers.

            </p>
          </div>
        </div>
      </section>
      <section className={styles.workTogether}>
        <div className="container">
          <div className={styles.togetherBox}>
            <div className={styles.headerSection}>
              <span className={styles.subtitle}>Let's Collaborate</span>
              <h4 className={styles.title}>
                <AnimatedText
                  text={"Let’s Build Your Next-Gen Enterprise Solution"}
                  highlightText={"Next-Gen Enterprise"}
                />
              </h4>
              <p>
                Looking to enhance your enterprise operations with a scalable,
                secure, and high-performance software solution? Let’s talk!
              </p>
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
