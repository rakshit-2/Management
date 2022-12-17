import React from "react";
import styles from "./atom.module.css";
export const InputField = (props) => {
  const { type, name, placeholder } = props;
  return (
    <div>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputField;
