import styles from "../../styles/componentstyles/Bar.module.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
function Bar({ title, techstack, duration }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.bar_container}>
      <div className={styles.bar_top}>
        <div className={styles.bar_top_left}>
          <h1 className={styles.bar_top_title}>
            {/* CAMPUS INNOVATIONS - FRONTEND REACT JS INTERN
             */}
            {title}
          </h1>
          <h2 className={styles.bar_top_duration}> {duration}</h2>
          <div className={styles.bar_top_tech_stack}>
            <h1>Tech Stack:</h1>
            <p>{techstack}</p>
          </div>
        </div>

        <div className={styles.bar_top_right}>
          {open ? (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              <ArrowDropUpIcon
                style={{ width: "30px", height: "30px", color: "#000000" }}
              ></ArrowDropUpIcon>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              <ArrowDropDownIcon
                style={{ width: "30px", height: "30px", color: "#000000" }}
              ></ArrowDropDownIcon>
            </IconButton>
          )}
        </div>
      </div>

      {open ? (
        <div className={styles.bar_bottom}>
          <p>
            Lorem ipsum dolr sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <br></br>
          <p>
            Lorem ipsum dolr sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Bar;
