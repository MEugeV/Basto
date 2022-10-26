import React, { useEffect, useState } from "react";
import styles from "../components/styles/searchBar.module.css";

export default function SearchBar({
  filteredCattle,
  cattle,
  setFilteredCattle,
  setPage,
}) {
  const [search, setSearch] = useState("");

  function searchCattle(e) {
    setSearch(() => e.target.value);
  }

  useEffect(() => {
    setFilteredCattle(
      cattle?.filter(
        (el) =>
          el._id.toLowerCase().includes(search?.toLowerCase()) ||
          el.animal_type.toLowerCase().includes(search?.toLowerCase())
      )
    );
    setPage(1);
  }, [search, cattle, setFilteredCattle, setPage]);

  return (
    <div>
      <h3>Tipo de Animal / ID Senasa Animal</h3>
      <input
        className={
          filteredCattle?.length !== cattle?.length ? styles.searched : ""
        }
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={searchCattle}
        placeholder="Buscar por tipo de animal / id Senasa"
      />
    </div>
  );
}
