import React, { Component } from "react";

import "./../../styles/content/contentSections/idea.min.css";
import rightImg4 from "./../../images/content/home-img04.jpg";
import rightImg5 from "./../../images/content/home-img05.jpg";
import rightImg6 from "./../../images/content/home-img06.jpg";

class Idea extends Component {
  render() {
    return (
      <section id="idea">
        <div className="row">
          <div className="idea-heading">
            <p>our key ideas</p>
            <h3>Learn About Our Key Ideas and the Issues We Fight for:</h3>
          </div>

          <div className="idea-items">
            <div className="idea-item1">
              <img src={rightImg4} alt="img" />
              <div className="idea-text">
                <h4>Endangered Species</h4>
                <p>
                  Solutions that save the marvelous array of life on our planet
                  by applying the best science available and working closely
                  with local communities.
                </p>
                <p className="more">learn more</p>
              </div>
            </div>
            <div className="idea-item2">
              <img src={rightImg5} alt="img" />
              <div className="idea-text">
                <h4>Sea & River Animals</h4>
                <p>
                  Solutions that save the marvelous array of life on our planet
                  by applying the best science available and working closely
                  with local communities.
                </p>
                <p className="more">learn more</p>
              </div>
            </div>
            <div className="idea-item3">
              <img src={rightImg6} alt="img" />
              <div className="idea-text">
                <h4>Climate Change</h4>
                <p>
                  Solutions that save the marvelous array of life on our planet
                  by applying the best science available and working closely
                  with local communities.
                </p>
                <p className="more">learn more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Idea;
