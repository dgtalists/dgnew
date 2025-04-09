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
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter(); // Get current route
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null); // Reference for menu container
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
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* <div className={Styles.topBar}>
        <div className="container">
          <div className={Styles.topMenu}>
            <ul>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                <Link href="/career">CAREERS</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT US</Link>
              </li>
              <li>
                <Link href="/">
                  <CiGlobe className={Styles.globeIcon} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
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
                    <Link href="services" className={Styles.eachNavMenu}>
                      Home
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${
                      router.pathname === "/about" ? Styles.active : ""
                    }`}
                  >
                    <Link href="about" className={Styles.eachNavMenu}>
                      About
                    </Link>
                  </li>
                  <li
                    className={`${Styles.eachNav} ${
                      router.pathname === "/services" ? Styles.active : ""
                    }`}
                  >
                    <Link href="services" className={Styles.eachNavMenu}>
                    Services
                    </Link>
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
                      router.pathname === "/portfolio" ? Styles.active : ""
                    }`}
                  >
                    <Link href="/portfolio" className={Styles.eachNavMenu}>
                    Case Studies
                    </Link>
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
                  {isMobile && (
                    <>
                      <li
                        className={`${Styles.eachNav} ${
                          router.pathname === "/about" ? Styles.active : ""
                        }`}
                      >
                        <Link className={Styles.eachNavMenu} href="/about">
                          ABOUT US
                        </Link>
                      </li>
                      <li
                        className={`${Styles.eachNav} ${
                          router.pathname === "/career" ? Styles.active : ""
                        }`}
                      >
                        <Link className={Styles.eachNavMenu} href="/career">
                          CAREERS
                        </Link>
                      </li>
                      <li
                        className={`${Styles.eachNav} ${
                          router.pathname === "/contact" ? Styles.active : ""
                        }`}
                      >
                        <Link className={Styles.eachNavMenu} href="/contact">
                          CONTACT US
                        </Link>
                      </li>
                      <li
                        className={`${Styles.eachNav} ${
                          router.pathname === "/" ? Styles.active : ""
                        }`}
                      >
                        <Link className={Styles.eachNavMenu} href="/">
                          <CiGlobe className={Styles.globeIcon} />
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
                <div className={Styles.socialIcon}>
                  <ul>
                    <li>
                      <Link href={"#"}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"}>
                        <FaXTwitter />
                      </Link>
                    </li>
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
