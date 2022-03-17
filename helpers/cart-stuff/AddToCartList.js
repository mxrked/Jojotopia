import { CartList } from "../../arrays/CartList";

const ISSERVER = typeof window === "undefined"; // Prevents defined error

// This will be used to add a new item to the cart list
export default function AddToCartList(cookie, object) {
  if (!ISSERVER) {
    if (!sessionStorage.getItem(cookie) && !CartList.indexOf(object) > -1) {
      // Removes the cookie to avoid issues and then readds it and pushes object to cartList
      sessionStorage.removeItem(cookie);
      sessionStorage.setItem(cookie, true);
      CartList.push(object);
    }
  }

  // Updates all cart counts
  document.querySelectorAll(".cart-count").forEach((ccount) => {
    ccount.innerHTML = CartList.length;
  });
}
