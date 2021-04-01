<<<<<<< HEAD
import "../styles/App.css";
import BurgerMenu from "../menu";
import React from "react";
import sources from "../sources";

const numberForSource = (length) => {
  const random = Math.floor(Math.random() * length);
  return random;
};

const number = numberForSource(sources.forest.length-1);

export default class App extends React.Component {
  render() {
    return (
      <main>
        <div className="marquee">
          <BurgerMenu videoSource={sources.forest[number]}></BurgerMenu>
          <div
            id="ytbg"
            data-ytbg-fade-in="true"
            data-ytbg-mute-button="true"
            data-ytbg-loop="true"
            data-ytbg-mobile="true"
            data-youtube={sources.forest[number]}
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
=======
import "../styles/App.css";
import BurgerMenu from "../menu";
import React from "react";

 const state ={
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
      "https://www.youtube.com/watch?v=PyFN_FYwqvc"
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
>>>>>>> f7f4487858b62586fdcce4c73a85673f130692b7
