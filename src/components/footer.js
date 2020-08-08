import React, { Component } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import "../styles/footer/footer.css";



class Footer extends Component {

  render() {
  
    return (
      <footer id="footer">
        <div className="top-footer row">
          <div className="footer-rol">
            <div className="footer-logo">
              <a href="index.html">
                LIFE <span>isWild</span>
              </a>
            </div>
            <div className="footer-text">
              <p>
                Conservation is the practice of protecting wild plant and animal
                species and their habitats. The goal of wildlife conservation is
                to ensure that nature will be around for future generations to
                enjoy and also to recognize the importance of wildlife and
                wilderness for humans and other species alike
              </p>
            </div>
          </div>
          <div className="footer-rol">
            <div className="footer-header">
              <h3>Useful Links</h3>
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="index.html">About</a>
                </li>
                <li>
                  <a href="index.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <a href="facebook.com">
                {" "}
                <FaFacebookSquare />
              </a>
              <a href="linkedIn.com">
                <FaLinkedin />
              </a>
              <a href="linkedIn.com">
                <FaTwitterSquare />
              </a>
              <a href="linkedIn.com">
                <FaGithubSquare />
              </a>
            </div>
          </div>
          <div className="footer-rol map">
            <div className="google-map-code">
              <Map google={this.props.google} zoom={14}>
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />

                <InfoWindow onClose={this.onInfoWindowClose}>
                  {/* <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div> */}
                </InfoWindow>
              </Map>
            </div>
          </div>
        </div>
        <div className="copyright row">
          &copy; 2020 Davtyan Sirarpi: All rights Reserved !
        </div>
      </footer>
    );
  }
}

// export default Footer;

export default GoogleApiWrapper({
  Key: "https://goo.gl/maps/vnsgp9sTZvXKMc668",
})(Footer);
