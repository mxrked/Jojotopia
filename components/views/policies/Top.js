import { BackgroundImage } from "react-image-and-background-image-fade";
import { POLICIES_TOP } from "../../../images/POLICIES_Imgs";

import styles from "../../../styles/views/policies/Policies.module.css";

const Top = () => {
  return (
    <div id={styles.top}>
      <BackgroundImage
        src={POLICIES_TOP}
        width="100%"
        height="100%"
        className={styles.policies_top_bg}
      >
        <div>
          <h1>Our Policies.</h1>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Top;
