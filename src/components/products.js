import React from "react";
import Img from "gatsby-image";
import { StaticImage } from "gatsby-plugin-image";

const Products = ({ data }) => {
  return (
    <section className="section" id="product-background">
      <div className="content is-medium">
        <h1 className="title has-text-centered" id="product-smooth-anchor">
          Products
        </h1>
        <div class="content has-text-centered">
          <div>
            <span class="tag is-primary is-light is-large">春</span>
            あじ、たい、さわら、めばる、いざぎ等
          </div>
          <div>
            <span class="tag is-primary is-light is-large">夏</span>
            かつお、はむの湯引き、ふかの洗い等
          </div>
          <div>
            <span class="tag is-primary is-light is-large">秋</span>
            さば、さんま、うぼぜ、あかした、かます、あしあかえび等
          </div>
          <div>
            <span class="tag is-primary is-light is-large">冬</span>
            とらふぐ、くえ、はげ、かに等
          </div>
          <div>
            <span class="tag is-primary is-light is-large">年中</span>
            まぐろ、たい、サーモン、たこ、いか、かんぱち、いくら
          </div>
        </div>
      </div>
      <div className="columns is-mobile is-4">
        <div className="column has-text-centered">
          <figure class="image is-256x256">
            <StaticImage
              src="../images/seafood-1200x900.jpg"
              alt="Packaged assortment of fish"
              placeholder="blurred"
              width={500}
              height={500}
            />
          </figure>
        </div>
        <div className="column has-text-centered">
          <figure class="image is-256x256">
            <StaticImage
              src="../images/sushi-1200x900.jpg"
              alt="Packaged assortment of fish"
              placeholder="blurred"
              width={500}
              height={500}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Products;
