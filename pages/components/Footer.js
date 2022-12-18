import React from "react";
import styles from "../../styles/componentstyles/Footer.module.css";
import { AccessAlarm } from "@mui/icons-material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_container_left}>
        <h1>Let's Work Together</h1>
      </div>

      <div className={styles.footer_container_right}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <h1 className={styles.connect_social}>Connect Social</h1>

        <div className={styles.social_icons}>
          <AlternateEmailIcon
            size={40}
            style={{ width: "40px", height: "40px" }}
          ></AlternateEmailIcon>
          <TwitterIcon style={{ width: "40px", height: "40px" }}></TwitterIcon>
          <LinkedInIcon
            style={{ width: "40px", height: "40px" }}
          ></LinkedInIcon>
          <InstagramIcon
            style={{ width: "40px", height: "40px" }}
          ></InstagramIcon>
        </div>
      </div>
    </div>
  );
}

export default Footer;
