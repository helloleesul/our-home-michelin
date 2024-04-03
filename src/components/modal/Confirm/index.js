import Button from "../../@common/Button";

export default function Confirm({ message, onClick, onClose }) {
  return (
    <div>
      {message}
      <Button
        value={"확인"}
        onClick={() => {
          onClick();
          return onClose();
        }}
      />
      <Button value={"취소"} onClick={onClose} />
    </div>
  );
}
