import { useRouter } from "next/router";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { MENACING_CLUSTER } from "../../../images/GLOBALS";
import {
  INDEX_ALL_TYPES,
  INDEX_CLOTHINGS_TYPE,
  INDEX_FIGURES_TYPE,
  INDEX_MANGAS_TYPE,
} from "../../../images/INDEX_Imgs";
import LinkPushing from "../../../helpers/hooks/LinkPushing";

import styles from "../../../styles/views/home/Home.module.css";

const Types = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.types}>
      <div className={`${styles.types_cnt} page-transition`}>
        <div className={`${styles.types_top} AOS_Item`} data-aos="fade-left">
          <img
            data-src={MENACING_CLUSTER}
            className="lazyload blur-up page-transition"
            alt="Menacing Cluster Image."
          />

          <h1 className="page-transition">
            Our Bizarre <br /> Products.
          </h1>

          <img
            data-src={MENACING_CLUSTER}
            className="lazyload blur-up page-transition"
            alt="Menacing Cluster Image."
          />
        </div>

        <div className={`${styles.types_box} AOS_Item`} data-aos="fade-right">
          <div className={styles.type} id={styles.t1}>
            <BackgroundImage
              src={INDEX_ALL_TYPES}
              width="100%"
              height="100%"
              className={`${styles.type_bg} page-transition`}
            />

            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/store/", "jojotopia/store/");
              }}
            >
              <span className="page-transition">All Products</span>
            </a>
          </div>
          <div className={styles.type} id={styles.t2}>
            <BackgroundImage
              src={INDEX_FIGURES_TYPE}
              width="100%"
              height="100%"
              className={`${styles.type_bg} page-transition`}
            />

            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/store/#P1", "jojotopia/store/#P1");
              }}
            >
              <span className="page-transition">Figures</span>
            </a>
          </div>
          <div className={styles.type} id={styles.t3}>
            <BackgroundImage
              src={INDEX_MANGAS_TYPE}
              width="100%"
              height="100%"
              className={`${styles.type_bg} page-transition`}
            />

            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/store/#P2", "jojotopia/store/#P2");
              }}
            >
              <span className="page-transition">Manga</span>
            </a>
          </div>
          <div className={styles.type} id={styles.t4}>
            <BackgroundImage
              src={INDEX_CLOTHINGS_TYPE}
              width="100%"
              height="100%"
              className={`${styles.type_bg} page-transition`}
            />

            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/store/#P3", "jojotopia/store/#P3");
              }}
            >
              <span className="page-transition">Clothing</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
