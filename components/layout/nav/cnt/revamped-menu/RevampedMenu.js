import { useEffect } from "react";
import { useRouter } from "next/router";
import { FaRegTimesCircle } from "react-icons/fa";

import {
  MENACING_CLUSTER,
  NAV_STAND_ARROW,
  PURPLE_HERMIT_L,
  PURPLE_HERMIT_R,
} from "../../../../../images/GLOBALS";
import Toggler_S from "../search/Toggler_S";
import CartLink from "../CartLink";

import LinkPushing from "../../../../../helpers/hooks/LinkPushing";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import styles from "../../../../../styles/layout/nav/Nav.module.css";

const RevampedMenu = () => {
  const router = useRouter(); // rooter

  // Defaults
  useEffect(() => {
    document.getElementById("revampedMenu").style.display = "none";
    document.getElementById("revampedMenuDarken").classList.toggle("deactive");
    document
      .getElementById("revampedMenuMainInner")
      .classList.toggle("deactive");
    document.querySelectorAll(".purple-hermit").forEach((ph) => {
      ph.classList.toggle("deactive");
    });

    document.getElementById("revampedMenu").style.pointerEvents = "none";
  }, []);

  // Triggering link sets
  useEffect(() => {
    const ALL_LST = document.querySelectorAll(".link-set-cb");
    const ALL_LS = document.querySelectorAll(".link-set-links");
    const ALL_LS_IMGS = document.querySelectorAll(".link-set-img");

    // This will be used to show/hide the link set
    function triggerLS(lst, ls, img, mh) {
      lst.addEventListener("change", () => {
        if (lst.checked) {
          ls.style.height = mh;
          img.style.left = "-10px";
          img.style.opacity = 1;
        } else {
          ls.style.height = "0";
          img.style.left = "0";
          img.style.opacity = 0.4;
        }
      });
    }

    // This will make it so the user can rehover/unhover on a link set toggler after checking and unchecking
    function triggerLTHover(lst, img) {
      lst.addEventListener("mouseenter", () => {
        if (!lst.checked) {
          img.style.left = "-10px";
          img.style.opacity = 1;
        }
      });

      lst.addEventListener("mouseleave", () => {
        if (!lst.checked) {
          img.style.left = "0px";
          img.style.opacity = 0.4;
        }
      });
    }

    triggerLS(ALL_LST[0], ALL_LS[0], ALL_LS_IMGS[0], "240px");
    triggerLS(ALL_LST[1], ALL_LS[1], ALL_LS_IMGS[1], "120px");

    triggerLTHover(ALL_LST[0], ALL_LS_IMGS[0]);
    triggerLTHover(ALL_LST[1], ALL_LS_IMGS[1]);
  }, []);

  // Closing the menu
  useEffect(() => {
    const ALL_LST = document.querySelectorAll(".link-set-cb");
    const ALL_LS = document.querySelectorAll(".link-set-links");
    const ALL_LS_IMGS = document.querySelectorAll(".link-set-img");

    function closeMenu() {
      document.getElementById("revampedMenu").style.pointerEvents = "none";
      setTimeout(() => {
        document
          .getElementById("revampedMenuMainInner")
          .classList.toggle("deactive");
        document.querySelectorAll(".purple-hermit").forEach((ph) => {
          ph.classList.toggle("deactive");
        });
      }, 20);

      setTimeout(() => {
        document.getElementById("revampedMenuMain").style.width = "0";
      }, 500);

      setTimeout(() => {
        document
          .getElementById("revampedMenuDarken")
          .classList.toggle("deactive");
      }, 600);

      setTimeout(() => {
        document.getElementById("revampedMenu").style.display = "none";
        sessionStorage.removeItem("Menu Toggled.");
        document.body.style.overflowY = "auto";
      }, 1600);

      ALL_LS.forEach((ls) => {
        ls.style.height = "0";
      });
      ALL_LST.forEach((toggler) => {
        toggler.checked = false;
      });
      ALL_LS_IMGS.forEach((img) => {
        img.style.opacity = 0.4;
        img.style.left = "0px";
      });
    }

    document
      .getElementById("revampedMenuCloser")
      .addEventListener("click", () => {
        closeMenu();
      });
    document
      .getElementById("revampedMenuDarken")
      .addEventListener("click", () => {
        closeMenu();
      });
  }, []);

  return (
    <div id="revampedMenu" className={styles.revamped_menu}>
      <div
        id="revampedMenuDarken"
        className={`${styles.revamped_menu_darken} full-second`}
      />

      <div
        id="revampedMenuMain"
        className={`${styles.revamped_menu_main} full-second`}
      >
        <img
          data-src={PURPLE_HERMIT_L}
          className="lazyload purple-hermit page-transition"
          id={styles.pHL}
          alt="Purple Hermit."
        />

        <div
          className={`${styles.revamped_menu_main_inner} page-transition`}
          id="revampedMenuMainInner"
        >
          <h1>JojoTopia</h1>

          <div className={styles.revamped_menu_main_inner_top}>
            <div className={styles.revamped_menu_main_inner_top_closer}>
              <button id="revampedMenuCloser" className="page-transition">
                <FaRegTimesCircle />
              </button>
            </div>

            <div
              className={styles.revamped_menu_main_inner_top_search_and_cart}
            >
              <Toggler_S />
              <CartLink />
            </div>
          </div>

          <div className={styles.revamped_menu_main_links}>
            <div className={styles.revamped_menu_main_links_single_link}>
              <a
                onClick={() => {
                  LinkPushing(router, "/", "jojotopia/");
                }}
              >
                <div>
                  <span>Home</span>

                  <img
                    data-src={NAV_STAND_ARROW}
                    className="lazyload page-transition link-img"
                    alt="Stand Arrow."
                  />
                </div>
              </a>
            </div>

            <div className={styles.revamped_menu_main_links_single_link}>
              <a
                onClick={() => {
                  LinkPushing(router, "/info", "jojotopia/info/");
                }}
              >
                <div>
                  <span>About Us</span>

                  <img
                    data-src={NAV_STAND_ARROW}
                    className="lazyload page-transition link-img"
                    alt="Stand Arrow."
                  />
                </div>
              </a>
            </div>

            <div className={styles.revamped_menu_main_links_set}>
              <label>
                <input type="checkbox" className="link-set-cb" />

                <div>
                  <span>Products</span>

                  <img
                    data-src={NAV_STAND_ARROW}
                    className="lazyload page-transition link-set-img"
                    alt="Stand Arrow."
                  />
                </div>
              </label>

              <ul
                className="link-set-links page-transition"
                id={styles.productLinks}
              >
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store", "jojotopia/store/");
                    }}
                  >
                    <span>All Products</span>
                    <img
                      data-src={MENACING_CLUSTER}
                      className="lazyload page-transition"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#P1", "jojotopia/store/#P1/");
                    }}
                  >
                    <span>Figures</span>
                    <img
                      data-src={MENACING_CLUSTER}
                      className="lazyload page-transition"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#P2", "jojotopia/store/#P2/");
                    }}
                  >
                    <span>Manga</span>
                    <img
                      data-src={MENACING_CLUSTER}
                      className="lazyload page-transition"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#P3", "jojotopia/store/#P3/");
                    }}
                  >
                    <span>Clothing</span>
                    <img
                      data-src={MENACING_CLUSTER}
                      className="lazyload page-transition"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.revamped_menu_main_links_set}>
              <label>
                <input type="checkbox" className="link-set-cb" />

                <div>
                  <span>Support</span>

                  <img
                    data-src={NAV_STAND_ARROW}
                    className="lazyload page-transition link-set-img page-transition"
                    alt="Stand Arrow."
                  />
                </div>
              </label>

              <ul
                className="link-set-links page-transition"
                id={styles.supportLinks}
              >
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/support", "jojotopia/support/");
                    }}
                  >
                    <span>Contact Us</span>
                    <img
                      data-src={MENACING_CLUSTER}
                      className="lazyload page-transition"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/policies", "jojotopia/policies/");
                    }}
                  >
                    <span>Our Policies</span>
                    <img
                      data-src={MENACING_CLUSTER}
                      className="lazyload page-transition"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img
          data-src={PURPLE_HERMIT_R}
          className="lazyload purple-hermit page-transition"
          id={styles.pHR}
          alt="Purple Hermit."
        />
      </div>
    </div>
  );
};

export default RevampedMenu;
