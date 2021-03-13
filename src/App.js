import "./styles/App.css";
import BurgerMenu from "./menu";
import React, { useEffect, useState } from "react";

 const state ={
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
      "https://www.youtube.com/watch?v=JDafTTIohHQ",
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
      "https://www.youtube.com/watch?v=tl8v5f6-zsc",
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
    ]
  };

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
              <Expire delay="7000">
                <h1>Hello!</h1>
              </Expire>
              <Expire delay="9000">
                <h1>You can select whatever you want from left menu!</h1>
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
