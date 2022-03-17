import styles from "../../../styles/layout/nav/Nav.module.css";

import CartLink from "./cnt/CartLink";
import Logo from "./cnt/Logo";
import Toggler_M from "./cnt/menu/Toggler_M";
import Toggler_S from "./cnt/search/Toggler_S";

const Navigation = () => {
  return (
    <nav id={styles.navigation}>
      <div className={`${styles.navigation_box} container-fluid`}>
        <div className={`${styles.navigation_row} row`}>
          <div
            className={`${styles.navigation_side} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
            id={styles.navL}
          >
            <div className={styles.navigation_side_cnt}>
              <Toggler_M />
            </div>
          </div>
          <div
            className={`${styles.navigation_side} col-lg-6 col-md-6 d-lg-grid d-md-grid d-sm-none d-xs-none`}
            id={styles.navM}
          >
            <div className={styles.navigation_side_cnt}>
              <Logo />
            </div>
          </div>
          <div
            className={`${styles.navigation_side} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
            id={styles.navR}
          >
            <div className={styles.navigation_side_cnt}>
              <Toggler_S />
              <CartLink />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
