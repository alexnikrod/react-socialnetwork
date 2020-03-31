import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { withSuspense } from "./hoc/withSuspense";

import Preloader from "./components/common/Preloader/Preloader";
import "./App.scss";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="App">
        <HeaderContainer />
        <NavBar />
        <div className="App-content">
          <Switch>
          {/* <Route exact path="/" render={() => <Redirect to={"/profile"} />} /> */}

            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);
