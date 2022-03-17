import { useEffect } from "react";

import { B2T_IMG } from "../../images/GLOBALS";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import styles from "../../styles/js/JS.module.css";

const B2T = () => {
  // Triggering and Display/Hiding B2T
  useEffect(() => {
    const btn = document.getElementById("backToTop");

    function backToTopState() {
      const wY = window.scrollY;

      if (wY >= 800) {
        btn.style.bottom = "30px";
      } else {
        btn.style.bottom = "-200px";
      }
    }

    window.addEventListener("load", () => {
      backToTopState();
    });
    window.addEventListener("scroll", () => {
      backToTopState();
    });

    btn.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <button id="backToTop" className={`${styles.backToTop} page-transition`}>
      <img data-src={B2T_IMG} className="lazyload" />
    </button>
  );
};

export default B2T;
