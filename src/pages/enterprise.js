import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Enterprise.module.css";
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
export default function Enterprise() {
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
      title: "Backend",
      items: [
        { name: "Python", icon: "/images/python.png" },
        { name: "Java", icon: "/images/java.png" },
        { name: ".NET", icon: "/images/net.png" },
        { name: "Node Js", icon: "/images/node.png" },
        { name: "Ruby On Rails", icon: "/images/rails.png" },
        { name: "php", icon: "/images/php.png" },
        { name: "Laravel", icon: "/images/Laravel-3.png" },
        { name: "Django", icon: "/images/django-logo.png" },
        
      ],
    },
    {
      title: "Cloud Platforms",
      items: [
        { name: "AWS", icon: "/images/aws.png" },
        { name: "Azure", icon: "/images/azure.png" },
        { name: "Google Cloud", icon: "/images/google-cloud.png" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "PostgreSQL", icon: "/images/postgresql.png" },
        { name: "MySQL", icon: "/images/sql.png" },
        { name: "MongoDB", icon: "/images/mongo.png" },
        { name: "Oracle", icon: "/images/ora-data.png" },
        { name: "Firebase", icon: "/images/firebase.png" },
      ],
    },
    {
      title: "DevOps",
      items: [
        { name: "PostgreSQL", icon: "/images/postgresql.png" },
        { name: "MySQL", icon: "/images/sql.png" },
        { name: "MongoDB", icon: "/images/mongo.png" },
        { name: "Oracle", icon: "/images/ora-data.png" },
        { name: "Firebase", icon: "/images/firebase.png" },
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ParallaxBanner backgroundImage="/images/hero-bg.jpg">
        <div className="container">
          <div className="row align-items-center justify-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  {/* Your End-to-End Partner for
                  <span> Digital Transformation </span> <br/> Let’s Innovate and Grow
                  Together! */}
                  <AnimatedText
                    text={
                      "Your End-to-End Partner for Digital Transformation Let’s Innovate and Grow  Together!"
                    }
                    highlightText={"Digital Transformation"}
                  />
                </h1>
                <h2>
                  <Typewriter
                    words={["Development | Marketing | Training"]}
                    loop={0} // Infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <p>
                  Leading software solutions provider specializing in
                  innovative, scalable, and secure technology solutions. We
                  empower businesses with cutting-edge software to drive
                  efficiency and growth.
                </p>
                <Link href="/" className={styles.cmnBtn}>
                  get started
                  <HiOutlineArrowRight className={styles.arrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <section className={styles.aboutUs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.whatWeDo}>
                <div className={styles.imageWrap}>
                  <ImageReveal
                    className={styles.aboutImage}
                    src={"/images/what-we-do-image.jpg"}
                    alt={"about img"}
                  />
                </div>
                <div className={styles.exploreMore}>
                  <Link href={"#"}>
                    <img src="/images/explore-more-circle.png" />
                  </Link>
                </div>
                <div className={styles.companyExperience}>
                  <div className={styles.iconbox}>
                    <PiSuitcaseSimpleLight />
                  </div>
                  <div className={styles.companyExperienceContent}>
                    <h3>
                      <span className={styles.counter}>5</span>+
                    </h3>
                    <p>years experience in software company</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.aboutRight}>
                <span className={styles.subtitle}>What We Do</span>
                <h4 className={styles.title}>
                  <AnimatedText
                    text={
                      "Comprehensive Enterprise Software Development Services to Drive Business Growth"
                    }
                    highlightText={"Business"}
                  />
                </h4>
                <p>
                  At Dgtalists, we craft enterprise software solutions that
                  empower organizations to excel in a digital-first world. From
                  reimagining legacy systems to integrating advanced
                  technologies like AI, Blockchain, and cloud platforms, our
                  skilled team delivers applications that drive growth and
                  streamline operations. With a passion for innovation and a
                  commitment to excellence, we partner with businesses of all
                  sizes to create software that’s as unique as your vision. With
                  deep industry expertise and a business-centric approach, we
                  empower start-ups, scale-ups, and enterprises to drive
                  efficiency, innovation, and growth.
                </p>
                {/* <Link href="/" className={styles.cmnBtn}>
                  get started
                  <HiOutlineArrowRight className={styles.arrowRight} />
                </Link> */}
                {/* <div className={styles.counterSec}>
                  <div className={styles.eachCounter}>
                    <Counter value={130} suffix="+" />
                    <p>Project Complete</p>
                  </div>
                  <div className={styles.eachCounter}>
                    <Counter value={20} suffix="+" />
                    <p>Team Members</p>
                  </div>
                  <div className={styles.eachCounter}>
                    <Counter value={5} />
                    <p>Years Of Experience</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.serviceList}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>Our Services</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Our Enterprise Software Development Services"}
                highlightText={"Enterprise"}
              />
            </h4>
          </div>
          <div className={`row ${styles.serviceListRow}`}>
            {serviceData.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <div className={styles.each_solution_slider}>
                  <div className={styles.serviceImageWrap}>
                    <img
                      className={styles.serviceImage}
                      src={item.image}
                      alt={"service img"}
                    />
                  </div>
                  <div className={styles.slider_content}>
                    <h5>{item.title}</h5>
                    <div className={styles.solution_desc}>
                      <div>
                        <h5>{item.title}</h5>
                        <p>{item.intro}</p>
                        <ul className={styles.solution_list}>
                          {item.features.map((feature, index) => (
                            <li key={index}>
                              <DiCode /> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.whyUs}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>Why Choose Us</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Trusted Enterprise Software Development with DGTALISTS"}
                highlightText={"DGTALISTS"}
              />
            </h4>
          </div>
          <div className="row">
            {whyUsData.map((item, index) => (
              <div className="col-lg-3" key={index}>
                <div className={styles.eachWhyUs}>
                  <div className={styles.whyUsCount}>
                    <h2>{item.count}</h2>
                  </div>
                  <div className={styles.iconWrap}>{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.ourTechStack}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>Our Tech Stack</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Technologies We Use for Enterprise Solutions"}
                highlightText={"Technologies"}
              />
            </h4>
          </div>
          <div className="row">
            {/* Left Tabs */}
            <div className="col-lg-4">
              <div className={styles.techStackLeft}>
                <ul>
                  {techStackData.map((tab, index) => (
                    <li
                      key={index}
                      className={activeIndex === index ? styles.activeTab : ""}
                      onClick={() => setActiveIndex(index)}
                    >
                      {tab.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-8">
              <div className={styles.techStackRight}>
                <ul className={styles.techGrid}>
                  {techStackData[activeIndex].items.map((item, idx) => (
                    <li key={idx} className={styles.techItem}>
                      <img src={item.icon} alt={item.name} />
                      <p>{item.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ourWorkProcess}>
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-6">
              <div className={styles.headerSection}>
                <span className={styles.subtitle}>how it work</span>
                <h4 className={styles.title}>
                  <AnimatedText
                    text={
                      "Our Proven Approach to Enterprise Software Development"
                    }
                    highlightText={"Proven Approach"}
                  />
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <p>
                Our process is designed to ensure smooth project execution, from
                initial consultation to final delivery. We collaborate closely
                with clients, leveraging agile methodologies and cutting-edge
                technology to develop.
              </p>
            </div>
          </div>
          <div className={styles.howWorkList}>
            <div className={styles.eachList}>
              <div className={styles.iconWrap}>
                <div className={styles.howWorkStep}>
                  <h2>01</h2>
                </div>
                <figure>
                  <img src="/images/developing.png" alt="consultation" />
                </figure>
              </div>
              <h5>Discovery & Strategy</h5>
              <p>Understand business needs and define a roadmap</p>
            </div>
            <div className={styles.eachList}>
              <div className={styles.iconWrap}>
                <div className={styles.howWorkStep}>
                  <h2>02</h2>
                </div>
                <figure>
                  <img
                    src="/images/front-end-programming.png"
                    alt="consultation"
                  />
                </figure>
              </div>
              <h5>custom design</h5>
              <p>Create user-friendly, intuitive interfaces</p>
            </div>
            <div className={styles.eachList}>
              <div className={styles.iconWrap}>
                <div className={styles.howWorkStep}>
                  <h2>03</h2>
                </div>
                <figure>
                  <img src="/images/web-programming.png" alt="consultation" />
                </figure>
              </div>
              <h5>Development & Integration </h5>
              <p>Build scalable, high-performance applications</p>
            </div>
            <div className={styles.eachList}>
              <div className={styles.iconWrap}>
                <div className={styles.howWorkStep}>
                  <h2>04</h2>
                </div>
                <figure>
                  <img src="/images/launch.png" alt="consultation" />
                </figure>
              </div>
              <h5>launch & support</h5>
              <p>Seamless launch with continuous maintenance</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.industrySection}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>Industries</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Industries We Serve with Excellence"}
                highlightText={"Excellence"}
              />
            </h4>
          </div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{ delay: 3000 }}
            // pagination={{ clickable: true }}
            // navigation={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={styles.swiperContainer}
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.industryCard}>
                  <div className={styles.industryCardImg}>
                    <figure>
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className={styles.IndustryImage}
                      />
                    </figure>
                  </div>
                  <div className={styles.industryContent}>
                    <span>{industry.subtitle}</span>
                    <h3>
                      <Link href={"#"}>{industry.title}</Link>
                    </h3>
                    <p>{industry.description}</p>
                  </div>
                  <div className={styles.industryBtn}>
                    <Link href={"#"}>
                      <GoArrowUpRight />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.customPagination}>
            {industries.map((_, index) => (
              <span
                key={index}
                className={`${styles.paginationDot} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => {
                  swiperRef.current?.slideTo(index); // Slide to clicked index
                  setActiveIndex(index);
                }}
              />
            ))}
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
                    <Link href={"https://dgtalists.vercel.app/"}>dgtalists.com</Link>
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
                    <Link href={"mailto:contact@dgtalists.com"}>contact@dgtalists.com </Link>
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
