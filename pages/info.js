import Head from "next/head";
import { APPLE_TOUCH_ICON, F16, F32, FAVICON } from "../images/ICONS";

import OnAllPages from "../helpers/global/OnAllPages";
import Footer from "../components/layout/footer/Footer";

import Top from "../components/views/info/Top";
import Video from "../components/views/info/Video";
import History from "../components/views/info/History";
import Goals from "../components/views/info/Goals";
import Bottom from "../components/views/info/Bottom";

import styles from "../styles/views/info/Info.module.css";

export default function Info() {
  return (
    <div id={styles.mainBody}>
      <Head>
        <title>JojoTopia | A Bizarre Store (Info)</title>

        {/* //* SEO 
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/jojotopia/info/"
        />
        */}
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="http://basicallyeasy.com/next-projects/jojotopia/info/"
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

      <div id={styles.infoCnt}>
        <Top />
        <Video />
        <History />
        <Goals />
        <Bottom />
      </div>

      <Footer />
    </div>
  );
}
