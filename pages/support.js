import Head from "next/head";
import { APPLE_TOUCH_ICON, F16, F32, FAVICON } from "../images/ICONS";

import OnAllPages from "../helpers/global/OnAllPages";
import SentSuccessfully from "../components/js/SentSuccessfully";
import Footer from "../components/layout/footer/Footer";

import Top from "../components/views/support/Top";
import Main from "../components/views/support/Main";

import styles from "../styles/views/support/Support.module.css";

export default function Support() {
  return (
    <div id={styles.mainBody}>
      <Head>
        <title>JojoTopia | A Bizarre Store (Support)</title>

        {/* //* SEO
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/jojotopia/support/"
        />
        */}
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="http://basicallyeasy.com/next-projects/jojotopia/support/"
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
      <SentSuccessfully />

      <div id={styles.supportCnt}>
        <Top />
        <Main />
      </div>

      <Footer />
    </div>
  );
}
