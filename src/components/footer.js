import React, { Component } from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

// import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import "../styles/footer/footer.css";

class Footer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

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
              {/* <Map google={this.props.google} onClick={this.onMapClicked}>
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />

                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                >
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow>
              </Map> */}
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

export default Footer;

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAU3yOkJ1nRjG_7bL7FZHeRYwQjzM1ozjg",
// })(Footer);
