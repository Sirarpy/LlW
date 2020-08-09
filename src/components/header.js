import React, { Component } from "react";
// import { ReactNavbar } from "react-responsive-animate-navbar";

class Header extends Component {
  home = null;

  render() {
    return (
      <header>
        <div className="top-header row" key="header">
          <div className="logo">
            <p>
              <span>life</span> <br /> is<span>w</span>ild
            </p>
          </div>
          <div className="menu" key="menu">
            {/* <div className="mobile-toggle">
              <button type="button">&#9776;</button>
              <button type="button">&#88;</button>
            </div> */}
            <nav className="main-menu" id="nav" key='nav'>
              {/*             
              <ul>
                <li>
                  <a className="active" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="index.html">About</a>
                </li>

                <li>
                  <a href="index.html">contact</a>
                </li>
              </ul> */}

              {/* <ReactNavbar
                menu={[
                  {name: "HOME", to: "/#home" },
                  { name: "ABOUT", to: "/#about" },
                  { name: "IDEAS", to: "/#idea" },
                  { name: "CONTACT", to: "/#contact" },
                ]}
              /> */}
            </nav>
          </div>
        </div>
        <div className="header-banner row">
          <div>
            <h1>Get Involved</h1>
            <p> add your name to save the nature!</p>
            <button>join us!</button>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
