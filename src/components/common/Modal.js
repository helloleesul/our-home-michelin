import React from "react";
import { createPortal } from "react-dom";
import { ModalContainer, ModalBg, ModalBox } from "./Modal.style";

function Modal({ children, handleShowModal }) {
  return (
    <>
      {handleShowModal &&
        createPortal(
          <ModalBg>
            <ModalContainer>
              <ModalBox>{children}</ModalBox>
            </ModalContainer>
          </ModalBg>,
          document.body
        )}
    </>
  );
}

export default Modal;
