import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import styles from "../../../../styles/layout/footer/Footer.module.css";

const Socials = () => {
  return (
    <div id={styles.socials}>
      <ul>
        <li>
          <a href="#" className="page-transition">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#" className="page-transition">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#" className="page-transition">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="#" className="page-transition">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="#" className="page-transition">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
