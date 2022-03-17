import { useEffect } from "react";
import { useRouter } from "next/router";

import { CartList } from "../../../arrays/CartList";

import styles from "../../../styles/views/cart/Cart.module.css";

const CartTop = () => {
  const router = useRouter();

  // Add cartList length to cartCounterAmount
  useEffect(() => {
    document.getElementById("cartCounterAmount").innerHTML = CartList.length;
  }, []);

  return (
    <div id={styles.cartTop}>
      <div className={`${styles.cart_top_cnt}`}>
        <h1>My Cart</h1>

        <div className={styles.cart_top_btns}>
          <button
            id="cartClearer"
            className="page-transition"
            onClick={() => {
              sessionStorage.clear();
              router.reload();
            }}
          >
            Clear
          </button>

          <span className={styles.cart_counter_span}>
            <span id="cartCounterAmount">0</span> Items
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartTop;
