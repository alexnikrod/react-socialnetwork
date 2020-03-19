import React from "react";
import { Field, reduxForm } from "redux-form";

import s from "./MyPosts.module.scss";
import Posts from "./Posts/Post";

const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Posts message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  const onAddPost = values => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"newPostText"}
          component={"textarea"}
          placeholder={"Enter your post"}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: "profileAddPostForm"
})(AddPostForm);

export default MyPosts;
