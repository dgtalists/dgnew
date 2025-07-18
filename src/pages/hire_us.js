import Head from "next/head";
import styles from "@/styles/ResourceTable.module.css";
import Header from "@/component/Header/Header";
import Link from "next/link";
import AnimatedText from "@/component/AnimatedText/AnimatedText";
import ParallaxBanner from "@/component/ParralaxBanner/ParallaxBanner";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Footer from "@/component/Footer/Footer";
import { DiCode } from "react-icons/di";
import {
    BsBarChart,
    BsBoxSeam,
    BsCodeSlash,
    BsCodeSquare,
    BsFileEarmarkPdf,
    BsPatchCheck,
    BsSuitcaseLg,
} from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { HiOutlineArrowRight } from "react-icons/hi";
import { GoGlobe } from "react-icons/go";
import PdfToImageViewer from "@/component/PdfViewer/PdfViewer";
import { FaRegUser } from "react-icons/fa";
import { PiCurrencyCircleDollar, PiCurrencyDollar, PiCurrencyDollarBold, PiSuitcaseSimpleLight } from "react-icons/pi";
import { IoCalendarClearOutline, IoCodeSlashOutline, IoCodeWorkingOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
export default function HireUs() {
    const [selectedResume, setSelectedResume] = useState(null);
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

    const teamData = [
        {
            name: "Alice Thomas",
            designation: "Senior Developer",
            primarySkills: "ReactJS, NodeJS",
            secondarySkills: "AWS, DevOps",
            experience: 10,
            skillLevel: "Advanced",
            hourlyRate: 40,
            monthlyRate: 4500,
            availability: "Full-Time",
            resume: "/resumes/Yash_AI-ML_Resume.pdf",
        },
        {
            name: "Bob Smith",
            designation: "Backend Engineer",
            primarySkills: "NodeJS, MongoDB",
            secondarySkills: "Redis, Docker",
            experience: 7,
            skillLevel: "Intermediate",
            hourlyRate: 35,
            monthlyRate: 4000,
            availability: "Part-Time",
            resume: "/resumes/Saptam_AI-ML_Resume.pdf",
        },
        // Add more people as needed...
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
            <ParallaxBanner backgroundImage="/images/hire_us.jpg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-9">
                            <div className={styles.sectionLeft}>
                                <h1>
                                    <AnimatedText
                                        text={"Hire Top Talent for Your Project"}
                                        highlightText={"Hire Top"}
                                    />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxBanner>
            <section className={styles.resourceContainer}>
                <div className="container-fluid">
                    <div className={styles.headerSection}>
                        <span className={styles.subtitle}>Talent Pool	</span>
                        <h4 className={styles.title}>
                            <AnimatedText
                                text={"Our Skilled Talent Pool"}
                                highlightText={"Skilled Talent"}
                            />
                        </h4>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.resourceTable}>
                            <thead>
                                <tr>
                                    <th> <span><FaRegUser />
                                        Name</span> </th>
                                    <th><span><PiSuitcaseSimpleLight />Designation</span></th>
                                    <th><span><IoCodeSlashOutline />Primary Skills</span>
                                    </th>

                                    <th><span><IoCalendarClearOutline />Experience</span></th>
                                    <th><span><BsBarChart />Skill Level</span></th>
                                    <th><span><PiCurrencyDollar />Hourly Rate (USD)</span></th>
                                    <th><span><PiCurrencyDollarBold />Monthly Rate (USD)</span></th>
                                    <th><span><BsFileEarmarkPdf />View Resume</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamData.map((person, index) => (
                                    <tr key={index}>
                                        <td>{person.name}</td>
                                        <td>{person.designation}</td>
                                        <td>{person.primarySkills}</td>
                                        <td style={{ textAlign: 'center' }}>{person.experience}</td>
                                        <td>{person.skillLevel}</td>
                                        <td style={{ textAlign: 'center' }}>{person.hourlyRate}</td>
                                        <td style={{ textAlign: 'center' }}>{person.monthlyRate}</td>

                                        <td style={{ textAlign: 'center' }}>
                                            <button className={styles.viewBtn} onClick={() => setSelectedResume(person?.resume)}>View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {selectedResume && (
                        <div className={styles.resumeMmodal}>
                            <div className={styles.resumeContent}>
                                <button className={styles.closeButton} onClick={() => setSelectedResume(null)}>✖</button>
                                <PdfToImageViewer url={selectedResume} />
                            </div>
                        </div>
                    )}
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
