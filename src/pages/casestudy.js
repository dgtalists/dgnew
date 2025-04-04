import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Casestudy.module.css";
import Header from "@/component/Header/Header";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import ImageReveal from "@/component/ImageReveal/ImageReveal";
import AnimatedText from "@/component/AnimatedText/AnimatedText";
import { GoArrowRight, GoArrowUpRight, GoGlobe } from "react-icons/go";
import ContinuousScrollingSlider from "@/component/Continious/ContinuousScrolig";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import ParallaxBanner from "@/component/ParralaxBanner/ParallaxBanner";
import Counter from "@/component/Counter/Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { BiSolidPhoneCall, BiSolidQuoteRight } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import Footer from "@/component/Footer/Footer";
import { DiCode } from "react-icons/di";
import {
  BsBoxSeam,
  BsCodeSlash,
  BsCodeSquare,
  BsPatchCheck,
  BsSuitcaseLg,
} from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";

export default function CaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const serviceData = [
    {
      title: "Custom Enterprise Software Development",
      intro:
        "We design and develop scalable, high-performance enterprise applications that streamline operations, enhance collaboration, and drive productivity.",
      features: [
        "End-to-end custom software development",
        "Cloud-based and on-premise solutions",
        "AI-driven and data-centric applications",
      ],
      image: "/images/custom-enterprise.png",
      link: "#",
    },
    {
      title: "Enterprise Application Integration (EAI)",
      intro:
        "Seamlessly connect disparate business systems for smooth data flow and operational efficiency.",
      features: [
        "API development and integration",
        "CRM, ERP, and third-party software integration",
        "Legacy system modernization",
      ],
      image: "/images/eai.png",
      link: "#",
    },
    {
      title: "Enterprise Mobility Solutions",
      intro:
        "Enable seamless mobile experiences for employees, customers, and partners with secure enterprise-grade applications.",
      features: [
        "Cross-platform mobile app development",
        "Enterprise-wide security and compliance",
        "BYOD and MDM implementation",
      ],
      image: "/images/enter-mobility.png",
      link: "#",
    },
    {
      title: "Cloud Enterprise Solutions",
      intro:
        "Leverage cloud computing for scalable, flexible, and cost-effective enterprise solutions.",
      features: [
        "Cloud migration and optimization",
        "SaaS, PaaS, and IaaS development",
        "Multi-cloud and hybrid cloud solutions",
      ],
      image: "/images/cloud-enterprise.png",
      link: "#",
    },
    {
      title: "AI & Automation for Enterprises",
      intro:
        "Enhance decision-making, automate processes, and optimize business operations with AI-driven solutions.",
      features: [
        "Machine learning and predictive analytics",
        "RPA (Robotic Process Automation)",
        "Chatbots and virtual assistants",
      ],
      image: "/images/custom-enterprise.png",
      link: "#",
    },
    {
      title: "Enterprise Data Management & Analytics",
      intro:
        "Transform raw data into actionable insights to drive informed business decisions.",
      features: [
        "Big data solutions",
        "Business intelligence dashboards",
        "Data security and compliance",
      ],
      image: "/images/enter-mobility.png",
      link: "#",
    },
  ];

  const industries = [
    {
      title: "Manufacturing ",
      subtitle: "AI / ML",
      image: "/images/ai-ml.jpg",
      description: "IoT solutions, smart factory automation",
    },
    {
      title: "Retail & eCommerce ",
      subtitle: "E-Commerce",
      image: "/images/ecommerce.jpg",
      description: "Omnichannel commerce, AI-driven personalization",
    },
    {
      title: "Logistics & Supply Chain ",
      subtitle: "Logistics",
      image: "/images/blockchain.jpg",
      description: "Real-time tracking, warehouse management",
    },
    {
      title: "Education Through Technology",
      subtitle: "Edutech",
      image: "/images/edutech.jpg",
      description: "eLearning platforms, LMS solutions",
    },

    {
      title: "Banking and Finance",
      subtitle: "Security & reliability",
      image: "/images/banking.jpg",
      description:
        "Fintech applications, fraud detection, compliance automation",
    },
    {
      title: " Healthcare",
      subtitle: "Telemedicine platforms",
      image: "/images/health.jpg",
      description: "HIPAA-compliant solutions, telemedicine, EHR systems",
    },
  ];
  const whyUsData = [
    {
      count: "01",
      title: "Industry Expertise & Innovation",
      description:
        "With 19+ years of experience, we combine deep industry knowledge with the latest technologies to build solutions that deliver real business value.",
      icon: <BsSuitcaseLg />,
    },
    {
      count: "02",
      title: "End-to-End Development & Support",
      description:
        "From ideation to deployment and beyond, we provide full-cycle development and support for a seamless enterprise experience.",
      icon: <BsCodeSquare />,
    },
    {
      count: "03",
      title: "Agile & Scalable Solutions",
      description:
        "Our agile approach ensures flexibility and scalability, enabling your enterprise to adapt to evolving business needs.",
      icon: <BsBoxSeam />,
    },
    {
      count: "04",
      title: "Security & Compliance",
      description:
        "We prioritize your data with enterprise-grade security practices and adhere to global compliance standards.",
      icon: <BsPatchCheck />,
    },
  ];
  const techStackData = [
    {
      title: "UI/UX",
      items: [
        { name: "Figma", icon: "/images/figma.png" },
        { name: "Photoshop", icon: "/images/ps.png" },
        { name: "Adobe Illustrator", icon: "/images/ill.png" },
        { name: "Adobe XD", icon: "/images/xd.png" },
        { name: "Sketch", icon: "/images/sketch.png" },
        { name: "Miro", icon: "/images/miro.png" },
        { name: "Zeplin", icon: "/images/zeplin.png" },
        { name: "Axure", icon: "/images/axure_icon.png" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "Html", icon: "/images/ht.png" },
        { name: "Css", icon: "/images/css-3.png" },
        { name: "Bootstarp", icon: "/images/bootstrap.png" },
        { name: "Next JS", icon: "/images/next.png" },
        { name: "React JS", icon: "/images/react.png" },
        { name: "Angular JS", icon: "/images/angular.png" },
        { name: "Vue JS", icon: "/images/vue.png" },
        // { name: "Svelte", icon: "/images/svelte.png" },
        { name: "Javascript", icon: "/images/js.png" },
        { name: "JQuery", icon: "/images/jquery.png" },
        { name: "Typescript", icon: "/images/ts.png" },
        // { name: "Web3", icon: "/images/web3.png" },
      ],
    },
    {
      title: "Programming Languages",
      items: [
        { name: "Python", icon: "/images/tech/python.png" },
        { name: "Java", icon: "/images/tech/java.png" },
        { name: ".NET", icon: "/images/tech/dotnet.png" },
        { name: "Node.js", icon: "/images/tech/nodejs.png" },
        { name: "React", icon: "/images/tech/react.png" },
        { name: "Angular", icon: "/images/tech/angular.png" },
      ],
    },
    {
      title: "Cloud Platforms",
      items: [
        { name: "AWS", icon: "/images/tech/aws.png" },
        { name: "Azure", icon: "/images/tech/azure.png" },
        { name: "Google Cloud", icon: "/images/tech/gcp.png" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "PostgreSQL", icon: "/images/tech/postgresql.png" },
        { name: "MySQL", icon: "/images/tech/mysql.png" },
        { name: "MongoDB", icon: "/images/tech/mongodb.png" },
        { name: "Oracle", icon: "/images/tech/oracle.png" },
      ],
    },
    {
      title: "AI & Analytics",
      items: [
        { name: "TensorFlow", icon: "/images/tech/tensorflow.png" },
        { name: "Power BI", icon: "/images/tech/powerbi.png" },
        { name: "Apache Spark", icon: "/images/tech/spark.png" },
      ],
    },
    {
      title: "DevOps Tools",
      items: [
        { name: "Docker", icon: "/images/tech/docker.png" },
        { name: "Kubernetes", icon: "/images/tech/kubernetes.png" },
        { name: "Jenkins", icon: "/images/tech/jenkins.png" },
        { name: "Terraform", icon: "/images/tech/terraform.png" },
      ],
    },
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
                  {/* Your End-to-End Partner for
                  <span> Digital Transformation </span> <br/> Let’s Innovate and Grow
                  Together! */}
                  <AnimatedText
                    text={
                      "AI-Enabled Smart Logistics & Moving Management Platform "
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
            <div className="col-lg-8">
              <div className={styles.introContent}>
                <img src="/images/intro.jpg" alt="intro" />
                <div className={styles.introText}>
                  <h4 className={styles.title}>
                    <AnimatedText
                      text={"Project Overview"}
                      highlightText={"Project"}
                    />
                  </h4>
                  <p>
                    This is an AI enabled smart logistics and moving management
                    system designed to streamline the moving process for both
                    customers and moving companies. The platform leverages
                    advanced automation and digital documentation to enhance
                    efficiency, reduce manual workload, and ensure seamless
                    coordination between all parties involved.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.projectDetails}>
                <div className={styles.eachDetails}>
                  <h4>Project Type</h4>
                  <p>Enterprise Software Development</p>
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
                  <h4>Technology Stack                  </h4>
                  <ul>
                    <li><img src="/images/programing.png"/></li>
                    <li><img src="/images/react.png"/></li>
                    <li><img src="/images/mongo.png"/></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.introText}>
              <h4 className={styles.title}>
                <AnimatedText
                  text={"Client Requirements"}
                  highlightText={"Client"}
                />
              </h4>
              <ul>
                <li>
                  A centralized system to manage moving bookings and logistics.
                </li>
                <li>Automated workflows to reduce manual intervention.</li>
                <li>
                  Digital document handling for contracts, invoices, and other
                  paperwork.
                </li>
                <li>Secure authentication and role-based access control.</li>
                <li>
                  A comprehensive admin panel to manage users, bookings, and
                  payments.
                </li>
                <li>
                  AI-driven estimation and quotation system based on image
                  analysis.
                </li>
                <li>
                  Booking monitoring for both moving companies (partners) and
                  users.
                </li>
                <li>
                  Entity calculation based on AI analysis of uploaded images.
                </li>
                <li>
                  Admin access to view phone numbers and track completed steps
                  in the booking process.
                </li>
              </ul>
            </div>
            <div className={styles.introText}>
              <h4 className={styles.title}>
                <AnimatedText
                  text={"Our Challenges"}
                  highlightText={"Challenges"}
                />
              </h4>
              <ul>
                <li>
                  Ensuring seamless communication between different system
                  components.
                </li>
                <li>
                  Handling large volumes of bookings and digital documents
                  efficiently.
                </li>
                <li>
                  Providing a secure and intuitive admin panel for operational
                  control.
                </li>
                <li>
                  Integrating with third-party document handling services like
                  PandaDoc.
                </li>
                <li>
                  Implementing AI-powered item recognition and estimation.
                </li>
                <li>
                  Enabling real-time tracking and monitoring for both users and
                  moving companies.
                </li>
              </ul>
            </div>
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
