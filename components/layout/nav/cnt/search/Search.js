import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { BackgroundImage } from "react-image-and-background-image-fade";

import {
  CLOTHING_KWS,
  FIGURES_KWS,
  HOME_KWS,
  INFO_KWS,
  MANGA_KWS,
  POLICIES_KWS,
  STORE_KWS,
  SUPPORT_KWS,
} from "../../../../../arrays/Keywords";
import LinkPushing from "../../../../../helpers/hooks/LinkPushing";
import { SEARCH_BG } from "../../../../../images/GLOBALS";

import styles from "../../../../../styles/layout/nav/Nav.module.css";

const Search = () => {
  var i;
  const router = useRouter(); // rooter
  const env = process.env.NODE_ENV;

  // This will be used to show a link on search term match (This is mostly to make code cleaner)
  function showLinkOnMatch(kws, link) {
    var i, ipt;

    ipt = document.getElementById("searchIpt");

    for (i = 0; i < kws.length; i++) {
      if (ipt.value.toLowerCase().indexOf(kws[i]) > -1) {
        document.querySelectorAll(".search-link")[link].style.display = "flex";
        triggerSearchNA(); // Hides the searchNA
      }
    }
  }

  // This will be used to show or hide the hint that a term was not found
  function triggerSearchNA() {
    var hiddenLink = document.querySelectorAll(
      ".search-link[style='display: none;']"
    ).length;
    var searchLinksLink = document.querySelectorAll(".search-link").length;

    if (hiddenLink >= searchLinksLink) {
      document.getElementById("searchNA").style.display = "block";
    } else {
      document.getElementById("searchNA").style.display = "none";
    }
  }

  // Filtering the links and will show a match to search term
  function filterSearch() {
    var ipt, filter, links, links_li, link, txtVal;

    ipt = document.getElementById("searchIpt");
    filter = ipt.value.toUpperCase();
    links = document.getElementById("searchLinks");
    links_li = links.getElementsByTagName("li");

    for (i = 0; i < links_li.length; i++) {
      link = links_li[i].getElementsByTagName("a")[0];

      txtVal = link.textContent || link.innerText;

      if (txtVal.toUpperCase().indexOf(filter) > -1) {
        links_li[i].style.display = "";
      } else {
        links_li[i].style.display = "none";
      }

      triggerSearchNA();
    }

    // This will display the page that matches with a search term
    //* Home
    showLinkOnMatch(HOME_KWS, 0);
    //* About Us
    showLinkOnMatch(INFO_KWS, 1);
    //* Store
    showLinkOnMatch(STORE_KWS, 2);
    //* Figures
    showLinkOnMatch(FIGURES_KWS, 3);
    //* Manga
    showLinkOnMatch(MANGA_KWS, 4);
    //* Clothing
    showLinkOnMatch(CLOTHING_KWS, 5);
    //* Support
    showLinkOnMatch(SUPPORT_KWS, 6);
    //* Policies
    showLinkOnMatch(POLICIES_KWS, 7);
  }

  // This is similar to showOnMatch but instead it is for routing (This is mostly to make code cleaner)
  function routeToPath(kws, route) {
    const iptVal = document.getElementById("searchIpt").value.toLowerCase();

    for (i = 0; i < kws.length; i++) {
      if (iptVal.indexOf(kws[i]) > -1) {
        router.push(route);
      }
    }
  }

  // This will be used when routing on development mode
  function devRouting() {
    //* Home
    routeToPath(HOME_KWS, "/");
    //* About Us
    routeToPath(INFO_KWS, "/info");
    //* Store
    routeToPath(STORE_KWS, "/store#P0");
    //* Figures
    routeToPath(FIGURES_KWS, "/store#P1");
    //* Manga
    routeToPath(MANGA_KWS, "/store#P2");
    //* Clothing
    routeToPath(CLOTHING_KWS, "/store#P3");
    //* Support
    routeToPath(SUPPORT_KWS, "/support");
    //* Support
    routeToPath(POLICIES_KWS, "/policies");
  }

  // This will be used when routing on production mode
  function prodRouting() {
    //* Home
    routeToPath(HOME_KWS, "/next-projects/jojotopia");
    //* About Us
    routeToPath(INFO_KWS, "/next-projects/jojotopia/info");
    //* Store
    routeToPath(STORE_KWS, "/next-projects/jojotopia/store#P0");
    //* Figures
    routeToPath(FIGURES_KWS, "/next-projects/jojotopia/store#P1");
    //* Manga
    routeToPath(MANGA_KWS, "/next-projects/jojotopia/store#P2");
    //* Clothing
    routeToPath(CLOTHING_KWS, "/next-projects/jojotopia/store#P3");
    //* Support
    routeToPath(SUPPORT_KWS, "/next-projects/jojotopia/support");
    //* Policies
    routeToPath(POLICIES_KWS, "/next-projects/jojotopia/policies");
  }

  // Routing
  useEffect(() => {
    document.getElementById("searchIpt").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (env == "development") {
          devRouting();
        }

        if (env == "production") {
          prodRouting();
        }
      }
    });

    document.getElementById("searchGo").addEventListener("click", () => {
      if (env == "development") {
        devRouting();
      }

      if (env == "production") {
        prodRouting();
      }
    });
  }, [router]);

  // Defaults
  useEffect(() => {
    document.getElementById("search").classList.toggle("deactive");
    document.getElementById("searchMainCnt").style.pointerEvents = "none";
    document.getElementById("searchMainCnt").classList.toggle("deactive");
  }, []);

  // Closing Search
  useEffect(() => {
    function closeSearch() {
      document.getElementById("searchIpt").value = "";
      document.querySelectorAll(".search-link").forEach((link) => {
        link.style.display = "flex";
      });
      document.getElementById("searchNA").style.display = "none";
      document.getElementById("searchMainCnt").style.pointerEvents = "none";
      document.getElementById("searchMainCnt").classList.toggle("deactive");
      document.getElementById("searchMainCnt").style.transform =
        "translateY(-120px)";

      setTimeout(() => {
        document.getElementById("search").classList.toggle("deactive");
      }, 1200);

      setTimeout(() => {
        sessionStorage.removeItem("Search Toggled.");
        document.body.style.overflowY = "auto";
      }, 2000);
    }

    document
      .getElementById("searchCloser")
      .addEventListener("click", closeSearch);
  }, []);

  return (
    <div id="search" className={`${styles.search} full-second`}>
      <BackgroundImage
        src={SEARCH_BG}
        width="100%"
        height="100%"
        className={styles.search_BG}
      />

      <div className={`${styles.search_main}`}>
        <div
          className={`${styles.search_main_cnt} full-second`}
          id="searchMainCnt"
        >
          <button id="searchCloser" className={styles.search_closer}>
            Close
          </button>

          <div className={styles.search_main_cnt_inner}>
            <div>
              <input
                type="text"
                id="searchIpt"
                placeholder="Search ..."
                autoComplete="off"
                onKeyUp={filterSearch}
              />

              <button
                id="searchGo"
                className={`${styles.search_GO} page-transition`}
              >
                <FaSearch />
              </button>
            </div>

            <ul id="searchLinks">
              <li className="search-link">
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/", "jojotopia/");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="search-link">
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/info", "jojotopia/info/");
                  }}
                >
                  About Us
                </a>
              </li>
              <li className="search-link">
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/store", "jojotopia/store/");
                  }}
                >
                  Store
                </a>
              </li>
              <li className="search-link">
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/store/#P1", "jojotopia/store/#P1/");
                  }}
                >
                  Figures
                </a>
              </li>
              <li className="search-link">
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/store/#P2", "jojotopia/store/#P2/");
                  }}
                >
                  Manga
                </a>
              </li>
              <li className="search-link">
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/store/#P3", "jojotopia/store/#P3/");
                  }}
                >
                  Clothing
                </a>
              </li>
              <li className="search-link">
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/support", "jojotopia/support/");
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li className="search-link">
                <a
                  className="page-transition"
                  onClick={() => {
                    LinkPushing(router, "/policies", "jojotopia/policies/");
                  }}
                >
                  Our Policies
                </a>
              </li>

              <span id="searchNA">Could not find..</span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
