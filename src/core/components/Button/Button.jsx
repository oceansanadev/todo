/* eslint-disable react/prop-types */
import kColor from "../../constants/kColor";

// variant filled or outlined

function Button({
  children,
  variant = "filled",
  themeColor = kColor.primaryMain,
  onClick,
}) {
  let buttonStyle = {
    outline: "none",
    padding: "1rem 2rem",
    borderRadius: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
  };

  if (variant === "filled") {
    buttonStyle = {
      ...buttonStyle,
      backgroundColor: themeColor,
      border: "none",
      color: "white",
    };
  } else {
    buttonStyle = {
      ...buttonStyle,
      border: `0.1rem solid ${themeColor}`,
      background: "none",
      color: themeColor,
    };
  }

  return (
    <button onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
