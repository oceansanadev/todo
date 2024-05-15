/* eslint-disable react/prop-types */
function Row({
  justifyContent = "flex-start",
  alignItems = "stretch",
  gap = "0rem",
  children,
  fullWidth = false,
}) {
  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent,
    alignItems,
    gap,
    width: fullWidth ? "100%" : "auto",
  };

  return <div style={rowStyle}>{children}</div>;
}

export default Row;
