import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import "./App.scss";

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className="App-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                store={props.store}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dipatch={props.dipatch}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
