import { useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import { IoHomeOutline } from "react-icons/io5";
import IconButton from "../IconButton/IconButton";

function Appbar() {
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle}>
      <BackButton onClick={() => navigate(-1)} />
      <IconButton fontSize="1.6rem" onClick={() => navigate("/")}>
        <IoHomeOutline />
      </IconButton>
    </div>
  );
}

export default Appbar;
