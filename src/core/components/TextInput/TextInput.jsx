/* eslint-disable react/prop-types */
import kColor from "../../constants/kColor";

function TextInput({ type = "text", placeholder }) {
  const inputStyle = {
    outline: "none",
    border: `0.1rem solid ${kColor.greyLight}`,
    fontSize: "1rem",
    padding: "0.6rem 0.5rem",
    borderRadius: "0.5rem",
    color: kColor.greyLight,
    boxShadow: `0 0 10px 1px ${kColor.greyLight}`,
  };

  return <input type={type} style={inputStyle} placeholder={placeholder} />;
}

export default TextInput;
