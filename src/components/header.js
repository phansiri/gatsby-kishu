import React from "react";
import "../styles/global.scss";
import NavBar from "./nav-bar";

const Header = ({ props }) => {
  return (
    <section className="hero-head">
      <NavBar />
    </section>
  );
};

export default Header;
