import React from "react";
import { connect } from "react-redux";

import {
  followThunk,
  unfollowThunk,
  getUsers
} from "../../redux/users-reducer";

import {
  getUsersSelector,
  getPageSize,
  getTotalUsersCount,
  getcurrentPage,
  getIsFetching,
  getIsDisabled
} from "../../redux/users-selectors";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = pageNumber => {
    const { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);
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
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getcurrentPage(state),
    isFetching: getIsFetching(state),
    isDisabled: getIsDisabled(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    followThunk,
    unfollowThunk,
    getUsers
  }),
  withAuthRedirect
)(UsersContainer);
