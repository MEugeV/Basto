import React from "react";
import styles from "./styles/createCowButton.module.css";

export default function CreateCowButton({ setCreateCowModalOpen }) {
  return (
    <button
      onClick={() => {
        setCreateCowModalOpen(true);
      }}
      className={styles.newCow}
    >
      Nuevo Animal
    </button>
  );
}
