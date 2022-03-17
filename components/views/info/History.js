import { BackgroundImage } from "react-image-and-background-image-fade";
import { MENACING_CLUSTER } from "../../../images/GLOBALS";
import { INFO_HISTORY } from "../../../images/INFO_Imgs";

import styles from "../../../styles/views/info/Info.module.css";

const History = () => {
  return (
    <div id={styles.history}>
      <div className={`${styles.info_history_box} container-fluid`}>
        <div className={`${styles.info_history_row} row`}>
          <div
            className={`${styles.info_history_side} col-lg-7 col-md-7 col-sm-8 col-xs-12`}
            id={styles.infoHistoryL}
          >
            <div
              className={`${styles.info_history_side_cnt} AOS_Item`}
              data-aos="fade-right"
            >
              <div>
                <h3>Our History.</h3>

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
          <div
            className={`${styles.info_history_side} col-lg-5 col-md-5 col-sm-4 col-xs-12`}
            id={styles.infoHistoryR}
          >
            <BackgroundImage
              src={INFO_HISTORY}
              width="100%"
              height="100%"
              className={`${styles.info_history_bg} AOS_Item`}
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
