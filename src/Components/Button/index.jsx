// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./button.module.css";

// eslint-disable-next-line react/prop-types
const Button = ({ variant = "primary", size = "medium", children }) => {
  return (
    <button
      // data-fullwidth={fullWidth}
      data-size={size}
      data-variant={variant}
      className={styles.btn}
    >
      {children}
    </button>
  );
};

export default Button;
