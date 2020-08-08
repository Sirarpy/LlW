import React, { Component } from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="top-header row">
          <div className="logo">
            <p>
              <span>life</span> <br /> is<span>w</span>ild
            </p>
          </div>
          <div className="menu">
            {/* <div className="mobile-toggle">
              <button type="button">&#9776;</button>
              <button type="button">&#88;</button>
            </div> */}
            <nav className="main-menu" id="nav">
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

              <ReactNavbar
                menu={[
                  { name: "HOME", to: "/" },
                  { name: "ABOUT", to: "/" },
                  { name: "CONTACT", to: "/" },
                ]}
              />      
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
