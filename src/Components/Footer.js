import React, { Component } from "react";
import Logofooter from "../img/react-bulma.png";

class Footer extends Component {
  render() {
    return (
      <div className="content has-text-centered" style={{ padding: "50px" }}>
        <h1 className="title has-text-centered">Created by</h1>
          <img
            src={Logofooter}
            style={{ width: "311px" }}
     
            alt="Logo React"
          />
      </div>
    );
  }
}

export default Footer;
