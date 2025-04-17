import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/component/Header/Header";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import ImageReveal from "@/component/ImageReveal/ImageReveal";
import AnimatedText from "@/component/AnimatedText/AnimatedText";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import ContinuousScrollingSlider from "@/component/Continious/ContinuousScrolig";
import ParallaxBanner from "@/component/ParralaxBanner/ParallaxBanner";
import Counter from "@/component/Counter/Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import Footer from "@/component/Footer/Footer";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const serviceData = [
    {
      title: "Custom Software Development",
      description:
        "We build tailored software solutions, from web and mobile apps to enterprise systems, ensuring scalability and security.",
      image: "/images/csd.jpg",
      link: "/customsoftware",
    },
    {
      title: "Enterprise Software Development",
      description:
        "Developing robust and secure enterprise solutions to streamline operations and enhance productivity.",
      image: "/images/erp.png",
      link: "/enterprise",
    },
    {
      title: " SAAS Based Application ",
      description:
        "DGTALISTS specializes in designing and developing secure, scalable, and high-performance SaaS (Software-as-a-Service) applications.",
      image: "/images/web.png",
      link: "/saasaplication",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating feature-rich iOS and Android apps for optimal performance and user engagement.",
      image: "/images/appdev.png",
      link: "/mobileapp",
    },
    {
      title: "Data analytics & AI",
      description:
        "Enhancing efficiency with AI-driven solutions like chatbots, automation, and predictive analytics.",
      image: "/images/ai-dev.png",
      link: "/dataanalytics",
    },
    {
      title: "Marketing & Communication",
      description:
        "We combine creativity with cutting-edge technology to deliver high-performance marketing campaigns.",
      image: "/images/iot.png",
      link: "/marketing",
    },
  ];
  const industries = [
    {
      title: "AI-Driven Data Insights",
      subtitle: "AI / ML",
      image: "/images/ai-ml.jpg",
    },
    {
      title: "Custom E-Commerce Solutions",
      subtitle: "E-Commerce",
      image: "/images/ecommerce.jpg",
    },
    {
      title: "Blockchain Integration",
      subtitle: "Blockchain",
      image: "/images/blockchain.jpg",
    },
    {
      title: "Education Through Technology",
      subtitle: "Edutech",
      image: "/images/edutech.jpg",
    },
    {
      title: "Cyber Security",
      subtitle: "Digital Safety",
      image: "/images/cyber-security.jpg",
    },
    {
      title: "Banking and Finance",
      subtitle: "Security & reliability",
      image: "/images/banking.jpg",
    },
    {
      title: " Healthcare",
      subtitle: "Telemedicine platforms",
      image: "/images/health.jpg",
    },
  ];
  const portfolioData = [
    {
      title: "AI-Enabled Smart Movers & Packing Management  ",
      subtitle:
        "This is an AI enabled smart logistics and moving management system designed to streamline the moving process for both customers and moving companies.",
      image: "/images/movelogicai.jpg",
      link: "/casestudy",
    },
    {
      title: "Web-Based B2B Wholesale Marketplace",
      subtitle:
        "Managing sales processes in the automobile industry requires a structured and automated approach to streamline operations, enhance efficiency.",
      image: "/images/safco.jpg",
      link: "/casestudy_wholesale_market",
    },
    {
      title: "Real-Time Logistic App for Consignment Tracking",
      subtitle:
        "A cutting-edge logistics application designed to revolutionize supply chain efficiency by enabling real-time tracking of consignment vehicles and monitoring critical metrics.",
      image: "/images/spincab.jpg",
      link: "/casestudy_logistic",
    },
    {
      title: "Comprehensive Learning Management System",
      subtitle:
        "In the era of digital media, having an interactive and engaging news platform is essential for delivering real-time updates and community-driven content.",
      image: "/images/gc.jpg",
      link: "/casestudy_management_system",
    },
  ];
  const testimonials = [
    {
      image: "/images/livia.jpeg",
      text: `The team brought our vision for Global Currency Research to life with precision and creativity. The site is intuitive, beautiful, and works flawlessly across all devices. Highly recommended!`,
      author: "Livia C.",
      position: "Founder of Global Currency Database",
    },
    {
      image: "/images/manoj.jpeg",
      text: `Our custom logistics app has reduced material damage and improved workflow significantly. The team truly understood our challenges and delivered a seamless solution.`,
      author: "Manoj Thakur",
      position: "GM-Logistic",
    },
    {
      image: "/images/chris.jpeg",
      text: `The team delivered exactly what we needed—a powerful Number Analyser and CRM system tailored for real estate agents. It made our sales and client management far more efficient.`,
      author: "Chris",
      position: "Real Estate Tech Consultant",
    },
    {
      image: "/images/pete.jpeg",
      text: "The Warehouse Label Scanning App they built has transformed our logistics. It’s fast, reliable, and easy to use—helping us reduce errors and streamline operations. Highly professional team!",
      author: "Pete", // replace with actual name if available
      position: "Operations Manager",
    }
    
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
      <ParallaxBanner backgroundImage="/images/hero-bg.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  <AnimatedText
                    text={"Your End-to-End Partner for Digital Transformation"}
                    highlightText={"Digital Transformation"}
                  />
                </h1>
                <h2>
                  <Typewriter
                    words={["Technology  | Strategy  | Growth"]}
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
                <Link
                  href="/contact"
                  className={`${styles.cmnBtn} cursorButton`}
                >
                  get started
                  <HiOutlineArrowRight className={styles.arrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <ContinuousScrollingSlider />
      <section className={styles.aboutUs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.aboutLeft}>
                <div className={styles.aboutUsTitle}>
                  <h2>about us</h2>
                </div>
                <div className={styles.imageAbout}>
                  <div className={styles.imageWrap}>
                    <ImageReveal
                      className={styles.aboutImage}
                      src={"/images/about-us-image.jpg"}
                      alt={"about img"}
                    />
                  </div>
                  <div className={styles.exploreMore}>
                    <Link href={"#"}>
                      <img src="/images/explore-more-circle.png" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.aboutRight}>
                <span className={styles.subtitle}>About us</span>
                <h4 className={styles.title}>
                  <AnimatedText
                    text={
                      "Experience the Dgtalists Difference! Your End-to-End Partner for Digital Transformation"
                    }
                    highlightText={"Dgtalists"}
                  />
                </h4>
                <p>
                  Welcome to Dgtalists, your end-to-end digital transformation
                  partner. We go beyond software development, addressing all
                  facets of digital work with personalized solutions that
                  inspire innovation and achieve success in every aspect of your
                  business.Experience unparalleled expertise and support in
                  achieving your digital goals with us.
                </p>

                <div className={styles.counterSec}>
                  <div className={styles.eachCounter}>
                    <Counter value={130} suffix="+" />
                    <p>Project Completedd</p>
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
                <Link
                  href="/contact"
                  className={`${styles.cmnBtn} cursorButton`}
                >
                  get started
                  <HiOutlineArrowRight className={styles.arrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ourService}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>Services</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Services We Provide"}
                highlightText={"Services"}
              />
            </h4>
          </div>
          <div className="row">
            {serviceData.map((service, i) => (
              <div className="col-lg-4" key={i}>
                <div className={styles.eachServiceSec}>
                  <ImageReveal
                    src={service.image}
                    className={styles.serviceImg}
                  />
                  <h3>
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                  <Link className={styles.readMore} href={service.link}>
                    Read More <GoArrowUpRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.industry}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>Industries</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Industries We Serve"}
                highlightText={"Industries"}
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
                    <p>{industry.subtitle}</p>
                    <h3>
                      <Link href={"#"}>{industry.title}</Link>
                    </h3>
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
      <section className={styles.portfolio}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>our works</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Excellence from concept to completion"}
                highlightText={"concept"}
              />
            </h4>
           
            <Link href="/allcase" className={`${styles.cmnBtn} cursorButton`}>
              View All <HiOutlineArrowRight className={styles.arrowRight} />
            </Link>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            className={styles.swiperContainer}
          >
            {portfolioData.map((portfolio, i) => (
              <SwiperSlide key={i}>
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
                  <div className={styles.techStack}>
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
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
        </div>
      </section>
      <section className={styles.testimonial}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>client testimonials</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Our clients love us."}
                highlightText={"clients"}
              />
            </h4>
            <div className={styles.customNav}>
              <button
                className={styles.prevBtn}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <IoArrowBack />
              </button>
              <button
                className={styles.nextBtn}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <IoArrowForward />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className={styles.swiperContainer}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.eachTestiSlider}>
                  <figure>
                    <img src={item.image} alt={item.author} />
                  </figure>
                  <p>{item.text}</p>
                  <div className={styles.authorDetails}>
                    <h6>{item.author}</h6>
                    <span>{item.position}</span>
                  </div>
                  <RiDoubleQuotesR className={styles.quoteIcon} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className={styles.latestBlogs}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>latest blogs</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Stay updated with our latest insights"}
                highlightText={"insights"}
              />
            </h4>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.eachBlog}>
                <div className={styles.blogImg}>
                  {/* <img src="/images/post-1.jpg" alt="post"/> */}
                  <ImageReveal src={"/images/blog-1.png"} alt={"post"} />
                </div>
                <div className={styles.postContent}>
                  <h5>
                    <Link href={"#"}>
                      The Future of Cybersecurity in the Digital Age
                    </Link>
                  </h5>
                  <Link className={styles.blogLink} href={"#"}>
                    read more <GoArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.eachBlog}>
                <div className={styles.blogImg}>
                  <ImageReveal src={"/images/blog-2.png"} alt={"post"} />
                </div>
                <div className={styles.postContent}>
                  <h5>
                    <Link href={"#"}>
                      The Importance of Data Privacy in Software Solutions
                    </Link>
                  </h5>
                  <Link className={styles.blogLink} href={"#"}>
                    read more <GoArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.eachBlog}>
                <div className={styles.blogImg}>
                  <ImageReveal src={"/images/blog-3.png"} alt={"post"} />
                </div>
                <div className={styles.postContent}>
                  <h5>
                    <Link href={"#"}>Low-Code & No-Code Development</Link>
                  </h5>
                  <Link className={styles.blogLink} href={"#"}>
                    read more <GoArrowUpRight />
                  </Link>
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
