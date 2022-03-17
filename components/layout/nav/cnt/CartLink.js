import { useRouter } from "next/router";
import { useEffect } from "react";

import { FaShoppingCart } from "react-icons/fa";
import { CartList } from "../../../../arrays/CartList";
import LinkPushing from "../../../../helpers/hooks/LinkPushing";

import styles from "../../../../styles/layout/nav/Nav.module.css";

const CartLink = () => {
  const router = useRouter(); // rooter

  // Cart Count
  useEffect(() => {
    document.querySelectorAll(".cart-count").forEach((ccount) => {
      ccount.innerHTML = CartList.length;
    });
  }, []);

  return (
    <div id={styles.cartLink}>
      <div
        onClick={() => {
          LinkPushing(router, "/cart", "jojotopia/cart/");
        }}
      >
        <a className="page-transition">
          <FaShoppingCart className={`${styles.fa_icon} page-transition`} />

          <div className="page-transition">
            <span className="cart-count page-transition"></span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CartLink;
