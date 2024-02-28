import styles from "./waldoFound.module.css";

export default function WaldoFound({ modalStyle, isFound }) {
  if (isFound) {
    return (
      <div className={styles.modalContainer} style={modalStyle}>
        Yay, you found Waldo!
      </div>
    );
  } else {
    return (
      <div className={styles.modalContainer} style={modalStyle}>
        That&apos;s not Waldo, try again Babe.
      </div>
    );
  }
}
