import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { Button } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className={styles.modal}>
      <Button
        m={2}
        ml={"90%"}
        onClick={() => props.onClick()}
        color={"primary.100"}
        bg={"secondary"}
        _hover={{ bg: "red", color: "secondary" }}
        size={"sm"}
      >
        <MdClose />
      </Button>
      <div className={styles.content}> {props.children} </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      ;
      {ReactDOM.createPortal(
        <ModalOverLay onClick={props.onClose}>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
