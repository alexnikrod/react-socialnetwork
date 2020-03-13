import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Profile from "./Profile";
import { setUserProfileThunk } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfileThunk(userId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = state => ({ profile: state.profilePage.profile, isAuth: state.auth.isAuth });

let DataWithRouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfileThunk })(
  DataWithRouterComponent
);
