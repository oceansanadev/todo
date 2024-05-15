import { Outlet } from "react-router-dom";
import kColor from "../../constants/kColor";

function Layout() {
  const container = {
    maxWidth: "430px",
    minHeight: "600px",
    margin: "auto",
    boxShadow: `0 0 10px 1px ${kColor.greyLight}`,
    padding: "1.2rem 1rem",
    borderRadius: "1rem",
  };

  return (
    <div style={container}>
      <Outlet />
    </div>
  );
}

export default Layout;
