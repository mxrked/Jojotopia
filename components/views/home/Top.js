import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { BackgroundImage } from "react-image-and-background-image-fade";
import { FaCartPlus } from "react-icons/fa";

import { MENACING_SINGLE } from "../../../images/GLOBALS";
import { INDEX_TOP, INDEX_TOP_IMG } from "../../../images/INDEX_Imgs";
import { Jotaro_F1 } from "../../../objects/Figures";
import { FadeDown, FadeUp } from "../../../animations/Fades";
import AddToCartList from "../../../helpers/cart-stuff/AddToCartList";
import LinkPushing from "../../../helpers/hooks/LinkPushing";

import styles from "../../../styles/views/home/Home.module.css";

const Top = () => {
  const router = useRouter(); // rooter

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
      <div className={styles.top_cnt}>
        <BackgroundImage
          src={INDEX_TOP}
          width="100%"
          height="100%"
          className={styles.top_bg}
        />

        <div className={styles.top_cnt_inner}>
          <div className={styles.top_cnt_inner_cnt}>
            <motion.div
              className={styles.top_cnt_inner_cnt_text}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={FadeUp}
            >
              <div className={styles.popular}>
                <img
                  data-src={MENACING_SINGLE}
                  className="lazyload"
                  alt="Menacing Purple Text."
                />

                <span>Popular</span>
              </div>

              <h1 className="page-transition">
                Jotaro Kujo <br />{" "}
                <span className="page-transition">(Stardust Crusaders.)</span>
              </h1>

              <p className="page-transition">25cm Figure.</p>

              <div className={styles.links}>
                <button
                  className={`${styles.cart_adder} cart-adder page-transition`}
                  onClick={() => {
                    AddToCartList("Jotaro F1", Jotaro_F1);
                  }}
                >
                  <FaCartPlus />
                </button>

                <div>
                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#P1", "jojotopia/store/#P1");
                    }}
                  >
                    Figures
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.top_cnt_inner_img}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={FadeDown}
            >
              <img
                data-src={INDEX_TOP_IMG}
                className="lazyload page-transition blur-up"
                alt="Image of Jotaro Kujo Figure."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
