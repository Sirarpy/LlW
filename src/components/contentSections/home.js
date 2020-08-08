import React, { Component } from "react";

import "./../../styles/content/contentSections/home.min.css";

import rightImg1 from "./../../images/content/home-img01.jpg";
import rightImg2 from "./../../images/content/home-img02.jpg";
import rightImg3 from "./../../images/content/home-img03.jpg";


class Home extends Component {
  render() {
    return (
      <div>
        <section id="home" className="row">
          <div className="home-left">
            <p>standing together for a better world</p>
            <h2>what inspires us to do this?</h2>
            <p>
              And the impacts will reach far beyond the potential cultural loss
              of iconic species like tigers, rhinos and whales.
            </p>
            <p>
              The good news is we’ve also seen what’s working. LIW has been part
              of successful wildlife recovery stories ranging from southern
              Africa’s black rhino to black bucks in the Himalayas. And this in
              turn is helping protect rich and varied ecosystems while ensuring
              people continue to benefit from nature.
            </p>
            <p>
              This much is clear: we cannot afford to fail in our mission to
              save a living planet.
            </p>
            <button>learn more</button>
          </div>
          <div className="home-right">
            <img src={rightImg1} alt="img-1" />
            <img src={rightImg2} alt="img-2" />
            <img src={rightImg3} alt="img-3" />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
