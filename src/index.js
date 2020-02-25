import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let renderEntireTree = state => {
  ReactDOM.render(
    <App
      state={state}
      dipatch={store.dispatch.bind(store)}
      store={store}
    />,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
