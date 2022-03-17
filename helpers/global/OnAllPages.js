import { useEffect } from "react";

import Aos from "aos";

// import Menu from "../../components/layout/nav/cnt/menu/Menu";
import Search from "../../components/layout/nav/cnt/search/Search";
import Navigation from "../../components/layout/nav/Navigation";
import CheckingForCartList from "../cart-stuff/CheckingForCartList";
import B2T from "../../components/js/B2T";
import RevampedMenu from "../../components/layout/nav/cnt/revamped-menu/RevampedMenu";

const OnAllPages = () => {
  // Removing SS Cookies
  useEffect(() => {
    sessionStorage.removeItem("Menu Toggled.");
    sessionStorage.removeItem("Search Toggled.");

    // Re-enabling the overflowY
    setTimeout(() => {
      if (
        !sessionStorage.getItem("Menu Toggled.") &&
        !sessionStorage.getItem("Search Toggled.")
      ) {
        document.body.style.overflowY = "auto";
      }
    }, 10);
  }, []);

  // Initializing AOS
  //! AOS is being used for better performance animation
  useEffect(() => {
    Aos.init({
      once: true,
      delay: 700,
      duration: 800,
    });
  }, []);

  return (
    <div id="onAllPages">
      <CheckingForCartList />
      <Navigation />
      {/* <Menu /> */}
      <RevampedMenu />
      <Search />
      <B2T />
    </div>
  );
};

export default OnAllPages;
