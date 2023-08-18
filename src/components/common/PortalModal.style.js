import styled from "@emotion/styled";

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Box = styled.div(({ size }) => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0px 7px 18px 0px rgba(0, 0, 0, 0.3)",
  width:
    size === "sm"
      ? "20%"
      : size === "md"
      ? "40%"
      : size === "lg"
      ? "60%"
      : "20%",
}));
