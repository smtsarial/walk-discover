import "../styles/App.css";
import BurgerMenu from "../menu";
import React from "react";

 const state ={
    ytsource: [
      "https://www.youtube.com/watch?v=JB0A8Me8EKk",
      "https://www.youtube.com/watch?v=ynLpZGegiJE",
      "https://www.youtube.com/watch?v=eZe4Q_58UTU",
      "https://www.youtube.com/watch?v=Et7O5-CzJZg",
      "https://www.youtube.com/watch?v=BOa0zQBRs_M",
      "https://www.youtube.com/watch?v=2BnFnZwsVP0",
      "https://www.youtube.com/watch?v=N0af7_w5GBQ",
      "https://www.youtube.com/watch?v=I-zPNQYHSvU",
      "https://www.youtube.com/watch?v=V_vj7BMawAI",
      "https://www.youtube.com/watch?v=jR1zNpblrlE",
      "https://www.youtube.com/watch?v=jhZfrsfLkDU",
      "https://www.youtube.com/watch?v=JDafTTIohHQ"
    ]
  };

const numberForSource = (length) => {
  const random = Math.floor(Math.random() * length);
  return random;
};

const number = numberForSource(state.ytsource.length-1);

export default class App extends React.Component {
  render() {
    return (
      <main>
        <div className="marquee">
          <BurgerMenu videoSource={state.ytsource[number]}></BurgerMenu>
          <div
            id="ytbg"
            data-ytbg-fade-in="true"
            data-ytbg-mute-button="true"
            data-ytbg-loop="true"
            data-ytbg-mobile="true"
            data-youtube={state.ytsource[number]}
          ></div>
          <div className="content">
            <div className="inner">
              
            </div>
          </div>
        </div>
      </main>
    );
  }
}
