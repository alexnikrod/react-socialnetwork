import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Users.module.scss";
import userPhoto from "../../assets/images/bill.jpg";

let User = ({ user, isDisabled, unfollowThunk, followThunk }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="User"
              className={styles.usersPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={isDisabled.some(id => id === user.id)}
              onClick={() => {
                unfollowThunk(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={isDisabled.some(id => id === user.id)}
              onClick={() => {
                followThunk(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
