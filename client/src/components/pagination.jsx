import React from "react";
import styles from "./styles/pagination.module.css";

export default function Pagination({
  page,
  filteredCattle,
  cowsPerPage,
  setPage,
}) {
  let pages = Math.ceil(filteredCattle?.length / cowsPerPage);
  let arrayOfPages = [];
  for (let i = 1; i <= pages; i++) {
    arrayOfPages.push(i);
  }

  let first =
    page >= arrayOfPages.length - 2
      ? arrayOfPages[arrayOfPages.length - 3]
      : page;
  let second =
    page >= arrayOfPages.length - 2
      ? arrayOfPages[arrayOfPages.length - 2]
      : "...";
  let third = arrayOfPages[arrayOfPages.length - 1];

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevNext}
        onClick={() => {
          setPage(parseInt(page) - 1);
        }}
        disabled={page > 1 ? false : true}
      >
        Prev
      </button>
      {arrayOfPages.length > 2 && (
        <button
          className={first === page ? styles.selected : styles.pages}
          onClick={() => {
            setPage(first);
          }}
        >
          {first}
        </button>
      )}
      {arrayOfPages.length > 1 && (
        <button
          className={second === page ? styles.selected : styles.pages}
          disabled={second === "..." ? true : false}
          onClick={() => {
            setPage(second);
          }}
        >
          {second}
        </button>
      )}
      <button
        className={third === page ? styles.selected : styles.pages}
        onClick={() => {
          setPage(third);
        }}
      >
        {third}
      </button>
      <button
        className={styles.prevNext}
        onClick={() => {
          setPage(parseInt(page) + 1);
        }}
        disabled={page < arrayOfPages.length ? false : true}
      >
        Next
      </button>
    </div>
  );
}
