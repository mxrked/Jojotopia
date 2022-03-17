import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaFilter, FaSearch, FaTimesCircle } from "react-icons/fa";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import { MENACING_CLUSTER } from "../../../images/GLOBALS";

import {
  DAUB_KWS,
  DIO_KWS,
  JOSEPH_KWS,
  JOTARO_KWS,
  PB_KWS,
  SDC_KWS,
  STAR_PLATINUM_KWS,
} from "../../../arrays/Keywords";

import LinkPushing from "../../../helpers/hooks/LinkPushing";

import styles from "../../../styles/views/store/Store.module.css";

const UnderTop = () => {
  const router = useRouter(); // rooter

  //? Filtering
  // This will be used to display a specific type of product
  function displayProduct(type) {
    document.querySelectorAll(".product-item").forEach((item) => {
      item.style.display = "none";
    });

    setTimeout(() => {
      document.querySelectorAll(type).forEach((t) => {
        t.style.display = "grid";
      });
    }, 1);
  }

  // Unchecking radio buttons when another is checked
  useEffect(() => {
    const allRadios = document.querySelectorAll(".filter-radio");
    const allRadioLabels = document.querySelectorAll(".filter-radio ~ label");
    const allRadioLabelSpans = document.querySelectorAll(
      ".filter-radio ~ label span"
    );

    function uncheckRadios() {
      allRadios.forEach((radio) => {
        radio.checked = false;
        radio.style.pointerEvents = "auto";
      });

      allRadioLabels.forEach((radioL) => {
        radioL.style.opacity = 1;
      });

      allRadioLabelSpans.forEach((radioLS) => {
        radioLS.style.backgroundColor = "transparent";
      });
    }

    function checkingRadio(radio, rls) {
      radio.checked = true;
      rls.style.backgroundColor = "#992c9d";
    }

    // This will be used to check what hash is in the URL and it will check that respected Radio
    function checkingURLForRadio() {
      switch (true) {
        case router.asPath.includes("#P0") &&
          !router.asPath.includes("#P1", "#P2", "#P3"): // #P1
          uncheckRadios();
          checkingRadio(allRadios[0], allRadioLabelSpans[0]);
          setTimeout(() => {
            allRadios[0].style.pointerEvents = "none";
            allRadioLabels[0].style.opacity = "0.5";
            document.querySelectorAll(".product-item").forEach((item) => {
              item.style.display = "grid";
            });
          }, 1);
          break;
        case router.asPath.includes("#P1") &&
          !router.asPath.includes("#P0", "#P2", "#P3"): // #P1
          uncheckRadios();
          checkingRadio(allRadios[1], allRadioLabelSpans[1]);
          setTimeout(() => {
            allRadios[1].style.pointerEvents = "none";
            allRadioLabels[1].style.opacity = "0.5";
            displayProduct(`[data-product-type="product-figure"]`);
          }, 1);
          break;
        case router.asPath.includes("#P2") &&
          !router.asPath.includes("#P0", "#P1", "#P3"): // #P2
          uncheckRadios();
          checkingRadio(allRadios[2], allRadioLabelSpans[2]);
          setTimeout(() => {
            allRadios[2].style.pointerEvents = "none";
            allRadioLabels[2].style.opacity = "0.5";
            displayProduct(`[data-product-type="product-manga"]`);
          }, 1);
          break;
        case router.asPath.includes("#P3") &&
          !router.asPath.includes("#P0", "#P1", "#P2"): // #P3
          uncheckRadios();
          checkingRadio(allRadios[3], allRadioLabelSpans[3]);
          setTimeout(() => {
            allRadios[3].style.pointerEvents = "none";
            allRadioLabels[3].style.opacity = "0.5";
            displayProduct(`[data-product-type="product-clothing"]`);
          }, 1);
          break;
        default:
          // This is for if there is no hash in url, it will show all by default
          uncheckRadios();
          setTimeout(() => {
            checkingRadio(allRadios[0], allRadioLabelSpans[0]);
            allRadios[0].style.pointerEvents = "none";
            allRadioLabels[0].style.opacity = "0.5";
            document.querySelectorAll(".product-item").forEach((item) => {
              item.style.display = "grid";
            });
          }, 10);
          break;
      }
    }

    allRadios[0].addEventListener("click", () => {
      uncheckRadios();
      checkingRadio(allRadios[0], allRadioLabelSpans[0]);
    });
    allRadios[1].addEventListener("click", () => {
      uncheckRadios();
      checkingRadio(allRadios[1], allRadioLabelSpans[1]);
    });
    allRadios[2].addEventListener("click", () => {
      uncheckRadios();
      checkingRadio(allRadios[2], allRadioLabelSpans[2]);
    });
    allRadios[3].addEventListener("click", () => {
      uncheckRadios();
      checkingRadio(allRadios[3], allRadioLabelSpans[3]);
    });

    checkingURLForRadio();
  }, [router]);

  // Checks to see if the user is on the base Store page path, or if they still have #P0 in url, check the All radio
  useEffect(() => {
    if (
      router.asPath.includes("#P0") &&
      !router.asPath.includes("#P1", "#P2", "#P3", "#P4")
    ) {
      document.querySelectorAll(".filter-radio")[0].checked = true;
      document.querySelectorAll(
        ".filter-radio ~ label span"
      )[0].style.backgroundColor = "#992c9d";
    } else {
      document.querySelectorAll(".filter-radio")[0].checked = false;
      document.querySelectorAll(
        ".filter-radio ~ label span"
      )[0].style.backgroundColor = "transparent";
    }
  }, [router]);

  //? Search
  useEffect(() => {
    var i;

    // This will check what the user inputs into the store search, and it will display items related to what they inputted
    function getUserInput() {
      const storeSearchIptVal = document.getElementById("storeSearchIpt").value;

      // Characters
      for (i = 0; i < JOTARO_KWS.length; i++) {
        if (storeSearchIptVal.toLowerCase().indexOf(JOTARO_KWS[i]) > -1) {
          displayProduct(`[data-product-specific-type~="jotaro"]`);
        }
      }
      for (i = 0; i < DIO_KWS.length; i++) {
        if (storeSearchIptVal.toLowerCase().indexOf(DIO_KWS[i]) > -1) {
          displayProduct(`[data-product-specific-type~="dio"]`);
        }
      }
      for (i = 0; i < JOSEPH_KWS.length; i++) {
        if (storeSearchIptVal.toLowerCase().indexOf(JOSEPH_KWS[i]) > -1) {
          displayProduct(`[data-product-specific-type~="joseph"]`);
        }
      }
      for (i = 0; i < STAR_PLATINUM_KWS.length; i++) {
        if (
          storeSearchIptVal.toLowerCase().indexOf(STAR_PLATINUM_KWS[i]) > -1
        ) {
          displayProduct(`[data-product-specific-type~="star-platinum"]`);
        }
      }

      // Parts
      for (i = 0; i < PB_KWS.length; i++) {
        if (storeSearchIptVal.toLowerCase().indexOf(PB_KWS[i]) > -1) {
          displayProduct(`[data-product-specific-type~="pb"]`);
        }
      }
      for (i = 0; i < SDC_KWS.length; i++) {
        if (storeSearchIptVal.toLowerCase().indexOf(SDC_KWS[i]) > -1) {
          displayProduct(`[data-product-specific-type~="sdc"]`);
        }
      }
      for (i = 0; i < DAUB_KWS.length; i++) {
        if (storeSearchIptVal.toLowerCase().indexOf(DAUB_KWS[i]) > -1) {
          displayProduct(`[data-product-specific-type~="daub"]`);
        }
      }
    }

    document
      .getElementById("storeSearchIpt")
      .addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          getUserInput();
        }
      });
  }, []);

  return (
    <div id={styles.underTop}>
      <div className={styles.store_under_top_cnt}>
        <div className={styles.store_under_top_cnt_top}>
          <h2>Current Products</h2>

          <a
            className="page-transition"
            onClick={() => {
              LinkPushing(router, "/cart", "jojotopia/cart/");
            }}
          >
            <span>View Cart</span>

            <img data-src={MENACING_CLUSTER} className="lazyload" />
          </a>
        </div>

        <div className={styles.store_under_top_cnt_bottom}>
          <div className={styles.store_under_top_cnt_filter}>
            <FaFilter className={styles.fa_icon} />
            <div
              className={`${styles.store_under_top_cnt_filter_radios} filter-radios`}
            >
              <div className={styles.filter_radio_set}>
                <input
                  type="radio"
                  className={`${styles.filter_radio} filter-radio`}
                  onClick={() => {
                    // This will allow the radios to work on both the development and production side
                    LinkPushing(router, "/store/#P0", "jojotopia/store/#P0");

                    document
                      .querySelectorAll(".product-item")
                      .forEach((item) => {
                        item.style.display = "grid";
                      });
                  }}
                />
                <label>
                  <span className={styles.filter_radio_icon} />
                  All
                </label>
              </div>
              <div className={styles.filter_radio_set}>
                <input
                  type="radio"
                  className={`${styles.filter_radio} filter-radio`}
                  onClick={() => {
                    // This will allow the radios to work on both the development and production side
                    LinkPushing(router, "/store/#P1", "jojotopia/store/#P1");

                    displayProduct(`[data-product-type="product-figure"]`);
                  }}
                />
                <label>
                  <span className={styles.filter_radio_icon} />
                  Figures
                </label>
              </div>
              <div className={styles.filter_radio_set}>
                <input
                  type="radio"
                  className={`${styles.filter_radio} filter-radio`}
                  onClick={() => {
                    // This will allow the radios to work on both the development and production side
                    LinkPushing(router, "/store/#P2", "jojotopia/store/#P2");

                    displayProduct(`[data-product-type="product-manga"]`);
                  }}
                />
                <label>
                  <span className={styles.filter_radio_icon} />
                  Manga
                </label>
              </div>
              <div className={styles.filter_radio_set}>
                <input
                  type="radio"
                  className={`${styles.filter_radio} filter-radio`}
                  onClick={() => {
                    // This will allow the radios to work on both the development and production side
                    LinkPushing(router, "/store/#P3", "jojotopia/store/#P3");

                    displayProduct(`[data-product-type="product-clothing"]`);
                  }}
                />
                <label>
                  <span className={styles.filter_radio_icon} />
                  Clothing
                </label>
              </div>
            </div>
          </div>

          <div className={styles.store_under_top_cnt_search}>
            <div>
              <input
                type="text"
                id="storeSearchIpt"
                placeholder="Search for an item .."
                autoComplete="off"
              />

              <FaSearch className={styles.fa_icon} />
            </div>

            <button
              id="clearStoreSearch"
              onClick={() => {
                document.getElementById("storeSearchIpt").value = "";

                LinkPushing(router, "/store/#P0", "jojotopia/store/#P0");

                document.querySelectorAll(".product-item").forEach((item) => {
                  item.style.display = "grid";
                });
              }}
            >
              <FaTimesCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderTop;
