import Head from "next/head";

import { useEffect } from "react";
import { APPLE_TOUCH_ICON, F16, F32, FAVICON } from "../images/ICONS";

import OnAllPages from "../helpers/global/OnAllPages";
import Footer from "../components/layout/footer/Footer";

import CartTop from "../components/views/cart/CartTop";
import CartItems from "../components/views/cart/CartItems";
import CartContinue from "../components/views/cart/CartContinue";
import CartOrderSummary from "../components/views/cart/CartOrderSummary";

import styles from "../styles/views/cart/Cart.module.css";

export default function Cart() {
  useEffect(() => {
    sessionStorage.removeItem("Confirmed Purchase");
  }, []);

  return (
    <div id={styles.mainBody}>
      <Head>
        <title>JojoTopia | A Bizarre Store (Cart)</title>

        {/* //* SEO */}
        {/* 
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/jojotopia/cart/"
        />
        <meta name="robots" content="index, follow" />
        */}

        <link
          rel="canonical"
          href="http://basicallyeasy.com/next-projects/jojotopia/cart/"
        />
        <link rel="shortcut icon" href={FAVICON} />
        <link rel="apple-touch-icon" sizes="180x180" href={APPLE_TOUCH_ICON} />
        <link rel="icon" type="image/png" sizes="32x32" href={F32} />
        <link rel="icon" type="image/png" sizes="16x16" href={F16} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <OnAllPages />

      <div id={styles.cartCnt}>
        <div className={`${styles.cart_cnt_main_box} container-fluid`}>
          <div className={`${styles.cart_cnt_main_row} row`}>
            <div
              className={`${styles.cart_cnt_main_side} col-lg-8 col-md-8 col-sm-7 col-xs-12`}
              id={styles.cartL}
            >
              <div className={`${styles.cart_cnt_main_side_inner}`}>
                <CartTop />
                <CartItems />
                <CartContinue />
              </div>
            </div>
            <div
              className={`${styles.cart_cnt_main_side} col-lg-4 col-md-4 col-sm-5 col-xs-12`}
              id={styles.cartR}
            >
              <div className={`${styles.cart_cnt_main_side_inner}`}>
                <CartOrderSummary />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
