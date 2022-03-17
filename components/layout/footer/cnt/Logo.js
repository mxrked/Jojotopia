import { useRouter } from "next/router";
import LinkPushing from "../../../../helpers/hooks/LinkPushing";

import styles from "../../../../styles/layout/footer/Footer.module.css";

const Logo = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.logo}>
      <div
        onClick={() => {
          LinkPushing(router, "/", "jojotopia/");
        }}
      >
        <a>
          <h1 className="page-transition">Jojotopia</h1>
        </a>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.
      </p>
    </div>
  );
};

export default Logo;
