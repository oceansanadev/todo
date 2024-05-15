/* eslint-disable react/prop-types */
import kColor from "../../constants/kColor";

function Divider({ color = kColor.primaryMain }) {
  const dividerStyle = {
    border: `0.1rem solid ${color}`,
  };

  return <div style={dividerStyle}></div>;
}

export default Divider;
