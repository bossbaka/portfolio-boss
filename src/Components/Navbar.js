import React, { useState } from "react";
import { Link } from "react-scroll";


function Navbar() {
  const [isActive, setActive] = useState(false);
  const activeClass = isActive ? "is-active" : "";
  // const closeDropdown = () => {
  //   setActive(false)
  // }

  //    const sections = ["Home", "Experience", "Skils", "About Me"];
  //     const navLinks = sections.map(section => {
  //       return <div>{section}</div>;
  //     });

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        //textAlign: "center"

      }}
    >
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="home" smooth={true}>Portfolio</Link>
          <Link
            role="button"
            className={`navbar-burger burger ${activeClass}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setActive(!isActive)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Link>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${activeClass}`}>
          <div className="navbar-end">
            <Link className="navbar-item" to="home" smooth={true}>
              Home
            </Link>
            <Link className="navbar-item" to="aboutme" smooth={true}>
              About Me
            </Link>
            <Link className="navbar-item" to="mystory" smooth={true}>
              My Story
            </Link>
            <Link className="navbar-item" to="skills" smooth={true}>
              Skills
            </Link>
            <Link className="navbar-item" to="projects" smooth={true}>
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
