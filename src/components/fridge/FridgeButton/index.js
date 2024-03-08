export default function FridgeButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "5%",
        left: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #F7411F",
        borderRadius: 1000,
        backgroundColor: "white",
        width: 50,
        height: 50,
        padding: 20,
        boxSizing: "content-box",
      }}
    >
      <span style={{ fontSize: 40 }}>🗄️</span>
    </button>
  );
}
