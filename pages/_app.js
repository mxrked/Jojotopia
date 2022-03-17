import "../styles/global/global.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-wrap">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
