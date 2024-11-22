import React from "react";
import { Link } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import resume from "../assets/image/cv.pdf/Zərifə.pdf";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
              DOWNLOAD CV <IoMdDownload />
            </Link>
            <ul>
              <li>
                <Link to={"https://github.com/Zaranasirova"}>
                  <FaGithub />
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "https://www.linkedin.com/in/z%C9%99rif%C9%99-n%C9%99sirova-34a551309/"
                  }
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.facebook.com/profile.php?id=61564042628039"}
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to={"https://wa.me/994517375883"}>
                  <FaWhatsapp />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
