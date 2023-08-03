import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
