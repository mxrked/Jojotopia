import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { INFO_TOP_AND_BOTTOM } from "../../../images/INFO_Imgs";
import { FadeDown } from "../../../animations/Fades";

import styles from "../../../styles/views/info/Info.module.css";

const Top = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.top} className="page-transition">
      <BackgroundImage
        src={INFO_TOP_AND_BOTTOM}
        width="100%"
        height="100%"
        className={styles.info_top_bg}
      >
        <div>
          <motion.h1
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={FadeDown}
          >
            JojoTopia&apos;s <br /> Background.
          </motion.h1>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Top;
