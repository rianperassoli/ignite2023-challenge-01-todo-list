import plusIcon from "../assets/plus.svg";
import styles from "./AddButton.module.css";

interface AddButtonProps {
  onClick: () => void;
}

export function AddButton({ onClick }: AddButtonProps) {
  return (
    <div className={styles.button} onClick={onClick}>
      Criar <img src={plusIcon} alt="add" />
    </div>
  );
}
