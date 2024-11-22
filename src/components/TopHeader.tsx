import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-name">
            <p>
              Zarifa <span>.</span>
            </p>
          </div>
          <nav className="navBar">
            <ul className="nav-list">
              <li className="list-item active">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="list-item">
                <Link to={"/"}>Services</Link>
              </li>
              <li className="list-item">
                <Link to={"/"}>Resume</Link>
              </li>
              <li className="list-item">
                <Link to={"/"}>Work</Link>
              </li>
              <li className="list-item">
                <Link to={"/"}>Contact</Link>
              </li>
              <li className="hire-me ">
                <Link to={"/"}>Hire me</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
