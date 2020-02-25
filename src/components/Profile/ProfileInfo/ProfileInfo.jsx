import React from "react";
import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
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
        Ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;
