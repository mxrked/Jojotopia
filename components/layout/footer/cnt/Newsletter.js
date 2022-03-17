import { MdSend } from "react-icons/md";

import styles from "../../../../styles/layout/footer/Footer.module.css";

const Newsletter = () => {
  return (
    <div id={styles.newsletter}>
      <span>Newsletter Sign Up</span>

      <div>
        <input
          type="email"
          autoComplete="off"
          placeholder="Enter your email"
          className="page-transition"
          id="nLIpt"
        />

        <button className="page-transition" id="nLSend">
          <MdSend />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
