import "../styles/App.css";
import BurgerMenu from "../menu";
import React from "react";
import sources from "../sources";

const numberForSource = (length) => {
  const random = Math.floor(Math.random() * length);
  return random;
};
const number = numberForSource(sources.rainy.length-1);

export default class App extends React.Component {
  render() {
    return (
      <main>
        <div className="marquee">
          <BurgerMenu videoSource={sources.rainy[number]}></BurgerMenu>
          <div
            id="ytbg"
            data-ytbg-fade-in="true"
            data-ytbg-mute-button="true"
            data-ytbg-loop="true"
            data-ytbg-mobile="true"
            data-youtube={sources.rainy[number]}
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
