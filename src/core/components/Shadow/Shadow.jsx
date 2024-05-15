/* eslint-disable react/prop-types */
import kColor from "../../constants/kColor";

function Shadow({ children, onClick, borderRadius = "1rem", style }) {
  const shadowStyle = {
    boxShadow: `0 0 10px 1px ${kColor.greyLight}`,
    borderRadius,
    ...style,
  };

  return (
    <div style={shadowStyle} onClick={onClick}>
      {children}
    </div>
  );
}

export default Shadow;
