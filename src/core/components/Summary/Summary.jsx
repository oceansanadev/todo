/* eslint-disable react/prop-types */
import SummaryWrapper from "../SummaryWrapper/SummaryWrapper";
import kColor from "../../constants/kColor";

function Summary({
  title,
  subtitle1,
  subtitle2,
  themeColor = kColor.primaryMain,
}) {
  const titleStyle = {
    marginBottom: subtitle1 ? "0.3rem" : "0rem",
  };

  const subtitle1Style = {
    fontSize: "0.8rem",
    marginBottom: subtitle2 ? "0.7rem" : "0rem",
  };

  const subtitle2Style = {
    marginTop: "0.7rem",
    fontSize: "0.9rem",
  };

  return (
    <SummaryWrapper backgroundColor={themeColor}>
      {title && <h3 style={titleStyle}>{title}</h3>}
      {subtitle1 && <p style={subtitle1Style}>{subtitle1}</p>}
      {subtitle2 && <p style={subtitle2Style}>{subtitle2}</p>}
    </SummaryWrapper>
  );
}

export default Summary;
