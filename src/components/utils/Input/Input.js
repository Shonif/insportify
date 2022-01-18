import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./Input.module.css";

const Input = forwardRef(
  ({ label, classNamesLabel, className, ...props }, ref) => {
    const labelClass = classNames({
      [styles.label]: true,
      [classNamesLabel]: classNamesLabel,
    });

    const inputClass = classNames({
      [styles.input]: true,
      [className]: classNames,
    });

    return (
      <label className={labelClass}>
        {label}
        <input className={inputClass} {...props} ref={ref} />
      </label>
    );
  }
);

export default Input;
