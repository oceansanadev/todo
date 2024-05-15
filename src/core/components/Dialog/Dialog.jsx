/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const Dialog = forwardRef(function Dialog({ children, style, onClose }, ref) {
  const dialogStyle = {
    outline: "none",
    border: "none",
    borderRadius: "1rem",
    padding: "2rem 3rem",
    margin: "3rem auto 0",
    ...style,
  };

  const closeDialog = (e) => {
    if (e.target === e.currentTarget) {
      console.log("inside");
      onClose?.();
    }
  };

  return (
    <dialog ref={ref} style={dialogStyle} onClick={closeDialog}>
      {children}
    </dialog>
  );
});

export default Dialog;
