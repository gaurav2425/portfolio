// import React from "react";
import styles from "../styles/Welcomepage.module.css";
import MyImg from "../assets/myimg.jpg";
import Footer from "./components/Footer";
import IconButton from "@mui/material/IconButton";
import Navbar from "./components/Navbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import Bar from "./components/Bar";
import ExperienceData from "../JsonData/Experiences.json";
function WelcomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.intro_container}>
        <div className={styles.intro_left_container}>
          <h1>Talks about Design, Tech, Product</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br></br>
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={styles.social_icons}>
            <Tooltip title="Instagram" arrow={true} placement="top">
              <IconButton style={{ marginLeft: "0px" }}>
                <InstagramIcon
                  style={{
                    width: "40px",
                    height: "40px",

                    color: "#000000",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Linkedin" arrow={true} placement="top">
              <IconButton style={{ marginLeft: "0px" }}>
                <LinkedInIcon
                  style={{
                    width: "40px",
                    height: "40px",

                    color: "#000000",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Whatsapp" arrow={true} placement="top">
              <IconButton style={{ marginLeft: "0px" }}>
                <WhatsAppIcon
                  style={{
                    width: "40px",
                    height: "40px",

                    color: "#000000",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Twitter" arrow={true} placement="top">
              <IconButton style={{ marginLeft: "0px" }}>
                <TwitterIcon
                  style={{
                    width: "40px",
                    height: "40px",

                    color: "#000000",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Email" arrow={true} placement="top">
              <IconButton style={{ marginLeft: "0px" }}>
                <AlternateEmailIcon
                  style={{
                    width: "40px",
                    height: "40px",

                    color: "#000000",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Github" arrow={true} placement="top">
              <IconButton style={{ marginLeft: "0px" }}>
                <GitHubIcon
                  style={{
                    width: "40px",
                    height: "40px",

                    color: "#000000",
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        <div className={styles.intro_right_container}>
          <img
            src="https://www.nyahari.com/static/media/gaurav.b716341a97b3d6541401.jpg"
            alt="react logo"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      {/* {ExperienceData.map((exp) => {
        return <div>{exp.title}</div>;
      })} */}
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

        {/* <Bar></Bar> */}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default WelcomePage;
