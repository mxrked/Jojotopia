import Head from "next/head";
import { APPLE_TOUCH_ICON, F16, F32, FAVICON } from "../images/ICONS";

import OnAllPages from "../helpers/global/OnAllPages";
import Footer from "../components/layout/footer/Footer";

import Top from "../components/views/home/Top";
import Types from "../components/views/home/Types";
import Products from "../components/views/home/Products";
import Info from "../components/views/home/Info";
import Support from "../components/views/home/Support";
import ConfirmedPurchase from "../components/js/ConfirmedPurchase";

import styles from "../styles/views/home/Home.module.css";

export default function Home() {
  return (
    <div id={styles.mainBody}>
      <Head>
        <title>JojoTopia | A Bizarre Store (Home)</title>

        {/* //* SEO */}
        <meta
          name="description"
          content="Jojotopia is for all Jojo's Bizarre Adventure (Manga/Anime) fans. This is your one stop shop for all Jojo Merchandise."
        />
        <meta
          name="keywords"
          content="Jojotopia, Jojo's, jojos, jojo's bizarre adventure, jojos bizarre adventure, manga, anime, jojo merchandise, jba merch, jojo figurines, jojo figures, jojo clothing, jojo manga"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="JojoTopia | A Bizarre Store (Home)"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/jojotopia/"
        />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="http://basicallyeasy.com/next-projects/jojotopia/"
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
      <ConfirmedPurchase />

      <div id={styles.homeCnt} className="overrides_Home">
        <Top />
        <Types />
        <Products />
        <Info />
        <Support />
      </div>

      <Footer />
    </div>
  );
}
