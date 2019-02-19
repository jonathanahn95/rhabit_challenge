import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: {
        id: window.currentUser.id
      },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    };
  } else {
    preloadedState = {};
  }
  delete window.currentUser;

  const root = document.getElementById("root");
  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store} />, root);
});
