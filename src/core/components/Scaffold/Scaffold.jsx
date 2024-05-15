/* eslint-disable react/prop-types */

function Scaffold({
  children,
  gap = "1.3rem",
  justifyContent = "flex-start",
  alignItems = "stretch",
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent,
        alignItems,
        gap,
        minHeight: "inherit",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
}

export default Scaffold;
