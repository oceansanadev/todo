/* eslint-disable react/prop-types */
function Column({
  justifyContent = "flex-start",
  alignItems = "stretch",
  gap = "0rem",
  children,
  fullHeight = false,
  style,
}) {
  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent,
    alignItems,
    gap,
    height: fullHeight ? "100%" : "auto",
    ...style,
  };

  return <div style={columnStyle}>{children}</div>;
}

export default Column;
