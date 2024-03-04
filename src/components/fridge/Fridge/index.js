import { createPortal } from "react-dom";

export default function Fridge({ onClose }) {
  return createPortal(
    <div>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          닫기
        </button>
        Fridge
      </div>
    </div>,
    document.getElementById("root")
  );
}
