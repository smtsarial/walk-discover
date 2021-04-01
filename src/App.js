import "./styles/App.css";
import BurgerMenu from "./menu";
import React, { useEffect, useState } from "react";
import sources from "./sources"

const Expire = (props) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);
  return visible ? <div>{props.children}</div> : <div />;
};

const numberForSource = (length) => {
  const random = Math.floor(Math.random() * length);
  return random;
};

const number = numberForSource(sources.all.length-1);

export default class App extends React.Component {
  render() {
    return (
      <main>
        <div className="marquee">
          <BurgerMenu videoSource={sources.all[number]}></BurgerMenu>
          <div
            id="ytbg"
            data-ytbg-fade-in="true"
            data-ytbg-mute-button="true"
            data-ytbg-loop="true"
            data-ytbg-mobile="true"
            data-youtube={sources.all[number]}
          ></div>
          <div className="content">
            <div className="inner">
              <Expire delay="7000">
                <h1>Hello!</h1>
              </Expire>
              <Expire delay="9000">
                <h1>You can select whatever you want from right menu!</h1>
              </Expire>
              <Expire delay="10000">
                <h1>Enjoy it!</h1>
              </Expire>
           </div>
          </div>
        </div>
      </main>
    );
  }
}
