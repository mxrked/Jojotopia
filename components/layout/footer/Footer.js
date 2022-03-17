import Logo from "./cnt/Logo";
import Socials from "./cnt/Socials";
import Links from "./cnt/Links";
import Newsletter from "./cnt/Newsletter";
import Contact from "./cnt/Contact";

import styles from "../../../styles/layout/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.footer_main}>
        <div className={`${styles.footer_main_box} container-fluid`}>
          <div className={`${styles.footer_main_row} row`}>
            <div
              className={`${styles.footer_main_side} col-lg-3 col-md-3 col-sm-12 col-xs-12`}
              id={styles.footerL}
            >
              <div className={styles.footer_main_side_cnt}>
                <Logo />
                <Socials />
              </div>
            </div>
            <div
              className={`${styles.footer_main_side} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
              id={styles.footerM}
            >
              <div className={styles.footer_main_side_cnt}>
                <Links />
              </div>
            </div>
            <div
              className={`${styles.footer_main_side} col-lg-3 col-md-3 col-sm-12 col-xs-12`}
              id={styles.footerR}
            >
              <div className={styles.footer_main_side_cnt}>
                <Newsletter />
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_note}>
        <div>
          <p>
            <strong>NOTE:</strong> This website is not used for profitable gain
            but is made for practice purposes. All content displayed on this
            site belongs to their rightful owners and Are not owned by me.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
