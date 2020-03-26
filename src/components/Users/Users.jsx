import React from "react";

import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  isDisabled,
  unfollowThunk,
  followThunk
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map(u => (
          <User
            user={u}
            key={u.id}
            isDisabled={isDisabled}
            unfollowThunk={unfollowThunk}
            followThunk={followThunk}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
