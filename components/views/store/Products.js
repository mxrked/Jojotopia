import { Component } from "react";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import { FaCartPlus, FaInfoCircle } from "react-icons/fa";
import AddToCartList from "../../../helpers/cart-stuff/AddToCartList";

import {
  DiamondsAUB_M1_IMG,
  Dio_F1_IMG,
  Joseph_F1_IMG,
  JotaroBlue_S1_IMG,
  Jotaro_F1_IMG,
  MudaPurple_S1_IMG,
  PhantomB_M1_IMG,
  PurpleJBA_H1_IMG,
  StardustC_M1_IMG,
  StarPlatinum_F1_IMG,
} from "../../../images/STORE_Imgs";
import {
  Dio_F1,
  Joseph_F1,
  Jotaro_F1,
  StarPlatinum_F1,
} from "../../../objects/Figures";
import {
  DiamondsAUB_M1,
  PhantomB_M1,
  StardustC_M1,
} from "../../../objects/Manga";
import {
  JotaroBlue_S1,
  MudaPurple_S1,
  PurpleJBA_H1,
} from "../../../objects/Clothing";

import styles from "../../../styles/views/store/Store.module.css";

class Products extends Component {
  constructor(props) {
    super(props);

    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(props) {
    return (
      <div
        className={`${styles.products_item} col-lg-6 col-md-6 col-sm-6 col-xs-12 product-item `}
        data-product-type={props.item_type}
        data-product-specific-type={props.item_specific_type}
      >
        <div className={styles.products_item_inner}>
          <span className={styles.type_span}>{props.typeSPANTxt}</span>

          <div className={styles.product_item_img_holder}>
            <img
              data-src={props.productIMG}
              className="lazyload blur-up"
              alt={props.productIMGAlt}
            />
          </div>

          <h4 className={styles.product_name}>{props.product_item_name}</h4>

          <div className={styles.product_item_bottom}>
            <span className={styles.product_price}>
              <strong>$</strong> {props.product_item_price}
            </span>

            <div>
              <button
                className={`${styles.cart_adder} cart-adder page-transition`}
                onClick={() => {
                  AddToCartList(props.cookie, props.object);
                }}
              >
                <FaCartPlus />
              </button>

              <FaInfoCircle className={`${styles.fa_icon} page-transition`} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.products}>
        <div className={`${styles.products_box} container-fluid`}>
          <div className={`${styles.products_row} row`}>
            {/* Figures */}
            <this.createProduct
              item_type="product-figure"
              item_specific_type="jotaro sdc daub"
              typeSPANTxt="Figure"
              productIMG={Jotaro_F1_IMG}
              productIMGAlt="Jotaro Figure."
              product_item_name={Jotaro_F1.name}
              product_item_price={Jotaro_F1.price}
              cookie="Jotaro F1"
              object={Jotaro_F1}
            />
            <this.createProduct
              item_type="product-figure"
              item_specific_type="dio pb sdc"
              typeSPANTxt="Figure"
              productIMG={Dio_F1_IMG}
              productIMGAlt="Dio Figure."
              product_item_name={Dio_F1.name}
              product_item_price={Dio_F1.price}
              cookie="Dio F1"
              object={Dio_F1}
            />
            <this.createProduct
              item_type="product-figure"
              item_specific_type="star-platinum sdc daub"
              typeSPANTxt="Figure"
              productIMG={StarPlatinum_F1_IMG}
              productIMGAlt="Star Platinum Figure."
              product_item_name={StarPlatinum_F1.name}
              product_item_price={StarPlatinum_F1.price}
              cookie="Star Platinum F1"
              object={StarPlatinum_F1}
            />
            <this.createProduct
              item_type="product-figure"
              item_specific_type="joseph sdc daub"
              typeSPANTxt="Figure"
              productIMG={Joseph_F1_IMG}
              productIMGAlt="Joseph Joestar Figure."
              product_item_name={Joseph_F1.name}
              product_item_price={Joseph_F1.price}
              cookie="Joseph F1"
              object={Joseph_F1}
            />

            {/* Manga */}
            <this.createProduct
              item_type="product-manga"
              item_specific_type="pb dio"
              typeSPANTxt="Manga"
              productIMG={PhantomB_M1_IMG}
              productIMGAlt="Phantom Blood Manga Boxset."
              product_item_name={PhantomB_M1.name}
              product_item_price={PhantomB_M1.price}
              cookie="PB M1"
              object={PhantomB_M1}
            />
            <this.createProduct
              item_type="product-manga"
              item_specific_type="sdc joseph jotaro dio star-platinum"
              typeSPANTxt="Manga"
              productIMG={StardustC_M1_IMG}
              productIMGAlt="Stardust Crusaders Manga Boxset."
              product_item_name={StardustC_M1.name}
              product_item_price={StardustC_M1.price}
              cookie="SDC M1"
              object={StardustC_M1}
            />
            <this.createProduct
              item_type="product-manga"
              item_specific_type="daub joseph jotaro star-platinum"
              typeSPANTxt="Manga"
              productIMG={DiamondsAUB_M1_IMG}
              productIMGAlt="Diamonds are Unbreakable Manga Boxset."
              product_item_name={DiamondsAUB_M1.name}
              product_item_price={DiamondsAUB_M1.price}
              cookie="DAUB M1"
              object={DiamondsAUB_M1}
            />

            {/* Manga */}
            <this.createProduct
              item_type="product-clothing"
              item_specific_type="jotaro sdc daub"
              typeSPANTxt="Clothing"
              productIMG={JotaroBlue_S1_IMG}
              productIMGAlt="Jotaro Blue T-Shirt."
              product_item_name={JotaroBlue_S1.name}
              product_item_price={JotaroBlue_S1.price}
              cookie="Jotaro Blue S1"
              object={JotaroBlue_S1}
            />
            <this.createProduct
              item_type="product-clothing"
              item_specific_type="dio sdc pb"
              typeSPANTxt="Clothing"
              productIMG={MudaPurple_S1_IMG}
              productIMGAlt="Muda Purple T-Shirt."
              product_item_name={MudaPurple_S1.name}
              product_item_price={MudaPurple_S1.price}
              cookie="Muda Purple S1"
              object={MudaPurple_S1}
            />
            <this.createProduct
              item_type="product-clothing"
              item_specific_type="pb"
              typeSPANTxt="Clothing"
              productIMG={PurpleJBA_H1_IMG}
              productIMGAlt="Purple JBA Hat."
              product_item_name={PurpleJBA_H1.name}
              product_item_price={PurpleJBA_H1.price}
              cookie="Purple JBA H1"
              object={PurpleJBA_H1}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
