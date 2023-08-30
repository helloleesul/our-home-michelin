import React from "react";
import Loading from "../../src/assets/img/loading.svg";

function CustomLoading({ loading }) {
  const opacity = loading ? 1 : 0; // loading이 true면 1, false면 0
  const pointerEvents = loading ? "auto" : "none";

  return (
    <div
      className="loading"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(255,255,255,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: pointerEvents,
        opacity: opacity, // opacity 값에 변수 적용
        transition: "0.5s",
        zIndex: 100,
      }}
    >
      <img src={Loading} alt="" />
    </div>
  );
}

export default CustomLoading;
