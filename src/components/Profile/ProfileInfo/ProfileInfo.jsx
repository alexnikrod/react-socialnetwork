import React from "react";

import s from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/bill.jpg";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img className={s.userPhoto}
          src={
            profile.photos.large != null
              ? profile.photos.large
              : userPhoto
          }
          alt="large"
        />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div>Ava+description</div>
      <div>{profile.fullName}</div>
      <div>{profile.status}</div>
    </div>
  );
};

export default ProfileInfo;
