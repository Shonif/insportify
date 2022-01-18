import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./Select.module.css";

const Select = forwardRef(
  ({ label, options, placeholder, className, ...props }, ref) => {
    const selectClass = classNames({
      [styles.select]: true,
      className: className,
    });

    return (
      <label className={styles.label}>
        {label}
        <select className={selectClass} {...props} ref={ref}>
          <option value="" hidden>
            {placeholder}
          </option>
          {options.map(({ label, ...opt }, index) => (
            <option
              className={styles.option}
              key={index}
              value={label}
              {...opt}
            >
              {label}
            </option>
          ))}
        </select>
      </label>
    );
  }
);

export default Select;
