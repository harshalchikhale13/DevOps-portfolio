/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiSvelte, SiMongodb } from "react-icons/si";
import { TbBrandDocker, TbBrandJavascript, TbBrandNextjs, TbBrandOpenSource } from "react-icons/tb";
import { AiFillAmazonSquare, AiOutlineDollar, AiOutlineHtml5, AiOutlineProject } from "react-icons/ai";
import "./LandingPage.css";
import About from "../assets/about-us.png.svg";
import div_befor from "../assets/div_before.svg";
import Logo3 from "../assets/logo3.png.svg";
import s1 from "../assets/download-s1.png";
import s2 from "../assets/download-s2.png";
import s3 from "../assets/download-s3.png";
import s4 from "../assets/download-s4.png";
import s5 from "../assets/download-s5.png";
import Home_avtar from "../assets/home-right.png.svg";
import { Typewriter } from "react-simple-typewriter";

// Scroll event listener for navbar background change
var navbar = document.querySelector("header");
window.onscroll = function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const LandingPage = () => {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="content navbar">
          <div className="logo">
            <h1>Harshal_DevOps</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#intro">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="https://medium.com/@harshalchikhale9822">Blogs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="content landingpage" id="hero">
        <div className="left left-content">
          <div className="head">
            <div className="hii">
              <h3>HELLO</h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="name">
            <h1>
              <Typewriter words={["I'M Harshal"]} loop={1} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={80} />
            </h1>
            <h5 className="about1">
              <Typewriter words={["A Passionate DevOps Engineer", "Freelancer", "&", "Developer"]} loop={0} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={0} delaySpeed={1000} />
            </h5>
          </div>
          <div className="btn">
            <button>Hire Me</button>
            <div className="hire">
              <a href="/assets/Harshal-Chikhale-DevOps-Engineer-Resume-2025" download="Harshal-Chikhale-DevOps-Engineer-Resume-2025">
                <button>Get CV</button>
              </a>
            </div>
          </div>
        </div>
        <div className="right forgot">
          <img src={Home_avtar} alt="Hero Avatar" />
        </div>
      </section>

      {/* About Section */}
      <section className="intro" id="intro">
        <div className="left forgot">
          <img src={About} alt="About Me" />
        </div>
        <div className="right">
          <div className="about">
            <div className="about-text">
              <h2>Let’s Introduce About Myself</h2>
              <p>
                I am Harshal Chikhale, a dynamic DevOps Engineer with experience in designing, automating, and optimizing cloud-based infrastructures. 
                I specialize in Kubernetes, Docker, and Ansible, creating scalable, efficient, and secure systems across AWS, Azure, and GCP.
              </p>
            </div>
            <div className="download-btn">
              <a href="/assets/Harshal-Chikhale-DevOps-Engineer-Resume-2025" download="Harshal-Chikhale-DevOps-Engineer-Resume-2025">
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="content" id="portfolio">
        <div className="project">
          <h1>Projects</h1>
          <h2>Container Management Tool</h2>
          <p>
            The **Container Management Tool** simplifies the deployment, scaling, and monitoring of containerized applications.  
            This project automates infrastructure, optimizes resources, and ensures seamless application management using industry-leading DevOps tools.
          </p>

          <h3>Key Features & Implementation:</h3>
          <ul>
            <li><strong>Containerization with Docker:</strong> Packaged applications into lightweight containers.</li>
            <li><strong>CI/CD Automation with Jenkins & GitHub Actions:</strong> Automated build, test, and deployment.</li>
            <li><strong>Infrastructure as Code (IaC) with Terraform:</strong> Automated cloud provisioning.</li>
            <li><strong>Configuration Management with Ansible:</strong> Ensured system consistency.</li>
            <li><strong>Cloud Integration with AWS:</strong> Deployed applications on AWS EC2.</li>
            <li><strong>Monitoring with Prometheus & Grafana:</strong> Real-time performance tracking.</li>
            <li><strong>Scripting with Python:</strong> Automated container management and log analysis.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="update-main" id="contact">
        <div className="update">
          <div className="text">
            <h2>Get Updates</h2>
            <p>Stay connected and receive the latest updates.</p>
          </div>
          <div className="btns">
            <input type="email" className="email" name="email" placeholder="Email address" />
            <button>Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <footer>
          <div className="text">
            <h1>Harshal_DevOps</h1>
            <h2>Follow Me</h2>
            <div className="icon">
              <a href="https://www.linkedin.com/in/harshal-chikhale/"><i className="fa fa-linkedin-square"></i></a>
              <a href="https://www.instagram.com/im_harshal_chikhale"><i className="fa fa-instagram"></i></a>
              <a href="https://github.com/harshal-chikhale"><i className="fa fa-github-square"></i></a>
              <a href="https://x.com/Harshchikhale02"><i className="fa fa-twitter-square"></i></a>
            </div>
          </div>
          <p>Copyright ©2022 | Designed by <a href="https://github.com/harshal-chikhale">Harshal_Chikhale</a> with 💓</p>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
