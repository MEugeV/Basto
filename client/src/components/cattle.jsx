import React from "react";
import styles from "../components/styles/cattle.module.css";
import Cow from "./cow";
import CreateCowButton from "./createCowButton";

export default function Cattle({
  filteredCattle,
  page,
  cowsPerPage,
  setUpdateCowModalOpen,
  setDeleteCowModalOpen,
  setCreateCowModalOpen,
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID SENASA</th>
          <th scope="col">Tipo de Animal</th>
          <th scope="col">Peso Animal</th>
          <th scope="col">Nombre de Potrero</th>
          <th scope="col">Tipo de dispositivo</th>
          <th scope="col">Número de dispositivo</th>
          <th className={styles.actions} scope="col">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredCattle?.length > 0 ? (
          filteredCattle
            ?.slice((page - 1) * cowsPerPage, page * cowsPerPage)
            .map((animal) => (
              <Cow
                key={animal._id}
                setUpdateCowModalOpen={setUpdateCowModalOpen}
                setDeleteCowModalOpen={setDeleteCowModalOpen}
                animal={animal}
              ></Cow>
            ))
        ) : (
          <tr>
            <td>
              <div className={styles.emptyTable}>
                No hay elementos disponibles, puedes agregar nuevos animales:{" "}
                <CreateCowButton
                  setCreateCowModalOpen={setCreateCowModalOpen}
                ></CreateCowButton>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
