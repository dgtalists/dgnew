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
                      "AI-Driven Smart Logistics & Moving Management Platform"
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
                  In a fast-evolving logistics landscape, companies face challenges in real-time visibility, resource optimization, and customer coordination. DGTALISTS partnered with a leading logistics service provider to create an AI-powered smart logistics and moving management platform that optimizes operational workflows, improves resource planning, and enhances the end-user experience.
                  </p>
                  <p>Built for scale and intelligence, the platform integrates advanced automation, digital documentation, mobile access, and real-time tracking into a seamless ecosystem.
                  </p>
                </div>
                <div className={styles.introText} data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-7">
                      <h4 className={styles.title}>
                        <AnimatedText
                          text={"Goals"}
                          highlightText={"Goals"}
                        />
                      </h4>
                      <ul>
                         <li>The client required a comprehensive digital solution that would:
                         </li>
                        <li>
                          <FaRegCircleCheck />Digitize manual processes in trailer, driver, and resource management.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Enable real-time tracking of vehicles and order statuses.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Optimize route and trip planning with AI-based forecasting.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Improve communication between operations teams, drivers, and customers.
                        </li>
                        <li>
                          <FaRegCircleCheck />Provide actionable insights for fleet utilization and order analytics.
                        </li>
                        <li>
                          <FaRegCircleCheck />Support regulatory compliance and safety monitoring.
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
                  DGTALISTS developed a modular, intelligent logistics platform using a LaaS (Logistics-as-a-Service) model. The solution is web and mobile compatible, designed with scalability and real-time coordination in mind. Here’s how we delivered:
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
                         <strong> Master Data Management:</strong>
                          <ul>
                            <li>Centralized system for managing driver, tractor, trailer, and commodity   data. </li>
                            <li>Location-wise access control and integrated approval workflows.</li>
                            <li>Role-based dashboard for admins, planners, and operators.</li>
                          </ul>
                          </li>

                          <li>
                         <strong>  AI-Enhanced Planning Engine :</strong>
                          <ul>
                            <li>Intuitive drag-and-drop planning board for trip creation. </li>
                            <li>Forecasts best route combinations based on traffic, distance, and order priority.</li>
                            <li>Identifies opportunities for return trips and reduces empty runs.</li>
                            <li>Detects over/under-utilization and recommends reallocation.</li>
                          </ul>
                          </li>
                          
                          <li>
                         <strong>Real-Time Order & Resource Monitoring:</strong>
                          <ul>
                            <li>Live map with dynamic status indicators (Loading, In Transit, Delayed, Delivered). </li>
                            <li>Tooltip insights, historical trail, and expected delivery timestamps.</li>
                            <li>GPS and BLE-based tracking of vehicle movements and stoppages.</li>
                          </ul>
                          </li>

                          <li>
                         <strong>Trailer, Tractor & Driver Efficiency Dashboard:</strong>
                          <ul>
                            <li>Manages trailer availability, service schedules, and washing records.</li>
                            <li>Tracks driver duty hours, fatigue scores, and pending documents.</li>
                            <li>Triggers alerts for mismatched resource assignments and idle times.</li>
                          </ul>
                          </li>

                          <li>
                         <strong> Digital Documentation & Compliance:</strong>
                          <ul>
                            <li>Automated generation of trip sheets, gate passes, and delivery notes.</li>
                            <li>Role-wise upload and review of digital documents.</li>
                            <li>Compliance flags for expired licenses, PUC, and insurance.</li>
                          </ul>
                          </li>

                          <li>
                         <strong> Mobile App (Driver Companion App):</strong>
                          <ul>
                            <li>Real-time updates on assignments, navigation, and checkpoints.</li>
                           <li>Push notifications for gate passes, load changes, and emergency stops.</li>
                            <li>SOS alerts with location broadcast to control room.</li>
                            <li>Integrated feedback and incident reporting module</li>
                          </ul>
                          </li>

                          
                          <li>
                         <strong> Analytics & Insights:</strong>
                          <ul>
                            <li>Utilization reports for trailers, drivers, and tractors.</li>
                           <li>Performance KPIs (On-Time Delivery %, Order Completion, SLA breaches).</li>
                            <li>Delay root cause analysis and heatmap reports.</li>
                            <li>Interactive dashboards powered by dynamic data filters.</li>
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
                      <img src="/images/gps.png" />
                    </li>
                    <li>
                      <img src="/images/bluetooth.png"/>
                    </li>
                    <li>
                      <img src="/images/sms.png" />
                    </li>
                    <li>
                      <img src="/images/json.png" />
                    </li>
                    <li>
                      <img src="/images/aws.png" />
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
            DGTALISTS blends cutting-edge tech with real-world logistics experience to deliver solutions that scale. From digitizing your ground operations to AI-enhancing your decision-making, we help you:
            </p>
            <p>Eliminate inefficiencies.</p>
            <p>Improve visibility & accountability.</p>
            <p>Maximize fleet ROI</p>
            <p>Delight customers with real-time transparency</p>
          </div>
        </div>
      </section>
      <section className={styles.workTogether}>
        <div className="container">
          <div className={styles.togetherBox}>
            <div className={styles.headerSection}>
              <span className={styles.subtitle}>Ready to transform your logistics operations?</span>
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
