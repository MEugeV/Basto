import React from "react";
import styles from "./styles/deleteCowModal.module.css";

export default function DeleteCowModal({
  deleteCow,
  DeleteCowModalOpen,
  setDeleteCowModalOpen,
}) {
  return (
    <div className={styles.modal}>
      {" "}
      <p> ¿ Confirma que desea eliminar el animal</p>
      <p> ID SENASA: {DeleteCowModalOpen._id.toUpperCase()} ?</p>{" "}
      <div className={styles.buttonsBox}>
        <button
          className={styles.delete}
          onClick={() => setDeleteCowModalOpen(false)}
        >
          No
        </button>{" "}
        <button
          className={styles.delete}
          onClick={() => {
            deleteCow(DeleteCowModalOpen._id);
          }}
        >
          Si
        </button>{" "}
      </div>
    </div>
  );
}
