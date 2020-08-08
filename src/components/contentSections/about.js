import React, { Component } from "react";

import "../../styles/content/contentSections/about.css";
import img4 from "../../images/content/home-img04.jpg";
import img5 from "../../images/content/home-img05.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <section id="about">
          <div className="about-heading row">
            <p>
              When we think of global deforestation crises, we tend to imagine
              the Amazon challenges frequently reported, or we look suspiciously
              at our teak desk sitting in the corner of the room. However, one
              of our closest relatives is vanishing along with its rain forest
              environment.
            </p>
            <p>
              Ground zero is Malaysia and surrounding countries, and the culprit
              could be in your cupboard or chocolate bar. Found in a vast range
              of products, palm oil is produced from plantations of non-native
              African oil palms in Southeast Asia. In B Save & Exit or neo and
              Sumatra, the last stronghold of the orangutan, palm oil
              plantations have destroyed and continue to destroy thousands of
              acres of premium orangutan habitat.
            </p>
          </div>
        </section>
        <div className="about-item row">
          <img src={img4} alt="img1" className="left-about-img " />
          <div>
            <p>Saving nature is at the very heart of what we do as LIW.</p>
            <p>
              For more than 50 years, we have made it our mission to find
              solutions that save the marvelous array of life on our planet by
              applying the best science available and working closely with local
              communities.
            </p>
            <p>
              But our work is far from done. Humans are behind the current rate
              of species extinction, which is at least 100–1,000 times higher
              than nature intended.
            </p>
          </div>
        </div>
        <div className="about-item  row">
          <div>
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
          </div>
          <img src={img5} alt="img2" className="right-about-img"  />
        </div>
      </div>
    );
  }
}

export default About;
