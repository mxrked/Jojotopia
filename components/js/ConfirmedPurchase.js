import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

import styles from "../../styles/js/JS.module.css";

const ConfirmedPurchase = () => {
  // Displays the confirmedPurchase on index page if the sessionStorage cookie is available
  useEffect(() => {
    if (sessionStorage.getItem("Confirmed Purchase")) {
      setTimeout(() => {
        document.getElementById("confirmedPurchase").style.top = 0;
      }, 300);

      setTimeout(() => {
        document.getElementById("confirmedPurchase").style.top = "-200px";
        sessionStorage.removeItem("Confirmed Purchase");
      }, 2500);
    }
  }, []);

  return (
    <div
      id="confirmedPurchase"
      className={`${styles.confirmed_purchase} full-second`}
    >
      <span>
        <FaCheckCircle className={styles.fa_icon} /> Thank you for your
        purchase!
      </span>
    </div>
  );
};

export default ConfirmedPurchase;
