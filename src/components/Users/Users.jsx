import React from "react";
import styles from "./Users.module.scss";

let Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        firstName: "Alex",
        photoUrl: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
        followed: true,
        status: "Feel good",
        location: { city: "Togliatty", country: "Russia" }
      },
      {
        id: 2,
        firstName: "Ivan",
        photoUrl: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
        followed: false,
        status: "Great day",
        location: { city: "New York", country: "USA" }
      },
      {
        id: 3,
        firstName: "Mike",
        photoUrl: "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg",
        followed: true,
        status: "Cool",
        location: { city: "London", country: "UK" }
      }
    ])
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photoUrl}
                alt="PhotoAva"
                className={styles.usersPhoto}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.firstName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
