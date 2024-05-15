/* eslint-disable react/prop-types */
import kColor from "../../constants/kColor";

function SummaryWrapper({ children, backgroundColor = kColor.primaryMain }) {
  const containerStyle = {
    backgroundColor,
    borderRadius: "1rem",
    padding: "1rem",
    color: "white",
  };

  return <div style={containerStyle}>{children}</div>;
}

export default SummaryWrapper;
