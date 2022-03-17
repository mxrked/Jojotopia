import { useEffect } from "react";
import { useRouter } from "next/router";
import { BackgroundImage } from "react-image-and-background-image-fade";

// https://www.youtube.com/watch?v=i2eXkSKjl0A //! Watch this video for help
import Email from "../../js/EmailJS"; // Allows sending emails with JS
import { MENACING_CLUSTER } from "../../../images/GLOBALS";
import { SUPPORT_FORM } from "../../../images/SUPPORT_Imgs";

import styles from "../../../styles/views/support/Support.module.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
  const router = useRouter();

  // Grabbing valid input values and sending the email
  useEffect(() => {
    function sendEmail(name, email, phone, message, reciever) {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "pp101socials@gmail.com",
        Password: "qidjnekmkdvfexyd",
        To: reciever,
        From: email,
        Subject: "JojoTopia (Contact Form Submission)",
        Body: `
        
            Here is the data from the contact submission form: <br/><br/>
            Full Name: ${name}<br/>
            Email Address: ${email}<br/>
            Phone Number: ${phone}<br/>
            Message: ${message}
        
        `,
      }).then((message) => {
        console.log("Email sent successfully!");
        sessionStorage.setItem("Successfully Send.", true);
        router.reload();
      });
    }

    document.getElementById("frmSend").addEventListener("click", (e) => {
      const fullName =
        document.getElementById("frmFN").value +
        " " +
        document.getElementById("frmLN").value;
      const emailAdd = document.getElementById("frmEmail").value;
      const phoneNum = document.getElementById("frmPhone").value;
      const messageText = document.getElementById("frmMsg").value;
      const recieverEmail = "pp101socials@gmail.com";

      if (document.querySelector(".frm-input").value != "") {
        document.querySelectorAll(".frm-input").forEach((input) => {
          input.value = "";
        });

        sendEmail(fullName, emailAdd, phoneNum, messageText, recieverEmail);
        e.preventDefault(); // This will prevent the page from reloading
      } else {
        alert("Invalid Form Values. Fill out all of the form inputs.");
        e.preventDefault();
      }
    });
  }, []);

  return (
    <div id={styles.main}>
      <div className={styles.support_main_cnt}>
        <div className={`${styles.support_main_cnt_box} container-fluid`}>
          <div className={`${styles.support_main_cnt_row} row`}>
            <div
              className={`${styles.support_main_cnt_side} col-lg-8 col-md-8 col-sm-7 col-xs-12 order-lg-0 order-md-0 order-sm-1 order-1`}
              id={styles.mainL}
            >
              <div className={styles.support_main_form}>
                <div className={styles.support_main_form_top}>
                  <img
                    data-src={MENACING_CLUSTER}
                    className="lazyload"
                    alt="Menacing."
                  />

                  <h3>Contact Form</h3>
                </div>

                <form
                  className={styles.support_main_form_bottom}
                  id="supportForm"
                  method="POST"
                >
                  <div className={styles.support_main_form_bottom_group}>
                    <div className={styles.support_main_form_bottom_group_set}>
                      <input
                        type="text"
                        id="frmFN"
                        autoComplete="prevent"
                        placeholder="First Name"
                        className="frm-input"
                      />

                      <span>*</span>
                    </div>
                    <div className={styles.support_main_form_bottom_group_set}>
                      <input
                        type="text"
                        id="frmLN"
                        autoComplete="prevent"
                        placeholder="Last Name"
                        className="frm-input"
                      />

                      <span>*</span>
                    </div>
                  </div>
                  <div className={styles.support_main_form_bottom_group}>
                    <div className={styles.support_main_form_bottom_group_set}>
                      <input
                        type="email"
                        id="frmEmail"
                        autoComplete="prevent"
                        placeholder="Email"
                        className="frm-input"
                      />

                      <span>*</span>
                    </div>
                    <div className={styles.support_main_form_bottom_group_set}>
                      <input
                        type="tel"
                        id="frmPhone"
                        autoComplete="prevent"
                        placeholder="Phone"
                        className="frm-input"
                      />

                      <span>*</span>
                    </div>
                  </div>
                  <div className={styles.support_main_form_bottom_group}>
                    <div
                      className={styles.support_main_form_bottom_group_set}
                      id={styles.mainTextArea}
                    >
                      <textarea
                        placeholder="Your Message/Issue"
                        id="frmMsg"
                        className="frm-input"
                      />
                    </div>
                    <div
                      className={styles.support_main_form_bottom_group_set}
                      id={styles.mainBtns}
                    >
                      <button id="frmSend" className="page-transition">
                        Send
                      </button>

                      <button type="reset" className="page-transition">
                        Clear
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.support_main_socials_and_info}>
                <div className={styles.support_main_socials_and_info_top}>
                  <img
                    data-src={MENACING_CLUSTER}
                    className="lazyload"
                    alt="Menacing."
                  />

                  <h3>Socials/Info</h3>
                </div>
                <div className={styles.support_main_socials_and_info_bottom}>
                  <div
                    className={styles.support_main_socials_and_info_bottom_side}
                    id={styles.sIL}
                  >
                    <ul>
                      <li>
                        <a href="#" className="page-transition">
                          <FaFacebook />

                          <span>Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-transition">
                          <FaTwitter />

                          <span>Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-transition">
                          <FaGithub />

                          <span>GitHub</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="page-transition">
                          <FaLinkedin />

                          <span>LinkedIn</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={styles.support_main_socials_and_info_bottom_side}
                    id={styles.sIR}
                  >
                    <div>
                      <a href="#" className="page-transition">
                        +1 (202)-555-0520
                      </a>

                      <a
                        href="mailTo:pp101socials@gmail.com"
                        className="page-transition"
                      >
                        pp101socials@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.support_main_cnt_side} col-lg-4 col-md-4 col-sm-5 col-xs-12 order-lg-1 order-md-1 order-sm-0 order-0`}
              id={styles.mainR}
            >
              <BackgroundImage
                src={SUPPORT_FORM}
                width="100%"
                height="100%"
                className={styles.support_main_bg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
