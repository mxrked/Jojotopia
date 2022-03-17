import { BackgroundImage } from "react-image-and-background-image-fade";
import { INFO_TOP_AND_BOTTOM } from "../../../images/INFO_Imgs";

import styles from "../../../styles/views/info/Info.module.css";

const Bottom = () => {
  return (
    <div id={styles.bottom}>
      <BackgroundImage
        src={INFO_TOP_AND_BOTTOM}
        width="100%"
        height="100%"
        className={styles.info_bottom_bg}
      />
    </div>
  );
};

export default Bottom;
