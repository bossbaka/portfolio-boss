import React, { Component } from "react";

class TimeLine extends Component {
  render() {
    return (
      <div id="mystory" className="hero is-light">
        <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <h1 className="title has-text-centered">MY STORY</h1>{" "}
       
        <div className="timeline is-centered">
          <header className="timeline-header">
            <span className="tag is-medium is-primary"><b>Start</b></span>
          </header>
          <br />
          <header className="timeline-header">
            <span className="tag is-medium is-primary"><b>EDUCATION</b></span>
          </header>
          <div className="timeline-item is-danger">
            <div className="timeline-marker is-danger is-icon">
             
            </div>
            <div className="timeline-content">
              <p><b>2014-2015</b></p>
              <p>
                <b className="has-text-danger">Saraburi Technical College,</b>  <br />
                <b className="has-text-danger">Diplomaof High Vocational Cert.</b> <br />
                <b>Information Technology</b>
              </p>
            </div>
          </div>
          <div className="timeline-item is-danger">
            <div className="timeline-marker is-danger is-icon" />
            <div className="timeline-content">
              <p><b>2016-2019</b></p>
              <p><b className="has-text-danger">Rangsit University,</b><br />
                 <b>Information Technology</b></p>
            </div>
          </div>
          <header className="timeline-header">
            <span className="tag is-medium is-primary"><b>EXPERIENCE</b></span>
          </header>
          <div className="timeline-item is-danger">
            <div className="timeline-marker is-danger is-icon" />
            <div className="timeline-content">
              <p><b>Feb.- May 2019</b></p>
              <p><b className="has-text-danger">Internship, <br />
                Developer,</b> <b>Happio co.ltd</b></p>
            </div>
          </div>
          <br />
          <header className="timeline-header">
            <span className="tag is-medium is-primary"><b>End</b></span>
          </header>
        </div>
        </div>
      </div>
    );
  }
}

export default TimeLine;
