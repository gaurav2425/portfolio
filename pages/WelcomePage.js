// import React from "react";
import styles from "../styles/Welcomepage.module.css";
import MyImg from "../assets/myimg.jpg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
        </div>

        <div className={styles.intro_right_container}>
          <img
            src="https://www.nyahari.com/static/media/gaurav.b716341a97b3d6541401.jpg"
            alt="react logo"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default WelcomePage;
