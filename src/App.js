import React, { useState } from "react";
import style from "./App.module.css";
import AddUser from "./Components/AddUser/AddUser";
import UserList from "./Components/UserList/UserList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
const App = () => {
  const Users = [];
  const [users, setUsers] = useState(Users);
  const addUserHandler = (userData) => {
    setUsers((prevUsers) => {
      return [...prevUsers, userData];
    });
  };
  return (
    <div className={style.App}>
      <Header />
      <AddUser onAddUser={addUserHandler} />
      <UserList items={users} />
      <Footer />
    </div>
  );
};

export default App;
