import { BackgroundImage } from "react-image-and-background-image-fade";
import { SUPPORT_TOP } from "../../../images/SUPPORT_Imgs";

import styles from "../../../styles/views/support/Support.module.css";

const Top = () => {
  return (
    <div id={styles.top}>
      <BackgroundImage
        src={SUPPORT_TOP}
        width="100%"
        height="100%"
        className={styles.support_top_bg}
      >
        <div>
          <h1>Getting Support.</h1>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Top;
