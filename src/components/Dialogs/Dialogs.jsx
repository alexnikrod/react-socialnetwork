import React from "react";
import { Field, reduxForm } from "redux-form";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Textarea } from "../common/FormControls/FormControls";

import s from "./Dialogs.module.scss";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const Dialogs = props => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));

  const onSubmit = values => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newMessageBody"}
          component={Textarea}
          placeholder="Enter your message"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm);

export default Dialogs;
