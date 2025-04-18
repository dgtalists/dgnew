"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter
import "bootstrap/dist/css/bootstrap.min.css";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { CiGlobe } from "react-icons/ci";
import Styles from "./Header.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { GoArrowUpRight, GoChevronDown, GoChevronUp } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter(); // Get current route
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null); // Reference for menu container
  const [activeMenu, setActiveMenu] = useState(null); // Track active mega menu
  const megaMenuRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    if (activeMenu === "company") {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeMenu]);
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration if needed
  }, []);
  return (
    <>
      <header
        className={`${Styles.main_header} ${isSticky ? Styles.sticky : ""}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-2">
              <Link href="/" className={Styles.mainLogo}>
                <img
                  className={Styles.mainLogoImg}
                  src={"/images/DG-logo.png"}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="col-6 d-md-none text-end">
              <button
                className={Styles.navBtn}
                onClick={() => setIsOpen(!isOpen)}
              >
                <RxHamburgerMenu size={20} />
              </button>
            </div>

            <div
              ref={menuRef}
              className={`col-md-10 ${Styles.navContainer} ${
                isOpen ? Styles.showNav : Styles.hideNav
              }`}
            >
              {isOpen && (
                <div className={Styles.closeNav}>
                  <button
                    className={Styles.closeNavBtn}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <RxCross2 />
                  </button>
                </div>
              )}
              <div className={Styles.navWrap}>
                <ul className={`${Styles.nav} justify-content-end`}>
                  <li
                    className={`${Styles.eachNav} ${
                      router.pathname === "/" ? Styles.active : ""
                    }`}
                  >
                    <Link href="/" className={Styles.eachNavMenu}>
                      Home
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${
                      router.pathname === "/about" ? Styles.active : ""
                    }`}
                  >
                    <Link href="/about" className={Styles.eachNavMenu}>
                      About Us
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${
                      router.pathname === "/services" ? Styles.active : ""
                    }`}
                  >
                    <a
                      className={Styles.eachNavMenu}
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === "services" ? null : "services"
                        )
                      }
                    >
                      Services
                    </a>
                    {activeMenu === "services" ? (
                      <GoChevronUp
                        className={Styles.eachNavMenuIcon}
                        onClick={() =>
                          setActiveMenu(
                            activeMenu === "services" ? null : "services"
                          )
                        }
                      />
                    ) : (
                      <GoChevronDown
                        className={Styles.eachNavMenuIcon}
                        onClick={() =>
                          setActiveMenu(
                            activeMenu === "services" ? null : "services"
                          )
                        }
                      />
                    )}
                    {activeMenu === "services" && (
                      <div ref={megaMenuRef} className={Styles.megaMenuWrapper}>
                        <div className="container">
                          <div className={Styles.megaMenu}>
                            <div className={Styles.megaMenuLeft}>
                              <div className={Styles.megamenuTitle}>
                                <h4>Services</h4>
                              </div>
                              <ul>
                                <li>
                                  <Link href="/customsoftware">
                                    Custom Software Development
                                    <GoArrowUpRight />
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/enterprise">
                                    Enterprise Software Development{" "}
                                    <GoArrowUpRight />
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/saasaplication">
                                    SAAS Based Application
                                    <GoArrowUpRight />
                                  </Link>
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <Link href="/dataanalytics">
                                    Data analytics & AI
                                    <GoArrowUpRight />
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/mobileapp">
                                    Mobile Application Development
                                    <GoArrowUpRight />
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/marketing">
                                    Marketing & Communication
                                    <GoArrowUpRight />
                                  </Link>
                                </li>
                              </ul>
                              <div
                                className={Styles.imdustryImg}
                                data-aos="fade-left"
                              >
                                {/* <h3>Case Study</h3> */}
                                <img src="/images/menu_img.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  {/* <li
                    className={`${Styles.eachNav} ${
                      router.pathname === "/industry" ? Styles.active : ""
                    }`}
                  >
                    <Link href="/industry" className={Styles.eachNavMenu}>
                      Industries
                    </Link>
                  </li> */}
                  <li
                    className={`${Styles.eachNav} ${
                      router.pathname === "/casestudy" ? Styles.active : ""
                    }`}
                  >
                    <a
                      className={Styles.eachNavMenu}
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === "casestudy" ? null : "casestudy"
                        )
                      }
                    >
                      Case Studies
                    </a>
                    {activeMenu === "casestudy" ? (
                      <GoChevronUp
                        className={Styles.eachNavMenuIcon}
                        onClick={() =>
                          setActiveMenu(
                            activeMenu === "casestudy" ? null : "casestudy"
                          )
                        }
                      />
                    ) : (
                      <GoChevronDown
                        className={Styles.eachNavMenuIcon}
                        onClick={() =>
                          setActiveMenu(
                            activeMenu === "casestudy" ? null : "casestudy"
                          )
                        }
                      />
                    )}
                    {activeMenu === "casestudy" && (
                      <div ref={megaMenuRef} className={Styles.megaMenuWrapper}>
                        <div className="container">
                          <div className={Styles.megaMenu}>
                            <div className={Styles.megaMenuLeft}>
                              <div className={Styles.megamenuTitle}>
                                <h4> Case Studies</h4>
                              </div>
                              <div className={Styles.megaMenuRightWrap}>
                                <div className={Styles.megaMenuRight}>
                                  <div
                                    className={Styles.imdustryImg}
                                    data-aos="fade-left"
                                  >
                                    <img src="/images/movelogicai.jpg" />
                                    <h4>
                                      <Link
                                        href={"/casestudy"}
                                        className={Styles.megaMenuBtn}
                                      >
                                        AI-Enabled Smart Movers & Packing Management Platform
                                      </Link>
                                    </h4>

                                    <Link
                                      href={"/casestudy"}
                                      className={Styles.menuBtn}
                                    >
                                      Read More
                                      <FiChevronRight
                                        className={Styles.arrowRight}
                                      />
                                    </Link>
                                  </div>
                                  <div
                                    className={Styles.imdustryImg}
                                    data-aos="fade-left"
                                  >
                                    <img src="/images/food-app.jpg" />
                                    <h4>
                                      <Link
                                        href={"/casestudy_food_order"}
                                        className={Styles.megaMenuBtn}
                                      >
                                        Food Ordering & Management Platform
                                      </Link>
                                    </h4>

                                    <Link
                                      href={"/casestudy_food_order"}
                                      className={Styles.menuBtn}
                                    >
                                      Read More
                                      <FiChevronRight
                                        className={Styles.arrowRight}
                                      />
                                    </Link>
                                  </div>
                                  <div
                                    className={Styles.imdustryImg}
                                    data-aos="fade-left"
                                  >
                                    <img src="/images/shine.jpg" />
                                    <h4>
                                      <Link
                                        href={"/casestudy_logistic"}
                                        className={Styles.megaMenuBtn}
                                      >
                                        Real-Time Logistic App for Consignment Tracking
                                      </Link>
                                    </h4>

                                    <Link
                                      href={"/casestudy_logistic"}
                                      className={Styles.menuBtn}
                                    >
                                      Read More
                                      <FiChevronRight
                                        className={Styles.arrowRight}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <Link
                                  href={"/allcase"}
                                  className={Styles.seeAll}
                                >
                                  See All Case Studies
                                  <GoArrowUpRight
                                    className={Styles.arrowRight}
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li
                    className={`${Styles.eachNav} ${
                      router.pathname === "/blog" ? Styles.active : ""
                    }`}
                  >
                    <Link href="blog" className={Styles.eachNavMenu}>
                      Insights & Resources
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${
                      router.pathname === "/contact" ? Styles.active : ""
                    }`}
                  >
                    <Link href="contact" className={Styles.eachNavMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className={Styles.socialIcon}>
                  <ul>
                    <li>
                      <Link target="blank" href={"https://www.facebook.com/Dgtalistsofficial"}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link target="blank" href={"#"}>
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link target="blank" href={"https://www.linkedin.com/company/dgtalists/"}>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    {/* <li>
                      <Link href={"#"}>
                        <FaXTwitter />
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
