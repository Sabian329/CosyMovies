import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./Theme/theme.js";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
