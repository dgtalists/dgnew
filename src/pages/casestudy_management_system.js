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
      <ParallaxBanner backgroundImage="/images/lms-2.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  <AnimatedText
                    text={"Comprehensive Learning Management System"}
                    highlightText={"Learning Management"}
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
                  src="/images/lms-1.jpg"
                  alt="intro"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.projectDetails}>
                <div className={styles.eachDetails}>
                  <h4>Project Type</h4>
                  <p>Learning Management System (LMS)</p>
                </div>
                <div className={styles.eachDetails}>
                  <h4>Category</h4>
                  <p>EdTech</p>
                </div>
              </div>
              <div className={styles.projectDetails}>
                <div className={styles.eachDetails}>
                  <h4>Technology Stack</h4>
                  <ul>
                    <li>
                      <img src="/images/php.png" />
                    </li>
                    <li>
                      <img src="/images/sql.png" />
                    </li>
                    <li>
                      <img src="/images/js.png" />
                    </li>
                    <li>
                      <img src="/images/jquery.png" />
                    </li>
                    <li>
                      <img src="/images/ajax.png" />
                    </li>
                    <li>
                      <img src="/images/html-5.png" />
                    </li>
                    <li>
                      <img src="/images/css.png" />
                    </li>
                    <li>
                      <img src="/images/bootstrap.png" />
                    </li>
                    <li>
                      <img src="/images/api.png" />
                    </li>
                    <li>
                      <img src="/images/stripe.png" />
                    </li>
                    <li>
                      <img src="/images/git.png" />
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
              This is a comprehensive Learning Management System (LMS) designed
              to offer a structured and interactive learning experience. The
              platform enables users to enroll in courses, watch instructional
              videos without skipping, take exams, download study materials, and
              progress through courses sequentially. Additionally, it includes a
              CMS for content management, a Hot Deals section for special course
              offers, and a secure login system for user authentication.
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
                    <FaRegCircleCheck /> A robust LMS that supports structured
                    learning with course progression.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Video playback restrictions to ensure students watch
                    lectures in full.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Interactive exam system with multiple question formats.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Secure study material downloads with access control.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Content Management System (CMS) for course and content
                    administration.
                  </li>
                  <li>
                    <FaRegCircleCheck /> A Hot Deals section for discounted and
                    limited-time course offers.
                  </li>
                  <li>
                    <FaRegCircleCheck /> Secure payment gateway for course
                    enrollments and transactions.
                  </li>
                  <li>
                    <FaRegCircleCheck /> Role-based access control for
                    administrators and students.
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
                    Ensuring seamless video playback with restriction policies.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Developing a secure and scalable exam system with different
                    question types.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Implementing controlled study material downloads to prevent
                    unauthorized access.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Managing and updating content dynamically with an efficient
                    CMS.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Integrating a smooth and secure payment system for course
                    enrollments.
                  </li>
                  <li>
                    <FaRegCircleCheck />
                    Optimizing system performance to handle multiple concurrent
                    users.
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
              We developed an advanced LMS platform with the following key
              implementations:
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
                  <li>
                    <strong> Course & Video Management:</strong> Implemented
                    structured course modules with video playback restrictions
                    to prevent skipping.
                  </li>
                  <li>
                    <strong>Exam & Question-Answer System:</strong> Developed an
                    interactive exam system featuring multiple question formats
                    like MCQs, true/false, and subjective questions.
                  </li>
                  <li>
                    <strong> Progressive Course Unlocking:</strong> Integrated a
                    system where users must complete one course before unlocking
                    the next.
                  </li>
                  <li>
                    <strong> Secure Study Material Access:</strong> Provided
                    restricted and encrypted study material downloads to prevent
                    unauthorized sharing.
                  </li>
                  <li>
                    <strong>CMS Integration:</strong> Developed a robust CMS to
                    manage course content, FAQs, announcements, and other
                    administrative controls.
                  </li>

                  <li>
                    <strong> Hot Deals Module:</strong> Integrated a special Hot
                    Deals section showcasing discounted courses and limited-time
                    offers to boost engagement.
                  </li>
                  <li>
                    <strong>Payment Gateway Integration:</strong> Implemented
                    Stripe for secure and seamless transactions.
                  </li>
                  <li>
                    <strong>Role-Based Access Control:</strong> Ensured secure
                    authentication and controlled access based on user roles.
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
                  <li>
                    <strong>User Dashboard:</strong> Designed an intuitive user
                    interface allowing learners to track their course progress,
                    access study materials, and take exams.
                  </li>
                  <li>
                    <strong> Video Player with Restrictions::</strong>Integrated
                    a custom video player to prevent skipping and ensure full
                    engagement.
                  </li>
                  <li>
                    <strong>Exam Portal:</strong> Provided an interactive and
                    easy-to-use exam interface for learners.
                  </li>
                  <li>
                    <strong>Admin Panel:</strong> Built a comprehensive
                    dashboard for managing courses, students, payments, and
                    content.
                  </li>
                  <li>
                    <strong>Secure Login System:</strong> Implemented a robust
                    authentication mechanism for user security.
                  </li>
                  <li>
                    <strong>Hot Deals UI:</strong> Designed an engaging section
                    showcasing ongoing offers to attract more users.
                  </li>
                </ul>
              )}
            </div>
            <div className={styles.caseImage}>
              <div className="row">
                <div className="col-lg-4">
                  <ImageReveal
                    className={styles.caseStudyImage}
                    src={"/images/gc1.jpg"}
                    alt="case-study-2"
                  />
                </div>
                <div className="col-lg-4">
                  <ImageReveal
                    className={styles.caseStudyImage}
                    src={"/images/gc2.jpg"}
                    alt="case-study-2"
                  />
                </div>
                <div className="col-lg-4">
                  <ImageReveal
                    className={styles.caseStudyImage}
                    src={"/images/gc3.jpg"}
                    alt="case-study-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText
                text={"Results and Benefits"}
                highlightText={"Results"}
              />
            </h4>

            <ul className={styles.solutionList}>
              <li>
                <strong>Enhanced Learning Experience:</strong> Structured course
                modules and exam systems improved user engagement.
              </li>
              <li>
                <strong>Secure Content Management:</strong>Restricted video
                playback and secure study material downloads ensured content
                protection.
              </li>
              <li>
                <strong> Revenue Growth:</strong>The Hot Deals section and
                seamless payment integration increased enrollments.
              </li>
              <li>
                <strong>Optimized Performance:</strong> Scalable architecture
                allows smooth operation even with high user traffic.
              </li>
              <li>
                <strong> Comprehensive Admin Control:</strong> The CMS provided
                easy course and content management, reducing administrative
                workload.
              </li>
            </ul>
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText text={"Conclusion"} highlightText={"Conclusion"} />
            </h4>

            <p>
              This web successfully provides an interactive and structured
              e-learning experience. With its progressive learning model, secure
              content access, and seamless course management, the platform
              ensures effective knowledge delivery. The addition of a Hot Deals
              section and a robust payment system enhances user engagement and
              business growth, making GetCertify a powerful solution in the
              e-learning industry.
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
