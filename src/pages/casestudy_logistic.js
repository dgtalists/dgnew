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
                      "Real-Time Logistic App for Consignment Tracking "
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
                  A cutting-edge logistics application designed to revolutionize supply chain efficiency by enabling real-time tracking of consignment vehicles and monitoring critical metrics. This solution helps prevent product loss, improve distribution times, and provide transparency for warehouse managers, drivers, and customers. The app leverages technologies like Node.js, React.js, MongoDB, and Android to deliver a seamless user experience.

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
                        <li>The client, a leading logistics and supply chain company, faced challenges in monitoring and managing their fleet of vehicles and consignments effectively. They required a robust system to:
                        </li>
                        <li>
                          <FaRegCircleCheck /> Monitor real-time location and vehicle statistics such as engine start/stop status, distance travelled, and freezer temperature.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Trigger alerts for freezer temperature breaches or prolonged vehicle inactivity.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Provide warehouse managers with specific access to their assigned warehouses.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Track drivers’ travel history and customer locations visited.
                        </li>
                        <li>
                          <FaRegCircleCheck />Notify customers about consignment details and status changes.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Streamline driver delivery assignments with clear instructions.
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
                          Real-Time Monitoring: Ensuring accurate and real-time updates of vehicle locations and metrics.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Temperature Management: Preventing product spoilage by monitoring freezer temperatures and issuing immediate alerts for deviations.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Role-Based Access: Creating user-specific functionalities for warehouse managers, drivers, and customers.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Customer Transparency: Providing end-to-end visibility for consignment deliveries to customers.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Scalability: Building a scalable platform to support increasing vehicle and consignment data.
                        </li>
                        <li>
                          <FaRegCircleCheck />
                          Enabling real-time tracking and monitoring for both
                          users and moving companies.
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
                    We developed a robust and scalable logistics management
                    platform with the following key implementations:
                  </p>
                  <div className={styles.dropdownSection}>
                    <h5
                      onClick={() => setShowBackend(!showBackend)}
                      className={styles.dropdownHeader}
                    >
                      1. Key Features
                      {showBackend ? (
                        <HiOutlineChevronUp className={styles.arrowIcon} />
                      ) : (
                        <HiOutlineChevronDown className={styles.arrowIcon} />
                      )}
                    </h5>
                    {showBackend && (
                      <ul className={styles.solutionList}>
                        <li>
                           <strong>Real-Time Vehicle Tracking:</strong> <ul> <li>GPS-enabled tracking to monitor live locations.
                           </li>
                        <li>Detailed vehicle statistics including engine start/stop status and travel distances.
                        </li>
                         </ul>
                        </li>
                        <li>
                          <strong>User Role Management:</strong> Implemented
                          secure role-based access for admins, moving companies,
                          and customers.
                        </li>
                        <li>
                          <strong>Document Handling:</strong> Integrated
                          PandaDoc for digital contract and invoice management.
                        </li>
                        <li>
                          <strong>Booking Management:</strong> Provided
                          automated workflows to manage moving requests and
                          schedule bookings seamlessly.
                        </li>
                        <li>
                          <strong>AI-Powered Estimation:</strong> Users can
                          upload pictures, and AI will analyze the number of
                          items in the image.
                        </li>
                        <li>
                          <strong>Quotation Calculation:</strong> Calculates
                          estimated cost based on item count, truck type, and
                          distance.
                        </li>
                        <li>
                          <strong>Booking Monitoring:</strong> Real-time status
                          tracking for both users and moving companies.
                        </li>
                        <li>
                          <strong>Entity Calculation:</strong> AI detects item
                          count from uploaded images and generates estimates.
                        </li>
                        <li>
                          <strong>Admin Insights:</strong> Admins can view user
                          phone numbers and monitor booking progress.
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
                          <strong>Admin Panel:</strong> Dashboard for managing
                          users, bookings, payments, and documents.
                        </li>
                        <li>
                          <strong>User Authentication:</strong> Secure login
                          with role-based access control.
                        </li>
                        <li>
                          <strong>Booking System:</strong> UI for scheduling and
                          managing moves.
                        </li>
                        <li>
                          <strong>AI-Driven User Input:</strong> Users can
                          upload pictures for resource estimation and quotation.
                        </li>
                        <li>
                          <strong>Booking Tracking:</strong> Track booking
                          status in real time.
                        </li>
                        <li>
                          <strong>Step Completion Monitoring:</strong> Admins
                          can check completed steps and view user details.
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
                      <img src="/images/express-js.png" />
                    </li>
                    <li>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 500 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M250 500C388.071 500 500 388.071 500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500Z"
                          fill="#248567"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M362.316 186.964L361.048 187.596C350.909 179.22 337.76 173.846 320.968 173.846C299.422 173.846 279.62 181.59 266.471 197.237L286.907 218.89C297.046 209.249 307.819 203.875 321.601 203.875C347.424 204.508 364.058 224.264 364.058 250.816C364.058 277.368 346.632 297.757 320.334 297.757C254.431 297.757 272.966 174.004 184.409 174.004C140.051 174.004 109 207.036 109 250.974V385H140.684V313.404L141.952 312.771C152.091 321.148 165.24 326.522 182.032 326.522C203.578 326.522 223.38 318.777 236.529 303.13L216.093 281.478C205.954 291.119 195.181 296.492 181.399 296.492C155.576 295.86 138.942 276.104 138.942 249.552C138.942 222.999 156.368 202.611 182.666 202.611C248.569 202.611 230.034 326.364 318.591 326.364C362.949 326.364 394 293.331 394 249.394V116H362.316V186.964Z"
                          fill="white"
                        />
                      </svg>
                    </li>
                    <li>
                      <img src="/images/git.png" />
                    </li>
                    <li>
                      <img src="/images/ml.png" />
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
              <AnimatedText text={"Result Archived"} highlightText={"Result"} />
            </h4>

            <ul className={styles.solutionList}>
              <li>
                <strong>Improved Operational Efficiency:</strong> Automation
                reduced manual workload and streamlined logistics processes.
              </li>
              <li>
                <strong>Enhanced User Experience:</strong> A well-structured
                admin panel and intuitive booking system simplified operations.
              </li>
              <li>
                <strong>Secure and Scalable:</strong> Role-based access and
                robust APIs ensured a secure and scalable solution.
              </li>
              <li>
                <strong>Seamless Document Handling:</strong> PandaDoc
                integration enabled easy digital document management.
              </li>
              <li>
                <strong>Accurate Cost Estimation:</strong> AI-driven image
                analysis helped users get precise quotations based on their
                inventory and moving requirements.
              </li>
              <li>
                <strong>Real-Time Tracking:</strong> Users and moving companies
                can monitor bookings at every stage, improving transparency.
              </li>
              <li>
                <strong>Admin Insights:</strong> Enhanced admin control over
                user information and step completion status.
              </li>
            </ul>
            
          </div>
          <div className={styles.introText} data-aos="fade-up">
            <h4 className={styles.title}>
              <AnimatedText text={"Conclusion"} highlightText={"Conclusion"} />
            </h4>

            <p>
              AI enabled logistic based solution successfully enhances the
              moving management experience by integrating automation, digital
              documentation, and seamless booking workflows. The addition of
              AI-powered image recognition for inventory estimation
              significantly improves accuracy in cost calculation and resource
              planning. With its scalable and efficient system architecture,
              MoveLogic AI optimizes the logistics industry for both customers
              and service providers. Additionally, the ability for users and
              moving companies to monitor bookings in real time, along with
              detailed admin insights, makes This is a comprehensive and
              intelligent logistics solution.
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
