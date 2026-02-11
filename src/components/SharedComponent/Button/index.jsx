import styles from "./style.module.scss";
import classNames from "classnames";

export const SharedButton = ({ children, className = "" }) => {
  return <button className={classNames(styles.wrapper, className)}>{children}</button>;
};
