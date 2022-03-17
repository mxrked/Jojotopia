import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";
import { FadeDown, FadeUp } from "../../../animations/Fades";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import { Store_Top_BG, Store_Top_IMG } from "../../../images/STORE_Imgs";

import styles from "../../../styles/views/store/Store.module.css";

const Top = () => {
  const router = useRouter();

  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.top}>
      <BackgroundImage
        src={Store_Top_BG}
        width="100%"
        height="100%"
        className={styles.store_top_bg}
      >
        <div className={styles.store_top_cnt}>
          <div className={styles.store_top_cnt_inner}>
            <motion.div
              className={styles.store_top_cnt_text}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={FadeUp}
            >
              <h1>
                Our Bizarre <br />
                Merchandise.
              </h1>

              <p>Our products are but not limited to:</p>

              <div className={styles.store_top_cnt_text_btns}>
                <button
                  className={`${styles.store_top_cnt_text_btn} store-top-btn page-transition`}
                  onClick={() => {
                    router.push("/store/#P1");
                    document.querySelector(".filter-radios").scrollIntoView();
                  }}
                >
                  Figures
                </button>
                <button
                  className={`${styles.store_top_cnt_text_btn} store-top-btn page-transition`}
                  onClick={() => {
                    router.push("/store/#P2");
                    document.querySelector(".filter-radios").scrollIntoView();
                  }}
                >
                  Manga
                </button>
                <button
                  className={`${styles.store_top_cnt_text_btn} store-top-btn page-transition`}
                  onClick={() => {
                    router.push("/store/#P3");
                    document.querySelector(".filter-radios").scrollIntoView();
                  }}
                >
                  Clothing
                </button>
              </div>
            </motion.div>

            <div className={styles.store_top_cnt_img_holder}>
              <motion.img
                data-src={Store_Top_IMG}
                className="lazyload blur-up"
                alt="Collection of our products."
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={FadeDown}
              />
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Top;
