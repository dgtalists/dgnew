import Head from "next/head";
import styles from "@/styles/Allcase.module.css";
import Header from "@/component/Header/Header";
import Link from "next/link";
import ImageReveal from "@/component/ImageReveal/ImageReveal";
import AnimatedText from "@/component/AnimatedText/AnimatedText";
import { GoArrowUpRight, GoGlobe } from "react-icons/go";
import ParallaxBanner from "@/component/ParralaxBanner/ParallaxBanner";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Footer from "@/component/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { RxEnvelopeClosed } from "react-icons/rx";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";

export default function AllCase() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration if needed
  }, []);
  const portfolioData = [
    {
      title: "AI-Enabled Smart Movers & Packing Management Platform",
      subtitle:
        "This is an AI enabled smart logistics and moving management system designed to streamline the moving process for both customers and moving companies.",
      image: "/images/movelogicai.jpg",
      link:"/casestudy"
    },
    {
      title: "Vehicle Booking Mobile App",
      subtitle:
        "The rapid evolution of ride-hailing services has transformed urban mobility. Our client, a leading transportation startup, sought a scalable and user-friendly cab booking mobile app to provide a seamless experience for riders and drivers.",
      image: "/images/spincab.jpg",
      link:"/casestudy_vehicle"
    },
    // {
    //   title: "AI-Driven Smart Logistics & Moving Management Platform",
    //   subtitle:
    //     "In a fast-evolving logistics landscape, companies face challenges in real-time visibility, resource optimization, and customer coordination. ",
    //   image: "/images/works-img-4.jpg",
    //   link:"/casestudy_AIdriven"
    // },
    {
      title: "Social Media Listening & Digital Outreach Platform",
      subtitle:
        "In today's fast-evolving global governance landscape, the need for intelligent automation and real-time decision-making is more pressing than ever.  ",
      image: "/images/carousel.jpg",
      link:"/casestudy_socialMedia"
    },
    {
      title: "Web-Based Sales Process Automation for the Automobile Industry",
      subtitle:
        "Managing sales processes in the automobile industry requires a structured and automated approach to streamline operations, enhance efficiency, and improve overall business performance.",
      image: "/images/tera-motors.jpg",
      link:"/casestudy_webbase_sales"
    },
    {
      title: "Food Ordering & Management Platform",
      subtitle:
        "In the digital era, seamless food ordering and restaurant management solutions are crucial for enhancing customer experience and increasing business efficiency.",
      image: "/images/food-app.jpg",
      link:"/casestudy_food_order"
    },
  
    {
      title: "Real-Time Logistic App for Consignment Tracking ",
      subtitle:
        "A cutting-edge logistics application designed to revolutionize supply chain efficiency by enabling real-time tracking of consignment vehicles and monitoring critical metrics.",
      image: "/images/shine.jpg",
      link:"/casestudy_logistic"
    },
    {
      title: "Web-Based B2B Wholesale Marketplace",
      subtitle:
        "This is a B2B market place for whole sellers in the middle east market. It closely resembles an e-commerce platform but with a key difference: instead of placing orders, users can only place enquiries",
      image: "/images/safco.jpg",
      link:"/casestudy_wholesale_market"
    },
    {
      title: "Comprehensive Learning Management System",
      subtitle:
        "This is a comprehensive Learning Management System (LMS) designed to offer a structured and interactive learning experience.",
      image: "/images/gc.jpg",
      link:"/casestudy_management_system"
    },
    // {
    //   title: "News App for Real-Time Updates & Community Engagement",
    //   subtitle:
    //     "In the era of digital media, having an interactive and engaging news platform is essential for delivering real-time updates and community-driven content.",
    //   image: "/images/works-img-4.jpg",
    //   link:"/casestudy_newsapp"
    // },
    {
      title: "Online Business Directory with Influencer Collaboration Platform",
      subtitle:
        "In the evolving digital landscape, businesses increasingly seek innovative ways to boost visibility and connect with the right audiences. ",
      image: "/images/carousel.jpg",
      link:"/casestudy_onlineBusiness"
    },
    // {
    //   title: "Loan Process Application",
    //   subtitle:
    //     "The Loan Process Application is a digital solution developed to streamline, automate, and monitor the entire lifecycle of loan processing—from application submission to verification.",
    //   image: "/images/banking-app.jpg",
    //   link:""
    // },
    

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
      <ParallaxBanner backgroundImage="/images/case-study-bg.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  <AnimatedText
                    text={
                      "Case Studies "
                    }
                    highlightText={"Case"}
                  />
                </h1>
                <div className={styles.breadcrumb}>
                  <ol className={styles.breadcrumbWrap}>
                    <li className={styles.breadcrumbList}>
                      <a href="/">Home</a>
                    </li>
                    <li className={`${styles.breadcrumbList} ${styles.active}`}>
                      <FiChevronRight />
                      Case Studies
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <section className={styles.portfolio}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>our works</span>
            <h4 className={styles.title}>
              Excellence from <span className={styles.highlight}>concept</span>{" "}
              to completion
            </h4>         
          </div>

          {/* Swiper */}
         <div className="row">
            {portfolioData.map((portfolio, i) => (
              <div  className="col-lg-4" key={i}>
                <div className={styles.eachPortfolio}>
                  <div className={styles.portImgWrap}>
                    <ImageReveal
                      src={portfolio.image}
                      className={styles.portimg}
                    />
                    <div className={styles.industryBtn}>
                      <Link href={portfolio.link}>
                        <GoArrowUpRight />
                      </Link>
                    </div>
                  </div>
                  <div className={styles.portfolioContent}>
                    <h4>
                      <Link href={portfolio.link}>{portfolio.title}</Link>
                    </h4>
                    <p>{portfolio.subtitle}</p>
                  </div>
                  {/* <div className={styles.techStack}>
                    <h6>Tech Stack</h6>
                    <ul>
                      <li>
                        <img src="/images/html-5.png" />
                      </li>
                      <li>
                        <img src="/images/css-3.png" />
                      </li>
                      <li>
                        <img src="/images/science.png" />
                      </li>
                      <li>
                        <img src="/images/programing.png" />
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            ))}
         </div>

          {/* Custom Navigation */}
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
