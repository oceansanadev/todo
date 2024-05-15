/* eslint-disable react/prop-types */
import kColor from "../../constants/kColor";

function IconButton({
  onClick,
  themeColor = kColor.primaryMain,
  fontSize = "1rem",
  gap = "0.5rem",
  children,
}) {
  const buttonStyle = {
    color: themeColor,
    fontSize,
    display: "flex",
    alignItems: "center",
    gap,
    outline: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
  };
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default IconButton;
