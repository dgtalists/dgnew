import Link from "next/link";
import styles from "./Footer.module.css"; // Adjust the path as per your project structure
import { ImFacebook2 } from "react-icons/im";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
  FaSquareYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={`row ${styles.footerRow}`}>
            {/* Services */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className={styles.footerLogoWrap}>
                <img
                  className={styles.footerLogo}
                  src={"/images/DG-logo.png"}
                  alt="logo"
                />
                <p>
                  Dgtalists is your technology partner for enterprise
                  innovation, operational excellence, and AI-driven business
                  transformation.
                </p>
                <div className={styles.footerSocialLink}>
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
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className={styles.footerSingle}>
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Leadership Team</Link>
                  </li>
                  <li>
                    <Link href="#">Our Portfolio</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.footerSingle}>
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link href="#">Custom Software Development</Link>
                  </li>
                  <li>
                    <Link href="#">Enterprise Software Development</Link>
                  </li>
                  <li>
                    <Link href="#">Custom Web Development</Link>
                  </li>
                  <li>
                    <Link href="#">Mobile App Development</Link>
                  </li>
                  <li>
                    <Link href="#">AI Software Development</Link>
                  </li>
                  <li>
                    <Link href="#">Internet of Things (IoT)</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Industries */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className={styles.footerSingle}>
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>

                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Products & Platforms */}
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className={styles.eachAddress}>
                <h2>IND</h2>
                <div className={styles.oficeAddress}>
                  <p>
                    Stesalit Towers, 7th floor, Block GP, Sector V,
                    Kolkata-700091, West Bengal
                  </p>
                  <Link href={"tel:+91 89104 35874 "}>+91 89104 35874 </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.eachAddress}>
                <h2>SG</h2>
                <div className={styles.oficeAddress}>
                  <p>
                    68 Circular Road, #02-01, <br /> Singapore 049422
                  </p>
                  <Link href={"tel:+65 8625 4926 "}>+65 8625 4926</Link>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className={styles.eachAddress}>
                <h2>IND</h2>
                <div className={styles.oficeAddress}>
                  <p>Stesalit Towers, 7th floor, Block GP, Sector V,  Kolkata-700091, West Bengal</p>
                  <Link href={"tel:+91 89104 35874 "}>+91 89104 35874 </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.copyright}>
          <p>
            Copyright © 2025 <Link href={"#"}>Dgtalists. All rights resrved. </Link>
          </p>
          {/* <div className={styles.footerQuickLink}>
            <ul>
              <li>
                <Link href={"#"}>Privacy Statement</Link>
              </li>
              <li>
                <Link href={"#"}>Terms of use </Link>
              </li>

              <li>
                <Link href={"#"}>Raise a Grievance</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
