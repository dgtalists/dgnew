import Head from "next/head";
import styles from "@/styles/Enterprise.module.css";
import Header from "@/component/Header/Header";
import Link from "next/link";
import ImageReveal from "@/component/ImageReveal/ImageReveal";
import AnimatedText from "@/component/AnimatedText/AnimatedText";
import { GoArrowUpRight, GoDatabase, GoGlobe } from "react-icons/go";
import { PiSpeakerHigh, PiSuitcaseSimpleLight } from "react-icons/pi";
import ParallaxBanner from "@/component/ParralaxBanner/ParallaxBanner";
import Counter from "@/component/Counter/Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Footer from "@/component/Footer/Footer";
import { DiCode } from "react-icons/di";
import { BsBrush } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineHourglass } from "react-icons/ai";
export default function Marketing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const serviceData = [
    {
      title: "Digital Marketing & SEO",
      intro:
        "Increase your online visibility and attract high-intent customers with result-driven digital marketing strategies.",
      features: [
        "SEO & Keyword Strategy",
        "Paid Advertising (PPC)",
        "Content Marketing ",
        "Conversion Rate Optimization (CRO)",
      ],
      image: "/images/dm-1.png",
      link: "#",
    },
    {
      title: "Social Media Marketing & Management",
      intro:
        "Build a strong social media presence that engages and grows your audience.",
      features: [
        "Social Media Strategy",
        "Content Creation & Scheduling",
        "Paid Social Campaigns",
        "Influencer & Brand Collaborations",
      ],
      image: "/images/dm-2.png",
      link: "#",
    },
    {
      title: "Brand Identity & Positioning",
      intro:
        "Define and refine your brand identity to make a lasting impression in the market.",
      features: [
        "Logo Design & Visual Branding",
        "Brand Messaging & Storytelling",
        "Competitive Analysis & Positioning",
      ],
      image: "/images/dm-3.png",
      link: "#",
    },
    {
      title: "Content Strategy & Copywriting",
      intro:
        "Engage and convert your audience with compelling, high-quality content.",
      features: [
        "Website Content & Landing Pages",
        "Email Marketing & Newsletters",
        "Sales Copy & Ad Creatives",
      ],
      image: "/images/dm-4.png",
      link: "#",
    },
    {
      title: "Video Marketing & Visual Storytelling",
      intro: "Use video to create an emotional connection with your audience.",
      features: [
        "Promotional & Brand Storytelling Videos",
        "Product Demo & Explainer Videos",
        "Motion Graphics & Animation ",
      ],
      image: "/images/dm-5.png",
      link: "#",
    },
    {
      title: "Performance Analytics & ROI Tracking",
      intro: "Optimize marketing campaigns with data-driven insights.",
      features: [
        "Web Analytics & Conversion Tracking",
        "A/B Testing & User Experience Analysis",
        " Marketing ROI Measurement",
      ],
      image: "/images/dm-6.png",
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
      title: "Data-Driven Approach",
      description:
        "We use AI-powered analytics to refine marketing strategies and maximize performance.",
      icon: <GoDatabase />,
    },
    {
      count: "02",
      title: "End-to-End Marketing Solutions",
      description:
        "From branding to automation, we offer a complete suite of services.",
      icon: <PiSpeakerHigh />,
    },
    {
      count: "03",
      title: "Creative & Strategic Execution",
      description:
        "We blend storytelling with data to craft impactful campaigns.",
      icon: <BsBrush />,
    },
    {
      count: "04",
      title: "Scalable & Agile Strategies",
      description: "Our solutions evolve with your business needs",
      icon: <AiOutlineHourglass />,
    },
  ];
  const techStackData = [
    {
      title: "SEO & Analytics",
      items: [
        { name: "Google Analytics", icon: "/images/google-analytics.png" },
        { name: "SEMrush", icon: "/images/semr.png" },
        { name: "Moz", icon: "/images/moz.png" },
        { name: "Ahrefs", icon: "/images/Ahrefs.png" },
      ],
    },

    {
      title: "Social Media Management",
      items: [
        { name: "Hootsuite", icon: "/images/hootsuite.png" },
        { name: "Buffer", icon: "/images/buffer.png" },
        { name: "Sprout Social", icon: "/images/sprout.png" },
        // { name: "Active Campaign", icon: "/images/ac.png" },
      ],
    },
    {
      title: "Marketing Automation",
      items: [
        { name: "HubSpot", icon: "/images/Hubspot.png" },
        { name: "Mailchimp", icon: "/images/mailchimp.png" },
        { name: "Marketo", icon: "/images/marketo_logo.png" },
        { name: "Active Campaign", icon: "/images/ac.png" },
      ],
    },
    {
      title: "Design & Video Tools",
      items: [
        { name: "Adobe Creative Suite", icon: "/images/adobe_creative.png" },
        { name: "Canva", icon: "/images/canva.png" },
        { name: "Final Cut Pro", icon: "/images/final.png" },
        { name: "After Effects", icon: "/images/ae.png" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Marketing & Communication</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ParallaxBanner backgroundImage="/images/m.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  <AnimatedText
                    text={"Marketing & Communication"}
                    highlightText={"Marketing"}
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
                    src={"/images/marketing.png"}
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
                    text={"Drive Brand Growth with Data-Driven Strategies"}
                    highlightText={"Brand Growth"}
                  />
                </h4>
                <p>
                  At DGTALISTS, we craft powerful marketing and communication
                  strategies to help businesses build brand recognition, engage
                  their audience, and maximize revenue. Our expertise in digital
                  marketing, brand positioning, strategic communication, and
                  data analytics allows start-ups, scale-ups, and enterprises to
                  create meaningful customer connections and achieve sustainable
                  growth.
                </p>
                <p>
                  We combine creativity with cutting-edge technology to deliver
                  high-performance marketing campaigns that convert and elevate
                  your brand in a competitive market.
                </p>
                <Link href="/contact" className={styles.cmnBtn}>
                  get started
                  <HiOutlineArrowRight className={styles.arrowRight} />
                </Link>
                <div className={styles.counterSec}>
                  <div className={styles.eachCounter}>
                    <Counter value={130} suffix="+" />
                    <p>Project Complete</p>
                  </div>
                  <div className={styles.eachCounter}>
                    <Counter value={35} suffix="+" />
                    <p>Team Members</p>
                  </div>
                  <div className={styles.eachCounter}>
                    <Counter value={5} />
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
                text={"Our Marketing & Communication Services"}
                highlightText={"Marketing & Communication"}
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
                text={"Why Choose DGTALISTS for Marketing & Communication?"}
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
                text={"Technologies We Use for SaaS Development"}
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
                {techStackData[activeIndex] && (
                  <ul className={styles.techGrid}>
                    {techStackData[activeIndex].items.map((item, idx) => (
                      <li key={idx} className={styles.techItem}>
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.ourWorkProcess}>
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
      </section> */}
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
                  text={"Transform Your Marketing & Communication Strategy"}
                  highlightText={"Marketing & Communication"}
                />
              </h4>
              <p>
                Ready to elevate your brand's voice and reach? Let’s explore how
                DGTALISTS can help you craft data-driven marketing strategies
                and seamless communication systems that drive engagement,
                growth, and ROI.
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
