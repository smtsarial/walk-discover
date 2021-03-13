import "../styles/comments.css";
import React from "react";
import BurgerMenu from "../menu";

export default class Comments extends React.Component {
  render() {
    return (
      <div className="comment-page">
        <h1 className="title-comment">Walk & Discover</h1>
        <div id="disqus_thread"></div>
        <a id="home" className="go-menu" href="/">GO BACK</a>
      </div>
    );
  }
}
