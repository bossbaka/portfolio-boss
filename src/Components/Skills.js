import React, { Component } from "react";
import Bghtml from "../img/Bghtml.png";
import Bgcss from "../img/Bgcss.png";
import Bgjavascript from "../img/Bgjs.svg";
import Bgreact from "../img/Bgreact.svg";
import Bgwordpress from "../img/Bgwp.png";
import Bggit from "../img/Bggit.png";

class Skills extends Component {
  render() {
    return (
      <div id="skills" style={{ textAlign: "center", padding: "50px" }}>
        <h1 className="title has-text-centered">SKILLS</h1>
        <div className="columns">
          <div className="column">
            <div className="card box">
              <img
                src={Bghtml}
                alt="Logo HTML"
                className="img-size-max"
              />
              <br />
              <p style={{ padding: "10px" }}>HTML</p>
              <progress className="progress is-info" value="90" max="100">
                90%
              </progress>
            </div>
          </div>
          <div className="column">
            <div className="card box ">
              <img
                src={Bgcss}
                alt="Logo CSS"
                className="img-size-max"
              />
              <br />
              <p style={{ padding: "10px" }}>CSS</p>
              <progress className="progress is-info" value="45" max="100">
                45%
              </progress>
            </div>
          </div>
          <div className="column">
            <div className="card box">
              <img
                src={Bgjavascript}
                alt="Logo JS"
                className="img-size-max"
              />
              <br />
              <p style={{ padding: "10px" }}>Javascript ( Basic )</p>
              <progress className="progress is-info" value="15" max="100">
                15%
              </progress>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <div className="card box">
              <img
                src={Bgreact}
                alt="Logo React"
                className="img-size-max"
              />
              <br />
              <p style={{ padding: "10px" }}> React ( Basic )</p>

              <progress className="progress is-info" value="15" max="100">
                15%
              </progress>
            </div>
          </div>
          <div className="column">
            <div className="card box">
              <img
                src={Bgwordpress}
                alt="Logo WP"
                className="img-size-max"
              />
              <br />
              <p style={{ padding: "10px" }}> WordPress </p>
              <progress className="progress is-info" value="50" max="100">
                50%
              </progress>
            </div>
          </div>
          <div className="column">
            <div className="card box">
              <img
                src={Bggit}
                alt="Logo Git"
                className="img-size-max"
              />
              <br />
              <p style={{ padding: "10px" }}> Git </p>

              <progress className="progress is-info" value="45" max="100">
                45%
              </progress>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
