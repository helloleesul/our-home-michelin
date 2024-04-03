import { ModalsStateContext } from "@/libs/context/ModalsContext";
import useModals from "@/libs/hooks/useModals";
import { useContext } from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import * as S from "./style";
import Button from "../../@common/Button";

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
            style={{ content: { width: `${props.size}%` } }}
            onAfterClose={props.onAfterClose}
            key={index}
            isOpen={isOpen}
          >
            <S.Header>
              {props.title}
              <Button
                type={"button"}
                onClick={onClose}
                value={"✕"}
                width={"30"}
              />
            </S.Header>
            <S.Content>
              <Component {...props} onClose={onClose} />
            </S.Content>
          </ReactModal>
        );
      })}
    </>,
    document.body
  );
}
