import "../styles/App.css";
import React from "react";
import BurgerMenu from "../menu";

function numberForSource (length) {
  const random = Math.floor(Math.random() * length)
  return random
}

export default class Forest extends React.Component {
  state = {
    ytsource: [
      "https://www.youtube.com/watch?v=hld4uaO1MDE",
      "https://www.youtube.com/watch?v=b4AVn8mTuJw",
      "https://www.youtube.com/watch?v=K-Vr2bSMU7o",
      "https://www.youtube.com/watch?v=h6HLtXxWQMY",
      "https://www.youtube.com/watch?v=t2NbOcqsgaI",
      "https://www.youtube.com/watch?v=ynLpZGegiJE",
      "https://www.youtube.com/watch?v=oSmUI3m2kLk",
      "https://www.youtube.com/watch?v=S-u6ENAL6sw",
      "https://www.youtube.com/watch?v=q86990UHsog",
      "https://www.youtube.com/watch?v=I-zPNQYHSvU",
      "https://www.youtube.com/watch?v=PyFN_FYwqvc",
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
