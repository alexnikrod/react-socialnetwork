import React from "react";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className={s.header}>
      <h1>
        <img
          src="https://images.unsplash.com/photo-1530707114297-4af4b3cafe16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
          alt="logo"
        />
        Social Network
        <div className={s.loginBlock}>
          {props.isAuth ? (
            `Hello, ${props.login}`
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </h1>
    </div>
  );
};

export default Header;
