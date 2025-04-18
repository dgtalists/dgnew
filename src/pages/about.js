import Head from "next/head";
import styles from "@/styles/About.module.css";
import Header from "@/component/Header/Header";
import Link from "next/link";
import ImageReveal from "@/component/ImageReveal/ImageReveal";
import AnimatedText from "@/component/AnimatedText/AnimatedText";
import { GoArrowUpRight, GoGlobe } from "react-icons/go";
import ContinuousScrollingSlider from "@/component/Continious/ContinuousScrolig";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import ParallaxBanner from "@/component/ParralaxBanner/ParallaxBanner";
import Counter from "@/component/Counter/Counter";
import { useEffect, useRef, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Footer from "@/component/Footer/Footer";
import { FiChevronRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { RxEnvelopeClosed } from "react-icons/rx";
import { LuSearchCode } from "react-icons/lu";

export default function About() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const processRef = useRef([]);
  const logoRef = useRef(null);
  const lastScrollY = useRef(0);

  processRef.current = [];

  const addToRefs = (el) => {
    if (el && !processRef.current.includes(el)) {
      processRef.current.push(el);
    }
  };
  useEffect(() => {
    // Only run ScrollTrigger on screens wider than 768px (adjust as needed)
    if (window.innerWidth > 768) {
      const ctx = gsap.context(() => {
        const container = containerRef.current;
        const left = leftRef.current;
        const right = rightRef.current;

        const rightHeight = right.scrollHeight;
        const leftHeight = left.scrollHeight;

        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: () => `+=${rightHeight - leftHeight}`,
          pin: left,
          pinSpacing: false,
          scrub: true,
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    processRef.current.forEach((el, index) => {
      const fromX = index % 2 === 0 ? -100 : 100;

      gsap.fromTo(
        el,
        {
          x: fromX,
          opacity: 0,
          autoAlpha: 0, // smoother fade in
        },
        {
          x: 0,
          opacity: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out", // smoother than power3 for subtle movement
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true, // will animate only once (better than toggleActions for this)
            onEnter: () => {
              el.classList.add(styles.inVisible); // only when in view
            },
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current) {
        // Scrolling down → zoom in
        gsap.to(logoRef.current, {
          scale: 1.2,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        // Scrolling up → zoom out
        gsap.to(logoRef.current, {
          scale: 0.9,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ParallaxBanner backgroundImage="/images/about.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  <AnimatedText text={"About Us"} highlightText={"About"} />
                </h1>

                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>
                  <ol className={styles.breadcrumbWrap}>
                    <li className={styles.breadcrumbList}>
                      <a href="/">Home</a>
                    </li>
                    <li className={`${styles.breadcrumbList} ${styles.active}`}>
                      <FiChevronRight />
                      About Us
                    </li>
                  </ol>
                </div>
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
                      "DGTALISTS as your preferred business consulting partner"
                    }
                    highlightText={"DGTALISTS"}
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
                <Link href={"/contact"} className={`${styles.cmnBtn} cursorButton`}>
                  get started
                  <FiChevronRight className={styles.arrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ourMission} ref={containerRef}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.missionLeft} ref={leftRef}>
                <span className={styles.subtitle}>Why Us</span>
                <h4 className={styles.title}>
                  <AnimatedText
                    text={"Empowering Your Business Every Step of the Way"}
                    highlightText={"Empowering"}
                  />
                </h4>
                <p>
                  DGTALISTS With Its Composite Team Of Skilled Professionals,
                  Having Average Industry Experience To The Extent Of 15-20
                  Years In The Digital Marketing, IT And Software Solutions And
                  Services Domains, Has A Clear Value Proposition To Offer To
                  Its Revered Clients. DGTALISTS Through Its Team Of Motivated
                  Experts, Consultants And Advisors Works As A One-Stop Shop And
                  Delivers The Best Services Effectively Through Its Assessment
                  Mechanism Of The Project Requirements And Align The Right
                  Technology Partner For The Execution.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.missionRight} ref={rightRef}>
                <div className={styles.eachBox}>
                  <div className={styles.missionHeader}>
                    <div className={styles.missionIcon}>
                      <img src="/images/mission.png" alt="mission icon" />
                    </div>
                    <h5>Our Mission</h5>
                  </div>
                  <p>
                    To act as affordable digital partner for businesses by
                    providing simple, safe and secure online solutions and
                    enabling them to achieve profitable growth and high ROI.
                    DGtalists will help your business grow more.
                  </p>
                </div>
                <div className={styles.eachBox}>
                  <div className={styles.missionHeader}>
                    <div className={styles.missionIcon}>
                      <img src="/images/eye.png" alt="mission icon" />
                    </div>
                    <h5>Our Vission</h5>
                  </div>
                  <p>
                    We desire to become one of the most reliable web development
                    firms catering to the global clients. Quality work,
                    dedicated PR, strict adherence to deadlines are what we
                    believe will get us there.
                  </p>
                </div>
                <div className={styles.eachBox}>
                  <div className={styles.missionHeader}>
                    <div className={styles.missionIcon}>
                      <img src="/images/diamond.png" alt="mission icon" />
                    </div>
                    <h5>Our Value</h5>
                  </div>
                  <p>
                    To act as affordable digital partner for businesses by
                    providing simple, safe and secure online solutions and
                    enabling them to achieve profitable growth and high ROI.
                    DGtalists will help your business grow more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ourWorkProcess}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.subtitle}>how it work</span>
            <h4 className={styles.title}>
              <AnimatedText text={"Our Work Process"} highlightText={"Work"} />
            </h4>
          </div>
          <div className={styles.processBox} ref={addToRefs}>
            <div className={styles.processBoxIndividual}>
              <div className={styles.eachProcess} ref={addToRefs}>
                <div className={styles.processIcon}>
                  <img src="/images/search.png" alt="rocket icon" />
                </div>
                <div className={styles.processContent}>
                  <h5>Discovery</h5>
                  <p>
                    We understand your goals and gather all the essential
                    requirements.
                  </p>
                </div>
              </div>
              <div className={styles.eachProcess} ref={addToRefs}>
                <div className={styles.processIcon}>
                  <img src="/images/web-design.png" alt="rocket icon" />
                </div>
                <div className={styles.processContent}>
                  <h5>Planning & Design</h5>
                  <p>
                    We plan the structure and design intuitive, user-friendly
                    interfaces.
                  </p>
                </div>
              </div>
              <div className={styles.collabLine1}>
                <div className={styles.collabLine1Dashed}></div>
              </div>
              <div className={styles.collabLine2}>
                <div className={styles.collabLine2Dashed}></div>
              </div>
            </div>
            <div className={styles.processBoxIndividual}>
              <div className={styles.eachProcess} ref={addToRefs}>
                <div className={styles.processIcon}>
                  <img src="/images/web-programming.png" alt="rocket icon" />
                </div>
                <div className={styles.processContent}>
                  <h5>Development</h5>
                  <p>
                    We build robust, scalable solutions tailored to your
                    requirements.
                  </p>
                </div>
              </div>
              <div className={styles.eachProcess} ref={addToRefs}>
                <div className={styles.processIcon}>
                  <img src="/images/testing.png" alt="rocket icon" />
                </div>
                <div className={styles.processContent}>
                  <h5>Testing & QA </h5>
                  <p>
                    We test thoroughly to ensure quality, performance, and
                    reliability.
                  </p>
                </div>
              </div>
              <div className={styles.collabLine3}>
                <div className={styles.collabLine3Dashed}></div>
              </div>
              <div className={styles.collabLine4}>
                <div className={styles.collabLine4Dashed}></div>
              </div>
            </div>
            <div className={styles.processBoxIndividual}>
              <div className={styles.eachProcess} ref={addToRefs}>
                <div className={styles.processIcon}>
                  <img src="/images/deployment.png" alt="rocket icon" />
                </div>
                <div className={styles.processContent}>
                  <h5>Deployment</h5>
                  <p>
                    We launch the solution smoothly across all required
                    platforms.
                  </p>
                </div>
              </div>
              <div className={styles.eachProcess} ref={addToRefs}>
                <div className={styles.processIcon}>
                  <img src="/images/support.png" alt="rocket icon" />
                </div>
                <div className={styles.processContent}>
                  <h5>Support & Maintenance</h5>
                  <p>
                    We provide ongoing support to keep things running smoothly.
                  </p>
                </div>
              </div>
              <div className={styles.collabLine5}>
                <div className={styles.collabLine5Dashed}></div>
              </div>
              <div className={styles.collabLine6}>
                <div className={styles.collabLine6Dashed}></div>
              </div>
            </div>
            <div className={styles.dgLogo} ref={logoRef}>
              <img src="/images/bigLogo.png" alt="logo" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.teamMember}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.subtitle}>Meet our team</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Meet Our Leadership Team"}
                highlightText={"Leadership"}
              />
            </h4>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-3">
              <div className={styles.teamMemberBox}>
                <div className={styles.teamMemberImage}>
                  <ImageReveal
                    src={"/images/team1.jpg"}
                    alt={"team member"}
                    className={styles.teamImage}
                  />
                </div>
                <div className={styles.teamMemberContent}>
                  <h5>Sujay Saha</h5>
                  <p>CEO & Founder</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.teamMemberBox}>
                <div className={styles.teamMemberImage}>
                  <ImageReveal
                    src={"/images/team2.jpg"}
                    alt={"team member"}
                    className={styles.teamImage}
                  />
                  {/* <div className={styles.teamSocial}>
                    <ul>
                      <li><Link href={"#"}><FaLinkedinIn /></Link></li>
                      <li><Link href={"#"}><FaFacebookF /></Link></li>
                      <li><Link href={"#"}><FaLinkedinIn /></Link></li>
                      <li><Link href={"#"}><FaLinkedinIn /></Link></li>
                    </ul>
                  </div> */}
                </div>
                <div className={styles.teamMemberContent}>
                  <h5>Dipanjan Mondal</h5>
                  <p>Co-Founder & Director</p>
                </div>
              </div>
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
