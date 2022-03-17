import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import styles from "../../../../../styles/layout/nav/Nav.module.css";

const Toggler_S = () => {
  // Opening Search
  useEffect(() => {
    document.querySelectorAll(".search-toggler").forEach((toggler) => {
      toggler.addEventListener("click", () => {
        sessionStorage.setItem("Search Toggled.", true);
        document.body.style.overflowY = "hidden";
        document.getElementById("search").style.display = "block";

        setTimeout(() => {
          document.getElementById("search").classList.remove("deactive");
        }, 600);

        setTimeout(() => {
          document.getElementById("searchMainCnt").classList.remove("deactive");
          document.getElementById("searchMainCnt").style.transform =
            "translateY(0)";
        }, 1500);

        setTimeout(() => {
          document.getElementById("searchMainCnt").style.pointerEvents = "auto";
        }, 2500);
      });
    });
  }, []);

  return (
    <button
      id="searchToggler"
      className={`${styles.search_toggler} search-toggler page-transition`}
    >
      <FaSearch />
    </button>
  );
};

export default Toggler_S;
