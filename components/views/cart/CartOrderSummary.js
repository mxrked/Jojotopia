import { useEffect } from "react";
import { useRouter } from "next/router";

import { CartList } from "../../../arrays/CartList";
import { STORE_ITEM_KWS } from "../../../arrays/Keywords";
import LinkPushing from "../../../helpers/hooks/LinkPushing";

import styles from "../../../styles/views/cart/Cart.module.css";

const CartOrderSummary = () => {
  const router = useRouter(); // rooter

  // Displaying cartList length and displaying it
  useEffect(() => {
    document.getElementById("cartCounterAmountOS").innerHTML = CartList.length;
  }, []);

  // This will count up all of the item prices and will calculate a total price
  useEffect(() => {
    var i, cartTotalPriceWithoutShipping;
    let price_val, quantity_val;

    // This is for the total without shipping added
    function getTotalWithoutShipping() {
      const cartPrices = [];

      // Grabbing each item price and adding it to the cartPrices
      document.querySelectorAll(".cart-item-price").forEach((p) => {
        price_val = p.innerHTML;
        quantity_val = p
          .closest(".cart-item")
          .querySelector(".cart-item-side input").value;

        const subTotal = price_val * quantity_val;

        cartPrices.push(parseFloat(subTotal).toFixed(2));
      });

      // Converting it into number values to be added up for the total
      const convertedCartPrices = cartPrices.map(Number);
      cartTotalPriceWithoutShipping = 0;
      for (i = 0; i < convertedCartPrices.length; i++) {
        cartTotalPriceWithoutShipping += convertedCartPrices[i];
      }

      // Displaying total without shipping
      document.getElementById("cartTotalWithoutShipping").innerHTML = `${
        Math.round(cartTotalPriceWithoutShipping * 100) / 100
      }`;
    }

    function updateTotalOnQuantityChange() {
      document.getElementById("cartFinalTotal").innerHTML = `$ ${
        document.getElementById("cartTotalWithoutShipping").innerHTML
      }`;

      // Prevents user from confirm as the final total was altered.
      document.querySelectorAll(".shipping-option")[0].selected = true;
      document.getElementById("confirmOrder").style.pointerEvents = "none";
      document.getElementById("confirmOrder").style.opacity = 0.5;
    }

    // This setTimeout is used to make it so the user can manipulate the dynamic inputs and buttons and update the total without shipping
    setTimeout(() => {
      document.querySelectorAll(".cart-item-side input").forEach((input) => {
        input.value = 1; // Sets each item quantity to 1 when user enters cart page

        // This will allow the user to input a number between 1 and 99 and that will be the quantity they want.
        input.addEventListener("change", () => {
          getTotalWithoutShipping();
          updateTotalOnQuantityChange();

          const adjacentPlus = input
            .closest(".cart-item")
            .querySelector(".cart-item-side .cart-item-quantity-plus");
          const adjacentMinus = input
            .closest(".cart-item")
            .querySelector(".cart-item-side .cart-item-quantity-minus");

          // Checking user input to manipulate btns and price
          //* Minus
          if (input.value <= 0) {
            adjacentMinus.style.opacity = ".5";
            adjacentMinus.style.pointerEvents = "none";

            input.value = 0;

            // This will remove the item from session storage and will reload the page and remove it from the cart
            sessionStorage.removeItem(
              input
                .closest(".cart-item")
                .querySelector(".cart-item-side .cart-item-name").innerHTML
            );
            router.reload();

            // getTotalWithoutShipping();
          } else {
            adjacentMinus.style.opacity = "1";
            adjacentMinus.style.pointerEvents = "auto";
          }

          //* Plus
          if (input.value >= 99) {
            adjacentPlus.style.opacity = ".5";
            adjacentPlus.style.pointerEvents = "none";

            input.value = 99;
            getTotalWithoutShipping();
          }
        });
      });

      //* Plus Btns
      document
        .querySelectorAll(".cart-item-quantity-plus")
        .forEach((plusbtn) => {
          const plusIpt = plusbtn
            .closest(".cart-item")
            .querySelector(".cart-item-side input");

          const adjacentMinus = plusbtn
            .closest(".cart-item")
            .querySelector(".cart-item-side .cart-item-quantity-minus");

          plusbtn.addEventListener("click", () => {
            plusIpt.value++; // Adds a point to the quantity (Indicates to re-enable the minus btns)

            // Re-enables the minus button
            if (plusIpt.value >= 1) {
              adjacentMinus.style.opacity = 1;
              adjacentMinus.style.pointerEvents = "auto";
            }

            // Disables plus btn
            if (plusIpt.value == 99) {
              plusbtn.style.pointerEvents = "none";
              plusbtn.style.opacity = ".5";
            }

            getTotalWithoutShipping();
          });
        });

      //* Minus Btns
      document
        .querySelectorAll(".cart-item-quantity-minus")
        .forEach((minusbtn) => {
          const minusIpt = minusbtn
            .closest(".cart-item")
            .querySelector(".cart-item-side input");

          // Gets the plus btn for cart item
          const adjacentPlus = minusbtn
            .closest(".cart-item")
            .querySelector(".cart-item-side .cart-item-quantity-plus");

          minusbtn.addEventListener("click", () => {
            minusIpt.value--; // Removes a point from the quantity
            getTotalWithoutShipping();

            // Disables minus btn
            if (minusIpt.value == 0) {
              minusbtn.style.pointerEvents = "none";
              minusbtn.style.opacity = ".5";

              // This will remove the item from session storage and will reload the page and remove it from the cart
              sessionStorage.removeItem(
                minusbtn
                  .closest(".cart-item")
                  .querySelector(".cart-item-side .cart-item-name").innerHTML
              );
              router.reload();
            }

            // Re-enables plus btn
            if (minusIpt.value < 99) {
              adjacentPlus.style.opacity = 1;
              adjacentPlus.style.pointerEvents = "auto";
            }
          });
        });

      // Updating the final total when the user changes quantity
      document.querySelectorAll(".cart-item-quantity-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          updateTotalOnQuantityChange();
        });
      });

      getTotalWithoutShipping();
    }, 100);
  }, []);

  // This will calculate the final total cost
  useEffect(() => {
    var i;
    const allShippingOptions = document.querySelectorAll(".shipping-option");
    const allPromoOptions = document.querySelectorAll(".promo-option");
    const cartTotalWithoutShipping = document.getElementById(
      "cartTotalWithoutShipping"
    );

    let cartTotalWithShipping;
    let offAmount;

    document.getElementById("confirmOrder").style.pointerEvents = "none";
    document.getElementById("confirmOrder").style.opacity = 0.5;

    // This will show the final total
    setTimeout(() => {
      document.getElementById(
        "cartFinalTotal"
      ).innerHTML = `$ ${cartTotalWithoutShipping.innerHTML}`;
    }, 110);

    // This will be used to calculate the final total cost
    function getFinalTotal() {
      // Checking the select options for shipping and promo codes
      if (allShippingOptions[0].selected) {
        document.getElementById("confirmOrder").style.pointerEvents = "none";
        document.getElementById("confirmOrder").style.opacity = 0.5;

        document.getElementById(
          "cartFinalTotal"
        ).innerHTML = `$ ${cartTotalWithoutShipping.innerHTML}`;
      }

      if (allShippingOptions[1].selected) {
        cartTotalWithShipping =
          parseFloat(cartTotalWithoutShipping.innerHTML) + 4.75;

        getPromo(); // This will apply the promo if one is selected

        document.getElementById("confirmOrder").style.pointerEvents = "auto";
        document.getElementById("confirmOrder").style.opacity = 1;

        document.getElementById(
          "cartFinalTotal"
        ).innerHTML = `$ ${cartTotalWithShipping.toFixed(2)}`;
      }

      if (allShippingOptions[2].selected) {
        cartTotalWithShipping =
          parseFloat(cartTotalWithoutShipping.innerHTML) + 6.95;

        getPromo(); // This will apply the promo if one is selected

        document.getElementById("confirmOrder").style.pointerEvents = "auto";
        document.getElementById("confirmOrder").style.opacity = 1;

        document.getElementById(
          "cartFinalTotal"
        ).innerHTML = `$ ${cartTotalWithShipping.toFixed(2)}`;
      }

      if (allShippingOptions[3].selected) {
        cartTotalWithShipping =
          parseFloat(cartTotalWithoutShipping.innerHTML) + 9.35;

        getPromo(); // This will apply the promo if one is selected

        document.getElementById("confirmOrder").style.pointerEvents = "auto";
        document.getElementById("confirmOrder").style.opacity = 1;

        document.getElementById(
          "cartFinalTotal"
        ).innerHTML = `$ ${cartTotalWithShipping.toFixed(2)}`;
      }
    }

    // This is put into its own seperate function to keep the code cleaner and will check to see if any promo code was chosen and if so it will be applied to the cartTotalWithShipping
    function getPromo() {
      if (allPromoOptions[1].selected) {
        offAmount = cartTotalWithShipping * 0.05;
        cartTotalWithShipping -= offAmount;
      }

      if (allPromoOptions[2].selected) {
        offAmount = cartTotalWithShipping * 0.2;
        cartTotalWithShipping -= offAmount;
      }

      if (allPromoOptions[3].selected) {
        offAmount = cartTotalWithShipping * 0.15;
        cartTotalWithShipping -= offAmount;
      }
    }

    // Event listeners
    document.getElementById("shipping").addEventListener("change", () => {
      document.getElementById("confirmOrder").style.pointerEvents = "none";
      document.getElementById("confirmOrder").style.opacity = 0.5;

      allPromoOptions[0].selected = true;
    });

    if (CartList.length == 0) {
      document.getElementById("applyOrder").style.opacity = "0.6";
      document.getElementById("applyOrder").style.pointerEvents = "none";
    } else {
      document.getElementById("applyOrder").style.opacity = "1";
      document.getElementById("applyOrder").style.pointerEvents = "auto";
    }

    document.getElementById("applyOrder").addEventListener("click", () => {
      if (CartList.length != 0) {
        getFinalTotal();
      }

      // Indicate the user has not selected a shipping option
      if (allShippingOptions[0].selected) {
        document.getElementById("shipping").style.border = "1px solid #992c9d";
      } else {
        document.getElementById("shipping").style.border =
          "1px solid ghostwhite";
      }
    });

    document.getElementById("confirmOrder").addEventListener("click", () => {
      console.log(
        "Final Total Cost: $ " +
          document.getElementById("cartFinalTotal").innerHTML
      );

      // Removing all items from SS
      for (i = 0; i < STORE_ITEM_KWS.length; i++) {
        sessionStorage.removeItem(STORE_ITEM_KWS[i]);
      }

      sessionStorage.setItem("Confirmed Purchase", true);
      LinkPushing(router, "/", "jojotopia/");
    });
  }, []);

  return (
    <div id={styles.cartOrderSummary}>
      <div className={`${styles.cart_order_summary_cnt}`}>
        <div className={styles.cart_order_summary_top}>
          <h2>
            Order <br /> Summary
          </h2>
        </div>

        <div className={styles.cart_order_summary_count_and_total}>
          <div className={styles.cart_count_holder}>
            <span>
              <span id="cartCounterAmountOS">0</span> Items
            </span>
          </div>

          <div className={styles.cart_total_without_shipping_holder}>
            <span>
              $ <span id="cartTotalWithoutShipping">0.00</span>{" "}
            </span>
            <span className={styles.without_shipping_span}>
              (Without Shipping)
            </span>
          </div>
        </div>

        <div className={styles.cart_order_summary_shipping}>
          <span>Shipping *</span>

          <select
            className={`${styles.shipping} page-transition`}
            id="shipping"
          >
            <option className="shipping-option" defaultChecked>
              Please select a shipping option.
            </option>
            <option className="shipping-option">
              Standard Shipping ($4.75)
            </option>
            <option className="shipping-option">Fast Shipping ($6.95)</option>
            <option className="shipping-option">
              Next Day Shipping ($8.35)
            </option>
          </select>
        </div>

        <div className={styles.cart_order_summary_promo}>
          <span>Promo Code</span>

          <select className={styles.promo} id="promo">
            <option className="promo-option" defaultChecked>
              ---
            </option>
            <option className="promo-option">OIJOSUKE (5% OFF)</option>
            <option className="promo-option">STARDUST (20% OFF)</option>
            <option className="promo-option">ORAORA (15% OFF)</option>
          </select>
        </div>

        <div className={styles.cart_order_summary_btns}>
          <span>
            Final Total: <span id="cartFinalTotal">$0.00</span>
          </span>

          <div>
            <button id="applyOrder">Apply</button>

            <button id="confirmOrder">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOrderSummary;
