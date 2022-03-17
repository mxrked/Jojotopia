import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

import styles from "../../styles/js/JS.module.css";

const SentSuccessfully = () => {
  // Displays this alert when the user has successfully sent a contact form submission
  useEffect(() => {
    if (sessionStorage.getItem("Successfully Send.")) {
      setTimeout(() => {
        document.getElementById("sentSuccessfully").style.top = "0";
      }, 300);

      setTimeout(() => {
        document.getElementById("sentSuccessfully").style.top = "-200px";
        sessionStorage.removeItem("Successfully Send.");
      }, 2500);
    }
  }, []);

  return (
    <div
      id="sentSuccessfully"
      className={`${styles.sent_successfully} page-transition`}
    >
      <span>
        <FaCheckCircle className={styles.fa_icon} /> Submission Sent
        Successfully!
      </span>
    </div>
  );
};

export default SentSuccessfully;
