import React from "react";
import ReactDOM from "react-dom";
import style from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <>
        <div className={style.content}>
          <p>{props.message}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={props.onConfirm}>Okey</Button>
        </footer>
      </>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop className={style.backdrop} onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
