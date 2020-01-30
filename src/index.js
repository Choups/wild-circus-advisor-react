import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import YoutubeBackground from "react-youtube-background";
import { RemoveScrollBar } from "react-remove-scroll-bar";

ReactDOM.render(
  <YoutubeBackground
    // videoId={"x-1-gLv3aWs"}
    overlay={"rgba(0,0,0,0.5)"}
    className="fullHeight"
  >
    <RemoveScrollBar />
    <App />
  </YoutubeBackground>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
