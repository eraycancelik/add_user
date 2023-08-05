import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header>
      <div className={style.marka}>
        <div className={style.icon}></div>
        <h2>erayc.works</h2>
      </div>
      <div className={style.dicti}>
        <h2>Dictionary</h2>
      </div>
    </header>
  );
};

export default Header;
