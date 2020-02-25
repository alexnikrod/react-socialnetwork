import React from "react";
import s from "./Post.module.scss";

const Post = props => {
  return (
    <div className={s.item}>
      <img 
        src="https://i.ya-webdesign.com/images/funny-png-avatar-2.png"
        alt="ava"
      />
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
