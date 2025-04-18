import Head from "next/head";
import styles from "@/styles/Contact.module.css";
import Header from "@/component/Header/Header";
import Link from "next/link";
import ImageReveal from "@/component/ImageReveal/ImageReveal";
import AnimatedText from "@/component/AnimatedText/AnimatedText";
import { GoGlobe } from "react-icons/go";
import ParallaxBanner from "@/component/ParralaxBanner/ParallaxBanner";
import { useEffect, useRef, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Footer from "@/component/Footer/Footer";
import { FiChevronDown, FiChevronRight, FiPhone } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { RxEnvelopeClosed } from "react-icons/rx";
import { GrLocation } from "react-icons/gr";
import { BsEnvelope } from "react-icons/bs";
import { Form } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  const subjects = [
    { label: "Custom Software Development", value: "software" },
    { label: "SAAS Based Application", value: "saas" },
    { label: "Enterprise Software Development", value: "Enterprise" },
    { label: "Data analytics & AI", value: "ai" },
    { label: "Mobile Application Development", value: "mobile" },
    { label: "Marketing & Communication", value: "marketing" },
  ];
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  const selectedLabel =
    subjects.find((s) => s.value === selected)?.label || "Select Subject";

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration if needed
  }, []);
 

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ParallaxBanner backgroundImage="/images/contact-bg.jpg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-9">
              <div className={styles.sectionLeft}>
                <h1>
                  <AnimatedText text={"Contact Us"} highlightText={"Contact"} />
                </h1>

                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>
                  <ol className={styles.breadcrumbWrap}>
                    <li className={styles.breadcrumbList}>
                      <a href="/">Home</a>
                    </li>
                    <li className={`${styles.breadcrumbList} ${styles.active}`}>
                      <FiChevronRight />
                      Contact Us
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>

      <section className={styles.contactSection}>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-lg-6">
              <div className={styles.contactLeft} data-aos="fade-right">
                <div className={styles.headerTop}>
                  <span className={styles.subtitle}>Reach Out</span>
                  <h4 className={styles.title}>
                    <AnimatedText
                      text={"Let’s build something great together"}
                      highlightText={"together"}
                    />
                  </h4>
                  <p>
                    Have questions, feedback, or inquiries? Fill out the form
                    below to get in touch with us. Our team is here to assist
                    you and will get back to you as soon as possible.
                  </p>
                </div>
                <div className={styles.eachSupportBox} data-aos="fade-up">
                  <div className={styles.eachIcon}>
                    <img src="/images/web-programming.png" alt="" />
                  </div>
                  <div className={styles.eachContent}>
                    <h4>Software & Application Development</h4>
                    <p>
                      Reach out to us for custom-built software and apps
                      designed to meet your unique goals.
                    </p>
                  </div>
                </div>
                <div className={styles.eachSupportBox} data-aos="fade-up">
                  <div className={styles.eachIcon}>
                    <img src="/images/digital-marketing.png" alt="" />
                  </div>
                  <div className={styles.eachContent}>
                    <h4>Digital Marketing</h4>
                    <p>
                      Connect with us to grow your brand online through smart,
                      result-driven marketing strategies.
                    </p>
                  </div>
                </div>
                <div className={styles.eachSupportBox} data-aos="fade-up">
                  <div className={styles.eachIcon}>
                    <img src="/images/coding.png" alt="" />
                  </div>
                  <div className={styles.eachContent}>
                    <h4>Dedicated Developer </h4>
                    <p>
                      Need reliable tech support? Contact us to hire dedicated
                      developers for your next big idea
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.contactRight} data-aos="fade-left">
                <div className={styles.contactFormWrapper}>
                  <h5>Talk to Our Experts</h5>
                  <form className="row">
                    <div className="col-lg-6 ">
                      <input
                        type="text"
                        name="name"
                        className={styles.eachFormGroup}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-lg-6 ">
                      <input
                        type="email"
                        name="email"
                        className={styles.eachFormGroup}
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-lg-6 ">
                      <input
                        type="tel"
                        name="phone"
                        className={styles.eachFormGroup}
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="col-lg-6 ">
                      <input
                        type="text"
                        name="company"
                        className={styles.eachFormGroup}
                        placeholder="Company Name"
                      />
                    </div>
                    <div
                      className={`${styles.customDropdownWrapper} col-lg-12`}
                    >
                      <div
                        className={styles.customDropdown}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span>{selectedLabel}</span>
                        <FiChevronDown className={styles.dropdownIcon} />
                      </div>
                      {isOpen && (
                        <ul className={styles.dropdownList}>
                          {subjects.map((subject) => (
                            <li
                              key={subject.value}
                              onClick={() => handleSelect(subject.value)}
                            >
                              {subject.label}
                            </li>
                          ))}
                        </ul>
                      )}
                      <input
                        type="hidden"
                        name="subject"
                        value={selected}
                        required
                      />
                    </div>
                    <div className="col-12 ">
                      <textarea
                        name="message"
                        className={styles.eachFormGroup}
                        placeholder="Message"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className={styles.privacyPolicy}>
                        <input
                          id="privacyCheck"
                          required=""
                          type="checkbox"
                          name="privacyCheck"
                        />
                        <label for="privacyCheck">
                          I have read dgtalist's{" "}
                          <a href="/privacy-policy" target="_blank">
                            Privacy Statement
                          </a>{" "}
                          and agree to the{" "}
                          <a href="/privacy-policy" target="_blank">
                            terms of use
                          </a>
                          *
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className={`${styles.cmnBtn} cursorButton`}
                      >
                        Submit
                        <FiChevronRight className={styles.arrowRight} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.officeAddress}>
        <div className="container">
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>Our Office Address</span>
            <h4 className={styles.title}>
              <AnimatedText
                text={"Where You Can Find Us"}
                highlightText={"Find"}
              />
            </h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div
                data-aos="fade-up"
                className={styles.eachAddressBox}
                style={{ backgroundImage: "url(/images/kolkta.png)" }}
              >
                <h4>Kolkata</h4>
                <div className={styles.eachAddress}>
                  <div className={styles.addressIcon}>
                    <GrLocation />
                  </div>
                  <div className={styles.addressContent}>
                    <h5>Address</h5>
                    <p>
                      Stesalit Towers, 7th floor, Block GP, Sector V,
                      Kolkata-700091, West Bengal
                    </p>
                  </div>
                </div>
                <div className={styles.eachAddress}>
                  <div className={styles.addressIcon}>
                    <FiPhone />
                  </div>
                  <div className={styles.addressContent}>
                    <h5>Phone</h5>
                    <Link href={"tel:+91 89104 35874"}>+91 89104 35874</Link>
                  </div>
                </div>
                <div className={styles.eachAddress}>
                  <div className={styles.addressIcon}>
                    <BsEnvelope />
                  </div>
                  <div className={styles.addressContent}>
                    <h5>Email</h5>
                    <Link href={"mailto:contact@dgtalists.com"}>
                      contact@dgtalists.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                data-aos="fade-up"
                className={styles.eachAddressBox}
                style={{ backgroundImage: "url(/images/singapore.png)" }}
              >
                <h4>Singapore</h4>
                <div className={styles.eachAddress}>
                  <div className={styles.addressIcon}>
                    <GrLocation />
                  </div>
                  <div className={styles.addressContent}>
                    <h5>Address</h5>
                    <p>
                      68 Circular Road, #02-01,
                      <br />
                      Singapore 049422
                    </p>
                  </div>
                </div>
                <div className={styles.eachAddress}>
                  <div className={styles.addressIcon}>
                    <FiPhone />
                  </div>
                  <div className={styles.addressContent}>
                    <h5>Phone</h5>
                    <Link href={"tel:+91 89104 35874"}>+91 89104 35874</Link>
                  </div>
                </div>
                <div className={styles.eachAddress}>
                  <div className={styles.addressIcon}>
                    <BsEnvelope />
                  </div>
                  <div className={styles.addressContent}>
                    <h5>Email</h5>
                    <Link href={"mailto:contact@dgtalists.com"}>
                      contact@dgtalists.com
                    </Link>
                  </div>
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
