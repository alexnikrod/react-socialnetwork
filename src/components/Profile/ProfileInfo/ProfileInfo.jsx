import React from "react";

import s from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/bill.jpg";

import ProfileStatus from "./ProfileStatus";

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className="content__img"
          alt="man"
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      </div>
      <div className={s.descriptionBlock}>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
          alt="large"
        />
        <ProfileStatus status={"Hello dear friend"} />
      </div>
      <div>Ava+description</div>
      <div>{props.profile.fullName}</div>
      <div>{props.profile.status}</div>
    </div>
  );
};

export default ProfileInfo;
