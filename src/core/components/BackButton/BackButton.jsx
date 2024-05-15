/* eslint-disable react/prop-types */
import { FiArrowLeftCircle } from "react-icons/fi";
import IconButton from "../IconButton/IconButton";

function BackButton({ onClick }) {
  const textStyle = {
    fontSize: "0.8em",
    fontWeight: "600",
  };
  return (
    <>
      <IconButton onClick={onClick} fontSize="1.6rem">
        <FiArrowLeftCircle />
        <p style={textStyle}>Back</p>
      </IconButton>
    </>
  );
}

export default BackButton;
