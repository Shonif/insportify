import classNames from "classnames";

import styles from "./Button.module.css";

const Button = ({ children, className, ...props }) => {
  const btnClassName = classNames({
    [styles.button]: true,
    [className]: className,
  });

  return (
    <button className={btnClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
