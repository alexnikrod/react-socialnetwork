import React, { useState } from "react";

import s from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/bill.jpg";
import ProfileDataForm from "./ProfileDataForm";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = formData => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          className={s.userPhoto}
          src={profile.photos.large || userPhoto}
          alt="large"
        />
        <div>
          {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        </div>
        <div>
          <b>Status</b>:
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
      {editMode ? (
        <ProfileDataForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />
      )}
    </div>
  );
};

const ProfileData = ({goToEditMode, profile, isOwner}) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
    <div>
        <b>Full Name</b>: {profile.fullName}
      </div>
      <div>
        <b>About Me</b>:{profile.aboutMe}
      </div>
      <div><b>Looking for a Job</b>: {profile.lookingForAJob ? "yes" : "no"} 
      </div>
      <div>
        <b>My Professional Skills</b>:{profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
          return <div key={key}>{key}: {profile.contacts[key]}</div>
        })}
      </div>
    </div>
  </div>
}

export default ProfileInfo;
