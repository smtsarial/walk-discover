import "./styles/App.css";
import BurgerMenu from "./menu";
import React, { useEffect, useState } from "react";

const Expire = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, props.delay);
  }, [props.delay]);

  return visible ? <div>{props.children}</div> : <div />;
};


function numberForSource (length) {
  const random = Math.floor(Math.random() * length)
  return random
}

export default class App extends React.Component {
  
  state = {
    ytsource: [
      "https://youtu.be/Ge-aYgB4ADc?t=107",
      "https://www.youtube.com/watch?v=PdYekinl8Jw",
      "https://www.youtube.com/watch?v=3ayQGKaEufM",
      "https://www.youtube.com/watch?v=0nTO4zSEpOs",
      "https://www.youtube.com/watch?v=AWKzr6n0ea0",
      "https://www.youtube.com/watch?v=-IpXdtWfneI",
      "https://www.youtube.com/watch?v=_VXKHlhJzd0",
      "https://www.youtube.com/watch?v=R4B36TMMGp4",
      "https://www.youtube.com/watch?v=CxwJrzEdw1U",
      "https://www.youtube.com/watch?v=bDHObXuNg-I",
    ],
    currentSource :" "
  };
  handleCurrentSource () {
    const random = Math.floor(Math.random() * this.state.ytsource.length);
    const currentSource = this.state.ytsource[random];
    console.log(currentSource);
    this.setState(()=>({
      currentSource
    }));
    return currentSource;
  }
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
            <div className="inner">
              <Expire delay="1000">
                <h1>Hello!</h1>
              </Expire>
              <Expire delay="4000">
                <h1>You can select whatever you want from left menu!</h1>
              </Expire>
              <Expire delay="6000">
                <h1>Enjoy it!</h1>
              </Expire>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

