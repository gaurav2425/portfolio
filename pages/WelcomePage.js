// import React from "react";
import styles from "../styles/Welcomepage.module.css";
// import MyImg from "../assets/myimg.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Bar from "./components/Bar";
import ExperienceData from "../JsonData/Experiences.json";
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
            <h1>Talks about Design, Tech, Product</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
              <br></br>
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
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
        {ExperienceData.map((exp) => {
          return (
            <Bar
              title={exp.title}
              duration={exp.duration}
              techstack={exp.techstack}
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
        {ExperienceData.map((exp) => {
          return (
            <Bar
              title={exp.title}
              duration={exp.duration}
              techstack={exp.techstack}
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
        {ExperienceData.map((exp) => {
          return (
            <Bar
              title={exp.title}
              duration={exp.duration}
              techstack={exp.techstack}
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
        {ExperienceData.map((exp) => {
          return (
            <Bar
              title={exp.title}
              duration={exp.duration}
              techstack={exp.techstack}
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
        {ExperienceData.map((exp) => {
          return (
            <Bar
              title={exp.title}
              duration={exp.duration}
              techstack={exp.techstack}
            ></Bar>
          );
        })}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default WelcomePage;
