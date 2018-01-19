import "./normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React, {
    exclude: ["ReactTooltip", "Handle"]
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
