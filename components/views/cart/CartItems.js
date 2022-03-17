import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaMinusCircle, FaPlusCircle, FaTimesCircle } from "react-icons/fa";

import { CartList } from "../../../arrays/CartList";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import styles from "../../../styles/views/cart/Cart.module.css";

const CartItems = () => {
  const router = useRouter();
  const [isDisplayed, setIsDisplayed] = useState(false);

  const mappedCartItems = CartList.map(function (item, itemID) {
    return (
      <div key={itemID} className={`${styles.cart_item} cart-item`}>
        <div className={`${styles.cart_item_details_side} cart-item-side`}>
          <div className={styles.cart_item_img_holder}>
            <img data-src={item.src} className="lazyload blur-up" />
          </div>

          <div>
            <span className={`${styles.cart_item_name} cart-item-name`}>
              {item.name}
            </span>

            <span className={styles.cart_item_type}>{item.type}</span>
          </div>
        </div>

        <div className={`${styles.cart_item_quantity_side} cart-item-side`}>
          <button
            className={`${styles.cart_item_quantity_btn} cart-item-quantity-btn cart-item-quantity-plus`}
          >
            <FaPlusCircle />
          </button>

          <input
            type="number"
            className="cart-item-quantity-ipt noscroll"
            min="1"
            max="99"
            onWheel={() => {
              if (
                document.activeElement.type === "number" &&
                document.activeElement.classList.contains("noscroll")
              ) {
                document.activeElement.blur();
              }
            }}
          />

          <button
            className={`${styles.cart_item_quantity_btn} cart-item-quantity-btn cart-item-quantity-minus`}
          >
            <FaMinusCircle />
          </button>
        </div>

        <div className={`${styles.cart_item_price_side} cart-item-side`}>
          <span>
            $ <span className="cart-item-price">{item.price}</span>
          </span>
        </div>

        <div className={`${styles.cart_item_remover_side} cart-item-side`}>
          <button
            className={`${styles.cart_item_remover_btn} page-transition cart-item-remover`}
            onClick={() => {
              sessionStorage.removeItem(item.name);
              router.reload();
            }}
          >
            <FaTimesCircle />
          </button>
        </div>
      </div>
    );
  });

  useEffect(() => {
    setIsDisplayed(true);
  });

  useEffect(() => {
    if (CartList.length == 0) {
      document.getElementById("cartEmptyHint").style.display = "block";
    } else {
      document.getElementById("cartEmptyHint").style.display = "none";
    }
  }, []);

  return (
    <div id={styles.cartItems}>
      <div className={`${styles.cart_items_cnt}`}>
        <span
          id="cartEmptyHint"
          className={`${styles.cart_empty_hint} page-transition`}
        >
          The cart is empty.
        </span>

        {isDisplayed && <>{mappedCartItems}</>}
      </div>
    </div>
  );
};

export default CartItems;
