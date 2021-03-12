import "../styles/App.css";
import React from "react";
import BurgerMenu from "../menu";

function numberForSource (length) {
  const random = Math.floor(Math.random() * length)
  return random
}

export default class Train extends React.Component {
  state = {
    ytsource: [
      "https://www.youtube.com/watch?v=Mw9qiV7XlFs",
      "https://www.youtube.com/watch?v=YpcJ6jJlz6o",
      "https://www.youtube.com/watch?v=3rDjPLvOShM",
      "https://www.youtube.com/watch?v=Y53k5YCL93c",
      "https://www.youtube.com/watch?v=9pVWfzsgLoQ",
      "https://www.youtube.com/watch?v=ADt_RisXY0U",
      "https://www.youtube.com/watch?v=XsVJ8PCV-0M",
      "https://www.youtube.com/watch?v=9WxAILsn5-Y",
      "https://www.youtube.com/watch?v=u70shHkbmWI",
      "https://www.youtube.com/watch?v=t1_kU54SCcc",
      "https://www.youtube.com/watch?v=W8PvHerBYaE",
      "https://www.youtube.com/watch?v=yHuGHrzwlqE"
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
