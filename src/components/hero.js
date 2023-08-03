import React from "react";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="hero is-primary is-fullheight">
      <Header />
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">Title</p>
          <p className="subtitle">Subtitle</p>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
