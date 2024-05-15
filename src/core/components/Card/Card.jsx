/* eslint-disable react/prop-types */
import Shadow from "../Shadow/Shadow";
import kColor from "../../constants/kColor";

function Card({
  children,
  themeColor = kColor.primaryMain,
  padding = "0rem",
  onClick,
}) {
  const containerStyle = {
    boxShadow: `-0.3rem 0 ${themeColor}`,
    borderRadius: "1rem",
    cursor: "pointer",
    padding,
  };

  return (
    <Shadow>
      <div style={containerStyle} onClick={onClick}>
        {children}
      </div>
    </Shadow>
  );
}

export default Card;
