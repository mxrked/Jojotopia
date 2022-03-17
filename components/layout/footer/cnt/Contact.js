import styles from "../../../../styles/layout/footer/Footer.module.css";

const Contact = () => {
  return (
    <div id={styles.contact}>
      <ul>
        <li>
          <a href="#" className="page-transition">
            +1 (202)-555-0520
          </a>
        </li>
        <li>
          <a href="mailTo:pp101socials@gmail.com" className="page-transition">
            pp101socials@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
