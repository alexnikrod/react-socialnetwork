import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div>
      <div>Main Content</div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
