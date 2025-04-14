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
                      "Food Ordering & Management Platform"
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
                  In the digital era, seamless food ordering and restaurant management solutions are crucial for enhancing customer experience and increasing business efficiency. Our client required a progressive food ordering and reservation system to streamline online and dine-in orders while ensuring smooth transaction processing and inventory management.

                  </p>
                  <p>Dgtalists developed a feature-rich, scalable food ordering application that simplifies the entire process—from reservations to payment—enhancing restaurant operations and customer satisfaction.

                  </p>
                </div>
                <div className={styles.introText} data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-7">
                      <h4 className={styles.title}>
                        <AnimatedText
                          text={"Challenges & Requirements"}
                          highlightText={"Challenges"}
                        />
                      </h4>
                      <ul>
                         <li>The client needed a comprehensive food ordering platform that could:
                         </li>
                        <li>
                          <FaRegCircleCheck /> Manage both online and dine-in orders with an integrated POS system.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Provide real-time tracking of tables to optimize seating arrangements.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Offer digital payments with split billing options.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Ensure seamless integration with social media platforms for promotions.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Deliver real-time insights and reporting for better business decisions.
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
                  Dgtalists designed and developed a progressive web and mobile application that provides end-to-end food ordering, payment, and reservation management. The solution ensures fast, secure, and convenient interactions between customers and restaurants.
                  </p>
                  <div className={styles.dropdownSection}>
                    <h5
                      onClick={() => setShowBackend(!showBackend)}
                      className={styles.dropdownHeader}
                    >
                      1. Key Features Implemented
                      {showBackend ? (
                        <HiOutlineChevronUp className={styles.arrowIcon} />
                      ) : (
                        <HiOutlineChevronDown className={styles.arrowIcon} />
                      )}
                    </h5>
                    {showBackend && (
                      <ul className={styles.solutionList}>
                        <li>
                          <strong>POS System Integration:</strong> Manage both dine-in and online orders efficiently.
                        </li>
                        <li>
                          <strong>Order & Transaction Management:</strong> Handle incoming orders, transactions, and deliveries with ease.
                        </li>
                        <li>
                          <strong>Smart Reservations:</strong>  Customers can reserve tables via the app anytime, anywhere.
                        </li>
                        <li>
                          <strong>Seamless Digital Payments:</strong> Users can pay bills through the app, with split billing options.
                        </li>
                        <li>
                          <strong>Real-Time Table Status Monitoring:</strong>  Enables customers to order via smartphones for a hygienic experience.Prevents seating mistakes and optimizes restaurant capacity.

                         </li>
                        <li>
                          <strong>Social Media Integration:</strong> Attracts food lovers and boosts promotions via social platforms.
                        </li>
                        <li>
                          <strong> Data-Driven Insights & Reports:</strong>   Helps restaurant owners track revenue and user behavior.
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
                      <img src="/images/net.png" />
                    </li>
                    <li>
                      <img src="/images/sql.png" />
                    </li>
                    <li>
                      <img src="/images/stripe.png" />
                    </li>
                     <li>
                      <img src="/images/paypal.png"/>
                      </li>
                      <li>
                      <img src="/images/firebase.png"/>
                      </li>
                    <li>
                      <img src="/images/facebook.png" />
                    </li>
                   
                    <li>
                      <img src="/images/instagram.png" />
                    </li>
                    <li>
                      <img src="/images/twitter.png" />
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
              <AnimatedText text={"Business Impact"} highlightText={"Business"} />
            </h4>

            <ul className={styles.solutionList}>
              <li>
                <strong>Enhanced Customer Experience:</strong> 50% improvement in online reservations and order processing.
              </li>
              <li>
                <strong> Optimized Restaurant Operations:</strong> Real-time table management reduced seating delays by 30%.
              </li>
              <li>
                <strong> Frictionless Payments:</strong>  Digital payments increased transaction speed and efficiency.
              </li>
              <li>
                <strong>Higher Revenue Generation:</strong> Promotions through social media led to a 40% increase in orders.
              </li>
            </ul>
            
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText text={"Conclusion"} highlightText={"Conclusion"} />
            </h4>

            <p>
            Dgtalists successfully developed a powerful, user-friendly Food Ordering Progressive Mobile App, transforming the way restaurants operate and interact with customers. This solution optimizes operations, boosts engagement, and enhances the overall dining experience, making it a must-have for modern restaurant businesses.
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
                    <Link href={"https://dgtalists.com"}>
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
