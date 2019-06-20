import React, { Component } from "react";

import Background from "../img/bg.jpg";

const mystyles = {
  backgroundImage: `url( ${Background})`,
  height: '100vh',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  opacity: '.75',
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat'
}

class Bg extends Component {
  render() {
    return (
      <div id="home" style={ mystyles } >
        <h1 className="TextBg">{this.props.title}</h1>
      </div>
    );
  }
}

export default Bg;
