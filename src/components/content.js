import React, { Component } from "react";
import Home from "./contentSections/home";
import Idea from "./contentSections/idea";
import About from "./contentSections/about";

import Contact from "./contentSections/contact";


class Content extends Component {
  render() {
    return (
      <div className="content">
        <Home />
        <Idea/>
        <About/>
        <Contact />
      </div>
    );
  }
}

export default Content;
