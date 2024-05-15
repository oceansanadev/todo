/* eslint-disable react/prop-types */

import kColor from "../../../core/constants/kColor";

function Header({ imageUrl, title, subtitle }) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const textContainerStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  };

  const titleStyle = { color: kColor.primaryMain };

  const subtitleStyle = { fontSize: "0.9rem", color: kColor.greyMain };

  const imageStyle = {
    width: "4rem",
    height: "4rem",
    objectFit: "cover",
    borderRadius: "50%",
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={subtitleStyle}>{subtitle}</p>
      </div>
      <img src={imageUrl} style={imageStyle} />
    </div>
  );
}

export default Header;
