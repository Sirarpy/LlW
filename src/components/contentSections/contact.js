import React, { Component } from "react";
import '../../styles/content/contentSections/contact.min.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="row">
        <div className="form">
          <form action="index.html" className="contact-form">
            <div className="form-row">
              <div className="col-left">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="col-right">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-full">
                <select name="area" className="select-subject">
                  <option value="country">Country</option>
                  <option value="armenia">Armenia</option>
                  <option value="china">China</option>
                  <option value="usa">United States of America</option>
                  <option value="russia">Russia</option>
                  <option value="uk">United Kingdom</option>
                  <option value="france">France</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <textarea
                className="message"
                name="message"
                cols={30}
                rows={5}
                placeholder="Type Message"
              />
            </div>
            <div className="form-row">
              <button type="submit">Send</button>
              <button type="reset">clear</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
