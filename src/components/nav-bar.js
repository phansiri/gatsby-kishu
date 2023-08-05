import React, { useState } from "react";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  function changeToggle() {
    return null;
  }
  return (
    <section>
      <nav
        className="container navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            Kishu Uoko
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={toggleMenu ? "navbar-menu" : "navbar-menu is-active"}>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="#product-smooth-anchor"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Products
            </a>
            <a
              className="navbar-item"
              href="#location-smooth-anchor"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Location
            </a>
            <a
              className="navbar-item"
              href="#about-us-smooth-anchor"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              About Us
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
