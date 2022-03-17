import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  INDEX_INFO_1,
  INDEX_INFO_2,
  INDEX_INFO_3,
} from "../../../images/INDEX_Imgs";
import LinkPushing from "../../../helpers/hooks/LinkPushing";

import styles from "../../../styles/views/home/Home.module.css";

const Info = () => {
  const router = useRouter(); // rooter

  const infoSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    pauseOnHover: false,
  };

  return (
    <div id={styles.info} className="overrides_Info">
      <div className={`${styles.info_box} container-fluid`}>
        <div
          className={`${styles.info_row} row AOS_Item`}
          data-aos="fade-right"
        >
          <div
            className={`${styles.info_side} col-lg-6 col-md-6 col-sm-4 col-xs-12`}
            id={styles.infoL}
          >
            <div className={`${styles.info_side_slider_holder}`}>
              <Slider {...infoSettings}>
                <div
                  className={`${styles.info_side_bg_holder} full-second`}
                  id={styles.infoBG1}
                >
                  <BackgroundImage
                    src={INDEX_INFO_1}
                    width="100%"
                    height="100%"
                    className={`${styles.info_side_bg}`}
                  />
                </div>
                <div
                  className={`${styles.info_side_bg_holder} full-second`}
                  id={styles.infoBG2}
                >
                  <BackgroundImage
                    src={INDEX_INFO_2}
                    width="100%"
                    height="100%"
                    className={`${styles.info_side_bg} `}
                  />
                </div>
                <div
                  className={`${styles.info_side_bg_holder} full-second`}
                  id={styles.infoBG3}
                >
                  <BackgroundImage
                    src={INDEX_INFO_3}
                    width="100%"
                    height="100%"
                    className={`${styles.info_side_bg}`}
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div
            className={`${styles.info_side} col-lg-6 col-md-6 col-sm-8 col-xs-12`}
            id={styles.infoR}
          >
            <div className={`${styles.info_side_text} page-transition`}>
              <h1 className="page-transition">
                Our Crazy <br /> Background.
              </h1>

              <p className="page-transition">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>

              <div
                onClick={() => {
                  LinkPushing(router, "/info", "jojotopia/info/");
                }}
              >
                <a className="page-transition">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
