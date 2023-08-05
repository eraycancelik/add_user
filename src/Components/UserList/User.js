import React from "react";
import style from "./User.module.css";
import Card from "../UI/Card";
const User = (props) => {
  let genderphoto = "none";
  if (props.gender === "female") {
    genderphoto = "womanPhoto";
  } else if (props.gender === "male") {
    genderphoto = "manPhoto";
  }
  return (
    <Card className={style.soms}>
      <li className={style.component}>
        <div className={style[genderphoto]} />
        <div className={style.som}>
          <div className={style.div}>
            <span>@{props.username}</span>
          </div>
          <div className={style.div}>
            <span>{props.mail}</span>
          </div>
          <div className={style.div}>
            <span>{props.age} years old</span>
          </div>
        </div>
      </li>
    </Card>
  );
};

export default User;
