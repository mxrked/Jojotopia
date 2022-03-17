import { useRouter } from "next/router";

import LinkPushing from "../../../../helpers/hooks/LinkPushing";

import styles from "../../../../styles/layout/nav/Nav.module.css";

const Logo = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.logo}>
      <div
        onClick={() => {
          LinkPushing(router, "/", "jojotopia/");
        }}
      >
        <a className="page-transition">
          <div className="page-transition">
            <h1 className="page-transition">JojoTopia</h1>

            <span className="page-transition">
              Jojos Bizarre Adventure Store
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Logo;
