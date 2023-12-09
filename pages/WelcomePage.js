import React, { useEffect } from "react";
import styles from "../styles/Welcomepage.module.css";
// import MyImg from "../assets/myimg.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Bar from "./components/Bar";
import ExperienceData from "../JsonData/Experiences.json";
import ProjectData from "../JsonData/Projects.json";
import SocialIcons from "./components/SocialIcons";
import Parallax1 from "./components/Parallax1";
import Parallax2 from "./components/Parallax2";
function WelcomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.intro_container}>
        <div className={styles.intro_container_sub}>
          <div className={styles.intro_left_container}>
            <h1 data-aos="flip-up">
              Talks about <span className={styles.design_span}>"Design",</span>
            </h1>
            <h1>
              <span className={styles.tech_span}>Tech</span>,
              <span className={styles.product_span}> Product</span>
            </h1>

            <p data-aos="zoom-in">
              As a full stack developer, I have a wide range of skills and
              knowledge that allow you to work on both the front-end and
              back-end of a website and application. This includes proficiency
              in languages such as HTML, CSS, JavaScript for the front-end, as
              well as languages like Node js, for the back-end. I also have
              knowledge of databases, server-side technologies, and web
              architecture. You are able to design, build, and maintain a
              complete web application. Additionally, I have knowledge of and
              experience with several development tools such as Git, Github and
              Figma. I am a developer who can work on different project and
              technologies
            </p>

            <div>
              <SocialIcons></SocialIcons>
            </div>
          </div>

          <div className={styles.intro_right_container}>
            <img
              // src="https://www.nyahari.com/static/media/gaurav.b716341a97b3d6541401.jpg"
              src="/assets/myimg.jpg"
              alt="react logo"
              // style={{ width: "300px" }}
              className={styles.intro_right_container_img}
            />
          </div>
        </div>
      </div>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Experiences</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })}
      </div>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Volunterring</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })}
      </div>

      <Parallax1></Parallax1>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Projects</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ProjectData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })}
      </div>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Volunterring</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })}
      </div>

      <Parallax2></Parallax2>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Volunterring</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })}
      </div>

      <div className={styles.experiences_container}>
        <div className={styles.experiences}>
          <h1>Tech Stack</h1>
          <div className={styles.experience_border}></div>
        </div>
      </div>
      <div className={styles.bar}>
        {/* {ExperienceData.map((exp, index) => {
          return (
            <Bar
              title={exp.title}
              key={index}
              duration={exp.duration}
              techstack={exp.techstack}
              description={exp.desc}
            ></Bar>
          );
        })} */}
      </div>

      <div className={styles.buttons_container_main}>
        <div className={styles.buttons_container}>
          <button className={styles.hire_me_btn}>Hire Me</button>
          <button className={styles.resume_download_btn}>
            Download Resume
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer></Footer>
    </div>
  );
}

export default WelcomePage;
