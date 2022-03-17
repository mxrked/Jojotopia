import { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AddToCartList from "../../../helpers/cart-stuff/AddToCartList";
import {
  Dio_F1_IMG,
  DiamondsAUB_M1_IMG,
  Joseph_F1_IMG,
  StardustC_M1_IMG,
  StarPlatinum_F1_IMG,
  PhantomB_M1_IMG,
  JotaroBlue_S1_IMG,
  MudaPurple_S1_IMG,
  PurpleJBA_H1_IMG,
} from "../../../images/STORE_Imgs";
import {
  Dio_F1,
  Joseph_F1,
  // Jotaro_F1,
  StarPlatinum_F1,
} from "../../../objects/Figures";

import {
  StardustC_M1,
  DiamondsAUB_M1,
  PhantomB_M1,
} from "../../../objects/Manga";

import {
  JotaroBlue_S1,
  MudaPurple_S1,
  PurpleJBA_H1,
} from "../../../objects/Clothing";

import { INDEX_Products_SR } from "../../../arrays/SlickResponsive";
import { FaCartPlus, FaDollarSign, FaInfoCircle } from "react-icons/fa";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import styles from "../../../styles/views/home/Home.module.css";

class Products extends Component {
  constructor(props) {
    super(props);

    this.createProductSlide = this.createProductSlide.bind(this);
  }

  createProductSlide(props) {
    return (
      <div className={styles.products_slider_slide} id={styles[props.slideID]}>
        <div className={styles.products_slider_slide_cnt}>
          <div className={styles.products_slider_slide_cnt_inner}>
            <div className={styles.products_slider_slide_img}>
              <img
                data-src={props.slideIMG}
                className="lazyload blur-up"
                alt={props.slideImgALT}
              />
            </div>

            <div className={styles.products_slider_slide_details}>
              <span>{props.slideSPAN}</span>

              <div className={styles.products_slider_slide_details_inner}>
                <p>
                  <FaDollarSign /> {props.price}
                </p>

                <div>
                  <button
                    className={`${styles.cart_adder} cart-adder page-transition`}
                    onClick={() => {
                      AddToCartList(props.cookie, props.object);
                    }}
                  >
                    <FaCartPlus />
                  </button>

                  <FaInfoCircle
                    className={`${styles.fa_icon} page-transition`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const productsSettings = {
      slidesToShow: 3,
      centerMode: true,
      slidesToScroll: 1,
      infinite: true,
      arrrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 8200,
      centerPadding: "10px",
      mobileFirst: true, //add this one
      responsive: INDEX_Products_SR, // This will keep the settings a bit cleaner
    };

    return (
      <div id={styles.products} className="overrides_Products">
        <div
          className={`${styles.products_cnt} overrides_ProductsCnt AOS_Item`}
          data-aos="fade-left"
        >
          <Slider {...productsSettings}>
            <this.createProductSlide
              slideID="slide1"
              slideIMG={StarPlatinum_F1_IMG}
              slideImgALT="Star Platinum (SDC) Figure."
              slideSPAN={StarPlatinum_F1.name}
              price={StarPlatinum_F1.price}
              cookie="Star Platinum F1"
              object={StarPlatinum_F1}
            />
            <this.createProductSlide
              slideID="slide2"
              slideIMG={Dio_F1_IMG}
              slideImgALT="Dio (SDC) Figure."
              slideSPAN={Dio_F1.name}
              price={Dio_F1.price}
              cookie="Dio F1"
              object={Dio_F1}
            />
            <this.createProductSlide
              slideID="slide3"
              slideIMG={Joseph_F1_IMG}
              slideImgALT="Young Joseph (BT) Figure."
              slideSPAN={Joseph_F1.name}
              price={Joseph_F1.price}
              cookie="Joseph F1"
              object={Joseph_F1}
            />
            <this.createProductSlide
              slideID="slide4"
              slideIMG={PhantomB_M1_IMG}
              slideImgALT="Phantom Blood Boxset."
              slideSPAN={PhantomB_M1.name}
              price={PhantomB_M1.price}
              cookie="PB M1"
              object={PhantomB_M1}
            />
            <this.createProductSlide
              slideID="slide5"
              slideIMG={StardustC_M1_IMG}
              slideImgALT="Stardust Crusaders Boxset."
              slideSPAN={StardustC_M1.name}
              price={StardustC_M1.price}
              cookie="SDC M1"
              object={StardustC_M1}
            />
            <this.createProductSlide
              slideID="slide6"
              slideIMG={DiamondsAUB_M1_IMG}
              slideImgALT="Diamonds Are Unbreakable Set."
              slideSPAN={DiamondsAUB_M1.name}
              price={DiamondsAUB_M1.price}
              cookie="DAUB M1"
              object={DiamondsAUB_M1}
            />
            <this.createProductSlide
              slideID="slide7"
              slideIMG={JotaroBlue_S1_IMG}
              slideImgALT="Jotaro Blue T-Shirt."
              slideSPAN={JotaroBlue_S1.name}
              price={JotaroBlue_S1.price}
              cookie="Jotaro Blue S1"
              object={JotaroBlue_S1}
            />
            <this.createProductSlide
              slideID="slide8"
              slideIMG={MudaPurple_S1_IMG}
              slideImgALT="Muda Purple T-Shirt."
              slideSPAN={MudaPurple_S1.name}
              price={MudaPurple_S1.price}
              cookie="Muda Purple S1"
              object={MudaPurple_S1}
            />
            <this.createProductSlide
              slideID="slide9"
              slideIMG={PurpleJBA_H1_IMG}
              slideImgALT="Purple JBA Hat."
              slideSPAN={PurpleJBA_H1.name}
              price={PurpleJBA_H1.price}
              cookie="Purple JBA H1"
              object={PurpleJBA_H1}
            />
          </Slider>
        </div>
      </div>
    );
  }
}

export default Products;
