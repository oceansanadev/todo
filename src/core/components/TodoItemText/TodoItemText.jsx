/* eslint-disable react/prop-types */
import kColor from "../../constants/kColor";

function TodoItemText({ themeColor = kColor.greyMain, children, onClick }) {
  const textStyle = {
    color: themeColor,
    fontSize: "0.8rem",
  };

  return (
    <p style={textStyle} onClick={onClick}>
      {children}
    </p>
  );
}

export default TodoItemText;
