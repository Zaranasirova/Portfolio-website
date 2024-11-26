import React from "react";
import resume from "../assets/image/cv.pdf/Zərifə.pdf";
import cv_image from "../assets/image/cv.pdf/New Project.png";
import Social from "../components/Social";
import { color, motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import Counter from "../components/Counter";

const HomePage = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="main-content">
          <div className="info">
            <span className="profession-title">Frontend Developer</span>
            <h2 className="introduction">
              Hello I`m <br></br>
              <span>Zarifa Nasirova</span>
            </h2>
            <p className="introduction-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              eos laudantium exercitationem aliquam dolore! Minus!
            </p>
            <div className="social-info">
              <button className="download">
                <a href={resume} download="Zarife.pdf">
                  Download Cv <FaDownload className="download-icon" />
                </a>
              </button>
              <Social />
            </div>
          </div>
          <div className="photo">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5, delay: 0.8 }}
              className="image-container"
            >
              <img src={cv_image} alt="" />
            </motion.div>
            <motion.svg
              fill="transparent"
              viewBox="0 0 430 430"
              xmlns="http://www.w3.org/2000/svg"
              className="circle-box"
            >
              <motion.circle
                cx="215"
                cy="215"
                r="215"
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </div>
        </div>
        <div className="counter-box">
        <Counter targetNumber={1} duration={500} text={"Years of experience"} />
        <Counter targetNumber={19} duration={1000} text={"Projects completed"} />
        <Counter targetNumber={6} duration={1000} text={"Technologies mastered"} />
        <Counter targetNumber={281} duration={1000} text={"Code commits"} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
