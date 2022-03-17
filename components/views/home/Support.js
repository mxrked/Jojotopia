import { useRouter } from "next/router";
import { BackgroundImage } from "react-image-and-background-image-fade";

import { INDEX_SUPPORT } from "../../../images/INDEX_Imgs";
import LinkPushing from "../../../helpers/hooks/LinkPushing";

import styles from "../../../styles/views/home/Home.module.css";

const Support = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.support}>
      <div className={`${styles.support_cnt} AOS_Item`} data-aos="fade-up">
        <div className={`${styles.support_cnt_top}`}>
          <h1 className="page-transition">
            Get Easy, <br /> Instant Support.
          </h1>

          <p className="page-transition">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>

          <div
            onClick={() => {
              LinkPushing(router, "/support", "jojotopia/support/");
            }}
          >
            <a className="page-transition">Learn More</a>
          </div>
        </div>

        <div className={styles.support_cnt_bg_holder}>
          <BackgroundImage
            src={INDEX_SUPPORT}
            width="100%"
            height="100%"
            className={`${styles.support_cnt_bg} page-transition`}
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
