import React from "react";

const NavBar = () => {
  return (
    <section>
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <p>Logo</p>
            </a>
            <span className="navbar-burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">Home</a>
              <a className="navbar-item">Examples</a>
              <a className="navbar-item">Documentation</a>
              <span className="navbar-item">
                <a className="button is-success is-inverted">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default NavBar;
