import React from "react";
import { Route } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import LoginPage from "./components/Login/Login";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <NavBar />
      <div className="App-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <LoginPage />} />
      </div>
    </div>
  );
};

export default App;
