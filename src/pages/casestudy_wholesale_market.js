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
                      "Web-Based B2B Wholesale Marketplace"
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
                  This is a B2B market place for whole sellers in the middle east market. Its web-based platform is built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It closely resembles an e-commerce platform but with a key difference: instead of placing orders, users can only place enquiries. The add-to-cart functionality remains the same, allowing users to add products to their cart before submitting an inquiry.
                  </p>
                </div>
                <div className={styles.introText} data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-7">
                      <h4 className={styles.title}>
                        <AnimatedText
                          text={"Client Requirements"}
                          highlightText={"Client"}
                        />
                      </h4>
                      <ul>
                        <li>
                          <FaRegCircleCheck />A platform similar to an e-commerce system but focused on enquiries instead of direct orders.
                           </li>
                        <li>
                          <FaRegCircleCheck />
                          Role-based access control for different user types.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Bulk product upload via Excel.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          A CMS for managing pages dynamically.
                        </li>
                        <li>
                          <FaRegCircleCheck />A user dashboard for tracking enquiries.
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
                    <div className="col-lg-5">
                      <div className={styles.introImage}>
                        <ImageReveal
                          src={"/images/case-2.png"}
                          alt="case-study-1"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <h4 className={styles.title}>
                        <AnimatedText
                          text={"Our Challenges"}
                          highlightText={"Challenges"}
                        />
                      </h4>
                      <ul>
                        <li>
                          <FaRegCircleCheck />
                          Implementing a seamless enquiry-based workflow.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Managing access control efficiently for different roles.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Providing an intuitive and user-friendly interface.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Ensuring scalability and performance.
                        </li>
                      </ul>
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
                  We developed a structured workflow with the following key implementations:
                  </p>
                  <div className={styles.dropdownSection}>
                    <h5
                      onClick={() => setShowBackend(!showBackend)}
                      className={styles.dropdownHeader}
                    >
                      1. Backend Implementation
                      {showBackend ? (
                        <HiOutlineChevronUp className={styles.arrowIcon} />
                      ) : (
                        <HiOutlineChevronDown className={styles.arrowIcon} />
                      )}
                    </h5>
                    {showBackend && (
                      <ul className={styles.solutionList}>
                        <li>The backend is structured to support four types of users:
                        </li>
                        <li>
                          <strong>Super Admin:</strong> Has full control over the system, including user and role management.
                        </li>
                        <li>
                          <strong>Product Manager:</strong> Responsible for uploading and managing products via individual entries or bulk upload through Excel.
                        </li>
                        <li>
                          <strong>Support People:</strong> Handles customer queries and manages user interactions.
                        </li>
                        <li>
                          <strong>User:</strong> Can browse products and place enquiries if eligible.
                        </li>
                        <li>
                          <strong>AI-Powered Estimation:</strong> Users can
                          upload pictures, and AI will analyze the number of
                          items in the image.
                        </li>
                        <li>Key backend features include:
                        </li>
                        <li>
                          <strong>Role Management:</strong>  Different access levels and permissions based on user roles.
                        </li>
                        <li>
                          <strong>Menu Management:</strong> Dynamic menu configuration for different roles.
                        </li>
                        <li>
                          <strong>Content Management System (CMS):</strong> Allows admins to manage pages and content dynamically.
                        </li>
                        <li>
                          <strong>Product Management:</strong> Products can be added individually or via bulk upload using Excel.
                        </li>
                      </ul>
                    )}
                  </div>

                  <div className={styles.dropdownSection}>
                    <h5
                      onClick={() => setShowFrontend(!showFrontend)}
                      className={styles.dropdownHeader}
                    >
                      2. Frontend Implementation
                      {showFrontend ? (
                        <HiOutlineChevronUp className={styles.arrowIcon} />
                      ) : (
                        <HiOutlineChevronDown className={styles.arrowIcon} />
                      )}
                    </h5>
                    {showFrontend && (
                      <ul className={styles.solutionList}>
                        <li>The frontend is designed to provide a seamless user experience with the following features:
                        </li>
                        <li>
                          <strong>Login & Authentication:</strong> Secure login functionality.
                        </li>
                        <li>
                          <strong>User Dashboard:</strong>Users can track their placed enquiries.
                        </li>
                        <li>
                          <strong>Restricted Access:</strong> Newly registered users cannot place an enquiry until approved.
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
                      <img src="/images/mongo.png" />
                    </li>
                    <li>
                      <img src="/images/json.png" />
                    </li>
                    <li>
                      <img src="/images/excel.png"/>
                    </li>
                    <li>
                      <img src="/images/cms.png" />
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
              <AnimatedText text={"Results and Benefits"} highlightText={"Results"} />
            </h4>

            <ul className={styles.solutionList}>
              <li>
                <strong>Improved Enquiry Management:</strong> Users can efficiently submit and track their enquiries.
              </li>
              <li>
                <strong> Enhanced User Roles & Permissions:</strong>Different users have appropriate access levels.
              </li>
              <li>
                <strong>Scalability:</strong>The system is designed to handle large amounts of product data.
              </li>
              <li>
                <strong>Streamlined Product Upload:</strong>  Bulk product upload via Excel improves efficiency.
              </li>
            </ul>
            
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText text={"Conclusion"} highlightText={"Conclusion"} />
            </h4>

            <p>
            The Safco platform successfully meets the client's requirements by offering an enquiry-based e-commerce-like experience. With structured role management, a CMS, and a robust backend, the system ensures an intuitive and efficient user experience. The project demonstrates the power of MERN stack in building scalable and user-friendly applications.
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
