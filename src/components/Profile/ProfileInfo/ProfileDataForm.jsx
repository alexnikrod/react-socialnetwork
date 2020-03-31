import React from "react";
import { reduxForm } from "redux-form";

import { createField, Input, Textarea } from "../../common/FormControls/FormControls";
import { required } from "../../../utils/validators/validators";
import style from "../../common/FormControls/FormControls.module.scss";

const ProfileDataForm = ({ handleSubmit, error, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className={style.formControl__error}>
          <span>{error}</span>
        </div>
      )}
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>Full Name</b>: {createField("fullName", "Full Name", Input, [required])}
      </div>
      <div>
        <b>About Me</b>:{createField("aboutMe", "About Me", Textarea, [])}
      </div>
      <div>
        {createField("lookingForAJob", "", Input, [], { type: "checkbox" }
      )} Looking for a Job
      </div>
      <div>
        <b>My Professional Skills</b>:{createField("lookingForAJobDescription", "My Skills", Textarea, [])}
      </div>
      <div>
        <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
          return <div key={key}><b>{key}: {createField("contacts." + key, key, Input, [])}</b></div>
        })}
      </div>
    </form>
  );
};

const ProfileReduxForm = reduxForm({
  form: "edit-profile"
})(ProfileDataForm);

export default ProfileReduxForm;
