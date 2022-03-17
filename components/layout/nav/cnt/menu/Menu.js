import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";

import { NAV_BG } from "../../../../../images/GLOBALS";
import { FaChevronDown, FaTimesCircle } from "react-icons/fa";
import CartLink from "../CartLink";
import Toggler_S from "../search/Toggler_S";

import styles from "../../../../../styles/layout/nav/Nav.module.css";
import LinkPushing from "../../../../../helpers/hooks/LinkPushing";

const Menu = () => {
  const router = useRouter(); // rooter

  // Defaults
  useEffect(() => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menuDarken").classList.toggle("deactive");
    document.getElementById("menuInnerL").classList.toggle("deactive");
    document.getElementById("menuInnerR").classList.toggle("deactive");
    document.getElementById("menuInnerL").style.pointerEvents = "none";
    document.getElementById("menuDarken").style.pointerEvents = "none";
  }, []);

  // Triggering Link Sets
  useEffect(() => {
    const ALL_LST = document.querySelectorAll(".menu-link-set-toggler");
    const ALL_LS = document.querySelectorAll(".menu-link-set");
    const ALL_LST_ICON = document.querySelectorAll(".mlst-fa-icon");

    function toggleLS(lst, ls, mh, icon) {
      lst.addEventListener("change", () => {
        if (lst.checked) {
          ls.style.height = mh;
          icon.style.transform = "rotate(180deg)";
        } else {
          ls.style.height = "0";
          icon.style.transform = "rotate(0deg)";
        }
      });
    }

    document.querySelectorAll(".menu-link-set-label").forEach((label) => {
      label.addEventListener("mouseenter", () => {
        label.style.backgroundColor = "rgba(194, 194, 194, 0.281)";
      });
      label.addEventListener("mouseleave", () => {
        label.style.backgroundColor = "transparent";
      });
    });

    toggleLS(ALL_LST[0], ALL_LS[0], "200px", ALL_LST_ICON[0]);
    toggleLS(ALL_LST[1], ALL_LS[1], "100px", ALL_LST_ICON[1]);
  }, []);

  // Closing the menu
  useEffect(() => {
    const ALL_LST = document.querySelectorAll(".menu-link-set-toggler");
    const ALL_LS = document.querySelectorAll(".menu-link-set");
    const ALL_LST_ICON = document.querySelectorAll(".mlst-fa-icon");

    function closeMenu() {
      document.getElementById("menuInnerL").style.pointerEvents = "none";
      document.getElementById("menuDarken").style.pointerEvents = "none";

      setTimeout(() => {
        document.getElementById("menuInnerL").classList.toggle("deactive");
        document.getElementById("menuInnerR").classList.toggle("deactive");
      }, 20);

      setTimeout(() => {
        document.getElementById("menuInner").style.width = "0";
      }, 500);

      setTimeout(() => {
        document.getElementById("menuDarken").classList.toggle("deactive");
      }, 600);

      setTimeout(() => {
        document.getElementById("menu").style.display = "none";
        sessionStorage.removeItem("Menu Toggled.");
        document.body.style.overflowY = "auto";
      }, 1600);

      ALL_LS.forEach((ls) => {
        ls.style.height = "0";
      });
      ALL_LST.forEach((toggler) => {
        toggler.checked = false;
      });
      ALL_LST_ICON.forEach((icon) => {
        icon.style.transform = "rotate(0deg)";
      });
    }

    document.getElementById("menuCloser").addEventListener("click", () => {
      closeMenu();
    });
    document.getElementById("menuDarken").addEventListener("click", () => {
      closeMenu();
    });
  }, []);

  return (
    <div id="menu" className={styles.menu}>
      <div id="menuDarken" className={`${styles.menu_darken} full-second`} />

      <div className={`${styles.menu_inner} full-second`} id="menuInner">
        <div className={styles.menu_inner_left}>
          <div
            className={`${styles.menu_inner_left_cnt} page-transition`}
            id="menuInnerL"
          >
            <div className={styles.menu_top}>
              <h1>JojoTopia</h1>

              <button id="menuCloser" className="page-transition">
                <FaTimesCircle />
              </button>
            </div>

            <div className={styles.menu_under_top}>
              <Toggler_S />
              <CartLink />
            </div>

            <div className={styles.menu_links}>
              <div className={styles.menu_link_main}>
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/", "jojotopia/");
                  }}
                >
                  Home
                </a>
              </div>
              <div className={styles.menu_link_main}>
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/info", "jojotopia/info/");
                  }}
                >
                  About Us
                </a>
              </div>
              <label
                className={`${styles.menu_link_set_label} menu-link-set-label page-transition`}
              >
                <span>Store</span>

                <FaChevronDown className="mlst-fa-icon page-transition" />

                <input type="checkbox" className="menu-link-set-toggler" />
              </label>
              <ul className="menu-link-set page-transition" id={styles.menuLS1}>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store", "jojotopia/store/");
                    }}
                  >
                    View All
                  </a>
                </li>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#P1", "jojotopia/store/#P1");
                    }}
                  >
                    Figures
                  </a>
                </li>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#P2", "jojotopia/store/#P2");
                    }}
                  >
                    Manga
                  </a>
                </li>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#P3", "jojotopia/store/#P3");
                    }}
                  >
                    Clothing
                  </a>
                </li>
              </ul>
              <label
                className={`${styles.menu_link_set_label} menu-link-set-label page-transition`}
              >
                <span>Support</span>

                <FaChevronDown className="mlst-fa-icon page-transition" />

                <input type="checkbox" className="menu-link-set-toggler" />
              </label>
              <ul className="menu-link-set page-transition" id={styles.menuLS2}>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/support", "jojotopia/support/");
                    }}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/policies", "jojotopia/policies/");
                    }}
                  >
                    Our Policies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${styles.menu_inner_right} `}>
          <div
            className={`${styles.menu_inner_right_cnt} page-transition`}
            id="menuInnerR"
          >
            <BackgroundImage
              src={NAV_BG}
              width="100%"
              height="100%"
              className={styles.menu_bg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
