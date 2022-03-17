import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

import LinkPushing from "../../../helpers/hooks/LinkPushing";

import styles from "../../../styles/views/cart/Cart.module.css";

const CartContinue = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.cartContinue}>
      <a
        className="page-transition"
        onClick={() => {
          LinkPushing(router, "/store", "jojotopia/store/");
        }}
      >
        <FaArrowLeft className={styles.fa_icon} /> Continue Shopping
      </a>
    </div>
  );
};

export default CartContinue;
