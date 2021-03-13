import { slide as Menu } from "react-burger-menu";
import React from "react";
import "./styles/BurgerMenu.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Disqus from "disqus-react";

const BurgerMenu = (props) => {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  const disqusShortname = "your-site-shortname";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "article-id",
    title: "Title of Your Article",
  };

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = () => () => {
    setOpen(true);
    setScroll("paper");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Menu right>
      <h1 style={{ fontSize: "35px", textAlign: "center" }}>
        Welcome to<br></br>Walk & Discover
      </h1>
      <a id="home" className="menu-item" href="/">
        🔀 Random
      </a>
      <a id="snow" className="menu-item" href="/snow">
        ❄️ Walking in Snow
      </a>
      <a id="rain" className="menu-item" href="/rainy">
        🌧️ Walking in Rain
      </a>
      <a id="rain" className="menu-item" href="/forest">
        🌲 Walking in Forest
      </a>
      <a id="train" className="menu-item" href="/train">
        🚆 Train Ride
      </a>
      <a
        id="videoSource"
        href={props.videoSource}
        rel="noreferrer"
        target="_blank"
      >
        ℹ️ Video Source
      </a>
      <a
        id="social"
        href="https://www.instagram.com/smtsarial"
        rel="noreferrer"
        target="_blank"
      >
        🔥 Follow Me
      </a>

      <div>
        <Button className="button-comment" onClick={handleClickOpen()}>❤️ Comments ❤️</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Walk & Discover</DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <p className="warning">
              If you are not seeing anything please refresh your page. For more
              information{" "}
              <a
              rel="noreferrer"
              target="_blank"
                className="click-here"
                href="https://help.disqus.com/en/articles/1717062-why-isn-t-the-comment-box-loading"
              >
                click here.
              </a>
            </p>
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </DialogContent>
        </Dialog>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
