import React from "react";
import { connect } from "react-redux";

import {
  followThunk,
  unfollowThunk,
  getUsers
} from "../../redux/users-reducer";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          onPageChanged={this.onPageChanged}
          isDisabled={this.props.isDisabled}
          toggleIsDisabled={this.props.toggleIsDisabled}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isDisabled: state.usersPage.isDisabled,
    isAuth: state.auth.isAuth
  };
};

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
  followThunk,
  unfollowThunk,
  getUsers
})(AuthRedirectComponent);
