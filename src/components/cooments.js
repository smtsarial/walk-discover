import "../styles/comments.css";
import React from "react";


export default class Comments extends React.Component {
  render() {
    return (
      <div className="comment-page">
        <h1 className="title-comment">Walk & Discover</h1>
        <p className="warning">If you are not seeing anything please refresh your page. For more information <a className="click-here" href="https://help.disqus.com/en/articles/1717062-why-isn-t-the-comment-box-loading">click here.</a></p>
        <div id="disqus_thread">
        </div>
        <a id="home" className="go-menu" href="/">GO BACK</a>
      </div>
    );
  }
}
