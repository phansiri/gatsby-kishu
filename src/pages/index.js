import * as React from "react";
// import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Products from "../components/products";
import Divider from "../components/divider";

const IndexPage = () => {
  return (
    <div id="overall">
      <Hero />
      <Divider />
      <Products />
      <Divider />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
