import React from "react";
import Nav from "./Nav";

const TopHeader = () => {
  return (
    <header className="header">
      <div className="container">
      <div className="header-wrapper">
      <h1>Zarifa <span>.</span></h1>
        <Nav/>
        <div className="hidden">
          salam
        </div>
      </div>
      </div>
    </header>
  );
};

export default TopHeader;
