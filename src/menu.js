import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./styles/BurgerMenu.css";



const BurgerMenu = (props) => {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu right >
      <h1 style ={{fontSize:"35px",textAlign:"center"}}>Welcome to<br></br>Walk & Discover</h1>
      <a id="home" className="menu-item" href="/">Random</a>
      <a id="snow" className="menu-item" href="/snow">Walking in Snow</a>
      <a id="rain" className="menu-item" href="/rainy">Walking in Rain</a>
      <a id="rain" className="menu-item" href="/forest">Walking in Forest</a>
      <a id="train" className="menu-item" href="/train">- Train Ride -</a>
      <a id= "videoSource" href={props.videoSource} target="_blank">Video Sources</a>
      <a id= "social" href="https://www.instagram.com/smtsarial" target="_blank">Follow Me!</a>
    </Menu>
  );
};

export default BurgerMenu;
