import React from "react";
import styles from "./styles/cow.module.css";

export default function Cow({
  setUpdateCowModalOpen,
  setDeleteCowModalOpen,
  animal,
}) {
  return (
    <tr>
      <td>{animal._id.toUpperCase()}</td>
      <td>{animal.animal_type.toUpperCase()}</td>
      <td>{animal.animal_weight}</td>
      <td>{animal.paddock_name.toUpperCase()}</td>
      <td>{animal.device_type.toUpperCase()}</td>
      <td>{animal.device_number.toUpperCase()}</td>
      <td>
        <button
          onClick={() => setUpdateCowModalOpen({ true: true, cow: animal })}
          className={styles.edit}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          onClick={() => setDeleteCowModalOpen({ true: true, _id: animal._id })}
          className={styles.trash}
        >
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}
