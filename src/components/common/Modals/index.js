import { ModalsStateContext } from "@/libs/context/ModalsContext";
import useModals from "@/libs/hooks/useModals";
import { useContext } from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";

export default function Modals() {
  const openedModals = useContext(ModalsStateContext);
  const { closeModal } = useModals();

  return ReactDOM.createPortal(
    <>
      {openedModals.map((modalInfo, index) => {
        const { Component, props, isOpen } = modalInfo;
        const onClose = () => {
          closeModal(Component);
        };

        return (
          <ReactModal
            className="ModalContent"
            overlayClassName="ModalOverlay"
            key={index}
            isOpen={isOpen}
          >
            <div>
              {props.title}
              <button onClick={onClose}>닫기</button>
            </div>
            <Component {...props} />
          </ReactModal>
        );
      })}
    </>,
    document.body
  );
}
