import { useEffect } from "react";
import styles from "../../../../../styles/layout/nav/Nav.module.css";

const Toggler_M = () => {
  // Opening Menu (OLD)
  // useEffect(() => {
  //   document.getElementById("menuToggler").addEventListener("click", () => {
  //     sessionStorage.setItem("Menu Toggled.", true);
  //     document.body.style.overflowY = "hidden";

  //     document.getElementById("menu").style.display = "block";

  //     setTimeout(() => {
  //       document.getElementById("menuDarken").classList.remove("deactive");
  //     }, 300);

  //     setTimeout(() => {
  //       document.getElementById("menuInner").style.width = "100%";
  //     }, 500);

  //     setTimeout(() => {
  //       document.getElementById("menuInnerL").classList.remove("deactive");
  //       document.getElementById("menuInnerR").classList.remove("deactive");
  //     }, 1000);

  //     setTimeout(() => {
  //       document.getElementById("menuInnerL").style.pointerEvents = "auto";
  //       document.getElementById("menuDarken").style.pointerEvents = "auto";
  //     }, 1550);
  //   });
  // }, []);

  // Opening Menu (REVAMPED)
  useEffect(() => {
    document.getElementById("menuToggler").addEventListener("click", () => {
      sessionStorage.setItem("Menu Toggled.", true);
      document.body.style.overflowY = "hidden";

      document.getElementById("revampedMenu").style.display = "block";

      setTimeout(() => {
        document
          .getElementById("revampedMenuDarken")
          .classList.remove("deactive");
      }, 300);

      setTimeout(() => {
        document.getElementById("revampedMenuMain").style.width = "100%";
      }, 500);

      setTimeout(() => {
        document
          .getElementById("revampedMenuMainInner")
          .classList.remove("deactive");
        document.querySelectorAll(".purple-hermit").forEach((ph) => {
          ph.classList.remove("deactive");
        });
      }, 1500);

      setTimeout(() => {
        document.getElementById("revampedMenu").style.pointerEvents = "auto";
      }, 1850);
    });
  }, []);

  return (
    <button id="menuToggler" className={styles.menu_toggler}>
      <span className="page-transition" />
      <span className="page-transition" />
      <span className="page-transition" />
    </button>
  );
};

export default Toggler_M;
