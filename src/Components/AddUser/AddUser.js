import React from "react";
import style from "./AddUser.module.css";
import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const mailInputRef = useRef();
  const Initials = () => {
    setAge("");
    setGender("none");
  };
  const [enteredAge, setAge] = useState("");
  const [selectedGender, setGender] = useState("none");

  const [error, setError] = useState();

  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const genderHandler = (e) => {
    setGender(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredMail = mailInputRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredMail.trim().length === 0 ||
      selectedGender === "none"
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid input",
      });
    } else if (enteredAge <= 0) {
      setError({
        title: "Invalid age",
        message: "Age must be greater than 0",
      });
    } else {
      const userData = {
        username: enteredUsername,
        mail: enteredMail,
        age: enteredAge,
        gender: selectedGender,
        id: Math.random().toString(),
      };
      props.onAddUser(userData);
      nameInputRef.current.value = "";
      mailInputRef.current.value = "";
      Initials();
    }
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={style.cardMargin}>
        <form onSubmit={submitHandler} className={style.addUser}>
          <div className={style.heder}>
            <div className={style.userIcon}></div>
            <h2>Add New User</h2>
          </div>

          <div className={style.dolo}>
            <div className={style.inputArea}>
              <div className={style.heder}>
                <div className={style.username}></div>
                <input
                  placeholder="Username"
                  id="username"
                  type="text"
                  ref={nameInputRef}
                />
              </div>
            </div>

            <div className={style.inputArea}>
              <div className={style.heder}>
                <div className={style.mail}></div>
                <input
                  placeholder="Mail address"
                  id="mail"
                  type="email"
                  ref={mailInputRef}
                />
              </div>
            </div>

            <div className={style.inputArea2}>
              <div className={style.inp}>
                <div className={style.age}></div>
                <input
                  onChange={ageHandler}
                  value={enteredAge}
                  placeholder="Age"
                  id="age"
                  type="number"
                />
              </div>
              <div className={style.inp2}>
                <div className={style.gender}></div>
                <select value={selectedGender} onChange={genderHandler}>
                  <option value="none">--Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className={style.butonSide}>
              <Button type={"submit"}>Add New User</Button>
            </div>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
