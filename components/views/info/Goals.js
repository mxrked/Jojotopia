import { BackgroundImage } from "react-image-and-background-image-fade";
import { MENACING_CLUSTER } from "../../../images/GLOBALS";
import { INFO_GOALS } from "../../../images/INFO_Imgs";

import styles from "../../../styles/views/info/Info.module.css";

const Goals = () => {
  return (
    <div id={styles.goals}>
      <div className={`${styles.info_goals_box} container-fluid`}>
        <div className={`${styles.info_goals_row} row`}>
          <div
            className={`${styles.info_goals_side} col-lg-5 col-md-5 col-sm-4 col-xs-12 order-lg-0 order-md-0 order-sm-1 order-1`}
            id={styles.infoGoalsL}
          >
            <BackgroundImage
              src={INFO_GOALS}
              width="100%"
              height="100%"
              className={`${styles.info_goals_bg} AOS_Item`}
              data-aos="fade-right"
            />
          </div>

          <div
            className={`${styles.info_goals_side} col-lg-7 col-md-7 col-sm-8 col-xs-12 order-lg-1 order-md-1 order-sm-0 order-0`}
            id={styles.infoGoalsR}
          >
            <div
              className={`${styles.info_goals_side_cnt} AOS_Item`}
              data-aos="fade-left"
            >
              <div>
                <h3>Our Goals.</h3>

                <img
                  data-src={MENACING_CLUSTER}
                  className="lazyload"
                  alt="Menacing Cluster."
                />
              </div>

              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
