import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";
import { setUserProfile } from "../../redux/profile-reducer";
import { usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    usersAPI.getUserProfile(userId).then(data => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = state => ({ profile: state.profilePage.profile });

let DataWithRouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  DataWithRouterComponent
);
