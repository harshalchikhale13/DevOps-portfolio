/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiSvelte, SiMongodb } from "react-icons/si";
import { TbBrandDocker, TbBrandJavascript, TbBrandNextjs, TbBrandOpenSource } from "react-icons/tb";
import { AiFillAmazonSquare, AiOutlineDollar, AiOutlineHtml5, AiOutlineProject } from "react-icons/ai";
import "./LandingPage.css";
// import FaceSvg from "../assets/mf-avatar.svg";
import About from "../assets/about-us.png.svg";
import div_befor from "../assets/div_before.svg";
// import Logo from "../assets/logo.png.svg";
import Logo3 from "../assets/logo3.png.svg";
import s1 from "../assets/download-s1.png";
import s2 from "../assets/download-s2.png";
import s3 from "../assets/download-s3.png";
import s4 from "../assets/download-s4.png";
import s5 from "../assets/download-s5.png";
import Home_avtar from "../assets/home-right.png.svg";
import { Typewriter } from "react-simple-typewriter";


var navbar = document.querySelector("header");
window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

const LandingPage = () => {
  return (
    <>
      <header className="header">
        <div className="content navbar">
          <div className="logo">
            {/* <img src={Logo} alt={" not found"} /> */}
            <h1>Harshal_DevOps</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#hero">home</a>
              </li>
              <li>
                <a href="#intro">about</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#services">service</a>
              </li>
              <li>
                <a href="#">pages</a>
              </li>
              <div className="drop">
                <li>
                  <a href="https://medium.com/@harshalchikhale9822">
                    blogs
                  </a>
                </li>
              </div>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
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
              <Typewriter
                words={["I'M Harshal"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={80}
              />
            </h1>
            <h5 className="about1">
              <Typewriter
                words={[
                  "I'm Aspiring DevOps Engineer",

                  "Freelancer",
                  "&",
                  "Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h5>
          </div>
          <div className="btn">
            <button>hire me</button>
            <div className="hire">
            <a href="/Harshal-Chikhale-DevOps-Engineer-Resume-2025" download="Harshal_Chikhale.pdf">
              <button>get cv</button>
              </a>
            </div>
          </div>
        </div>
        <div className="right forgot">
          <img src={Home_avtar} alt="" />
        </div>
      </section>
      <section className="intro" id="intro">
        <div className="left forgot">
          <img src={About} alt="" />
        </div>
        <div className="right">
          <div className="about">
            <div className="about-text">
              <h2>
                let’s <br />
                Introduce about <br />
                myself
              </h2>
              <p>
              I am Harshal Chikhale, a dynamic and results-driven DevOps Engineer with over 2 years of experience in designing, automating, and optimizing cloud-based infrastructures and deployment pipelines. I specialize in leveraging cutting-edge technologies like Kubernetes, Docker, and Ansible to create scalable, efficient, and secure systems. My expertise spans multiple cloud platforms, including AWS, Microsoft Azure, and Google Cloud, where I have implemented serverless architectures and microservices to support high-performance applications.

I have a proven track record of developing robust CI/CD pipelines using Jenkins, GitLab CI/CD, and GitHub Actions, enabling seamless integration, deployment, and monitoring of applications. My proficiency in tools like Prometheus and Grafana ensures real-time monitoring, performance optimization, and system reliability. I am equally skilled in managing version control systems like Git and GitHub to foster collaborative team environments.

Beyond technical proficiency, I bring strong leadership capabilities, honed through my role as Junior Under Officer in NCC, where I successfully managed and motivated a team of over 60 individuals for 2 years. I thrive on solving complex challenges, learning new technologies, and driving continuous improvement. With a commitment to delivering innovative and scalable DevOps solutions, I aim to empower organizations to achieve operational excellence.
              </p>
            </div>
            <div className="download-btn">
            <a href="../assets/Harshal_Chikhale.pdf" download="Harshal_Chikhale.pdf">
              <button >Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="content content-logo" id="portfolio">
        <div className="left">
          <div className="top">
            <div className="image">
              <a href="#">
                <AiFillAmazonSquare style={{ color: "orange", fontSize: "70px" }} />
                <p>AWS</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <TbBrandNextjs style={{ color: "blue", fontSize: "70px" }} />
                <p>Next JS</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <TbBrandDocker
                  style={{ color: "Bule", fontSize: "70px" }}
                />
                <p>Docker</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <AiOutlineProject style={{ color: "purple", fontSize: "70px" }} />
                <p>Jenkins</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiTailwindcss
                  style={{ color: "light-blue", fontSize: "70px" }}
                />
                <p>Kunernetes</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiReact style={{ color: "blue", fontSize: "70px" }} />
                <p>react</p>
              </a>
            </div>
          </div>
          <div className="top">
            <div className="image">
              <a href="#">
                <SiSvelte style={{ color: "red  ", fontSize: "50px" }} />
                <p>Redhat-Linux</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <SiMongodb style={{ color: "green", fontSize: "60px" }} />
                <p>mongodb</p>
              </a>
            </div>
            <div className="image">
              <a href="#">
                <TbBrandOpenSource  style={{ color: "green", fontSize: "60px" }} />
                <img src={Logo3} alt="" />
                <p>Ansible</p>
              </a>
            </div>
          </div>
        </div>
        <div className="right Experience">
          <div className="sk wid">
            <div className="div-image">
              <img src={div_befor} alt="" />
            </div>
            <div className="contact wid">
              <div className="year wid">
                <h1>1+</h1>
                <h3>
                  Years
                  <br />
                  Experience
                  <br />
                  Working
                </h3>
              </div>

              <div className="no wid">
                <div className="sub-no">
                  <p>call us now</p>
                  <h2 type="tel">(+91) 9322908142</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offers" id="services">
        <div className="headline">
          <h1>service offers</h1>
          <p>
          Harnessing the spirit of creativity to deliver beyond expectations.   
          </p>
        </div>
        <div className="offer-content">
          <div className="offer-img">
            <img src={s1} alt="" />
            <h2>Cloud_Computing</h2>
            <p>
            I specialize in providing secure and scalable cloud solutions tailored to your needs. From building cloud-native architectures to optimizing deployments, I ensure seamless performance and reliability to help your projects succeed

            </p>
          </div>

          <div className="offer-img">
            <img src={s2} alt="" />
            <h2>Kubernetes</h2>
            <p>
            I design and manage scalable Kubernetes solutions to ensure efficient container orchestration. From deployment to monitoring, I focus on optimizing workloads, enhancing reliability, and streamlining application performance for seamless project delivery.            </p>
          </div>

          <div className="offer-img">
            <img src={s3} alt="" />
            <h2>Logging & monitoring</h2>
            <p>
            I provide reliable logging and monitoring solutions to ensure your systems run smoothly. By setting up tools like Prometheus and Grafana, I deliver real-time insights, track performance, and quickly detect and resolve issues to maintain optimal system health.
            </p>
          </div>

          <div className="offer-img">
            <img src={s4} alt="" />
            <h2>CI/CD</h2>
            <p>
            I design and implement robust CI/CD pipelines that automate testing, integration, and deployment. This accelerates software delivery, reduces errors, and ensures seamless production releases, enabling your team to innovate faster with confidence.
            </p>
          </div>

          <div className="offer-img">
            <img src={s5} alt="" />
            <h2>Building Infrastructure</h2>
            <p>
            I design and build scalable, secure, and highly available infrastructure tailored to your needs. Leveraging cloud platforms and infrastructure-as-code tools, I ensure efficiency, reliability, and cost optimization for your systems.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="content">
        <div className="project">
          <h1>
            quality work <br />
            Recently done project
          </h1>
        </div>
      </section> */}
      <section className="update-main" id="contact">
        <div className="update">
          <div className="text">
            <h2>get update from anywhere</h2>
            <p>
            Whispers of the wind carry stories untold, fear not their song.
            </p>
          </div>
          <div className="btns">
            <input
              type="email"
              className="email"
              name="email"
              placeholder="email address"
            />
            <button>Get Started</button>
          </div>
        </div>
      </section>
      <section className="footer">
        <footer>
          <div className="text">
            <h1>Harshal_DevOps</h1>
            <h2>follow me</h2>
            <div className="icon">
              <a href="https://www.linkedin.com/in/harshal-chikhale/">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              {" "}
              <a href="https://www.instagram.com/im_harshal_chikhale">
               <i className="fa fa-instagram" aria-hidden="true"></i>
              {" "}
              </a>
              <a herf="https://github.com/harshal-chikhale">
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
              <a herf="https://x.com/Harshchikhale02">
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
              {" "}
              </a>
            </div>
          </div>
          <p>
            Copyright ©2022 All rights reserved | This template is made with
            <span>
              <a href="https://github.com/harshal-chikhale">
                {" "}
                Harshal_Chikhale{" "}
              </a>
            </span>
            with 💓
          </p>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
