import React from "react";
import User from "./User";
import style from "./UserList.module.css";
const UserList = (props) => {
  return (
    <ul className={style.list}>
      {props.items.map((user) => (
        <User
          key={user.id}
          username={user.username}
          mail={user.mail}
          age={user.age}
          gender={user.gender}
        />
      ))}
    </ul>
  );
};
export default UserList;
