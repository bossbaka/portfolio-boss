import React, { Component } from "react";
import BgProfile from "../img/Profile.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div
        id="aboutme"
        style={{
          textAlign: "center",
          paddingTop: "50px",
          paddingBottom: "50px"
        }}
      >
        <h1 className="title has-text-centered">ABOUT ME</h1>
        <div className="image centerImg" style={{ width: 250, height: 250 }}>
          <img src={BgProfile} alt="Profile" className="is-rounded" />
        </div>{" "}
        <br />
        <b>
          Phisek Pinpia ( Boss ) <br />
          Position : Front End Developer
        </b>
        <hr />
        <b>Date of birth</b> : 12 June 1996. <br />
        <b>Religion</b> : Buddhist <br />
        <b>Nationality</b> : Thai <br />
        <b>Language</b> : Thai ( Native ) , English ( Fair ) <br />
        <b>Contact</b> : Tel 092-4201609 <br />
        <b>Email</b> : phisek.boss@gmail.com <br />
        <span className="icon" style={{ paddingTop: "40px" }}>
          <a
            className="button is-medium"
            href="https://github.com/bossbaka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-medium">
              <i className="fab fa-github  icon is-medium" />
            </span>
            <span>GitHub</span>
          </a>
          &nbsp;
          &nbsp;
          <a
            className="button is-medium"
            href="https://www.facebook.com/bosshandaeng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon is-medium">
              <i className="fab fa-facebook  icon is-medium" />
            </span>
            <span>Facebook</span>
          </a>
        </span>
      </div>
    );
  }
}

export default AboutMe;
