/* eslint-disable react/prop-types */
import kColor from "../../../core/constants/kColor";
import Divider from "../../../core/components/Divider/Divider";
import Shadow from "../../../core/components/Shadow/Shadow";
import Card from "../../../core/components/Card/Card";
import { useNavigate } from "react-router-dom";

function CategoryItem({
  label,
  totalTask,
  themeColor = kColor.primaryMain,
  path,
}) {
  const navigate = useNavigate();

  const labelStyle = {
    padding: "1rem",
    color: themeColor,
    fontWeight: "bold",
  };

  const totalTaskStyle = {
    padding: "1rem",
    fontSize: "1.9rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    color: themeColor,
  };

  const tagStyle = {
    color: kColor.greyMain,
    fontWeight: "bold",
    fontSize: "1rem",
  };

  return (
    <Shadow borderRadius="1rem" onClick={() => navigate(path)}>
      <Card themeColor={themeColor}>
        <p style={labelStyle}>{label}</p>
        <Divider color={themeColor} />
        <p style={totalTaskStyle}>
          {totalTask} <span style={tagStyle}>Task</span>
        </p>
      </Card>
    </Shadow>
  );
}

export default CategoryItem;
