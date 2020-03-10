import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Users.module.scss";
import userPhoto from "../../assets/images/bill.jpg";
import { usersAPI } from "../../api/api";

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let pagesToDraw = pages.filter(
    page => page < props.currentPage + 5 && page > props.currentPage - 5
  );

  return (
    <div>
      <div>
        {pagesToDraw.map(p => (
          <span
            key={p.id}
            className={props.currentPage === p ? styles.selectedPage : null}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="User"
                  className={styles.usersPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    usersAPI.unfollowUsers(u.id)
                      .then(data => {
                        if (data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    usersAPI.followUsers(u.id)
                      .then(data => {
                        if (data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
