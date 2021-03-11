import "../styles/App.css";
import React from "react";
import BurgerMenu from "../menu";

function numberForSource (length) {
  const random = Math.floor(Math.random() * length)
  return random
}

export default class Snow extends React.Component {
  state = {
    ytsource: [
      "https://www.youtube.com/watch?v=CGslieDL-04&ab",
      "https://www.youtube.com/watch?v=kGJr1Nh-1CY",
      "https://www.youtube.com/watch?v=ESCNUu4lBE8",
      "https://www.youtube.com/watch?v=1xG2sizmXkM",
      "https://www.youtube.com/watch?v=AEdPRquaV_w",
      "https://www.youtube.com/watch?v=a_oqcg0hvpo",
      "https://www.youtube.com/watch?v=F8MN0o6RS9o",
      "https://www.youtube.com/watch?v=jqpc3ak7Rhw",
      "https://www.youtube.com/watch?v=mECvsV-Ah_8",
      "https://www.youtube.com/watch?v=ur11-3kBm1A",
      "https://www.youtube.com/watch?v=4jnyy3G3WIA",
      "https://www.youtube.com/watch?v=tl8v5f6-zsc"
    ],
  };

  render() {
    return (
      <main>
        <div className="marquee">
          <BurgerMenu videoSource = {this.state.ytsource[numberForSource(this.state.ytsource.length)]}></BurgerMenu>
          <div
            id="ytbg"
            data-ytbg-fade-in="true"
            data-ytbg-mute-button="true"
            data-ytbg-loop="true"
            data-ytbg-mobile= "true"
            data-youtube={this.state.ytsource[numberForSource(this.state.ytsource.length)]}
          ></div>
          <div className="content">
            <div className="inner"></div>
          </div>
        </div>
      </main>
    );
  }
}