import React from "react";
import s from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";

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
        <img src={props.profile.photos.large} alt="large" />
      </div>
      <div>Ava+description</div>
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.contacts.github}</div>
    </div>
  );
};

export default ProfileInfo;
