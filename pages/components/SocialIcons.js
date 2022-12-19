import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import styles from "../../styles/componentstyles/SocialIcons.module.css";
function SocialIcons() {
  return (
    <div className={styles.social_icons}>
      <Tooltip title="Instagram" arrow={true} placement="top">
        <IconButton style={{ marginLeft: "0px" }}>
          <InstagramIcon className={styles.instagram_icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Linkedin" arrow={true} placement="top">
        <IconButton style={{ marginLeft: "0px" }}>
          <LinkedInIcon className={styles.linkedin_icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Whatsapp" arrow={true} placement="top">
        <IconButton style={{ marginLeft: "0px" }}>
          <WhatsAppIcon className={styles.whatsapp_icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Twitter" arrow={true} placement="top">
        <IconButton style={{ marginLeft: "0px" }}>
          <TwitterIcon className={styles.twitter_icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Email" arrow={true} placement="top">
        <IconButton style={{ marginLeft: "0px" }}>
          <AlternateEmailIcon className={styles.email_icon} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Github" arrow={true} placement="top">
        <IconButton style={{ marginLeft: "0px" }}>
          <GitHubIcon className={styles.github_icon} />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default SocialIcons;
