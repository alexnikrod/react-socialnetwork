import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div className="App-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
      </div>
    </div>
  );
};

export default App;
