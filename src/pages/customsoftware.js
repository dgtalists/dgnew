import Head from "next/head";
import styles from "@/styles/Enterprise.module.css";
import Header from "@/component/Header/Header";
import Link from "next/link";
import ImageReveal from "@/component/ImageReveal/ImageReveal";
import AnimatedText from "@/component/AnimatedText/AnimatedText";
import { GoArrowUpRight, GoGlobe } from "react-icons/go";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import ParallaxBanner from "@/component/ParralaxBanner/ParallaxBanner";
import Counter from "@/component/Counter/Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
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
import { HiOutlineArrowRight } from "react-icons/hi";
export default function Customsoftware() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  useEffect(() => {
    console.log("Active Tab Changed:", activeIndex);
  }, [activeIndex]);
  const handleClick = (index) => {
    console.log("Clicked on:", index);
    setActiveIndex(index);
  };

  const serviceData = [
    {
      title: "Bespoke Software Development",
      intro:
        "From concept to deployment, we develop custom applications tailored to your business needs.",
      features: [
        "Scalable web and mobile applications",
        "Custom enterprise-grade solutions",
        "End-to-end software lifecycle management",
      ],
      image: "/images/bespoke.png",
      link: "#",
    },
    {
      title: "Web & Mobile Application Development",
      intro:
        "Deliver high-performing web and mobile applications with intuitive user experiences.",
      features: [
        "Cross-platform and native mobile apps (iOS, Android)",
        "Progressive web apps (PWA)",
        "Cloud-based and SaaS solutions",
      ],
      image: "/images/web-application.png",
      link: "#",
    },
    {
      title: "AI & Machine Learning Solutions",
      intro:
        "Leverage artificial intelligence to automate workflows, analyze data, and enhance decision-making.",
      features: [
        "Predictive analytics",
        "Chatbots and virtual assistants",
        "AI-powered automation",
      ],
      image: "/images/aiml.png",
      link: "#",
    },
    {
      title: "Cloud Application Development",
      intro:
        "Build and scale applications on secure, cost-effective cloud platforms.",
      features: [
        "Cloud-native applications",
        "Multi-cloud and hybrid cloud solutions",
        "Cloud migration and optimization",
      ],
      image: "/images/cloud-app.png",
      link: "#",
    },
    {
      title: "Software Integration & API Development",
      intro:
        "Seamlessly integrate new software with existing systems to optimize business operations.",
      features: [
        "API design and development",
        "CRM, ERP, and third-party system integration",
        "Data synchronization and workflow automation",
      ],
      image: "/images/api-dev.png",
      link: "#",
    },
    {
      title: "DevOps & Agile Development",
      intro:
        "Accelerate software delivery with agile methodologies and DevOps best practices.",
      features: [
        "Continuous integration and deployment (CI/CD)",
        "Cloud infrastructure automation",
        "Performance optimization",
      ],
      image: "/images/agile.png",
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
      title: "Proven Expertise & Innovation",
      description:
        "With 19+ years of experience, we build future-proof software using cutting-edge technologies.",
      icon: <BsSuitcaseLg />,
    },
    {
      count: "02",
      title: "Scalable & Secure Development",
      description:
        "We develop software that scales with your business while ensuring top-tier security and compliance.",
      icon: <BsCodeSquare />,
    },
    {
      count: "03",
      title: "Agile & Transparent Process",
      description:
        "Our agile development approach ensures flexibility, faster time-to-market, and seamless collaboration.",
      icon: <BsBoxSeam />,
    },
    {
      count: "04",
      title: "Tailored Solutions for Business Growth",
      description:
        "We align technology with your business strategy to deliver software that drives results.",
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
        { name: "AWS", icon: "/images/aws.png" },
        { name: "Azure", icon: "/images/azure.png" },
        { name: "Google Cloud", icon: "/images/google-cloud.png" },
        { name: "Gitlab", icon: "/images/git_lab.png" },
        { name: "Gradle", icon: "/images/gradle.png" },
        { name: "Docker", icon: "/images/docker.png" },
        { name: "Ansible", icon: "/images/ansible_logo.png" },
        { name: "Jenkins", icon: "/images/jenkins_logo.png" },
        { name: "CI CD", icon: "/images/ci_cd.png" },
        { name: "Kubernets", icon: "/images/kubernets.png" },
        { name: "Selenium", icon: "/images/sele.png" },
        { name: "Apache", icon: "/images/apache.png" },
        { name: "Terraform", icon: "/images/terraform-framework.png" },
      ],
    },
    {
      title: "AI & Analytics",
      items: [
        { name: "TensorFlow", icon: "/images/tensorflow.png" },
        { name: "Power BI", icon: "/images/powerbi.png" },
        { name: "Apache Spark", icon: "/images/apache-spark.png" },
        { name: "Tableu", icon: "/images/tableu.png" },
      ],
    },
    {
      title: "CMS",
      items: [
        { name: "PHP", icon: "/images/php.png" },
        { name: "Wordpress", icon: "/images/wordpress.png" },
        { name: "Shopify", icon: "/images/shopify.png" },
        { name: "Magento", icon: "/images/magento.png" },
        { name: "Drupal", icon: "/images/drupal.png" },
        { name: "Woocommerce", icon: "/images/woocommerce-product-logo.png" },
        { name: "Strapi", icon: "/images/strapi.png" },
        { name: "Webflow", icon: "/images/webflow.png" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Custom Software Development</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ParallaxBanner backgroundImage="/images/csdev.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  <AnimatedText
                    text={"Custom Software Development Services"}
                    highlightText={"Software Development"}
                  />
                </h1>
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
                    src={"/images/custom-about.png"}
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
                    <p>years experience in software industry</p>
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
                      "Drive Digital Transformation with Tailored Software Solutions"
                    }
                    highlightText={"Digital Transformation"}
                  />
                </h4>
                <p>
                  At DGTALISTS, we specialize in building custom software
                  solutions that align with your unique business goals. Whether
                  you are a start-up, scale-up, or enterprise, our bespoke
                  software solutions enhance efficiency, improve customer
                  experiences, and drive growth.
                </p>
                <Link href="/" className={styles.cmnBtn}>
                  get started
                  <HiOutlineArrowRight className={styles.arrowRight} />
                </Link>
                <div className={styles.counterSec}>
                  <div className={styles.eachCounter}>
                    <Counter value={130} suffix="+" />
                    <p>Project Completed</p>
                  </div>
                  <div className={styles.eachCounter}>
                    <Counter value={35} suffix="+" />
                    <p>Team Members</p>
                  </div>
                  <div className={styles.eachCounter}>
                    <Counter value={5} suffix="+" />
                    <p>Years Of Experience</p>
                  </div>
                </div>
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
                text={"Our Custom Software Development Services"}
                highlightText={"Custom Software"}
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
                text={"Trusted Custom Software Development with DGTALISTS"}
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
                text={"Technologies We Use for Custom Software Development"}
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
                      onClick={() => handleClick(index)}
                      className={activeIndex === index ? styles.activeTab : ""}
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
          {/* <div className={styles.howWorkList}>
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
          </div> */}
          <div className={styles.howWorkList}>
            <ul>
              <li>
                <div className={styles.iconWrap}>
                  <h2>Discovery</h2>
                  <img src="/images/step-1.png" alt="consultation" />
                </div>
              </li>
              <li>
                <div className={styles.iconWrap}>
                  <h2>Planning & Design</h2>
                  <img src="/images/step-2.png" alt="consultation" />
                </div>
              </li>
              <li>
                <div className={styles.iconWrap}>
                  <h2>Development</h2>
                  <img src="/images/step-3.png" alt="consultation" />
                </div>
              </li>
              <li>
                <div className={styles.iconWrap}>
                  <h2>Testing & QA</h2>
                  <img src="/images/step-4.png" alt="consultation" />
                </div>
              </li>
              <li>
                <div className={styles.iconWrap}>
                  <h2>Deployment</h2>
                  <img src="/images/step-5.png" alt="consultation" />
                </div>
              </li>
              <li>
                <div className={styles.iconWrap}>
                  <h2>Support & Maintenance</h2>
                  <img src="/images/step-6.png" alt="consultation" />
                </div>
              </li>
            </ul>
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
