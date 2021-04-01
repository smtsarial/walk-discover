import "../styles/comments.css";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Disqus from "disqus-react";

/*export default class Comments extends React.Component {
   const disqusShortname = "your-site-shortname";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "article-id",
    title: "Title of Your Article",
  };
  render() {
    return (
      <div className="content">
        <div className="inner">
        <div className="comment-page">
          <h1 className="title-comment">Walk & Discover</h1>
          <p className="warning">
            If you are not seeing anything please refresh your page. For more
            information{" "}
            <a
              className="click-here"
              href="https://help.disqus.com/en/articles/1717062-why-isn-t-the-comment-box-loading"
            >
              click here.
            </a>
          </p>
          <div id="disqus_thread"></div>
          <a id="home" className="go-menu" href="/">
            GO BACK
          </a>
        </div>
      </div></div>
    );
      }
}*/

export default function Comments() {
  const disqusShortname = "your-site-shortname";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "article-id",
    title: "Title of Your Article",
  };

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
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
    <div>
        <Button onClick={handleClickOpen("paper")}>scroll=paper</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Walk & Discover
          
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <p className="warning">
            If you are not seeing anything please refresh your page. For more
            information{" "}
            <a
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
  );
}
