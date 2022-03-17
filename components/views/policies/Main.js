import { BackgroundImage } from "react-image-and-background-image-fade";

import { POLICIES_MAIN } from "../../../images/POLICIES_Imgs";
import { MENACING_CLUSTER } from "../../../images/GLOBALS";

import styles from "../../../styles/views/policies/Policies.module.css";

const Main = () => {
  return (
    <div id={styles.main}>
      <div className={styles.policies_main_cnt}>
        <div className={`${styles.policies_main_cnt_box} container-fluid`}>
          <div className={`${styles.policies_main_cnt_row} row`}>
            <div
              className={`${styles.policies_main_cnt_side} col-lg-8 col-md-8 col-sm-7 col-xs-12`}
              id={styles.mainL}
            >
              <div className={styles.policies_main_cnt_side_text}>
                <div className={styles.policy}>
                  <div>
                    <img
                      data-src={MENACING_CLUSTER}
                      className="lazyload"
                      alt="Menacing."
                    />

                    <h3>Return Policy.</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </div>

                <div className={styles.policy}>
                  <div>
                    <img
                      data-src={MENACING_CLUSTER}
                      className="lazyload"
                      alt="Menacing."
                    />

                    <h3>Privacy Policy.</h3>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.policies_main_cnt_side} col-lg-4 col-md-4 col-sm-5 col-xs-12`}
              id={styles.mainR}
            >
              <BackgroundImage
                src={POLICIES_MAIN}
                width="100%"
                height="100%"
                className={styles.policies_main_bg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
