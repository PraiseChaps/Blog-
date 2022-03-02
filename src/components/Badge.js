import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";

const Badge = ({ children, styleInfo }) => {
  const colorKey = {
    JavaScript: "primary",
    PHP: "success",
    ReactJS: "danger",
    Python: "warning",
    Css: "info",
    Angular: "dark",
  };
  return (
    <h5 style={styleInfo}>
      <MDBBadge color={colorKey[children]}>{children}</MDBBadge>
    </h5>
  );
};

export default Badge;
