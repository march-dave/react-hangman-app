import React, { Component } from "react";
import Youtube from "./Youtube";

class Tutorial extends Component {
  //   constructor() {
  //     this.currentLink = "www.youtube.com";
  //   }

  render() {
    return (
      <div>
        <h2>Tutorial</h2>
        {this.currentLink !== "Ujfxbr9myaw" ? (
          <Youtube
            // video={this.currentLink}
            video="Ujfxbr9myaw"
            width="320"
            height="240"
            autoplay="1"
            rel="1"
            modest="1"
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Tutorial;
