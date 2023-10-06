import styles from "./Input.module.css";

export function Input({ ...props }) {
  return <input type="text" className={styles.input} {...props} />;
}
