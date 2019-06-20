import React, { useState } from "react";
import Modal from "./Modal";
import Cover1 from "../img/1.png";
import Cover3 from "../img/3.png";
import Cover4 from "../img/4.png";
import Cover5 from "../img/5.png";
import Cover6 from "../img/6.png";
import Cover2 from "../img/2.png";


export default function Project() {
  const [isModalActive, setIsModalActive] = useState(null);
  const [type, setType] = useState(null);
  const handleModal = type => {
    if (isModalActive) {
      setIsModalActive(null);
    } else {
      setType(type);
      setIsModalActive("is-active");
    }
  };
  return (
    <div
      id="projects"
      className="hero is-light"
      style={{ textAlign: "center", padding: "50px" }}
    >
      <h1 className="title has-text-centered">PROJECTS</h1>

      <div className="columns">
        <div className="column">
          <div className="card box">
            <img src={Cover1} alt="CoverProject1" className="img-size-cover" />
            <p style={{ padding: "5px" }}>Book Store - HTML CSS</p>
            <div className="columns is-flex-mobile">
              <div className="column">
                <a
                  href="https://github.com/bossbaka/byboss-bookstore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon is-medium fab fa-github" />
                </a>
              </div>

              <div className="column">
                <span
                  onClick={() => {
                    handleModal("Project1");
                  }}
                >
                  <i className="icon is-medium fas fa-info-circle" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card box">
          <img src={Cover3} alt="CoverProject3" className="img-size-cover" />
            <p style={{ padding: "5px" }}>Lesson Online - HTML CSS</p>
            <div className="columns is-flex-mobile">
              <div className="column">
                <a
                  href="https://github.com/bossbaka/Object-Orientation2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon is-medium fab fa-github" />
                </a>
              </div>

              <div className="column">
                <span
                  onClick={() => {
                    handleModal("Project2");
                  }}
                >
                  <i className="icon is-medium fas fa-info-circle" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card box">
          <img src={Cover4} alt="CoverProject4" className="img-size-cover" />
            <p style={{ padding: "5px" }}>Watch Shop - HTML CSS</p>
            <div className="columns is-flex-mobile">
              <div className="column">
                <a
                  href="https://github.com/bossbaka/byboss-watchshop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon is-medium fab fa-github" />
                </a>
              </div>

              <div className="column">
                <span
                  onClick={() => {
                    handleModal("Project3");
                  }}
                >
                  <i className="icon is-medium fas fa-info-circle" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="card box">
          <img src={Cover5} alt="CoverProject5" className="img-size-cover" />
            <p style={{ padding: "5px" }}>Online Hotel Booking - HTML CSS PHP</p>
            <div className="columns is-flex-mobile">
              <div className="column">
                <a
                  href="https://github.com/bossbaka/KANGAMPHUR-PLACE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon is-medium fab fa-github" />
                </a>
              </div>

              <div className="column">
                <span
                  onClick={() => {
                    handleModal("Project4");
                  }}
                >
                  <i className="icon is-medium fas fa-info-circle" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card box">
          <img src={Cover6} alt="CoverProject6" className="img-size-cover" />
            <p style={{ padding: "5px" }}>Mobile Application - Ionic</p>
            <div className="columns is-flex-mobile">
              <div className="column">
                <a
                  href="https://github.com/bossbaka/events-rsu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon is-medium fab fa-github" />
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="column">
          <div className="card box">
          <img src={Cover2} alt="CoverProject2" className="img-size-cover" />
            <p style={{ padding: "5px" }}>ByFarmers - Wordpress</p>
            <div className="columns is-flex-mobile">
              <div className="column">
                <span
                  onClick={() => {
                    handleModal("Project6");
                  }}
                >
                  <i className="icon is-medium fas fa-info-circle" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isBox={false}
        heading={null}
        description={null}
        handleModal={handleModal}
        isActive={isModalActive}
        type={type}
      />
    </div>
  );
}
