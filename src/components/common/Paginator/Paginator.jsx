import React from "react";
import styles from "./Paginator.module.scss";

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let pagesToDraw = pages.filter(
    page => page < currentPage + 5 && page > currentPage - 5
  );

  return (
    <div>
      {pagesToDraw.map(p => (
        <span
          key={p.id}
          className={currentPage === p ? styles.selectedPage : null}
          onClick={() => {
            onPageChanged(p);
          }}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
