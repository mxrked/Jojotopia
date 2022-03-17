import { useRouter } from "next/router";
import LinkPushing from "../../../../helpers/hooks/LinkPushing";

import styles from "../../../../styles/layout/footer/Footer.module.css";

const Links = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.links}>
      <div className={styles.links_set}>
        <span>Pages</span>

        <ul>
          <li>
            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/", "jojotopia/");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/info", "jojotopia/info/");
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/support", "jojotopia/support/");
              }}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/policies", "jojotopia/policies/");
              }}
            >
              Our Policies
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.links_set}>
        <span>Store</span>

        <ul>
          <li>
            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/store", "jojotopia/store/");
              }}
            >
              All Products
            </a>
          </li>
          <li>
            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/store/#P1", "jojotopia/store/#P1/");
              }}
            >
              Figures
            </a>
          </li>
          <li>
            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/store/#P2", "jojotopia/store/#P2/");
              }}
            >
              Manga
            </a>
          </li>
          <li>
            <a
              className="page-transition"
              onClick={() => {
                LinkPushing(router, "/store/#P3", "jojotopia/store/#P3/");
              }}
            >
              Clothing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
