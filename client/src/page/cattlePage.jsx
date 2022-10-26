import React, { useEffect, useState } from "react";
import {
  getCattleService,
  updateCowService,
  createNewCowService,
  deleteCowService,
} from "../services/cattle.services";
import styles from "../components/styles/cattlePage.module.css";
import DeleteCowModal from "../components/deleteCowModal";
import CreateCowForm from "../components/createCowForm.jsx";
import UpdateCowForm from "../components/updateCowForm";
import Pagination from "../components/pagination";
import CreateCowButton from "../components/createCowButton.jsx";
import Cattle from "../components/cattle";
import SearchBar from "../components/searchBar";

export default function CattlePage() {
  const [cattle, setCattle] = useState();
  const [filteredCattle, setFilteredCattle] = useState();
  const [DeleteCowModalOpen, setDeleteCowModalOpen] = useState(false);
  const [updateCowModalOpen, setUpdateCowModalOpen] = useState(false);
  const [createCowModalOpen, setCreateCowModalOpen] = useState(false);
  const [page, setPage] = useState(1);

  let cowsPerPage = 4;

  useEffect(() => {
    async function getData() {
      try {
        const cattle = await getCattleService();
        setCattle(cattle);
        setFilteredCattle(cattle);
        setPage(1);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  async function deleteCow(_id) {
    try {
      await deleteCowService(_id);
      const updatedCattle = await getCattleService();
      setCattle(updatedCattle);
      setPage(1);
      setDeleteCowModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmitCreateCow(e, input) {
    e.preventDefault();
    await createNewCowService(input);
    setCreateCowModalOpen(false);
    const updatedCattle = await getCattleService();
    setCattle(updatedCattle);
  }

  async function handleSubmitUpdateCow(e, input) {
    e.preventDefault();
    await updateCowService(input);
    setUpdateCowModalOpen(false);
    const updatedCattle = await getCattleService();
    setCattle(updatedCattle);
  }

  return (
    <div className={styles.body}>
      <div className={styles.nav}></div>
      <div className={styles.cattleBox}>
        <h4>
          Menu <span> / Animales</span>
        </h4>
        <h1>Gestion de animales</h1>
        <CreateCowButton
          setCreateCowModalOpen={setCreateCowModalOpen}
        ></CreateCowButton>
        <SearchBar
          filteredCattle={filteredCattle}
          cattle={cattle}
          setFilteredCattle={setFilteredCattle}
          setPage={setPage}
        ></SearchBar>
        <h2>Lista de Animales</h2>
        <div className={styles.tableBox}>
          <Cattle
            filteredCattle={filteredCattle}
            page={page}
            cowsPerPage={cowsPerPage}
            setUpdateCowModalOpen={setUpdateCowModalOpen}
            setDeleteCowModalOpen={setDeleteCowModalOpen}
            setCreateCowModalOpen={setCreateCowModalOpen}
          ></Cattle>
          <Pagination
            page={page}
            filteredCattle={filteredCattle}
            cowsPerPage={cowsPerPage}
            setPage={setPage}
          ></Pagination>
        </div>
        {DeleteCowModalOpen && (
          <DeleteCowModal
            deleteCow={deleteCow}
            DeleteCowModalOpen={DeleteCowModalOpen}
            setDeleteCowModalOpen={setDeleteCowModalOpen}
          ></DeleteCowModal>
        )}
        {createCowModalOpen && (
          <CreateCowForm
            cattle={cattle}
            handleSubmitCreateCow={handleSubmitCreateCow}
            setCreateCowModalOpen={setCreateCowModalOpen}
          ></CreateCowForm>
        )}
        {updateCowModalOpen && (
          <UpdateCowForm
            actualCow={updateCowModalOpen.cow}
            handleSubmitUpdateCow={handleSubmitUpdateCow}
            setUpdateCowModalOpen={setUpdateCowModalOpen}
          ></UpdateCowForm>
        )}
      </div>
    </div>
  );
}
