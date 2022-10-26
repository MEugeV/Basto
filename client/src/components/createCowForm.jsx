import React, { useState } from "react";
import styles from "./styles/form.module.css";
import validate from "../services/validateForm.js";

export default function CreateCowForm({
  handleSubmitCreateCow,
  cattle,
  setCreateCowModalOpen,
}) {
  const [error, setError] = useState({});
  const [requiredMissign, setRequiredMissign] = useState(false);
  let initialInput = {
    _id: "",
    animal_type: "",
    animal_weight: "",
    paddock_name: "",
    device_type: "",
    device_number: "",
  };
  const [input, setInput] = useState(initialInput);

  function handleChange(e) {
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
    setError(validate({ ...input, [e.target.name]: e.target.value }, cattle));
    document.querySelector("#submit").disabled = false;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.entries(error).length >= 1) return setRequiredMissign(true);
    await handleSubmitCreateCow(e, input);
    setInput(initialInput);
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalButon}>
        <p>Nuevo Animal</p>
        <button
          onClick={() => {
            setCreateCowModalOpen(false);
            setError({});
            setInput(initialInput);
          }}
        >
          X
        </button>
      </div>
      <div className={styles.formBox}>
        <p className={styles.required}>* Campos requeridos</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label to="_id">ID Senasa</label>
            <br></br>
            <input
              type="text"
              name="_id"
              value={input._id}
              onChange={handleChange}
              placeholder="Registro en Senasa  (16 caracteres) *"
            />
            <p className={styles.error}>{error._id && error._id}</p>
          </div>
          <div>
            <label to="animal_type">Tipo Animal</label>
            <br></br>
            <select
              name="animal_type"
              onChange={handleChange}
              defaultValue="default"
            >
              <option
                className={styles.defaultSelection}
                disabled="disabled"
                value="default"
              >
                Seleccione una opción *
              </option>
              <option value="Novillo">NOVILLO</option>
              <option value="Toro">TORO</option>
              <option value="Vaquillona">VAQUILLONA</option>
            </select>
          </div>
          <div>
            <label to="animal_weight">Peso Animal</label>
            <br></br>
            <input
              type="text"
              name="animal_weight"
              value={input.animal_weight}
              onChange={handleChange}
              placeholder="0"
            />
            <p className={styles.error}>
              {error.animal_weight && error.animal_weight}
            </p>
          </div>
          <div>
            <label to="paddock_name">Nombre de Potrero</label>
            <br></br>
            <input
              type="text"
              name="paddock_name"
              value={input.paddock_name}
              onChange={handleChange}
              placeholder="Nombre del Potrero *"
            />
            <p className={styles.error}>
              {error.paddock_name && error.paddock_name}
            </p>
          </div>
          <div>
            <label to="device_type">Tipo de Dispositivo</label>
            <br></br>
            <select
              name="device_type"
              onChange={handleChange}
              defaultValue="default"
            >
              <option disabled="disabled" value="default">
                Seleccione una opción *
              </option>
              <option value="COLLAR">COLLAR</option>
              <option value="CARAVANA">CARAVANA</option>
            </select>
          </div>
          <div>
            <label to="device_number">Número de Dispositivo</label>
            <br></br>
            <input
              type="text"
              name="device_number"
              value={input.device_number}
              onChange={handleChange}
              placeholder="Número de Dispositivo  (8 caracteres) *"
            />
            <p className={styles.error}>
              {error.device_number && error.device_number}
            </p>
          </div>
          <br></br>
          <p className={styles.error}>{requiredMissign && error.required}</p>
          <input
            id="submit"
            className={styles.submit}
            type="submit"
            value="Enviar"
            disabled={true}
          />
        </form>
      </div>
    </div>
  );
}
