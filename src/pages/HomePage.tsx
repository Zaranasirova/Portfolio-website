import React from "react";
import { Link } from "react-router-dom";

import resume from "../assets/image/cv.pdf/Zərifə.pdf";

const HomePage = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="main-section-container">
          <div className="profile-intro">
            <p>Frontend Developer</p>
            <h1>
              Hello I`m <span>Zarifa Nasirova</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sequi expedita, qui non ipsam sunt!
            </p>
          </div>
          <div className="profile-actions">
            <Link
              to={resume}
              download="Zərifə_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOWNLOAD CV
            </Link>
            <ul>
              <li>
                <Link to={"/"}></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
